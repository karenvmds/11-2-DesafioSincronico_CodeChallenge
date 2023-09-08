const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
    
    event.preventDefault();

    const formDatos = new FormData(this);

    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: formDatos,
    }).then(response => response.json())
    .then(resServidor=>{
       console.log(resServidor);

})
})