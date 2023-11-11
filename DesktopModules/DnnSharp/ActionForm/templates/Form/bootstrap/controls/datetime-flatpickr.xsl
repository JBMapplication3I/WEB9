<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:utils="af:utils">

  <xsl:import href="label.xsl"/>
  <xsl:import href="attr-common.xsl"/>
  <xsl:import href="attr-container.xsl"/>
  <xsl:output method="html" indent="no" omit-xml-declaration="yes" />

  <xsl:template name="ctl-datetime-flatpickr">

    <!--If label is a column, render it here-->
    <xsl:if test="/Form/Settings/LabelAlign != 'inside' and /Form/Settings/LabelAlign != 'top'">
      <xsl:call-template name="ctl-label" />
    </xsl:if>

    <div>
      <xsl:call-template name="ctl-attr-container">
        <xsl:with-param name="addClasses">
          <!-- add additional container classes here-->
        </xsl:with-param>
      </xsl:call-template>

      <!--If label is top, render it here-->
      <xsl:if test="/Form/Settings/LabelAlign = 'top'">
        <xsl:call-template name="ctl-label" />
      </xsl:if>

      <div load-on-demand="'datetimeflatpickr'">
        <input data-input=""
               type="text"
               datetimeflatpickr=""
               update-field="updateField(field, val)"
               register-control="registerControl(control)"
               data-form="form"
                 >
          <xsl:call-template name="ctl-attr-common">
            <xsl:with-param name="cssclass">
              <xsl:text>form-control </xsl:text>
              <!-- add classes to the input-->
              <xsl:text> </xsl:text>
              <xsl:if test="/Form/Settings/ClientSideValidation ='True' and IsRequired='True' and CanValidate = 'True'">required</xsl:if>
            </xsl:with-param>
            <xsl:with-param name="hasId">yes</xsl:with-param>
            <xsl:with-param name="hasName">yes</xsl:with-param>
            <xsl:with-param name="bind">yes</xsl:with-param>
            <xsl:with-param name="touchEvent">keyup</xsl:with-param>
          </xsl:call-template>

          <xsl:call-template name="ctl-attr-placeholder" />

          <xsl:if test="ShortDesc != '' and /Form/Settings/LabelAlign = 'inside'">
            <xsl:attribute name="title">
              <xsl:value-of select="ShortDesc"/>
            </xsl:attribute>
          </xsl:if>

          <xsl:attribute name="field">
            <xsl:text>settings.Fields['</xsl:text>
            <xsl:value-of select="Name" />
            <xsl:text>']</xsl:text>
          </xsl:attribute>

          <xsl:attribute name="data-iso-formats">
            <xsl:value-of select="IsoFormats" />
          </xsl:attribute>

          <xsl:attribute name="data-client-format">
            <xsl:value-of select="ClientFormat" />
          </xsl:attribute>
          <xsl:attribute name="data-af-min-date">
            <xsl:value-of select="MinDate" />
          </xsl:attribute>
          <xsl:attribute name="data-af-max-date">
            <xsl:value-of select="MaxDate" />
          </xsl:attribute>
          <xsl:attribute name="data-af-min-time">
            <xsl:value-of select="MinTime" />
          </xsl:attribute>
          <xsl:attribute name="data-af-max-time">
            <xsl:value-of select="MaxTime" />
          </xsl:attribute>

          <xsl:attribute name="aria-describedby">
            <xsl:value-of select="Name" />
            <xsl:text>-</xsl:text>
            <xsl:value-of select="/Form/Settings/ModuleId"/>
          </xsl:attribute>

          <xsl:attribute name="module-id">
            <xsl:value-of select="/Form/Settings/ModuleId"/>
          </xsl:attribute>

          <xsl:choose>
            <xsl:when test="IsEnabled != 'True'">
              <xsl:attribute name="disabled">disabled</xsl:attribute>
            </xsl:when>
            <!--<xsl:otherwise>
              </xsl:otherwise>-->
          </xsl:choose>
        </input>
      </div>
      <span class="text-danger">
        <xsl:attribute name="id">
          <xsl:value-of select="Name" />
          <xsl:text>-</xsl:text>
          <xsl:value-of select="/Form/Settings/ModuleId"/>
        </xsl:attribute>
      </span>
      <!--<textarea>
        <xsl:copy-of select="." />
      </textarea>-->
    </div>
  </xsl:template>

</xsl:stylesheet>
