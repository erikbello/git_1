const nombre=(nombre)=>'Hola' + " " + nombre;
console.log(nombre("Erik"));

//----------------------------------------------------------------
/* TU FLUJO REAL DE GIT — PASO A PASO (UNA HOJA)
1️⃣ Probar el programa
node datos.js


Verifica que el código funciona antes de guardarlo en la historia.

2️⃣ Iniciar control de versiones
git init


Activa Git en la carpeta y crea el historial del proyecto.

3️⃣ Revisar el estado del proyecto
git status


Muestra:

archivos nuevos

archivos modificados

qué está listo para commit

4️⃣ Preparar archivos para guardar versión
git add .


Envía todos los cambios al área de preparación (staging).
Significa: “estos cambios se guardarán en el próximo commit”.

(Si te equivocas → git reset quita del staging.)

5️⃣ Crear un commit (guardar versión)
git commit -m "mensaje descriptivo"


Guarda los cambios en el historial del proyecto.
Un commit = una versión registrada.

Antes configuraste identidad:

git config --global user.email "tu_correo"
git config --global user.name "tu_nombre"


Eso permite firmar los commits.

6️⃣ Ver historial de versiones
git log


Muestra todos los commits con autor, fecha y mensaje.

7️⃣ Renombrar la rama principal
git branch -m main


Cambia el nombre de la rama activa a main.

8️⃣ Conectar el proyecto local con GitHub
git remote add origin URL_DEL_REPOSITORIO


Enlaza tu carpeta local con el repositorio remoto.

9️⃣ Subir el proyecto a GitHub
git push -u origin main


Envía tus commits al repositorio remoto y deja configurado el seguimiento.

Subidas futuras:

git push

🔁 CICLO QUE REPETIRÁS SIEMPRE
editar archivos
git status
git add .
git commit -m "qué cambió"
git push

🧠 Resultado de todo el proceso

✔ tu proyecto tiene historial de versiones
✔ tus cambios están guardados localmente
✔ tu código está publicado en GitHub
✔ tu rama principal es main








*/



() => {
  console.log("Hola Erik");
}

