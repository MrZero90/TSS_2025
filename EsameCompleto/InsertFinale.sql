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
/*!40000 ALTER TABLE `biglietti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `clienti`
--

LOCK TABLES `clienti` WRITE;
/*!40000 ALTER TABLE `clienti` DISABLE KEYS */;
INSERT INTO `clienti` (cod_cliente, cognome, email, nome, telefono) VALUES (1,'ROSSI','rossi@gmail.com','GIADA','06/4328346'),(2,'BELLINELLU','bellinellu@yahho.it','SAMANTHA','06/79876658'),(3,'CORIZIO','corizio@libero.it','CARLO','06/76547648'),(4,'FRANCINI','francini@gmail.it','CASSANDRA','06/76586548'),(5,'MARTORANO','martorano@yahho.it','MARCO','06/543326565'),(6,'FIORULLO','fiorullo@hotmail.it','ERIKA','06/98765762 '),(7,'GRASSO','grasso@yahoo.it','IVAN','06/5483678'),(8,'BERTUTTI','bertutti@gmail.com','FABRIZIO','06/5367548'),(9,'CERTORINI','certorini@libero.it','GIANNA','06/53645872'),(10,'RADERI','raderi@yahoo.it','ANTONIO','06/78363459'),(11,'PAGLINO','paglino@tiscali.it','ALESSIO','06/67598721'),(12,'RORESTI','roresti@tiscali.it','VERONICA','06/3678465'),(13,'VIONETTI','vionetti@gmail.com','ARRIGO','06/34254367'),(14,'SARTIRO','sartiro@yahoo.it','SIMONE','06/845673865');
/*!40000 ALTER TABLE `clienti` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `repliche`
--

LOCK TABLES `repliche` WRITE;
/*!40000 ALTER TABLE `repliche` DISABLE KEYS */;
INSERT INTO `repliche` (data_replica, cod_replica, cod_spettacolo) VALUES ('2018-10-05','R001','S001'),('2018-10-05','R002','S001'),('2018-10-07','R003','S001'),('2018-10-08','R004','S001'),('2018-10-09','R005','S001'),('2018-11-12','R006','S002'),('2018-11-13','R007','S002'),('2018-11-14','R008','S002'),('2018-11-15','R009','S002'),('2018-11-16','R010','S002'),('2019-01-05','R011','S003'),('2019-01-06','R012','S003'),('2019-01-07','R013','S003'),('2019-01-08','R014','S003'),('2019-01-09','R015','S003'),('2019-01-12','R016','S004'),('2019-01-13','R017','S004'),('2019-01-14','R018','S004'),('2019-01-15','R019','S004'),('2019-01-16','R020','S004'),('2018-11-05','R021','S005'),('2018-11-06','R022','S005'),('2018-11-07','R023','S005'),('2018-11-18','R024','S005'),('2018-11-19','R025','S005'),('2018-12-12','R026','S006'),('2018-12-13','R027','S006'),('2018-12-14','R028','S006'),('2018-12-15','R029','S006'),('2018-12-16','R030','S006');
/*!40000 ALTER TABLE `repliche` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `spettacoli`
--

LOCK TABLES `spettacoli` WRITE;
/*!40000 ALTER TABLE `spettacoli` DISABLE KEYS */;
INSERT INTO `spettacoli` (prezzo, autore, cod_spettacolo, cod_teatro, regista, titolo) VALUES (50.00,'Andrew Lloyd Webber','S001','T001','Trevor Nunn','Cats'),(50.00,'Peter Stone','S002','T001','Maury Yeston','Titanic'),(65.00,'Mark \"Moose\" Charlap','S003','T002','Jerome Robbins','Peter Pan'),(65.00,'Charles Dickens','S004','T002','Susan Stroman','Oliver!'),(30.00,'Terrence McNally','S005','T003','Darko Tresnjak','Anastasia'),(30.00,'Truman Capote','S006','T003','Joseph Anthony','Colazione da Tiffany');
/*!40000 ALTER TABLE `spettacoli` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teatri`
--

LOCK TABLES `teatri` WRITE;
/*!40000 ALTER TABLE `teatri` DISABLE KEYS */;
INSERT INTO `teatri` (posti, citta, cod_teatro, indirizzo, nome, provincia, telefono) VALUES (265,'ROMA','T001','Via della Penitenza, 33','Teatro Agorà','RM','06 6874167'),(405,'ROMA','T002','Largo di Torre Argentina, 52','Teatro Argentina','RM','06 6840 00314'),(392,'ROMA','T003','Via Guglielmo Pepe 43','Teatro Ambra Jovinelli','RM','06 83082884');
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

-- Dump completed on 2025-11-12 12:51:18
