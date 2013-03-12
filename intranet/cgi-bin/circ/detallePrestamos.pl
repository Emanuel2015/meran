#!/usr/bin/perl

use strict;
use CGI;
use C4::AR::Auth;
# 
# use C4::Date;
use C4::AR::Prestamos;
# use Date::Manip;

my $input=new CGI;

my ($template, $session, $t_params, $usuario_logueado) =  get_template_and_user ({
						template_name	=> 'circ/detallePrestamos.tmpl',
						query		    => $input,
						type		    => "intranet",
						authnotrequired	=> 0,
						flagsrequired	=> {    ui => 'ANY', 
                                                tipo_documento => 'ANY', 
                                                accion => 'CONSULTA', 
                                                entorno => 'undefined'},
    });

my $obj                         = $input->param('obj');
$obj                            = C4::AR::Utilidades::from_json_ISO($obj);
my $nro_socio                   = $obj->{'nro_socio'};
my $prestamos                   = C4::AR::Prestamos::obtenerPrestamosDeSocio($nro_socio);
# C4::AR::Debug::debug("detallePrestamos.pl => nro_socio: ".$nro_socio);
$t_params->{'PRESTAMOS'}        = $prestamos;
# C4::AR::Debug::debug("detallePrestamos.pl => prestamos: ".$prestamos);
# C4::AR::Debug::debug("detallePrestamos.pl => cant_prestamos: ".scalar(@$prestamos));
$t_params->{'prestamos_cant'}   = scalar(@$prestamos);

my $algunoSeRenueva=0;
my $vencidos=0;
foreach my $prestamo (@$prestamos) {
    if($prestamo->estaVencido){$vencidos++;}
    if($prestamo->sePuedeRenovar){$algunoSeRenueva=1;}
}
$t_params->{'vencidos'}         = $vencidos;
$t_params->{'algunoSeRenueva'}  = $algunoSeRenueva;

C4::AR::Auth::output_html_with_http_headers($template, $t_params, $session);