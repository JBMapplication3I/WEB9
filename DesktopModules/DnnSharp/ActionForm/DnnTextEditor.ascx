<%@ Control Language="C#" AutoEventWireup="True" Inherits="avt.ActionForm.DnnTextEditor" EnableViewState="true" CodeBehind="DnnTextEditor.ascx.cs" %>
<%@ Register TagPrefix="dnn" TagName="TextEditor" Src="~/controls/texteditor.ascx" %>

<style>
    .dnnTextEditor {
        margin-bottom: 0;
    }

    body {
        background-color: transparent !important;
    }

    .dnnFormItem p {
        margin-bottom: 0;
    }

    iframe {
        margin: 7px;
    }

    #Table1 {
        width: 100%;
    }
</style>

<dnn:texteditor id="txtContent" runat="server" width="100%" ChooseMode="false"></dnn:texteditor>

<script>
    $(document).ready(function () {
        var checkForCkEditor = setInterval(function () {
            var id = $('textarea').attr('id');
            if (CKEDITOR.instances[id]) {
                var iframe = $(window.parent.document.body).find('iframe[name="' + window.name + '"]')
                var sc = window.parent.dnnsfAngular15.element(iframe).scope();
                var fieldId = iframe.attr('data-af-field');
                CKEDITOR.instances[id].on('change', function (a, b) {
                    sc.form.fields[fieldId].value = $('textarea').val();
                    setTimeout(function () {
                        sc.form.fields[fieldId].onChange && sc.form.fields[fieldId].onChange(sc.form)
                    }, 0)
                });
                clearInterval(checkForCkEditor);
            }
        }, 100)
    });

    window.getContent = function () {
        switch (true) {
            case (window.CKEDITOR != undefined):
                return CKEDITOR.instances[$('textarea').attr('id')].getData();
                break;
            case ($('.RadEditor').length != -1):
                var editor = $telerik.findEditor($('.RadEditor').attr('id'));
                return editor.get_html(true);
                break;
            default:
                var frame = $('.reContentCell iframe'); // this if for DNN text editor which has multiple iframes
                if (!frame.length)
                    frame = $('iframe:first').length ? $('iframe:first') : $('body').find('textarea.cke_source');
                var content = frame[0].contentWindow ? $('body', frame[0].contentWindow.document).html() : frame.val();
                return content == "<br>" || content == "<p><br></p>" ? "" : content;
        }
    };

    window.setContent = function (content) {
        var iframes = $('iframe');
        if (!iframes.length) {
            console.warn('[Action Form - Dnn Text Editor] could not find iframe.');
            return;
        }

        var iframeBody = $('body', iframes[0].contentWindow.document);
        if (!iframeBody.length) {
            console.warn('[Action Form - Dnn Text Editor] could not find body.');
            return;
        }

        iframeBody.html(content);
    }

    $(function () {

        $(window.frameElement).prev().fadeOut();

        var initEditor = setInterval(function () {
            var iframes = $('iframe');
            if (!iframes.length) {
                return;
            }

            var iframeBody = $('body', iframes[0].contentWindow.document);
            if (!iframeBody.length) {
                return;
            }

            // add padding inside iframes
            iframeBody.css({ 'padding': '10px 10px' });;

            var currentFrame = $(window.frameElement);
            // set height of parent iframe
            currentFrame.height($('body').height());

            if (!iframeBody.html())
                iframeBody.append('<br>');

            // load content into iframe
            if (!window.once && iframeBody.html()) {
                window.once = true;
                currentFrame.height(1);
                return iframeBody.html(currentFrame.attr('data-content'));
            }
            if (iframeBody.html() === currentFrame.attr('data-content'))
                stopInterval();

        }, 200);

        stopInterval = function () {
            clearInterval(initEditor);
        }
    });

</script>
