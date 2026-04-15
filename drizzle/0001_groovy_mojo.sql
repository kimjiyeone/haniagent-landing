CREATE TABLE `consultations` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(100) NOT NULL,
	`phone` varchar(30) NOT NULL,
	`clinicName` varchar(200) NOT NULL,
	`isPreOpening` boolean NOT NULL DEFAULT false,
	`region` varchar(200) NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `consultations_id` PRIMARY KEY(`id`)
);
