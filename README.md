# REPASO_HTML_VJ_DWA_24_25 -- 19/09/24

El archivo index.html debe llamarse siempre así, para que el servidor web (cuando la web sea publica en internet) sepa que archivo debe cargar por defecto.

Los elementos de HTML se pueden conformar de una etiqueta o de dos.

Dependiendo del tipo de elemento HTML al que nos refiramos estos contendrán otros elementos HTML u otro contenido.

Las etiquetas <meta> de HTML siempre se encontrarán en el <head></head> del documento y valdrán para configurar ciertos aspectos técnicos de la web así como la carga de otros archivos externos. Hay dos que son obligatorios en la estructura de cualquier archivo HTML:
    
    -La etiqueta <meta> de codificación. Para cargar el set de caracteres que necesitamos en la web.
    
    -La etiqueta <meta> para indicar al navegador que la web es responsive. name="viewport" content="width=device-width, initial-scale=1.0"

Para abrir la web en el navegador:
    - Botón "Go Live" en la interfaz de visual abajo a la derecha.
    - Botón derecho sobre cualquier archivo de la web y "reveal in file explorer"

En el primer nanosegundo en el que abrimos la web en el navegador vas a abrir tambén las DevTools con F12 o con "inspeccionar".

Los elementos de HTML que va a renderizar el navegador SIEMPRE se encontrarán dentro del elemento <body></body>, algunos serán visibles para el usuario y otros no.

EJ: AÑADIR ESTOS ELEMENTOS AL HTML:

    - Un subtitulo.
    - Un sub-subtitulo

    - Un parrafo dentro de este parrafo que una palabra o varias sean un enlace clicable a la wikipedia.
    - Otro parrafo y dentro una palabra en negrita y otra en cursiva
    - Otro parrafo y dentro un salto de línea
        para los textos copiar de wikipedia o lorem ipsum

    - Una lista desordenada de algo.
    - Una lista ordenada de número en inglés.

    - Descargar una imagen (jpg o png o webp) y convertirla en un enlace a un artículo de wikipedia.

    - Agrupar 2 de los 3 parrafos dentro de otro elemento de HTML que funcione como un contenedor.
# REPASO_HTML_VJ_DWA_24_25 -- 26/09/24
## CSS (Cascading Style Sheet)
CSS no es un lenguaje de programación, es un lenguaje de estilos. Estos estilos agregan a nuestro HTML unas caracteristicas visuales y estructurales mas interesantes para el usuario y mas complejas en cuanto a funcionamiento.
Es indispensable el uso de CSS para crear una interfaz responsive.

1. In line CSS. NO ES LA FORMA CORRECTA.
Añade el estilo de CSS o propiedades directamente dentro de los elemntos de HTML usando el atributo style (en la primera etiqueta del elemento HTML).
    Ej: <h1 style="Color: tomato; font-size:4rem;> Hello world </h1>

2. CSS interno. NO ES LA FORMA CORRECTA.
Podemos añadir código CSS dentro del HTML en el elemento <head></head> usando el elemento <style></style>
    ej:  
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Repaso HTML | DWA</title>
        <style>
            h1 {
                color: aqua;
                font-size; 3em;
            }
        </style>
    </head>

3. CSS externo en un archivo propio de CSS. ESTA SÍ ES ELA FORMA CORRECTA!.
El archivo CSS se enlazará al HTML usando la etiqueda <link> dentro del elemento <head></head>

## SELECTORES BASICOS CSS

1. Selectores de elemento (tag): seleccionan todos los elementos del mismo tipo por su nombre de etiqueta.

2. Selector por clase (class): usa un punto (.) seguido del nombre de la clase.
El o los elementos de HTML deben contener el nombre de la clase dentro del atributo class. dentro del mismo elemento puede haber mas de una clase.
    Ej:
     html --> <h2 class="red-text big-text">Listas</h2>
     CSS --> .red-text { color: red;}
     CSS --> .big-text { font-size: 2em;}

3. Selector por ID. usa el simbolo # seguido del nombre del ID. Los IDs son únicos en el HTML por loque añadir propiedades de CSS se hace menos versatil.
    ej:
     html --> <h2 id="sptitle">Listas</h2>
     CSS --> #sptitle { color: red;}

4. Selector universal (*) seleccionaremos TODOS los elementos HTML para sobrescribir o añadir ciertas propiedades de CSS

### JERARQUIA SELECTORES CSS
ID >> CLASS >> TAG >> *