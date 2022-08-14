const button = document.getElementById('compte')
button.addEventListener('click', compte)
const div = document.getElementById("NbrMots")

function createDiv(number) {
    if(document.getElementById("nombre")) {
        let old = document.getElementById("nombre")
        div.removeChild(old)
    }
    const newParagraphe = document.createElement("p")
    newParagraphe.append(`Il y a ${number} mots`)
    return newParagraphe
    
}

function compte() {
    const text = document.getElementById("Compteur").value
    let nombre = 0
    const array = text.split(" ")
    const espace = text.split("\n")
    for(const i in array){
        if(array[i] != "") {
            nombre += 1
        }
    }
    for(const i in espace) {
        if(espace[i] == "") {
            nombre += 1
        }
    }
    const p = createDiv(nombre)
    div.appendChild(p)












}