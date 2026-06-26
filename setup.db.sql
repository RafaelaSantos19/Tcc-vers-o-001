-- SQLite setup script: cria tabelas e dados de exemplo para o trabalho
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  phone TEXT
);

CREATE TABLE IF NOT EXISTS rides (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  origin TEXT NOT NULL,
  destination TEXT NOT NULL,
  needs TEXT,
  price REAL,
  created_at TEXT
);

-- dados de exemplo
INSERT INTO users (name,phone) VALUES ('Rafaela Santos','+55 11 99999-0000');
INSERT INTO rides (origin,destination,needs,price,created_at) VALUES ('Av. Paulista, 1000','Rua das Flores, 45','[]',25.50,datetime('now'));
