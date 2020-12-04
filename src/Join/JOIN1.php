<?php //Alteração do projeto para consultar e exibir os produtos registrados do banco de dados.
$servername ="localhost";
$username = "root";
$password = "";
$database ="MOB";

//criando a conexão
$conn = mysqli_connect($servername,$username,$password,$database);

//verificando conexão
if(!$conn){
  die("A conexão ao BD falhou: " . mysqli_connect_error());
}


// SELECT * FROM tabela_cliente JOIN tabela_vendas ON tabela_cliente.Id_cliente = tabela_vendas.Id_cliente;   retorna cliente e oque ele comprou...
//SELECT * FROM tabela_cliente JOIN tabela_vendas ON tabela_cliente.Id_cliente = tabela_vendas.Id_cliente JOIN tabela_produtos ON tabela_vendas.Id_produto = tabela_produtos.Id_produto;
//fara a ligaçao das 3 tabelas com clienres,vendas e produtos....... 
//Consome Informaçoes de chaves PrimariaS e EstrangeiraS, atravez dA Relacão e o uso do Join do meu BD.



setlocale(LC_MONETARY, 'pt-br');

$sql = "SELECT * FROM tabela_cliente JOIN tabela_vendas ON tabela_cliente.Id_cliente = tabela_vendas.Id_cliente JOIN tabela_produtos ON tabela_vendas.Id_produto = tabela_produtos.Id_produto";
 
$result =$conn->query($sql);
echo"<pre>";
   print_r(json_encode ( $result ->fetch_all(MYSQLI_ASSOC)) ); //fetch significa buscar todos da minha tabela de itens registrados no banco de dados!!
echo"<pre>";
?>
