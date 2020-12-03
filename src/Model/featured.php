<?php

require "Connection.php";

class Featured
{
    public $id;
    public $Produtos;
    public $Preço;
    public $Imagem;

    public static function getAll()
    {
        $connection = Connection::getDb();

        $stmt = $connection->query("SELECT * FROM featured");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}
