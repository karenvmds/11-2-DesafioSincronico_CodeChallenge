const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    
    event.preventDefault();

    // const formDatos = new FormData(this);

    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellidos").value;
    var nacimiento = document.getElementById("nacimiento").value;


    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({
            nombre: nombre,
            apellido: apellido,
            fecha: nacimiento,
        }),
        headers: {
            "Content-Type": "application/json"
        },
       
    }).then(response => response.json()).then(datos => console.log(datos))
    })