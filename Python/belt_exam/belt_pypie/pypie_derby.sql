-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pypie_derby
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema pypie_derby
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pypie_derby` DEFAULT CHARACTER SET utf8 ;
USE `pypie_derby` ;

-- -----------------------------------------------------
-- Table `pypie_derby`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pypie_derby`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL DEFAULT NULL,
  `last_name` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `pypie_derby`.`pypie`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `pypie_derby`.`pypie` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `pie_name` VARCHAR(255) NULL DEFAULT NULL,
  `filling` VARCHAR(255) NULL DEFAULT NULL,
  `crust` VARCHAR(255) NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `vote` INT NULL DEFAULT '0',
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pypie_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_pypie_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `pypie_derby`.`users` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
