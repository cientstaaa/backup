<?
$msg = "Mensagem enviada em ".date("d/m/Y")."\n";
while(list($campo, $valor) = each($HTTP_POST_VARS)) {
$msg .= ucwords($campo).": ".$valor."\n";
}
mail("fxc.xavier@gmail.com", "Mensagem enviada pelo meu formulário",$msg,"From: $REMOTE_ADDR");
?>

