function createDiv(number: number): HTMLElement {
    if (document.getElementById("nombre")) {
        let old: HTMLElement | null = document.getElementById("nombre")
        if (old && NumberOfWorld) {
            NumberOfWorld.removeChild(old)
        }
        else {
            console.log("HTML error")
        }
    }
    const newParagraphe: HTMLElement = document.createElement("p")
    newParagraphe.setAttribute('id', "nombre")
    newParagraphe.append(`Il y a ${number} mots`)
    return newParagraphe
}

function afficheListWord(): void {
    if (document.getElementById("ul")) {
        const ul = document.getElementById('ul')
        if (ul && ul.parentNode) {
            let parentNode = ul.parentNode
            parentNode.removeChild(ul)
        }
    }
    const div: HTMLElement = document.createElement("div")
    div.setAttribute("id", "ul")
    makeStyleUl(div)
    if (listWord) {
        for (const i in content) {
            let li = document.createElement("p")
            makeStyleLi(li)
            li.append(`${content[i].word} : ${content[i].nbr} fois`)
            console.log(content[i])
            div.appendChild(li)
            listWord.appendChild(div)
        }
    }
}

function makeStyleLi(element: HTMLElement) {
    element.style.fontFamily = "LGCofe"
}

function makeStyleUl(element: HTMLElement) {
    element.style.listStyle = "none"
}

function compte() {

    const text = (<HTMLInputElement>document.getElementById("Compteur")).value
    let nombre: number = 0
    const array: string[] = text.split(" ")
    howManyDistinctWord(array)
    console.log(array)
    console.log(content)
    const espace: string[] = text.split("\n")
    for (const i in array) {
        if (array[i] != "") {
            nombre += 1
        }
    }
    for (const i in espace) {
        if (espace[i] == "") {
            nombre += 1
        }
    }
    const p = createDiv(nombre)
    NumberOfWorld.appendChild(p)
    afficheListWord()
}

function howManyDistinctWord(Array: string[]): void {
    if (content.length) {
        content.length = 0
    }
    let word: Object = {
        word: Array[0],
        nbr: 1
    }
    content.push(word)
    console.log(content)
    for (let i = 1; i < Array.length; i++) {
        tchekWords(Array[i], content)
    }
    console.log(content)
}

function tchekWords(currentWord: string, content: any) {
    if (currentWord == "" || currentWord == "..." || currentWord == "." || currentWord == "?" || currentWord == "," || currentWord == ":" || currentWord == "!") {
        return
    }
    for (let i = 0; i < content.length; i++) {
        if (currentWord == content[i].word) {
            content[i].nbr += 1
            console.log("+1")
            return
        }
        if (i == content.length - 1) {
            let newWord = {
                word: currentWord,
                nbr: 1
            }
            content.push(newWord)
            return

        }
    }
}

let content: any[] = []
const button = (<HTMLElement>document.getElementById('compte'))
button.addEventListener('click', compte)

const NumberOfWorld = (<HTMLElement>document.getElementById("NbrMots"))
const listWord = (<HTMLElement>document.getElementById("ListeWords"))

