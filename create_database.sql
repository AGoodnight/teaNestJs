CREATE DATABASE pokeapi;

\c pokeapi;

CREATE TABLE pokemon (
  id BIGSERIAL PRIMARY KEY,
  pokemon_name VARCHAR(100) NOT NULL,
  base_experience INT,
  height INT,
  is_default BOOLEAN,
  pokemon_order INT,
  weight INT
);

CREATE TABLE abilities (
  id BIGSERIAL PRIMARY KEY,
  is_main_series BOOLEAN,
  ability_name VARCHAR(100)
);

CREATE TABLE pokemon_abilities (
  pokemon_id INT REFERENCES pokemon(id) ON UPDATE CASCADE ON DELETE CASCADE,
  ability_id INT REFERENCES abilities(id) ON UPDATE CASCADE,
  CONSTRAINT pokemon_abilities_pkey PRIMARY KEY (pokemon_id,ability_id)
);

INSERT INTO pokemon (pokemon_name) VALUES('Dido'),('Pikachu');
INSERT INTO abilities (ability_name) VALUES('Dodge'),('Lightning'),('Mimic');
INSERT INTO pokemon_abilities ( pokemon_id,ability_id ) VALUES (1,1),(2,1),(1,3),(2,2);
