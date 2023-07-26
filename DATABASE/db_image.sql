-- -------------------------------------------------------------
-- TablePlus 5.3.8(500)
--
-- https://tableplus.com/
--
-- Database: db_image
-- Generation Time: 2023-07-06 11:52:12.8550
-- -------------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


CREATE TABLE `comment` (
  `cmt_id` int NOT NULL AUTO_INCREMENT,
  `cmt` varchar(100) DEFAULT NULL,
  `date_like` datetime DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  PRIMARY KEY (`cmt_id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `comment_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(100) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `like_img` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `data_like` datetime DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  PRIMARY KEY (`like_id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `like_img_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `like_img_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `saved` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_saved` datetime DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `image_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `image_id` (`image_id`),
  CONSTRAINT `saved_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `saved_ibfk_2` FOREIGN KEY (`image_id`) REFERENCES `image` (`image_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `image` (`image_id`, `image_name`, `link`, `description`, `user_id`) VALUES
(34, 'hồ nước', 'https://cdnimg.vietnamplus.vn/uploaded/ngtmbh/2022_12_13/ecopark.jpg', 'hồ nước', 2),
(35, 'thiên nhiên', 'https://photo-cms-tpo.epicdn.me/Uploaded/2023/bqmvlcvo/2019_12_26/nui_lua_YKSJ.jpg', 'thiên nhiên', 4),
(36, 'hổ', 'https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg', 'động vật', 1),
(37, 'sư tử', 'https://a-z-animals.com/media/2022/09/iStock-492611032.jpg', 'động vật', 5),
(38, 'sói', 'https://sieupet.com/sites/default/files/wolf-hybrid_dog8.jpg', 'động vật', 6),
(39, 'Lamborghini Aventador', 'https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg', 'xe', 3),
(40, 'Bungatti chiron', 'https://www.topgear.com/sites/default/files/2021/11/_Z3A7768.jpg', 'xe', 2),
(41, 'Honda CB650R', 'https://cloudfront-us-east-1.images.arcpublishing.com/octane/CGTJXY2GJJCHZEAUTLLSVOBHOY.jpg', 'motor', 1),
(42, 'Yamaha R1', 'https://minhlongmoto.com/wp-content/uploads/2020/08/xe-yamaha-r1-1200x675.jpg', 'motor', 9),
(43, 'Kawasaki Ninja 400', 'https://cdp.azureedge.net/products/USA/KA/2021/MC/SPORT/NINJA_400/50/PASSION_RED/2000000006.jpg', 'motor', 1),
(44, 'Thị trấn Đồng Văn', 'https://disantrangan.vn/wp-content/uploads/2021/10/pho_co_dong_van_ha_giang_08.jpg', 'Hà Giang', 3);

INSERT INTO `user` (`user_id`, `full_name`, `email`, `password`, `age`, `avatar`) VALUES
(1, 'Luong Huu Chung', 'chung@gmail.com', '12345', 25, 'chung'),
(2, 'Le Thanh Tan', 'tan@gmail.com', '123456', 24, 'tan'),
(3, 'Tran Nhat Nam', 'nam@gmail.com', '54321', 25, 'nam'),
(4, 'Truong Cong Hieu', 'hieu@gmail.com', '234589', 25, 'hieu'),
(5, 'Bui Van Du', 'du@gmail.com', '2223334', 25, 'du'),
(6, 'Dinh Cong Toan', 'toan@gmail.com', '75839', 25, 'toan'),
(7, 'Le Van Son', 'son@gmail.com', '783784785', 25, 'son'),
(8, 'Dang Ngoc Qui', 'qui@gmail.com', '2234242', 25, 'qui'),
(9, 'Duong Van Thanh', 'thanh@gmail.com', '37596', 25, 'thanh');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;