-- -------------------------------------------------------------
-- TablePlus 5.3.8(500)
--
-- https://tableplus.com/
--
-- Database: db_image
-- Generation Time: 2023-07-28 13:47:12.3460
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
) ENGINE=InnoDB AUTO_INCREMENT=150 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `image` (
  `image_id` int NOT NULL AUTO_INCREMENT,
  `image_name` varchar(100) DEFAULT NULL,
  `link` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`image_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `image_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `comment` (`cmt_id`, `cmt`, `date_like`, `user_id`, `image_id`) VALUES
(1, 'xe quá đẹp', '2023-05-29 20:32:00', 1, 9),
(2, 'xe quá xịn sò', '2023-05-30 20:45:00', 3, 7),
(3, 'thị trấn du lịch', '2023-05-30 20:45:00', 1, 11),
(4, 'giá quá đắt', NULL, 3, 7),
(5, 'bờm sư tử', NULL, 14, 4),
(6, 'uy dũng', NULL, 2, 4),
(133, 'tốc đọ', NULL, 14, 7),
(134, 'xe quá xinh', NULL, 14, 7),
(135, 'sư tư châu phi', NULL, 14, 4),
(136, 'ngầu', NULL, 14, 4),
(137, 'quá cute', NULL, 14, 3),
(138, 'sẽ quay trở lại', NULL, 14, 11),
(139, 'quá trời nhà nghỉ', NULL, 14, 11),
(140, 'con mèo lớn', NULL, 14, 3),
(141, 'ảnh đẹp quá ạ!', NULL, 11, 4),
(142, 'chung', NULL, 15, 3),
(143, 'cảnh tuyệt đẹp', NULL, 11, 4),
(144, 'cảnh tuyệt đẹp', NULL, 11, 4),
(145, 'chúa tể sơn lâm', NULL, 15, 3),
(146, 'chúa tể xavan', NULL, 15, 4),
(147, 'sống chủ yếu ở châu phi', NULL, 15, 4),
(148, 'hổ ở núi tuyết', NULL, 22, 3),
(149, 'chúa tể muôn loài', NULL, 22, 3);

INSERT INTO `image` (`image_id`, `image_name`, `link`, `description`, `user_id`) VALUES
(3, 'hổ', 'https://cdn.britannica.com/40/75640-050-F894DD85/tiger-Siberian.jpg', 'động vật', 1),
(4, 'sư tử', 'https://a-z-animals.com/media/2022/09/iStock-492611032.jpg', 'động vật', 5),
(5, 'sói', 'https://sieupet.com/sites/default/files/wolf-hybrid_dog8.jpg', 'động vật', 6),
(6, 'Lamborghini Aventador', 'https://upload.wikimedia.org/wikipedia/commons/9/97/Lamborghini_Aventador_LP700-4_Orange.jpg', 'xe', 3),
(7, 'Bungatti chiron', 'https://www.topgear.com/sites/default/files/2021/11/_Z3A7768.jpg', 'xe', 2),
(9, 'Yamaha R1', 'https://xethitruong.vn/data/data/phuongthao/2(60).jpg', 'motor', 9),
(10, 'Kawasaki Ninja 400', 'https://cdp.azureedge.net/products/USA/KA/2021/MC/SPORT/NINJA_400/50/PASSION_RED/2000000006.jpg', 'motor', 1),
(11, 'Thị trấn Đồng Văn', 'https://disantrangan.vn/wp-content/uploads/2021/10/pho_co_dong_van_ha_giang_08.jpg', 'Hà Giang', 13),
(108, 'Yamaha R1', 'https://xethitruong.vn/data/data/phuongthao/2(60).jpg', 'motor', 15),
(109, 'Kawasaki Ninja 400', 'https://cdp.azureedge.net/products/USA/KA/2021/MC/SPORT/NINJA_400/50/PASSION_RED/2000000006.jpg', 'motor', 15),
(114, '1690438467667738E1F1D-C5AC-4366-A150-D7B620139FB0_1_105_c.jpeg', 'http://localhost:8080/public/img/1690438467667738E1F1D-C5AC-4366-A150-D7B620139FB0_1_105_c.jpeg', NULL, 19),
(115, '1690438613378chung.jpeg', 'http://localhost:8080/public/img/1690438613378chung.jpeg', NULL, 19),
(117, '1690448830438chung.jpeg', 'http://localhost:8080/public/img/1690448830438chung.jpeg', NULL, 15),
(119, '1690450017069Du.jpeg', 'http://localhost:8080/public/img/1690450017069Du.jpeg', NULL, 22);

INSERT INTO `saved` (`id`, `date_saved`, `user_id`, `image_id`) VALUES
(1, '2023-05-29 20:32:00', 14, 11),
(2, '2023-06-01 20:32:00', 2, 11),
(3, '2023-07-01 20:32:00', 3, 11),
(4, '2023-05-29 20:32:00', 14, 4),
(5, '2023-05-29 20:32:00', 14, 4),
(6, '2023-05-29 20:32:00', 19, 4),
(7, '2023-07-01 20:32:00', 19, 11),
(10, '2023-05-29 20:32:00', 15, 4),
(11, '2023-07-01 20:32:00', 15, 11),
(12, '2023-06-01 20:32:00', 15, 11),
(13, '2023-07-01 20:32:00', 20, 11),
(14, '2023-06-01 20:32:00', 20, 11),
(15, '2023-05-29 20:32:00', 22, 4),
(16, '2023-07-01 20:32:00', 22, 11),
(17, '2023-06-01 20:32:00', 22, 11);

INSERT INTO `user` (`user_id`, `full_name`, `email`, `password`, `age`, `avatar`) VALUES
(1, 'Truong Lap Phan', 'phan@gmail.com', '12345566', 23, 'phan'),
(2, 'Le Thanh Tan', 'tan@gmail.com', '123456', 24, 'tan'),
(3, 'Tran Nhat Nam', 'nam@gmail.com', '54321', 25, 'nam'),
(4, 'Truong Cong Hieu', 'hieu@gmail.com', '234589', 25, 'hieu'),
(5, 'Bui Van Du', 'du@gmail.com', '2223334', 25, 'du'),
(6, 'Dinh Cong Toan', 'toan@gmail.com', '75839', 25, 'toan'),
(7, 'Le Van Son', 'son@gmail.com', '783784785', 25, 'son'),
(8, 'Dang Ngoc Qui', 'qui@gmail.com', '2234242', 25, 'qui'),
(9, 'Duong Van Thanh', 'thanh@gmail.com', '37596', 25, 'thanh'),
(10, 'Viet Hieu', 'balechung93@gmail.com', '123', 25, 'mymy'),
(11, 'Bùi Thị Trà My', 'conga@gmail.com', '123456789', 25, 'mymy'),
(12, 'Bui Tien Quang', 'quang@gmail.com', '$2b$10$vgUjA2wvrzs07BkW5u51u.59XNCGdQXrS/7e498DtpwbTUB8GKHhK', NULL, NULL),
(13, 'Chung', 'huu@gmail.com', '$2b$10$APxmHcthxLrN0py90wFcku3d.aHcL3LthTRF7DOnXpjIi1eDXfK6O', NULL, NULL),
(14, 'chung luong huu', 'luong@gmail.com', '$2b$10$ssN0mE4FBPCMXNWjq/nwy.PNYYv.8.uTlqa5TGjE.XTgZHWbxEJBu', NULL, NULL),
(15, 'Bùi Quốc Việt', 'quocviet@gmail.com', '', 20, ''),
(16, 'Lương Khải Nguyên', 'nguyen@gmail.com', '$2b$10$uRsLI2yrbqqfxV75D0YQBOv42/l/9jCB/dzeCPXMToXpNaUwMqSwy', NULL, NULL),
(17, 'hoàng trung hải', 'hai@gmail.com', '$2b$10$Sx7BwjJ8RxQWoA3i38PGauSS1lIqLugjujKQLZxn7j1UHW.a.aUeO', NULL, NULL),
(18, 'Tran Trung Nghia', 'nghia@gmail.com', '$2b$10$LaXDpvLPIR3OMLw7cv81u.t1TDqU2sIbJu8FJSxPtASrPBfUWy566', NULL, NULL),
(19, ' Đăng Huy Thắng ', 'thang@gmail.com', '12345', 20, ''),
(20, 'Hồ Viết Hiếu', 'bom@gmail.com', '$2b$10$plXvRXJA6DN9jxzRGk7.oufLh1yg32EYXXfEuxhnboVj8niHdeCOi', NULL, NULL),
(21, 'Trần Văn Ơn', 'on@gmail.com', '$2b$10$kRj6JPcEDHc.vN.2uGA2K.mRxF5BgcKYOfO5RrboovUKX4KmOO19a', NULL, NULL),
(22, 'Nguyen Van A', 'a@gmail.com', '12345', 26, ''),
(23, 'Trương Tuyết Sơn', 'han@gmail.com', '$2b$10$d78HFdKTyiRC8p22nPhc1.pBTMnWM8dmmZSukJH9PjFBPz4kGfSE6', 50, ''),
(24, 'Swift', 'hung@gmail.com', '$2b$10$z4bCGM7PkF99p.JIu7SnwOLDBPxGwbi3qWh2gmSXTZcyYEUBxj2.q', 25, 'ê'),
(25, 'tran the bang', 'bang@gmail.com', '$2b$10$047kgEaNDvRdFHbGRTzrBu/WsHxT180IYaR/VGjVfGNM8UZ4PzhP.', NULL, NULL);



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;