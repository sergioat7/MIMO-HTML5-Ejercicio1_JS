
var conductor = "Andrés";
var capitan = "Emilio";

document.getElementById("nombre_conductor").innerHTML = "El nombre del conductor es "+conductor;
console.log("El nombre del conductor es "+conductor);
document.getElementById("nombre_capitan").innerHTML = "El nombre del capitán es "+capitan;
console.log("El nombre del capitán es "+capitan);

var nombreLargo = textoMasLargo(conductor, capitan);
document.getElementById("nombre_largo").innerHTML = nombreLargo;
console.log(nombreLargo);

var conductorMayusculas = nombreMayusculasSeparado(conductor);
document.getElementById("nombre_conductor_mayusculas").innerHTML = conductorMayusculas;
console.log(conductorMayusculas);

var capitanReves = nombreMayusculas(capitan);
document.getElementById("nombre_capitan_reves").innerHTML = capitanReves;
console.log(capitanReves);

var nombreAlfabetico = ordenarAlfabetico(conductor, capitan);
document.getElementById("mombre_orden_alfabetico").innerHTML = nombreAlfabetico;
console.log(nombreAlfabetico);

var loremIpsum1 = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.";
document.getElementById("texto1").innerHTML = loremIpsum1;
console.log(loremIpsum1);
document.getElementById("numero_palabras_texto1").innerHTML = "Numero de palabras: " + loremIpsum1.split(" ").length;
console.log("Numero de palabras: " + loremIpsum1.split(" ").length);
document.getElementById("numero_veces_caracter1").innerHTML = numeroVeces(" et ", loremIpsum1);
console.log(numeroVeces(" et ", loremIpsum1));

var loremIpsum2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";
document.getElementById("texto2").innerHTML = loremIpsum2;
console.log(loremIpsum2);
document.getElementById("numero_palabras_texto2").innerHTML = "Numero de palabras: " + loremIpsum2.split(" ").length;
console.log("Numero de palabras: " + loremIpsum2.split(" ").length);
document.getElementById("numero_veces_caracter2").innerHTML = numeroVeces( "et ", loremIpsum2);
console.log(numeroVeces(" et ", loremIpsum2));

//MARK: Functions
function textoMasLargo(conductor, capitan) {
    if (conductor.length > capitan.length) {
        return "El nombre del conductor es más largo, tiene " + conductor.length + " caracteres";
    } else if (capitan.length > conductor.length) {
        return "El nombre del capitán es más largo, tiene " + capitan.length + " caracteres";
    } else {
        return "El conductor y el capitán tienen " + conductor.length + " caracteres en su nombre";
    }
}
function nombreMayusculasSeparado(nombre) {
    var nombreMayusculas = "";
    for (var i=0; i<nombre.length; i++) {
        nombreMayusculas += nombre.substr(i,1).toUpperCase() + " "
    }
    return nombreMayusculas;
}
function nombreMayusculas(nombre) {
    var nombreReves = "";
    for (var i=nombre.length; i>0; i--) {
        nombreReves += nombre.substring(i-1,i)
    }
    return nombreReves;
}
function ordenarAlfabetico(conductor, capitan) {
    if (conductor < capitan) {
        return "El nombre del conductor va primero";
    } else if (capitan < conductor) {
        return "El nombre del capitán va primero";
    } else {
        return "¡Se llaman igual!";
    }
}
function numeroVeces(word, text) {
    var regex = new RegExp(word, 'g');
    var match = text.match(regex)
    if (match!=null) {
        return word+ ": " + match.length + " veces"
    } else {
        return  word + ": 0 veces"
    }
}