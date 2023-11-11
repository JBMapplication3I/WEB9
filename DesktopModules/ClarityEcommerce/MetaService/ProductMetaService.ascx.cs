using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;
using System.Web.UI.HtmlControls;
using DotNetNuke.UI.Skins;
using Newtonsoft.Json;

public partial class DesktopModules_ClarityEcommerce_MetaService_ProductMetaService : SkinObjectBase
{
    protected void Page_Load(object sender, EventArgs e)
    {
        SetMetadataTitle();
    }

    private void SetMetadataTitle()
    {
        try
        {
            var originalRequestedUrlString = Context.Items["UrlRewrite:OriginalUrl"] as string;
            if (string.IsNullOrWhiteSpace(originalRequestedUrlString)) { return; }
            var originalRequestUrl = new Uri(originalRequestedUrlString);
            var path = originalRequestUrl.PathAndQuery;
            string seoUrl = null;
            const string pat = "\\/product\\/(([a-z0-9-]+)\\/([a-z0-9-]+)|([a-z0-9-]+))";
            Regex r = new Regex(pat, RegexOptions.IgnoreCase);
            Match m = r.Match(path);
            if (m.Success)
            {
                seoUrl = m.Groups[m.Groups.Count - 1].Value != string.Empty
                    ? m.Groups[m.Groups.Count - 1].Value
                    : m.Groups[m.Groups.Count - 2].Value;
            }
            if (string.IsNullOrWhiteSpace(seoUrl)) { /*Response.Redirect("/", true);*/ return; }
            // Get site url (could be different in dev environment)
            var siteUrl = HttpContext.Current.Request.Url.GetLeftPart(UriPartial.Authority) + ResolveUrl("~/");
            var endPoint = @siteUrl + "DesktopModules/ClarityEcommerce/API-Storefront"
                + "/Products/Product/URL/metadata"
                + "?format=json&seoUrl=" + seoUrl; // TODO: need url encoding?
            var request = WebRequest.Create(endPoint);
            request.Method = "GET";
            request.ContentType = "application/json";
            var response = (HttpWebResponse)request.GetResponse();
            var responseString = new StreamReader(response.GetResponseStream()).ReadToEnd();
            if (string.IsNullOrWhiteSpace(responseString))
            {
                return;
            }
            var model = JsonConvert.DeserializeObject<Clarity.Ecommerce.Interfaces.Models.SerializableAttributesDictionary>(
                responseString);
            if (model == null)
            {
                return;
            }
            var hasPageTitle = model.ContainsKey("SeoPageTitle") && !string.IsNullOrWhiteSpace(model["SeoPageTitle"].Value);
            var hasMetaDescription = model.ContainsKey("SeoDescription") && !string.IsNullOrWhiteSpace(model["SeoDescription"].Value);
            var name = hasPageTitle ? model["SeoPageTitle"].Value : (model["Name"].Value + " | " + PortalSettings.PortalName);
            var desc = hasMetaDescription ? model["SeoDescription"].Value : model.ContainsKey("ShortDescription") ? model["ShortDescription"].Value : string.Empty;
            var keys = model.ContainsKey("SeoKeywords") ? model["SeoKeywords"].Value : string.Empty;
            model["SeoDescription"] = new Clarity.Ecommerce.Interfaces.Models.SerializableAttributeObject { Value = desc };
            // Create and add meta tag for page title so "ShareThis" code can set the content, inside ajax call is too late for ShareThis to pick up
            ((DotNetNuke.Framework.CDefault)Page).Title = name;
            ((DotNetNuke.Framework.CDefault)Page).Description = desc;
            ((DotNetNuke.Framework.CDefault)Page).KeyWords = keys;
            var productSpan = GetProductSpan(model);
            ((DotNetNuke.Framework.CDefault)Page).Header.Controls.Add(productSpan);
            if (model.ContainsKey("RelatedProducts"))
            {
                var relatedData = JsonConvert.DeserializeObject<List<Clarity.Ecommerce.Interfaces.Models.SerializableAttributesDictionary>>(
                    model["RelatedProducts"].Value);
                foreach (var related in relatedData)
                {
                    var associatedProductSpan = GetProductSpan(related);
                    ((DotNetNuke.Framework.CDefault)Page).Header.Controls.Add(associatedProductSpan);
                }
            }
        }
        catch (Exception ex)
        {
            // TODO: log to dnn event log
            Response.Write("<div style=\"display: none;\">" + ex.ToString() + "</div>");
        }
    }

    private static HtmlGenericControl GetProductSpan(
        Clarity.Ecommerce.Interfaces.Models.SerializableAttributesDictionary model)
    {
        var productSpan = GenControl("span", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemscope", "itemscope"),
            new KeyValuePair<string, string>("itemtype", "http://schema.org/Product")
        });
        var nameMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "name"),
            new KeyValuePair<string, string>("content", model.ContainsKey("Name") ? model["Name"].Value : string.Empty)
        });
        var descriptionMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "description"),
            new KeyValuePair<string, string>("content", model.ContainsKey("SeoDescription") ? model["SeoDescription"].Value : string.Empty)
        });
        var skuMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "sku"),
            new KeyValuePair<string, string>("content", model.ContainsKey("CustomKey") ? model["CustomKey"].Value : string.Empty)
        });
        productSpan.Controls.Add(nameMeta);
        productSpan.Controls.Add(descriptionMeta);
        productSpan.Controls.Add(skuMeta);
        var offersSpan = GenControl("span", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemscope", "itemscope"),
            new KeyValuePair<string, string>("itemprop", "offers"),
            new KeyValuePair<string, string>("itemtype", "http://schema.org/Offer")
        });
        var link = GenControl("link", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "url"),
            new KeyValuePair<string, string>("href", model.ContainsKey("SeoUrl") ? model["SeoUrl"].Value : string.Empty)
        });
        var unitPrice = 0.01m;
        decimal.TryParse(model["PriceSale"].Value ?? model["PriceBase"].Value, out unitPrice);
        var minimumSubtotal = Math.Ceiling(50.0m / (unitPrice <= 0m ? 0.01m : unitPrice)) * unitPrice;
        var priceMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "price"),
            new KeyValuePair<string, string>("content", minimumSubtotal.ToString("#,##0.00"))
        });
        var priceCurrencyMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "priceCurrency"),
            new KeyValuePair<string, string>("content", "USD")
        });
        var priceValidUntil = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "priceValidUntil"),
            new KeyValuePair<string, string>("content", new DateTime(DateTime.Today.Year, DateTime.Today.Month, 1).AddMonths(3).ToString("yyyy-MM-dd"))
        });
        var inStockMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "availability"),
            new KeyValuePair<string, string>("content", "inStock")
        });
        offersSpan.Controls.Add(link);
        offersSpan.Controls.Add(priceMeta);
        offersSpan.Controls.Add(priceCurrencyMeta);
        offersSpan.Controls.Add(priceValidUntil);
        offersSpan.Controls.Add(inStockMeta);
        productSpan.Controls.Add(offersSpan);
        var brandSpan = GenControl("span", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemscope", "itemscope"),
            new KeyValuePair<string, string>("itemprop", "brand"),
            new KeyValuePair<string, string>("itemtype", "http://schema.org/Brand")
        });
        var brandNameMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "name"),
            new KeyValuePair<string, string>("content", "Boedeker Plastics")
        });
        brandSpan.Controls.Add(brandNameMeta);
        productSpan.Controls.Add(brandSpan);
        /* TODO: Read ratings info
        var aggregateRating = GenControl("span", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemscope", "itemscope"),
            new KeyValuePair<string, string>("itemprop", "aggregateRating"),
            new KeyValuePair<string, string>("itemtype", "http://schema.org/AggregateRating")
        });
        var ratingValueMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "ratingValue"),
            new KeyValuePair<string, string>("content", "0")
        });
        var reviewCountMeta = GenControl("meta", new List<KeyValuePair<string, string>>
        {
            new KeyValuePair<string, string>("itemprop", "reviewCount"),
            new KeyValuePair<string, string>("content", "0")
        });
        aggregateRating.Controls.Add(ratingValueMeta);
        aggregateRating.Controls.Add(reviewCountMeta);
        productSpan.Controls.Add(aggregateRating);
        */
        return productSpan;
    }

    private static HtmlGenericControl GenControl(
        string tag,
        IEnumerable<KeyValuePair<string, string>> attributes = null)
    {
        var control = new HtmlGenericControl(tag);
        if (attributes == null) { return control; }
        foreach (var attribute in attributes)
        {
            control.Attributes.Add(attribute.Key, attribute.Value);
        }
        return control;
    }
}
