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

EL MODELO DE CAJA de HTML/CSS lo que nos indica es que todos los elementos HTML son cajas con 4 partes:

 - Tamaño de caja
 - Padding (desplaza al contenido de la caja)
 - El borde de la caja
 - El margin (desplaza los elementos adyacentes de la caja)

 COLOR Y FONDO
 - color
 - background-color
 - background-image:
 - opacity

 TIPOGRAFÍA
 - font-size
 - font-family
 - font-weight
 - line-height
 - font style
 - text-align

 DIMENSIONES
 - width y height
 - max-width y max-height
 - min-width y min-height

 ESPACIADO
 - padding
 - margin

 BORDE Y SOMBRAS
 - border
 - box-shadow
 - border-radius


VW y VH

-VW -> Viewport width es una medida relativa al tamaño del ancho de la pantalla del usuario. funciona como un porcentaje pero directamente relativo al viewport del usuario

-VH -> viewport height es una medida relativa al tamaño del alto de la pantalla del usuario- funciona como un porcentaje pero directamente relativo al viewport del usuario

La diferencia de estas medidas con el % es que los porcentajes hacen referencia al tamaño del contenedor o elemento padre


EM y REM 

Son medidads relativas al tamaño de fuente (font-size)

em esl el relativo al tamaño de font-size del contenedor o elemento padre

rem es relativo al tamaño de font-size del elemento raiz (root)

# REPASO_HTML_VJ_DWA_24_25 -- 03/10/24
## CREAR UN LAYOUT RESPONSIVE

Para crear un layout responsive y que tenga sentido en nuestra web debemos usar contenedores para organizar el contenido de la web.

Estos contenedores serán etiquetas semánticas para seguir las normas de HTML5 y los navegadores modernos.

## FLEXBOX

FLEX BOX GUIDE -> https://css-tricks.com/snippets/css/a-guide-to-flexbox/

## MEDIA QUERIES

Para realizar ajustes sobre un layout adaptativo (que habremos maquetado usando propiedades de Flexbox o de Grid) usaremos las media-queries.

Se trata de una regla especiual de CSS que me permite detectar el tamaño del ancho de la pantalla del usuario y sobreescribir ciertos selectores y propiedades que me interesen para adaptar mi interfaz o layout.

Estos media-queries siempre se encontraran al final del archivo de CSS debajo de mi codigo de CSS base.

https://css-tricks.com/the-new-css-media-query-range-syntax/
# REPASO_HTML_VJ_DWA_24_25 -- 10/10/24
## GRID CSS LAYOUT

Grid al igual que flexbox no es mas que un conjunto de propiedades para desarrollar interfaces adaptativas responsive.

La estructura que debemos tener en nuestro HTML  para usar las propiedades de grid, es la misma que en Flexbox, es decir, un contenedor (que será nuestro contenedor grid) y una serie de elementos hijos.

En nuestra web podremos maquetar algunas partes con las propiedades de flexbox y otras partes con Grid.

## TRANSICIONES

La propiedad transition me permite crear una transicion animada entre 2 estados de algun elemento.

## TRANSFORM

La propiedad transform es una propiedad especial que toma como valores funciones de XSS que me permiten modificar la forma, el tamaño, la posicion, la rotacion... de un elemento de forma fija a traves de un efecto :hover

## ANIMATION

Las animaciones de CSS permiten crear interpolaciones entre fotogramas clave.

1) definir animacion con @keyframes y darle un nombre con sentido lógico
2) aplicar la animacion al elemento con la propiedad animation
3) 