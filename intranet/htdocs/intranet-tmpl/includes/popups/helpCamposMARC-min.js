function abrirVentanaHelperMARC(){objAH=new AjaxHelper(updateAbrirVentanaHelperMARC);objAH.url='/intranet-tmpl/includes/popups/helpCamposMARC.inc';objAH.debug=true;objAH.sendToServer();}
function updateAbrirVentanaHelperMARC(responseText){$('#ayuda_marc_content').html(responseText);$("#ayuda_marc_content").modal();}