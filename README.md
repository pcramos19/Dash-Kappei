<h2>Index.html</h2>
Crear la etiqueta canvas con ID.
Crear el **game.js**
Crear **index.js** que solo llevara el window.onload y dentro se declara game.
<small>Ir anadiendo scripts al html.</small>
Resetear estilos en html. (margin, padding 0)
<br>

<h2>Game.js</h2>
Declarar objeto game con propiedades canvas, ctx, width y height iniciadas en undefined.
Añadir metodo init que se encarga de configurar el canvas (coger el ID del canvas y asignarle el getContext("2d") )
<br>
Crear método setDimensions para asignar los valores del width y el height del canvas.
Añadir el fps en el setInterval y en el constructor.

<br>
Crear metodo drawAll donde iremos pintando todo.

<h2>Background.js</h2>
Crear backgrond.js
Añadir script a index.html
Se crea el background como clase. Se pasan el ctx, width y height del canvas y el src de la imagen en el constructor.
Iniciar new Image como propiedad.
Crear Metodo draw()

<br>
Se invoca el metodo draw() del background en game.js.

<h2>Game.js</h2>
Crear metodo start en game.js donde se invoca el método drawAll (crear).

<h2>Background.js</h2>
Crear método move() para desplazar el fondo.
Añadir propiedades posX, posY de la imagen en el constructor para poder utilizarlas en el move.

<h2>Game.js</h2>
No funcionara el move porque se instancia siempre un new Background!

Se tiene que crear un metodo reset donde se instanciaran todas las clases del juego al inicio.
Se llama a reset en start() antes del intervalo.
Se tiene que limpiar la pantalla con un clearRect, en un método nuevo **clearAll**
Se llama en el intervalo de game.start() antes de dibujar.

<h2>Background.</h2>
En draw() se dibuja una segunda imagen para crear un carrusel infinito.
En Move() se incorporan las condiciones para conseguir el efecto del bucle.

<h2>Player</h2>
Se crea el archivo Player.js
Se añade el script en el index.html
Se crea como clase, se le pasan el ctx, width, height del canvas.
Se incorpora la imagen como propiedad del player.
Se añaden las posX y las posY como propiedades.
Se crea el metodo draw()

<h2> Game.js</h2>
Se instancia el player en reset(). y se le pasan los parametros al constructor.
En drawAll se invoca el metodo draw del player

<h2>Player.js</h2>

Dibujar la imagen sin atender a los sprites.
Se añaden en el constructor las propiedades que se necesitaran para hacer el sprite: frames y framesIndex.
Se modifica el draw de la imagen con la formula de los sprites.
Ajustar posición posición del player.

<br>
Para animar el player:
Crear un metodo animate() que ira aumentando el frameIndex de la imagen.
Incorporar un condicional para que no se salga de la pantalla. 
if(this.img.frameIndex > this.img.frames) se resetea el frameIndex a 0.

<h2>Game.</h2>
Incorporar propiedad framesCounter en el constructor que ira aumentando en cada vuelta del bucle. Se incorpora en un condicional para que no aumente al infinito.
Se le pasa al player este framesCounter en el metodo de draw!

<h2>Player.</h2>

En el metodo de draw y animate pasamos el framesCounter como parametro.
Metodo move() en el player. Para eso necesitamos configurar los listeners.

Crear metodo setListeners.
addEventListener keydown con un switch dentro. con evento e.keyCode.
Necesitamos las teclas. vamos al Game.

<h2>Game.js</h2>
Propiedades key: con TOP y SPACE
Game se las pasa al player por el constructor cuando se instancia.

<h2>Player.js</h2>

Metodo setListener: Crear los distintos casos para las teclas.
Llamar a setListeners en el constructor para tenerlo preparado en cuanto tengamos al player instanciado.
Se incorpora la logica de move del player. Se mueve la posY del player para simular la caida.

El player sube, pero tiene que bajar (fue trambolico). Asi que creamos el metodo de move() del player. Necesitaremos las velocidades del player. Añadimos velY en el constructor.

<br>
En move() añadir this.posY += this.velY

<h2>Game.js</h2>
Se llama al this.player.move() en moveAll()

<h2>Player.js</h2>
Necesitamos el suelo para el player.
Añadir posY0 en constructor para tener el suelo de referencia.
Modificar el condicional de move() . Resetear la velocidad cuando esta en el suelo (posY0).

<br>
Incorporar gravedad.
Cuando no esta en el suelo, su vel tiene que ir aumentando (declarar la gravedad en el metodo move() en 0.4) y si toca el suelo la velocidad se resetea.

En el condicional de move() añadimos las condiciones anteriores.

Para dar impulso en el salto tenemos que invertir la vel de la caida en los setListeners. (this.velY -= 9)
poner en el setListeners del player la misma condicion que en move para que no salte demasiado.

<h2>Obstacles.js</h2>
Crear el archivo Obstacles.js
Meter el script en index.html.
Crear obstacles como clase, se le pasan el ctx, width, height  del canvas en el constructor.
Crear metodo draw()
Se dibujan como rectangulos.
Meter propiedad de posX, posY para colocar el rectangulo dentro de la pantalla.
La posY tiene que ser la player.posY0 + player.height - obs.height para que tengan el mismo suelo.

<h2>Game.js</h2>
Crear metodo generateObstacles.
Instanciar Obstacles en generateObstacles. 
Se mete un array de obstacles como propiedad del game, iniciar vacio.
Resetear el array a vacio en game.reset()

Se invoca el metodo en el intervalo.
Se aprovecha el framesCounter para que no se generen todo el rato y se añaden dentro de un array.

En drawAll iteramos el array para dibujarlos
Creamos la función move en **obstacles.js** para hacer que se muevan
En moveAll() iteramos el array para moverlos

<br>
Creamos función clearObstacles() en Game y filtramos todos los obstáculos que salen de la pantalla
En el intervalo llamamos a clearObstracles()
En game creamos la función isCollision() y comprobamos si alguno de los obstáculos devuelve una colisión con el player (obs.some())
Hacemos una función gameOver en Game que detiene el intervalo
En el intervalo llamamos a gameOver si hay colisión.

<h2>Bullets.js</h2>
Creamos un archivo bullets.js y lo incluimos en el HTML
Creamos la clase Bullets con el contexto y la posición y medidas del player
Le damos un radio a las balas y creamos la función de draw()
Dibujamos las balas

<h2>Player.js</h2>
Creamos el array de bullets en el constructor de player y la función shoot() que instancia balas

Llamamos shot() en keydown (setListeners())
En draw() del player iteramos sobre el array de bullets y las dibujamos.

<h2>Bullets.js</h2>
Creamos move() de bullets. 
Las movemos en posX += velX. Necesitaremos posY tb para que tengan gravedad. posY += velY

<h2>Player.js</h2>

En player.move() iteramos sobre el array de bullets y las movemos. (necesitaremos ajustar el punto de salida de las balas con respecto al player)

<h2>Bullets.js</h2>

Para la gravedad de las balas: this.velY += this.gravity.
Para el rebote: posY >= playerYo + height, invertimos la vel.

<h2>Player.js</h2>
  
  Añadimos metodo clearBullets() en player.js. Se hace un filter.
  En game se invoca el this.player.clearBullets.
  
<h2>Scoreboard.js</h2>
  
  Creamos scoreboard.js
  Se incorpora en el index.html
  Se crea como objeto. (solo hay uno)
  Se inicia el ctx como undefined.
  Se crea metodo init() que recibe el ctx y establece el tipo de letra
  En **game.init()** se llama a scoreboard.init() y se le pasa el contexto
  
  
  Se crea el método updateScore() que recibe score como parametro y pinta el texto.
  En **game.js** crear propiedad score inicializada en 0 para que no de Nan y crear funcion drawScore() que llama a scoreboard.update() pasandole el score de game.
  En game.start() ir aumentando el score y llamar a game.drawScore()
