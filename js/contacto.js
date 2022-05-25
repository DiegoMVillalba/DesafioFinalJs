const form = document.getElementById('formComment');
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("inputEmail");
const password = document.getElementById("inputPassword");
const comentario = document.getElementById("comentario")
;
const arrayComment = [];
form.addEventListener("submit",(e) =>{
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("inputEmail").value;
    const password = document.getElementById("inputPassword").value;
    const comentario = document.getElementById("comentario").value;

    if(nombre !== "" || apellido !== "" && correo !== "" && password !== "" && comentario !== "" ){
    const nuevoComment = new Comentario(nombre, apellido, correo, comentario);
    arrayComment.push(nuevoComment);
    console.log(arrayComment);

    localStorage.setItem("arrayComment",JSON.stringify(arrayComment));
    swal({
        title:"Hola!!",
        text:"Gracias por enviarnos tus comentarios",
        icon:"success",
        button:"OK"
    });
}else{
    swal({
        title:"Hola!!",
        text:"por favor ingresa todos los datos",
        icon:"error",
        button:"OK"
    });
}
});