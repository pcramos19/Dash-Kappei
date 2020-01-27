<h2>Index.html</h2>Introduction
Let’s start with something fun for your first project - a game!

It’s important to make your game exciting and juicy! For more information about making your game juicy, see the lesson about it on the platform.

You and the Ironhack staff will also vote for your favorites and award three medals: Bronze , Silver , and Gold .

Here are some examples of past projects:

Kitty Clicker
Paper Droid
Manny-Ski
Oprah Game
Changing Keys
Galactic Wars
The Interview
Schedule
Full-time:
Stand ups*
Coding Kata
Project development
Part-time:
Week Nights

Stand ups*
Project development
Saturdays

Stand ups*
Coding Kata
Project development
*Every day, during project weeks, you will start with this activity. Take a minute to update your colleagues with your progress: what did you do so far, do you feel on the track, behind or ahead, what’s your plan for today and do you think you’ll have any blockers.

For both: two days before presentation day
Presentation Practice: About You & Your Project + Demo. Refer to the Presentation Section to see how to create your presentation.

Presentation day
Finally, it’s time for your real presentation. You will present your projects to the staff and other students. Remember to dress at least one degree nicer than normal. See Demo Tips

Updated Technical Requirements
Your app must:

Render a game in the browser.
Have logic for winning and/or losing
and show feedback to the player in either case.
Include separate HTML / CSS / JavaScript.
Use plain JavaScript or jQuery for DOM manipulation
(or HTML canvas for graphics).
Have a repo on GitHub.
Have at least 1 commit per day that you worked on it.
Be deployed online using GitHub Pages so that anybody can play it.
Stick with KISS (Keep It Simple Stupid) and DRY (Don’t Repeat Yourself) principles.
Updated Deliverables
A working game, built by you that runs in the browser.
A deploy of your game in GitHub Pages.
The URL of the GitHub repository for your game.
The URL of the live game on the Internet.
The URL of the slides for your game’s presentation.
You must present your game during Project #1 final presentations (last day of Project #1 time).
Presentations
For each of the 3 projects you make at Ironhack, you will also have to make a presentation about it. Communication (including public speaking) is an important skill to practice for finding a job after Ironhack.

Format
Talking with Slides: 3 minutes
Demo: 2 minutes
Total: 5 minutes
Attire
Dress nicely for this and all final project presentations
(last day of each project’s time).
Dress at least one degree more elegantly than you usually dress for class.
Examples:
If you wear t-shirts every day, wear a button-down shirt.
If you wear jeans every day, wear some slacks.
If you wear sneakers every day, wear nicer shoes.
Slide Applications
All presentations will be done from a staff member’s computer, so your slides need to be online.
PowerPoint files, Keynote files or files of any kind will not be accepted.
Suggested online slide applications:
Slides
Prezi
Google Slides
Presentation Structure
Title Slide (1 slide): your project’s name & your name
About Me (1-2 slides):
Where are you from?
What are some interesting facts about you? (hobbies, travels, etc.)
Project Elevator Pitch (1-2 slides):
What is your project?
How does it work?
Why did you choose it?
Technical Challenge (1-2 slides):
What was the most important technical challenge you faced?
How did you overcome that challenge?
Big Mistake (1-2 slides):
What was the biggest mistake you made during this project?
What did you learn from it?
Demo Slide (1 slide): literally says "DEMO"
with a link to your project so you can open it easily
Closing Slide (1 slide): your project’s name, your name & a “Thank You”
Total: 7-11 slides
Presentation Structure Notes
Don’t include a slide just for the technologies.
Don’t include any code in your slides. Nobody will read it.
Don’t include a slide for GitHub graphs.
Don’t go into detail about how the app works. Your demo is where you want to do that.
If you think that deviating from the structure improves your presentation, feel free to do so. This suggested structure is mostly for people who don’t know what to do.
Demo Tips
Plan what you are going to demo and practice it on the live site. That way you won’t be surprised if something breaks on the live version.
Deploy early so you can squash bugs. There are always bugs on the live site at first.
Add link to your live project to your DEMO slide so you can start it smoothly.
Your app’s colors and sizing might look different on the projector. If you think it might be a problem, ask to test it beforehand.
Project Feedback and Evaluation
Technical Requirements: Did you deliver a project that met all the technical requirements?

Creativity: Did you add a personal spin or creative element into your project submission? Did you deliver something engaging and playable to the end user?

Code Quality: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming?

Deployment: Did you deploy your application to a public URL using GitHub Pages?

Total: Your instructors will give you a total score on your project between:

Score	Expectations
0	Didn’t meet expectations
1	Met expectations, good job!
2	Exceeded expectations, you magnificent creature, you!
You should use the feedback to focus on what needs to be improved for the next project.

Good luck! :heart:
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
