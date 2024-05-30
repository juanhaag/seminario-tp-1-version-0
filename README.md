# seminario-tp-1-version-0

## Requisitos

- Node.js versión 17 o superior
- Docker y Docker Compose (opcional, para levantar la base de datos)
- Una base de datos MySQL (si no se utiliza Docker)

## Instrucciones

### 1. Clonar el repositorio

```bash
git clone https://github.com/juanhaag/seminario-tp-1-version-0.git
cd tu-repositorio
```
### 2. Instalar dependencias
```bash
npm install
```
### 3. configurar DB
#### Opción 1: Usar Docker y Docker Compose 
```bash
docker-compose up -d
```
#### Opcion 2 Usar tu base de datos y configurar la misma en la carpeta db y el archivo db.js
### 3.5 correr comandos sql que estan en database.sql

### 4.Iniciar el proyecto
```bash
npm start
```
### 5. Levantar el front 
Utilizando live server usando como raiz  el index.html dentro de la carpeta front

### No llegue a hacer el front de los endpoint de delete y update pero estan creados!

