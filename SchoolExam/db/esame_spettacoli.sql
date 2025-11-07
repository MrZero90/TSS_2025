-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: esame
-- ------------------------------------------------------
-- Server version	8.4.7

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `spettacoli`
--

LOCK TABLES `spettacoli` WRITE;
/*!40000 ALTER TABLE `spettacoli` DISABLE KEYS */;
INSERT INTO `spettacoli` VALUES ('S001','Giuseppe Verdi',50.00,'Francesco Rossi','La Traviata','T001'),('S002','Charles Gounod',45.50,'Lucia Bianchi','Romeo e Giulietta','T002'),('S003','Gioachino Rossini',40.00,'Mario Conti','Il Barbiere di Siviglia','T003'),('S004','Giacomo Puccini',55.00,'Andrea Verdi','La Bohème','T001'),('S005','Giacomo Puccini',60.00,'Elena Rossi','Tosca','T002'),('S006','Giuseppe Verdi',52.00,'Marco Conti','Rigoletto','T003'),('S007','Wolfgang Amadeus Mozart',58.00,'Laura Ferrari','Don Giovanni','T004'),('S008','Wolfgang Amadeus Mozart',50.00,'Paolo Bianchi','Le Nozze di Figaro','T005'),('S009','Giacomo Puccini',54.00,'Giulia Marini','Madama Butterfly','T001'),('S010','Giuseppe Verdi',65.00,'Roberto Galli','Aida','T002'),('S011','Georges Bizet',48.00,'Francesca Russo','Carmen','T003'),('S012','Giacomo Puccini',62.00,'Antonio Costa','Turandot','T004'),('S013','Giuseppe Verdi',56.00,'Maria Fontana','Otello','T005'),('S014','Giuseppe Verdi',53.00,'Luca Moretti','Nabucco','T001'),('S015','Gioachino Rossini',47.00,'Sara Bellini','La Cenerentola','T002');
/*!40000 ALTER TABLE `spettacoli` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-07 12:23:57
