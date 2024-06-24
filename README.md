### Hub de entretenimiento - WAVE (con Angular)

#### Diana Lizeth Alcala Sandoval

En mi proyecto, creé un hub de entretenimiento al cual llamé "WAVE" que cuenta con un catálogo de películas y series (actualmente con información hardcodeada), que permite a los usuarios agregar películas a sus favoritos y acceder a detalles completos de cada película.

---

##### Requerimientos técnicos

Para la migración del proyecto, utilicé Angular en su versión 12, también hice uso de Bootstrap y CSS puro para los estilos del proyecto.

---

##### Uso del proyecto

Para poder hacer uso del proyecto, es necesario tener instalado NodeJs y Angular (en este caso, la versión 12).
Primero se debe de instalar NodeJs, para instalarlo se puede hacer desde la terminal o bien con un instalador. Como mencioné anteriormente, el proyecto lo desarrollé con Angular 12 por lo tanto debemos instalar NodeJs en su versión 14 o una versión menor a la 16, en mi caso instalé la versión 14.17.6, a continuación adjunto el enlace directo para descargarlo: [NodeJs 14.17.6](https://nodejs.org/en/blog/release/v14.17.6).

NodeJs también nos instalará NPM, como manejador de paquetes, en este caso la versión requerida es la 6.

Después de tener instalado lo anterior, podemos instalar Angular, para esto hay que abrir una terminal y ejecutamos el siguiente comando:
`npm install -g @angular/cli@12`

Luego de esto, y después de haber clonado mediante la terminal el proyecto en nuestro local con el comando:
`git clone https://github.com/aslizzie/wave-angular.git`

De nuevo haciendo uso de la terminal, nos colocamos en la carpeta del proyecto y ejecutamos el siguiente comando:
`npm install`

Este comando descargará las dependencias o librerias necesarias para el proyecto, despues que la descarga este completa ejecutamos el siguiente comando para correr el proyecto:
`ng serve`

---

##### Proyecto

A continuación, se muestran capturas de pantalla del proyecto y una breve explicación de lo que se presenta en cada captura.

###### Vista - Movies

![Markdown logo](/src/documentation/movies.png)
En esta captura se muestra la vista con el listado de películas.

###### Vista - Series

![Markdown logo](/src/documentation/series.png)
En esta captura se muestra la vista con el listado de series.

---

##### Proceso para realizar el proyecto

Para llevar a cabo la migración del proyecto estuve leyendo documentación y viendo videos sobre Angular porque ya que no tenía ningún conocimiento sobre como usarlo, mientras que a la par realizaba la migración.

---

##### Sprint review

| ¿Qué salió bien?                                                                                                                                                                     | ¿Qué puedo hacer diferente?                                                                                           | ¿Qué no salió bien?                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Lo que considero que salió bien fue que pude hacer que la información sobre las películas o las series se manejara en un JSON y no estuviera hardcodeada como en el sprint anterior. | Lo que considero que podría hacer diferente es seguir leyendo documentación para continuar aprendiendo sobre Angular. | En general, creo que en este sprint no todo salió bien ya que al nunca haber manejado un framework de este tipo se me dificultó muchísimo el hacer la migración lo que llevo a que no pude desarrollar las funcionalidades esperadas para este sprint. |
