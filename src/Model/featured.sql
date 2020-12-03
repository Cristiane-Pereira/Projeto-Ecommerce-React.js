-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 27-Nov-2020 às 04:17
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
-- Banco de dados: `loja_virtual`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `featured`
--

DROP TABLE IF EXISTS `featured`;
CREATE TABLE IF NOT EXISTS `featured` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Produtos` varchar(100) NOT NULL,
  `Preço` double NOT NULL,
  `Imagem` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=latin2;

--
-- Extraindo dados da tabela `featured`
--

INSERT INTO `featured` (`id`, `Produtos`, `Preço`, `Imagem`) VALUES
(1, 'Headphone One Black', 29, 'Assets/feature1.png'),
(2, 'Speaker Beats Pill', 199, 'Assets/feature2.png'),
(3, 'Aple air Pods', 112, 'Assets/feature3.png'),
(4, 'Smartwatch f9 Negro', 756, 'Assets/feature4.png'),
(5, 'Vestido Crep', 86.9, 'Assets/produto-2b-570x708.jpg'),
(6, 'Vestido Manga Longa', 75, 'Assets/produto-1a-570x708.jpg'),
(7, 'Vestido Social c/cinto', 99, 'Assets/shutterstock_116081557_2-570x708.jpg'),
(8, 'Vestido Básico', 56, 'Assets/shutterstock_94577944_2-570x708.jpg'),
(9, 'Vestido Rap', 64, 'Assets//shutterstock_342042911_2-570x708.jpg'),
(10, 'Bolsa de Couro Original', 156, 'Assets/produto-4a-570x708.jpg'),
(11, 'Vestido rosa com Coraç?o', 120, 'Assets/vestido-cor-de-rosa-com-coraç?es.jpg'),
(12, 'Vestido Moda Inverno', 112, 'Assets/shutterstock_327014729_2-570x708.jpg'),
(13, 'Saia Blogueira', 86, 'Assets/20.png'),
(14, 'Vestido Fashion', 88, 'Assets/girls_PNG6477.png'),
(15, 'Vestido Curto Azul', 56, 'Assets/girls_PNG6476.png'),
(16, 'Saia Curta Preta', 46, 'Assets/girls_PNG6485.png');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;