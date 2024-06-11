// Crear un elemento h1
let text = document.createElement("h1");

// Seleccionar el contenedor para los usuarios
let containerUsers = document.getElementsByClassName("names_users")[0]; // Acceder al primer (y único) elemento de la colección

// XMLHttpRequest PRIMERA FORMA
(() => {
    const xhr = new XMLHttpRequest(),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status === 200) {
            text.innerText = "Respuesta Satisfactoriamente Aceptada";
            text.style.color = "green";
        } else {
            text.innerHTML = "La respuesta desafortunadamente es rechazada";
            text.style.color = "red";
        }
        
        document.body.append(text);

        // Convertir a JSON
        let json = JSON.parse(xhr.responseText);

        // Iterar sobre los datos y crear elementos de lista
        json.forEach((user) => {
            let li = document.createElement("li");
            li.textContent = user.name;
            $fragment.appendChild(li); // Agregar cada elemento de lista al fragmento
        });

        containerUsers.appendChild($fragment); // Agregar el fragmento al contenedor de usuarios
    });

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    // TAMBIEN SE PUEDE HACER ESTA MODALIDAD EN ENTORNO LOCAL
    xhr.send();
})();
