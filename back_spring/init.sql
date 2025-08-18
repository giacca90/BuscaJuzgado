-- Crear tabla Juzgado
CREATE TABLE juzgados (
    id BIGSERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    direccion TEXT,
    codigo_postal TEXT,
    pueblo TEXT,
    provincia TEXT,
    comunidad TEXT,
    telefono TEXT,
    fax TEXT,
    correo TEXT,
    juez TEXT
);
CREATE TABLE test (
    id BIGSERIAL PRIMARY KEY,
    nombre TEXT NOT NULL,
    direccion TEXT
);
-- Importar datos directamente desde CSV
COPY juzgados(
    nombre,
    direccion,
    codigo_postal,
    pueblo,
    provincia,
    comunidad,
    telefono,
    fax,
    correo,
    juez
)
FROM '/docker-entrypoint-initdb.d/pruebaCSV.csv' DELIMITER ',';