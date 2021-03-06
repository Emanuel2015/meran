/*
 * Meran - MERAN UNLP is a ILS (Integrated Library System) wich provides Catalog,
 * Circulation and User's Management. It's written in Perl, and uses Apache2
 * Web-Server, MySQL database and Sphinx 2 indexing.
 * Copyright (C) 2009-2013 Grupo de desarrollo de Meran CeSPI-UNLP
 *
 * This file is part of Meran.
 *
 * Meran is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Meran is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Meran.  If not, see <http://www.gnu.org/licenses/>.
 */

function _getId(IdObj,id){$('#'+IdObj).val(id);}
function _CrearAutocomplete(options){if(!(options.IdInput)||!(options.IdInputHidden)){alert("AutocompleteHelper=> _CrearAutocomplete=> Error en parametros");return 0;}
url=URL_PREFIX+"/autocompletablesDB.pl?accion="+options.accion+"&token="+token;$("#"+options.IdInput).search();$("#"+options.IdInput).autocomplete(url,{formatItem:function(row){return row[1];},minChars:3,matchSubset:1,matchContains:1,maxItemsToShow:M_LIMITE_RESULTADOS,cacheLength:M_LIMITE_RESULTADOS,selectOnly:1,});$("#"+options.IdInput).result(function(event,data,formatted){$("#"+options.IdInput).val(data[1]);_getId(options.IdInputHidden,data[0]);if(options.callBackFunction){options.callBackFunction();}});}
function _CrearAutocompleteTextArea(options){if(!(options.IdInput)){alert("AutocompleteHelper=> _CrearAutocomplete=> Error en parametros");return 0;}
url=URL_PREFIX+"/autocompletablesDB.pl?accion="+options.accion+"&token="+token;$("#"+options.IdInput).search();$("#"+options.IdInput).autocomplete(url,{formatItem:function(row){return row[1];},minChars:3,matchSubset:1,matchContains:1,maxItemsToShow:10,cacheLength:50,selectOnly:1,multiple:true,matchContains:true,formatItem:formatItem,formatResult:formatResult,multipleSeparator:"\n",});$("#"+options.IdInput).result(function(event,data,formatted){if(options.IdInputHidden){_getId(options.IdInputHidden,data[0]);}
if(options.callBackFunction){options.callBackFunction();}});}
function CrearAutocompleteMonedas(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_monedas',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteCiudades(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_ciudades',callBackFunction:options.callBackFunction,});}
function CrearAutocompletePaises(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_paises',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteLenguajes(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_lenguajes',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteAutores(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_autores',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteSoportes(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_soportes',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteUsuarios(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_usuarios',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteUsuariosByCredential(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_usuarios_by_credential',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteUsuariosConRegularidad(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_usuarios_con_regularidad',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteBarcodes(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_barcodes',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteBarcodesPrestados(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_barcodes_prestados',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteTemas(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_temas',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteEditoriales(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_editoriales',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteAyudaMARC(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_ayuda_marc',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteUI(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,accion:'autocomplete_UI',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteCatalogo(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,IdInputAutor:options.IdInputAutor,accion:'autocomplete_catalogo',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteNivel2(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,IdInputAutor:options.IdInputAutor,accion:'autocomplete_nivel2',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteCatalogoId(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,IdInputAutor:options.IdInputAutor,accion:'autocomplete_catalogo_id',callBackFunction:options.callBackFunction,});}
function CrearAutocompleteNivel2Id(options){_CrearAutocomplete({IdInput:options.IdInput,IdInputHidden:options.IdInputHidden,IdInputAutor:options.IdInputAutor,accion:'autocomplete_nivel2_id',callBackFunction:options.callBackFunction,});}