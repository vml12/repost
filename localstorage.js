function guardar() {

    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let documento = document.getElementById("doc").value;

    let dataUser = { 'name' : nombre, 'lastname' : apellido}
    localStorage.setItem(documento, JSON.stringify(dataUser));
    sessionStorage.setItem("documento", documento);
}

function Almacenar() {
    let nota = document.getElementById("note").value;
    let texto = document.getElementById("text").value;

console.log(nota);

    let infoUser = { 'text' : texto}
    localStorage.setItem(nota, JSON.stringify(infoUser));
    sessionStorage.setItem("nota", nota);
}


