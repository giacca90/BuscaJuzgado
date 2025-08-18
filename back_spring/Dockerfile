# Etapa 1: Build de la aplicación
FROM maven:3.9.11 AS build

# Crear directorio base
WORKDIR /app

# Copiar el código fuente del proyecto
COPY . .

# Compilar la aplicación
RUN mvn clean package -DskipTests

# Etapa 2: Imagen final con solo el JAR
FROM eclipse-temurin:21-jdk

RUN apt update && apt upgrade -y && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copiar el JAR compilado desde el build
COPY --from=build /app/target/*.jar app.jar

# Puerto que expone la aplicación
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
