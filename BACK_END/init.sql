set transaction read write;

DROP TABLE CLIENT;
CREATE TABLE CLIENT (
 ID_CLIENT SERIAL PRIMARY KEY,
 FIRSTNAME VARCHAR(50),
 LASTNAME VARCHAR(50),
 EMAIL VARCHAR(50),
 USERNAME VARCHAR(50),
 PHONE VARCHAR(15),
 SEX VARCHAR(1),
 PASSWORD VARCHAR(256)
 );

CREATE TABLE PRODUCT (
 ID_PRODUCT SERIAL PRIMARY KEY,
 REF VARCHAR(100),
 LIBELLE VARCHAR(100),
 PRIX FLOAT,
 GAMEPASS BOOLEAN,
 IMAGE VARCHAR(500)
 );

INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('marvels-avengers', 'Marvel’s Avengers', 49.99, 'true', 'https://store-images.s-microsoft.com/image/apps.19867.69399725068812250.a9473416-d41d-4061-8a34-36b073bb5f9a.2b86c7fc-d28f-4dd8-90ba-f2f2753ccb58?mode=scale&q=90&h=300&w=200');
INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('gang-beasts', 'Gang Beasts', 19.99, 'true', 'https://store-images.s-microsoft.com/image/apps.35593.68150164172276526.ddc374d7-ef5e-43b9-940a-bbc04440bb33.e0c05607-881c-449f-826b-fec43403598c?mode=scale&q=90&h=300&w=200');
INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('destiny-2', 'Destiny 2', 0, 'true', 'https://store-images.s-microsoft.com/image/apps.15749.14134992626562533.45eb17c9-271a-401c-b19e-b47df75b7600.f4dee6b7-ed92-4bdb-8c66-a45238b9e9a1?mode=scale&q=90&h=300&w=200');
INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('back-4-blood-standard-edition', 'Back 4 Blood: Standard Edition', 59.99, 'true', 'https://store-images.s-microsoft.com/image/apps.3334.63183727176145146.d84d29ef-df3a-4a5d-96b4-f1a7d9797aec.89ddda28-6451-409c-aa56-3a58a278e8b1?mode=scale&q=90&h=300&w=200');
INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('microsoft-flight-simulator-deluxe-edition', 'Microsoft Flight Simulator: Deluxe Edition', 89.99, 'false', 'https://store-images.s-microsoft.com/image/apps.49445.14476939198976263.8ee4ed26-ad5d-4281-8779-7250d8c25da8.091333b0-cf74-48f4-8731-51e5d0508538?w=180&h=300&q=90&mode=scale');
INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('sea-of-thieves', 'Sea of Thieves', 39.99, 'true', 'https://store-images.s-microsoft.com/image/apps.16347.14554784103656548.6c0bfca6-ceff-4368-9bde-2fe50f344136.007dce43-6492-46f2-bb2b-2b28df98fc3c?mode=scale&q=90&h=300&w=200');
INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('forza-horizon-5-standard-edition', 'Forza Horizon 5 Standard Edition', 59.99, 'true', 'https://store-images.s-microsoft.com/image/apps.49800.13718773309227929.bebdcc0e-1ed5-4778-8732-f4ef65a2f445.9ac09d39-064d-466c-81ca-2f1b6f0b95c5?mode=scale&q=90&h=300&w=200&background=%23FFFFFF');
INSERT INTO PRODUCT (REF, LIBELLE, PRIX, GAMEPASS, IMAGE)
VALUES ('forza-horizon-5-premium-edition', 'Forza Horizon 5 Premium Edition', 99.99, 'false', 'https://store-images.s-microsoft.com/image/apps.23625.13806078025361171.9723cf5e-1e29-4d9d-ad0a-cc37a95bb75d.e02f4ead-d89b-45cd-8eb5-5dcbf44ae91f?mode=scale&q=90&h=300&w=200&background=%23FFFFFF');
