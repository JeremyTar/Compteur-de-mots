function createDiv(number) {
    let old = document.getElementById("nombre")
    div.removeChild(old)
    const newParagraphe = document.createElement("p")
    newParagraphe.append(`Il y a ${number} mots`)
    return newParagraphe
    
}

function compte() {
    const text = document.getElementById("Compteur").value
    let nombre = 0
    const array = text.split(" ")
    howMany(array)
    console.log(array)
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

function howMany(Array) {
    let content = []
    if(!content.length) {
        console.log("creation")
        let word = {
            word: Array[0],
            nbr: 1
        }
        content.push(word)
        console.log(content)
    }
    for(let i = 1; i < Array.length; i++) {
        tchekWords(Array[i], content)
    }
    console.log(content)
}



function tchekWords(currentWord, content) {
    for(let i = 0; i < content.length; i++) {
        if(currentWord == content[i].word) {
            content[i].nbr += 1
            console.log("+1")
            return
        }
        if(i == content.length - 1) {
            console.log("je crée")
            let newWord = {
                word: currentWord,
                nbr: 1
            }
            content.push(newWord)
            return
        }
    }
}

const button = document.getElementById('compte')
button.addEventListener('click', compte)
const div = document.getElementById("NbrMots")