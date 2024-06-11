# BuscaJuzgado

Esta App parte de un listado .csv con los datos de todos los juzgados de España.

El listado se obtiene de la web del Poder Judicial.

Está dividida en tres partes:

1. "Capturador", escrito en Java puro, es la parte que crea el csv desde la web.
2. "Front", escrito en Angular, para elegir los parámetros de búsqueda.
3. "Back", escrito en JavaEE con Spring, utiliza una Base de Datos PostgreSQL para generar la búsqueda.

>Esta app es simplemente para experimentar con Spring, Hibernate y PostgreSQL
No tiene ningún uso real XD

<img src="https://raw.githubusercontent.com/giacca90/BuscaJuzgado/main/demo.gif" alt="Demostración">
