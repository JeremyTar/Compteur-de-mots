function createDiv(number) {
    if(document.getElementById("nombre")) {
        let old = document.getElementById("nombre")
        NumberOfWorld.removeChild(old)
    }
    const newParagraphe = document.createElement("p")
    newParagraphe.setAttribute('id', "nombre")
    newParagraphe.append(`Il y a ${number} mots`)
    return newParagraphe
    
}

function afficheListWord() {
if(document.getElementById("ul")) {
    const ul = document.getElementById('ul')
    ul.parentNode.removeChild(ul)
}
const ul = document.createElement("ul")
ul.setAttribute("id", "ul")
for(const i in content) {
    let li = document.createElement("li")
    li.append(`${content[i].word} : ${content[i].nbr} fois`)
    console.log(content[i])
    ul.appendChild(li)
    listWord.appendChild(ul)
}
}

function compte() {
    const text = document.getElementById("Compteur").value
    let nombre = 0
    const array = text.split(" ")
    for(const i in array) {
        console.log(array[i])
        array.splice("\n", 1)
    }
    howManyDistinctWord(array)
    console.log(array)
    console.log(content)
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
    NumberOfWorld.appendChild(p)
    afficheListWord()
}

function howManyDistinctWord(Array) {
    if(content.length) {
        content.length = 0
    }
    console.log("creation")
    let word = {
        word: Array[0],
        nbr: 1
    }
    content.push(word)
    console.log(content)
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

let content = []
const button = document.getElementById('compte')
button.addEventListener('click', compte)
const NumberOfWorld = document.getElementById("NbrMots")
const listWord = document.getElementById("ListeWords")

