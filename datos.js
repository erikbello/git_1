const nombre=(nombre)=>'Hola' + " " + nombre;
console.log(nombre("Erik"));

//----------------------------------------------------------------
/* 1- gin init =/* 1- gin init
Crea un repositorio Git en la carpeta actual.
Es como decir: “desde ahora quiero que Git vigile estos archivos
--------------------------------------------------------------------
---------------------------------------------------------------
2-GIT  status ejecuta dos veces 
Muestra el estado de los archivos.
Te dice:
qué cambió
qué está listo para guardar
qué no está siendo seguido
Se usa todo el tiempo. Es el “¿cómo vamos?” de Git.
-------------------------------------------------------------
--------------------------------------------------------------------------
3- git add . con punto pasa todos los archivos
Pasa todos los cambios al área de preparación (staging area).
Significa: “estos cambios quiero guardarlos en el próximo commit
--------------------------------------------------------------------------

------------------------------------------------------------------------
4 - git Quita archivos del área de preparación.
💡 Sirve si agregaste algo por error antes de hacer commit.
---------------------------------------------------------------------

----------------------------------------------------------------------------------------
5- git commit -m " aca se escribe lo q se hizo ejemplo  aca es una funcion q retorna mim nombre con un hola
Guarda oficialmente los cambios en el historial.
💡 Es como sacar una foto del proyecto en ese momento. 

-------------------------------------------------------------------------------------

--------------------------------------------------------------------------------------
6- git log
Muestra el historial de commits.
Sirve para ver quién hizo qué y cuándo.
 git log --oneline (historial resumido, mucho más cómodo)
--------------------------------------------------------------------------------------


                    Lo que sigue después (lo normal en el mundo real)

Ahora empieza la parte interesante: trabajar con versiones y subir código.

7️- git diff

👉 Muestra exactamente qué cambió en el código.
💡 Ideal antes de hacer commit para revisar.

8 -git branch

👉 Lista las ramas del proyecto.
💡 Una rama es una línea de trabajo paralela.

9 -git checkout -b nombre-rama

👉 Crea y cambia a una nueva rama.
💡 Se usa para desarrollar sin romper lo principal.











2-GIT  status ejecuta dos veces 
3- git add . con punto pasa todos los archivos
4 - git reset
5- git commit-m " aca se escribe lo q se hizo ejemplo  aac es una funcion q retorna 
mi nombre con saludo"
6- git log









*/