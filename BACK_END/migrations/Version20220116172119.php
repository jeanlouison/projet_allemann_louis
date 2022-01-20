<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220116172119 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SEQUENCE address_id_seq INCREMENT BY 1 MINVALUE 1 START 1');
        $this->addSql('CREATE TABLE address (id INT NOT NULL, address VARCHAR(255) NOT NULL, code VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id))');
        $this->addSql('CREATE TABLE client_address (client_id INT NOT NULL, address_id INT NOT NULL, PRIMARY KEY(client_id, address_id))');
        $this->addSql('CREATE INDEX IDX_5F732BFC19EB6921 ON client_address (client_id)');
        $this->addSql('CREATE INDEX IDX_5F732BFCF5B7AF75 ON client_address (address_id)');
        $this->addSql('ALTER TABLE client_address ADD CONSTRAINT FK_5F732BFC19EB6921 FOREIGN KEY (client_id) REFERENCES client (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE client_address ADD CONSTRAINT FK_5F732BFCF5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('ALTER TABLE client ADD roles JSON NOT NULL');
        $this->addSql('ALTER TABLE client ADD firstname VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE client ADD lastname VARCHAR(255) NOT NULL');
        $this->addSql('ALTER TABLE client ADD phone VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE client ADD email VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE client ADD sex VARCHAR(1) NOT NULL');
        $this->addSql('ALTER TABLE client ALTER username TYPE VARCHAR(180)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_C7440455F85E0677 ON client (username)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE client_address DROP CONSTRAINT FK_5F732BFCF5B7AF75');
        $this->addSql('DROP SEQUENCE address_id_seq CASCADE');
        $this->addSql('DROP TABLE address');
        $this->addSql('DROP TABLE client_address');
        $this->addSql('DROP INDEX UNIQ_C7440455F85E0677');
        $this->addSql('ALTER TABLE client DROP roles');
        $this->addSql('ALTER TABLE client DROP firstname');
        $this->addSql('ALTER TABLE client DROP lastname');
        $this->addSql('ALTER TABLE client DROP phone');
        $this->addSql('ALTER TABLE client DROP email');
        $this->addSql('ALTER TABLE client DROP sex');
        $this->addSql('ALTER TABLE client ALTER username TYPE VARCHAR(255)');
    }
}
