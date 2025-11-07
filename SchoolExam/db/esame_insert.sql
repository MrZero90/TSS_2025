LOCK TABLES `clienti` WRITE;
/*!40000 ALTER TABLE `clienti` DISABLE KEYS */;
INSERT INTO `clienti` VALUES (1,'Rossi','marco.rossi@example.com','Marco','3331234567'),(2,'Bianchi','laura.bianchi@example.com','Laura','3319876543'),(3,'Verdi','luca.verdi@example.com','Luca','3391122334'),(4,'Ferrari','giulia.ferrari@example.com','Giulia','3354455667'),(5,'Russo','antonio.russo@example.com','Antonio','3387766554'),(6,'Galli','maria.galli@example.com','Maria','3349988776'),(7,'Fontana','paolo.fontana@example.com','Paolo','3322233445'),(8,'Costa','francesca.costa@example.com','Francesca','3365544332'),(9,'Marini','davide.marini@example.com','Davide','3306655443'),(10,'Conti','sara.conti@example.com','Sara','3377788990');
/*!40000 ALTER TABLE `clienti` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `teatri` WRITE;
/*!40000 ALTER TABLE `teatri` DISABLE KEYS */;
INSERT INTO `teatri` VALUES ('T001','Teatro Regio',750),('T002','Teatro Carignano',130),('T003','Teatro Gobetti',200);
/*!40000 ALTER TABLE `teatri` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `spettacoli` WRITE;
/*!40000 ALTER TABLE `spettacoli` DISABLE KEYS */;
INSERT INTO `spettacoli` VALUES ('S001','Giuseppe Verdi',50.00,'Francesco Rossi','La Traviata','T001'),('S002','Charles Gounod',45.50,'Lucia Bianchi','Romeo e Giulietta','T002'),('S003','Gioachino Rossini',40.00,'Mario Conti','Il Barbiere di Siviglia','T003');
/*!40000 ALTER TABLE `spettacoli` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `repliche` WRITE;
/*!40000 ALTER TABLE `repliche` DISABLE KEYS */;
INSERT INTO `repliche` VALUES ('R001','2025-11-10 20:30:00.000000','S001'),('R002','2025-11-11 20:30:00.000000','S001'),('R003','2025-11-12 19:00:00.000000','S002'),('R004','2025-11-13 19:00:00.000000','S002'),('R005','2025-11-14 21:00:00.000000','S003'),('R006','2025-11-15 21:00:00.000000','S003');
/*!40000 ALTER TABLE `repliche` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `biglietti` WRITE;
/*!40000 ALTER TABLE `biglietti` DISABLE KEYS */;
INSERT INTO `biglietti` VALUES ('B001','2025-11-10 20:00:00.000000',2,'Carta di Credito',1,'R001'),('B002','2025-11-10 20:05:00.000000',1,'Contanti',2,'R001'),('B003','2025-11-11 20:00:00.000000',3,'Carta di Credito',3,'R002'),('B004','2025-11-11 20:15:00.000000',1,'PayPal',1,'R002'),('B005','2025-11-12 18:30:00.000000',1,'Carta di Credito',4,'R003'),('B006','2025-11-13 18:45:00.000000',4,'Contanti',5,'R004'),('B007','2025-11-13 19:00:00.000000',2,'Carta di Credito',2,'R004'),('B008','2025-11-14 20:45:00.000000',1,'PayPal',6,'R005'),('B009','2025-11-14 21:00:00.000000',3,'Carta di Credito',7,'R005'),('B010','2025-11-15 21:15:00.000000',2,'Contanti',8,'R006'),('B011','2025-11-15 21:30:00.000000',1,'Carta di Credito',9,'R006'),('B012','2025-11-11 20:25:00.000000',2,'PayPal',10,'R002'),('B013','2025-11-12 18:40:00.000000',1,'Carta di Credito',3,'R003'),('B014','2025-11-10 20:10:00.000000',4,'Contanti',5,'R001'),('B015','2025-11-14 21:05:00.000000',1,'Carta di Credito',7,'R005');
/*!40000 ALTER TABLE `biglietti` ENABLE KEYS */;
UNLOCK TABLES;