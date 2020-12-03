<?php //Alteração do projeto para consultar e exibir os produtos registrados do banco de dados.
$servername ="localhost";
$username = "root";
$password = "";
$database ="loja_virtual";

//criando a conexão
$conn = mysqli_connect($servername,$username,$password,$database);

//verificando conexão
if(!$conn){
  die("A conexão ao BD falhou: " . mysqli_connect_error());
}

//Consome IMFORMAÇÕES (API) com Json do meu banco de dados.

setlocale(LC_MONETARY, 'pt-br');

$sql = "select Produtos,Preço,Imagem  from featured";
$result =$conn->query($sql);

   print_r(json_encode ( $result ->fetch_all(MYSQLI_ASSOC)) ); //fetch significa buscar todos da minha tabela de itens registrados no banco de dados!!
?>

           
                 
