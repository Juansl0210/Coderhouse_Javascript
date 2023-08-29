const lista = document.querySelector("#listado");
const btn = document.getElementById("btn");
const tabla= document.querySelector('#lista-usuarios tbody');

const pedirProductos = async () => {
    const resp = await fetch("./reglas.json");
    const data = await resp.json();

    data.forEach((producto) => {
        const li = document.createElement("li");
        li.innerHTML = `
                <h2 text-align: center>${producto.Num}</h2>
                <ptext-align: center>${producto.instruccion}</ptext-align:>
            `;
        lista.append(li);
    });
};
btn.addEventListener("click", pedirProductos);


function cargarUsuarios(){
    fetch('usuarios.json')
        .then(respuesta=> respuesta.json())
        .then(usuarios => {
            usuarios.forEach(usuario =>{
                const row =document.createElement('tr');
                row.innerHTML += `
                    <td>${usuario.id}</td>
                    <td>${usuario.name}</td>
                    <td>${usuario.Tasa}</td>
                    <td>${usuario.Costo}</td>
                `;
                tabla.appendChild(row);
            })
        })
}

cargarUsuarios()