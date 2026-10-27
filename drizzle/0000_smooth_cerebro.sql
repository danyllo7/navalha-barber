CREATE TABLE `bookings` (
	`id` text PRIMARY KEY NOT NULL,
	`service` text NOT NULL,
	`professional` text NOT NULL,
	`date` text NOT NULL,
	`time` text NOT NULL,
	`duration` integer NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `slots` (
	`booking_id` text NOT NULL,
	`professional` text NOT NULL,
	`date` text NOT NULL,
	`minute` integer NOT NULL,
	FOREIGN KEY (`booking_id`) REFERENCES `bookings`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `unique_professional_slot` ON `slots` (`professional`,`date`,`minute`);