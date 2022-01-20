<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220115143702 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE address_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE SEQUENCE client_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE address (id INT NOT NULL, address VARCHAR(255) NOT NULL, code VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE client (id INT NOT NULL, username VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, phone VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, sex VARCHAR(1) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C7440455F85E0677 ON client (username)');
        $this->addSql('CREATE TABLE client_address (client_id INT NOT NULL, address_id INT NOT NULL, PRIMARY KEY(client_id, address_id))');
        $this->addSql('CREATE INDEX IDX_5F732BFC19EB6921 ON client_address (client_id)');
        $this->addSql('CREATE INDEX IDX_5F732BFCF5B7AF75 ON client_address (address_id)');
        $this->addSql('ALTER TABLE client_address ADD CONSTRAINT FK_5F732BFC19EB6921 FOREIGN KEY (client_id) REFERENCES client (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE client_address ADD CONSTRAINT FK_5F732BFCF5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE client_address DROP CONSTRAINT FK_5F732BFCF5B7AF75');
        $this->addSql('ALTER TABLE client_address DROP CONSTRAINT FK_5F732BFC19EB6921');
        $this->addSql('DROP SEQUENCE address_id_seq CASCADE');
        $this->addSql('DROP SEQUENCE client_id_seq CASCADE');
        $this->addSql('DROP TABLE address');
        $this->addSql('DROP TABLE client');
        $this->addSql('DROP TABLE client_address');
    }
}
