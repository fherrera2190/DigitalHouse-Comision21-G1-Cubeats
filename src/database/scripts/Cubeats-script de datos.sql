-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: cubeats_db
-- ------------------------------------------------------
-- Server version	8.0.34

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
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,'Calle 1','Ciudad 1','Provincia 1',2,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(2,'Calle 2','Ciudad 2','Provincia 2',3,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(3,'Calle 3','Ciudad 3','Provincia 3',4,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(4,NULL,NULL,NULL,5,'2023-10-25 03:31:39','2023-10-25 03:31:39'),(5,NULL,NULL,NULL,6,'2023-10-25 03:33:12','2023-10-25 03:33:12'),(6,NULL,NULL,NULL,7,'2023-10-25 03:44:12','2023-10-25 03:44:12'),(7,NULL,NULL,NULL,8,'2023-10-25 03:45:34','2023-10-25 03:45:34'),(8,NULL,NULL,NULL,9,'2023-10-25 03:47:00','2023-10-25 03:47:00'),(9,NULL,NULL,NULL,10,'2023-10-25 03:47:17','2023-10-25 03:47:17'),(10,NULL,NULL,NULL,11,'2023-10-25 03:49:39','2023-10-25 03:49:39'),(11,NULL,NULL,NULL,12,'2023-10-25 04:29:51','2023-10-25 04:29:51'),(12,NULL,NULL,NULL,13,'2023-10-25 04:31:34','2023-10-25 04:31:34'),(13,NULL,NULL,NULL,14,'2023-10-25 04:32:53','2023-10-25 04:32:53');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `artistbeats`
--

LOCK TABLES `artistbeats` WRITE;
/*!40000 ALTER TABLE `artistbeats` DISABLE KEYS */;
INSERT INTO `artistbeats` VALUES (1,4,1,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(2,4,2,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(3,4,5,'2023-10-23 18:52:10','2023-10-23 18:52:10');
/*!40000 ALTER TABLE `artistbeats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `beats`
--

LOCK TABLES `beats` WRITE;
/*!40000 ALTER TABLE `beats` DISABLE KEYS */;
INSERT INTO `beats` VALUES (1,'One More Time','','1698409991366_avatar_beat_.jpg','b1Prueba.mp3',300,100000,1,2,1,'2023-10-23 18:52:10','2023-10-27 12:33:11'),(2,'Kachorro DJ','','1698410171828_avatar_beat_.jpeg','b2Prueba.mp3',400,80000,1,2,1,'2023-10-23 18:52:10','2023-10-27 12:36:11'),(3,'Classical','','1698410907312_avatar_beat_.jpg','b3Prueba.mp3',500,5000,1,2,1,'2023-10-23 18:52:10','2023-10-27 12:48:27'),(4,'Me gustas much','Un temaso','1698410063976_avatar_beat_.jpg','b4Prueba.mp3',300,880000,1,2,1,'2023-10-23 18:52:10','2023-10-27 12:34:23'),(5,'Ibiza Rockefeller','','ibiza.jpeg','b5Prueba.mp3',500,2000,1,3,1,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(6,'Bust-a-mood','','jazz.jpeg','b6Prueba.mp3',500,27000,1,2,1,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(7,'Celebrate','','celebrate.jpeg','b7Prueba.mp3',100,25000,1,3,1,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(8,'Relax','','relax.jpeg','b8Prueba.mp3',250,35000,1,2,1,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(9,'Giorgio Gaber','','gaber.jpg','b9Prueba.mp3',400,20100,1,2,1,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(11,'Probando 2','asf dfbvcs bhn fgjhghjmhjhjhhj','1698244479096_avatar_beat_.jpg','1698244478873_beat_.mp3',233,0,8,3,1,'2023-10-25 14:34:39','2023-10-25 14:34:39');
/*!40000 ALTER TABLE `beats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Hip-Hop',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(2,'R&B',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(3,'Trap',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(4,'EDM',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(5,'Pop',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(6,'Rock',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(7,'Jazz',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(8,'Experimental',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10'),(9,'Electro',NULL,'2023-10-23 18:52:10','2023-10-23 18:52:10');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `items`
--

LOCK TABLES `items` WRITE;
/*!40000 ALTER TABLE `items` DISABLE KEYS */;
/*!40000 ALTER TABLE `items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `licences`
--

LOCK TABLES `licences` WRITE;
/*!40000 ALTER TABLE `licences` DISABLE KEYS */;
INSERT INTO `licences` VALUES (1,'Non-Exclusive License','Esta licencia te permite utilizar la música, pero el productor o creador de beats puede seguir vendiendo la misma pista a otros clientes. No tienes exclusividad sobre la pista. Uso: Puedes usar la música en tu proyecto, como canciones, videos, podcasts, etc., según los términos de la licencia, pero debes respetar las limitaciones especificadas.','2023-10-23 18:52:10','2023-10-23 18:52:10'),(2,'Limited Use License',' Esta licencia establece restricciones específicas sobre cómo puedes utilizar la música, como la cantidad de copias que puedes distribuir o la duración de tu proyecto. Uso: Útil si tienes un proyecto con requisitos específicos y quieres controlar exactamente cómo se utiliza la música.','2023-10-23 18:52:10','2023-10-23 18:52:10'),(3,'Free Use License','Algunos productores ofrecen pistas de beats de forma gratuita con ciertas restricciones. Puedes usar la música de manera limitada o no lucrativa sin costo, pero aún debes seguir los términos de la licencia. Uso: Ideal para proyectos personales o sin fines de lucro donde no deseas invertir en música.','2023-10-23 18:52:10','2023-10-23 18:52:10');
/*!40000 ALTER TABLE `licences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2023-10-23 18:52:10','2023-10-23 18:52:10'),(2,'artist','2023-10-23 18:52:10','2023-10-23 18:52:10'),(3,'producer','2023-10-23 18:52:10','2023-10-23 18:52:10');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('1-create-category.js'),('20231018230999-create-role.js'),('20231018231000-create-user.js'),('20231018231001-create-licence.js'),('20231018231002-create-beat.js'),('20231018231445-create-order.js'),('20231018231446-create-item.js'),('20231018231506-create-address.js'),('20231018231512-create-artist-beat.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'ferbeoulve',NULL,NULL,'herrera.fernando1209@gmail.com','Ferbeoulve Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum voluptas magnam inventore aperiam similique est rem enim, voluptatem ducimus id quod debitis sit excepturi amet ab repellendus unde sed incidunt deleniti omnis adipisci. Veniam doloribus consequatur enim quibusdam ratione modi corrupti fuga? Quod, totam voluptates quasi corporis accusamus illo.','admin.png',NULL,1,'$2a$10$qhwsiSLC4u18Msxx/i4O2OC6wMLXOObigalahvL2p6b5XWfr31LOu','2023-10-23 18:52:10','2023-10-23 18:52:10'),(2,'ferbeoulve23',NULL,NULL,'herrera.fernando120923@gmail.com','Ferbeoulve23 Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum voluptas magnam inventore aperiam similique est rem enim, voluptatem ducimus id quod debitis sit excepturi amet ab repellendus unde sed incidunt deleniti omnis adipisci. Veniam doloribus consequatur enim quibusdam ratione modi corrupti fuga? Quod, totam voluptates quasi corporis accusamus illo.',NULL,NULL,3,'$2a$10$kURAMAnyx2YgPcmuLVe/YOHAdV8wgw.GzUolMsPE2pPcJhtzNJPO.','2023-10-23 18:52:10','2023-10-23 18:52:10'),(3,'maxi2023',NULL,NULL,'maxi2023@gmail.com','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quod vitae, natus sunt tempora reiciendis nulla error accusamus illum tempore doloremque harum! Esse maxime porro ut, sapiente quia voluptas facere.','1695096964819_maxi2023_image_.jpg','1695096978426_maxi2023_cover_.jpg',3,'$2a$10$PQwhJMDyhf3ulPqRQTzyauW64kn0P1XmmkoeJsvL/P/LDypM2.eaW','2023-10-23 18:52:10','2023-10-23 18:52:10'),(4,'maxi2024',NULL,NULL,'maxi2024@gmail.com','s´dflksfldslfsdpfl+pldaspáds','1695954165880_maxi2024_image_.jpg',NULL,2,'$2a$10$F3cuHaavbX1/JebdECLgwObp2WjEF66iZS.lqi3sTwxXaoLkbRGgi','2023-10-23 18:52:10','2023-10-23 18:52:10'),(5,'fernando1209',NULL,NULL,'fernando1209@gmail.com',NULL,NULL,NULL,2,'$2a$10$AvWdkQbMm/v.tF72aEigoOO4N8/QJERmIAwX8n5IHLUBtxWtEltc.','2023-10-25 03:31:39','2023-10-25 03:31:39'),(6,'herrera209',NULL,NULL,'herrera209@gmail.com',NULL,NULL,NULL,2,'$2a$10$.YGaRe3gwOtavmWy.Pcvc.MipWy.hK1H.z.q.aClPOaZhxmBexwOS','2023-10-25 03:33:12','2023-10-25 03:33:12'),(7,'fernando12091',NULL,NULL,'fernando12091@gmail.com',NULL,NULL,NULL,2,'$2a$10$.VnGvEbyN7fH.UowycC0LeXEP6Es1450xTrdiPK6x0Wa8u9H.K.Hi','2023-10-25 03:44:12','2023-10-25 03:44:12'),(8,'fernando120911',NULL,NULL,'fernando120911@gmail.com',NULL,NULL,NULL,2,'$2a$10$qnEW96Hdx8j6DKSys83Zzehy4.yJJrVpUrw.aATYxsDNbTywX9Xom','2023-10-25 03:45:34','2023-10-25 03:45:34'),(9,'fernando1209111',NULL,NULL,'fernando1209111@gmail.com',NULL,NULL,NULL,2,'$2a$10$Vaog2Q1uOaDPzkHfXNvy3ueko64LRzbSUUBLh5yehF/mdvXN1XYoW','2023-10-25 03:47:00','2023-10-25 03:47:00'),(10,'fernando12091111',NULL,NULL,'fernando12091111@gmail.com',NULL,NULL,NULL,2,'$2a$10$TlVCGGWRKwhoyzfVjhWzrOlefL2ZvsF5qoBY9ptPeyI.31dq4Dzn.','2023-10-25 03:47:17','2023-10-25 03:47:17'),(11,'herrera',NULL,NULL,'herrera.fernando1209123123@gmail.com',NULL,NULL,NULL,3,'$2a$10$PcMpo2aka6OQ4ehdhH5Iwe887Vmjvjd7mxQkUaUaERGsTBAiTY3Xy','2023-10-25 03:49:39','2023-10-25 03:49:39'),(12,'maxi2025',NULL,NULL,'maxi2025@gmail.com',NULL,NULL,NULL,2,'$2a$10$Xj.YtTnbilxfdIG3EI7fceS6ceiH3GCYi/KWxQH8Kbhvr/wSxQNJa','2023-10-25 04:29:51','2023-10-25 04:29:51'),(13,'maxi2026',NULL,NULL,'maxi2026@gmail.com',NULL,NULL,NULL,2,'$2a$10$it/Blxcien222h.KdISVHeT/I9GINlqYxpK0VtjswRKL2L9uMVhxa','2023-10-25 04:31:34','2023-10-25 04:31:34'),(14,'ferbeoulve2028',NULL,NULL,'ferbeoulve2028@gmail.com',NULL,NULL,NULL,3,'$2a$10$0vySZR4YnRLod74wUPkD5OeLnD.HK.sRiUl8QZVq0H2LyBMskeWqS','2023-10-25 04:32:53','2023-10-25 04:32:53');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-27 10:09:33
