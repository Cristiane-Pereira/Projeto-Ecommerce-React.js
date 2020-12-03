-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 03-Dez-2020 às 16:51
-- Versão do servidor: 8.0.21
-- versão do PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mob`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tabela_cliente`
--

DROP TABLE IF EXISTS `tabela_cliente`;
CREATE TABLE IF NOT EXISTS `tabela_cliente` (
  `Id_cliente` int NOT NULL,
  `Nome_cliente` varchar(255) DEFAULT NULL,
  `Cpf` varchar(11) DEFAULT NULL,
  `Data_nasc` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`Id_cliente`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;

--
-- Extraindo dados da tabela `tabela_cliente`
--

INSERT INTO `tabela_cliente` (`Id_cliente`, `Nome_cliente`, `Cpf`, `Data_nasc`) VALUES
(1, 'Stefany', '112233445', '23072001'),
(2, 'Vanessa', '112233446', '25072002'),
(3, 'Cristiane', '112233447', '13111990'),
(4, 'Gisele', '112233448', '05011997'),
(7, 'Flávia', '1122334451', '10051992'),
(5, 'Roberto', '112233449', '11101890'),
(6, 'Felipe', '112233440', '06021991'),
(8, 'Mauricio', '1122334452', '10031987');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tabela_produtos`
--

DROP TABLE IF EXISTS `tabela_produtos`;
CREATE TABLE IF NOT EXISTS `tabela_produtos` (
  `Id_produto` int NOT NULL,
  `Nome_produto` varchar(30) DEFAULT NULL,
  `Categoria` varchar(40) DEFAULT NULL,
  `Preço_produto` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`Id_produto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;

--
-- Extraindo dados da tabela `tabela_produtos`
--

INSERT INTO `tabela_produtos` (`Id_produto`, `Nome_produto`, `Categoria`, `Preço_produto`) VALUES
(555, 'Vestido Manga Longa Floral', 'Vestido', '75.99'),
(455, 'Saia Blogueirinha', 'Saia', '86.01'),
(655, 'Vestido Rosa com Coraçao', 'Vestido', '120.01'),
(755, 'Headphone One Black', 'Acessório', '29.01'),
(855, 'Aple Air Pods', 'Acessorio', '112,90'),
(355, 'Vestido Mob Inverno', 'Vestido', '112.90'),
(255, 'Bolsa de Couro Original', 'Acessório', '156.01'),
(155, 'Smartwatch f9 negro', 'Acessório', '756.00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tabela_vendas`
--

DROP TABLE IF EXISTS `tabela_vendas`;
CREATE TABLE IF NOT EXISTS `tabela_vendas` (
  `Id_venda` int NOT NULL,
  `Id_cliente` int DEFAULT NULL,
  `Id_produto` int DEFAULT NULL,
  `Quantidade` int DEFAULT NULL,
  `Data_venda` date DEFAULT NULL,
  PRIMARY KEY (`Id_venda`),
  KEY `Id_cliente` (`Id_cliente`),
  KEY `Id_produto` (`Id_produto`)
) ENGINE=MyISAM DEFAULT CHARSET=latin2;

--
-- Extraindo dados da tabela `tabela_vendas`
--

INSERT INTO `tabela_vendas` (`Id_venda`, `Id_cliente`, `Id_produto`, `Quantidade`, `Data_venda`) VALUES
(1, 1, 155, 1, '2020-05-01'),
(2, 2, 355, 2, '2020-09-11'),
(3, 3, 455, 4, '2020-11-13'),
(4, 4, 855, 1, '2020-09-24'),
(5, 5, 855, 3, '2020-01-15'),
(6, 6, 155, 1, '2020-12-02'),
(7, 7, 255, 5, '2020-10-20'),
(8, 8, 755, 2, '2020-09-09');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
