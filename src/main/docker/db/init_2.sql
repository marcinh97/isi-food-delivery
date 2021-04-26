CREATE TABLE IF NOT EXISTS `jhi_order` (
                                           `order_id` int NOT NULL AUTO_INCREMENT,
                                           PRIMARY KEY (`order_id`),
                                           UNIQUE KEY `order_id_UNIQUE` (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
