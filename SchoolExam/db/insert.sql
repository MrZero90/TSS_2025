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
-- Dumping data for table `biglietti`
--

LOCK TABLES `biglietti` WRITE;
/*!40000 ALTER TABLE `biglietti` DISABLE KEYS */;
INSERT INTO `biglietti` VALUES ('B001','2025-11-10 20:00:00.000000',2,'Carta di Credito',1,'R001'),('B002','2025-11-10 20:05:00.000000',1,'Contanti',2,'R001'),('B003','2025-11-11 20:00:00.000000',3,'Carta di Credito',3,'R002'),('B004','2025-11-11 20:15:00.000000',1,'PayPal',1,'R002'),('B005','2025-11-12 18:30:00.000000',1,'Carta di Credito',4,'R003'),('B006','2025-11-13 18:45:00.000000',4,'Contanti',5,'R004'),('B007','2025-11-13 19:00:00.000000',2,'Carta di Credito',2,'R004'),('B008','2025-11-14 20:45:00.000000',1,'PayPal',6,'R005'),('B009','2025-11-14 21:00:00.000000',3,'Carta di Credito',7,'R005'),('B010','2025-11-15 21:15:00.000000',2,'Contanti',8,'R006'),('B011','2025-11-15 21:30:00.000000',1,'Carta di Credito',9,'R006'),('B012','2025-11-11 20:25:00.000000',2,'PayPal',10,'R002'),('B013','2025-11-12 18:40:00.000000',1,'Carta di Credito',3,'R003'),('B014','2025-11-10 20:10:00.000000',4,'Contanti',5,'R001'),('B015','2025-11-14 21:05:00.000000',1,'Carta di Credito',7,'R005'),('B016','2025-11-14 21:05:00.000000',2,'Carta di Credito',7,'R005'),('B040','2025-11-07 11:21:15.051000',10,'Carta di Credito',1,'R001'),('B180','2025-11-07 11:37:09.180000',3,'Contanti',7,'R005'),('B22','2025-11-07 11:51:25.686000',3,'Contanti',4,'R002'),('B231','2025-11-07 11:56:35.926000',4,'PayPal',6,'R006'),('B356','2025-11-07 12:01:05.783000',1,'PayPal',8,'R003'),('B443','2025-11-07 11:36:33.443000',3,'PayPal',3,'R003'),('B549','2025-11-07 12:00:15.062000',1,'Contanti',6,'R001'),('B732','2025-11-07 11:56:58.238000',1,'Carta di Credito',8,'R005'),('B823','2025-11-07 11:19:44.834000',1,'PayPal',1,'R001'),('B863','2025-11-07 12:19:08.906000',4,'PayPal',7,'R001'),('B983','2025-11-07 11:18:52.997000',4,'PayPal',1,'R001');
/*!40000 ALTER TABLE `biglietti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `clienti`
--

LOCK TABLES `clienti` WRITE;
/*!40000 ALTER TABLE `clienti` DISABLE KEYS */;
INSERT INTO `clienti` VALUES (1,'Rossi','marco.rossi@example.com','Marco','3331234567'),(2,'Bianchi','laura.bianchi@example.com','Laura','3319876543'),(3,'Verdi','luca.verdi@example.com','Luca','3391122334'),(4,'Ferrari','giulia.ferrari@example.com','Giulia','3354455667'),(5,'Russo','antonio.russo@example.com','Antonio','3387766554'),(6,'Galli','maria.galli@example.com','Maria','3349988776'),(7,'Fontana','paolo.fontana@example.com','Paolo','3322233445'),(8,'Costa','francesca.costa@example.com','Francesca','3365544332'),(9,'Marini','davide.marini@example.com','Davide','3306655443'),(10,'Conti','sara.conti@example.com','Sara','3377788990');
/*!40000 ALTER TABLE `clienti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `repliche`
--

LOCK TABLES `repliche` WRITE;
/*!40000 ALTER TABLE `repliche` DISABLE KEYS */;
INSERT INTO `repliche` VALUES ('R001','2025-11-10 20:30:00.000000','S001'),('R002','2025-11-11 20:30:00.000000','S001'),('R003','2025-11-12 19:00:00.000000','S002'),('R004','2025-11-13 19:00:00.000000','S002'),('R005','2025-11-14 21:00:00.000000','S003'),('R006','2025-11-15 21:00:00.000000','S003'),('R007','2025-11-16 20:00:00.000000','S004'),('R008','2025-11-17 20:00:00.000000','S004'),('R009','2025-11-18 20:00:00.000000','S004'),('R010','2025-11-19 21:00:00.000000','S005'),('R011','2025-11-20 21:00:00.000000','S005'),('R012','2025-11-21 19:30:00.000000','S006'),('R013','2025-11-22 20:30:00.000000','S007'),('R014','2025-11-23 18:00:00.000000','S007'),('R015','2025-11-24 20:30:00.000000','S007'),('R016','2025-11-25 20:00:00.000000','S008'),('R017','2025-11-26 20:00:00.000000','S008'),('R018','2025-11-27 21:00:00.000000','S009'),('R019','2025-11-28 19:00:00.000000','S010'),('R020','2025-11-29 19:00:00.000000','S010'),('R021','2025-11-30 20:00:00.000000','S011'),('R022','2025-12-01 20:00:00.000000','S011'),('R023','2025-12-02 20:00:00.000000','S011'),('R024','2025-12-03 21:30:00.000000','S012'),('R025','2025-12-04 19:30:00.000000','S013'),('R026','2025-12-05 19:30:00.000000','S013');
/*!40000 ALTER TABLE `repliche` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `spettacoli`
--

LOCK TABLES `spettacoli` WRITE;
/*!40000 ALTER TABLE `spettacoli` DISABLE KEYS */;
INSERT INTO `spettacoli` VALUES ('S001','Giuseppe Verdi',50.00,'Francesco Rossi','La Traviata','T001'),('S002','Charles Gounod',45.50,'Lucia Bianchi','Romeo e Giulietta','T002'),('S003','Gioachino Rossini',40.00,'Mario Conti','Il Barbiere di Siviglia','T003'),('S004','Giacomo Puccini',55.00,'Andrea Verdi','La Bohème','T001'),('S005','Giacomo Puccini',60.00,'Elena Rossi','Tosca','T002'),('S006','Giuseppe Verdi',52.00,'Marco Conti','Rigoletto','T003'),('S007','Wolfgang Amadeus Mozart',58.00,'Laura Ferrari','Don Giovanni','T004'),('S008','Wolfgang Amadeus Mozart',50.00,'Paolo Bianchi','Le Nozze di Figaro','T005'),('S009','Giacomo Puccini',54.00,'Giulia Marini','Madama Butterfly','T001'),('S010','Giuseppe Verdi',65.00,'Roberto Galli','Aida','T002'),('S011','Georges Bizet',48.00,'Francesca Russo','Carmen','T003'),('S012','Giacomo Puccini',62.00,'Antonio Costa','Turandot','T004'),('S013','Giuseppe Verdi',56.00,'Maria Fontana','Otello','T005'),('S014','Giuseppe Verdi',53.00,'Luca Moretti','Nabucco','T001'),('S015','Gioachino Rossini',47.00,'Sara Bellini','La Cenerentola','T002');
/*!40000 ALTER TABLE `spettacoli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teatri`
--

LOCK TABLES `teatri` WRITE;
/*!40000 ALTER TABLE `teatri` DISABLE KEYS */;
INSERT INTO `teatri` VALUES ('T001','Teatro Regio',750),('T002','Teatro Carignano',130),('T003','Teatro Gobetti',200),('T004','Teatro Alfieri',650),('T005','Teatro Nuovo',500);
/*!40000 ALTER TABLE `teatri` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-07 12:24:51
