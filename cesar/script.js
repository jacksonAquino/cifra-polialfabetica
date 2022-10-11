
const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
]


function replaceLetter(letter, displacement) {
    const alphabetLength = alphabet.length
    const letterCode = alphabet.findIndex((l) => l === letter)

    const letterCodeToReplace = (letterCode + displacement) % alphabetLength

    if (letterCodeToReplace < 0) {
        return alphabet[alphabetLength + letterCodeToReplace]
    }

    return alphabet[letterCodeToReplace]
}

function cryptography(words, displacement) {
    let wordsEncrypted = ""

    for (letter of words.toUpperCase()) {
        const letterReplace = replaceLetter(letter, displacement)
        wordsEncrypted += letterReplace
    }

    return wordsEncrypted
}

const encrypt = (words) => cryptography(words, 7)

const decrypt = (words) => cryptography(words, -7)

const resultEncript = document.getElementById("result_encript")

const encryptBtn = document.getElementById("encryptBtn")
const decryptBtn = document.getElementById("decryptBtn")



encryptBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const text_to_work = document.getElementById("word_to_work").value

    if (!text_to_work) {
        alert("preencha os valores corretamente")
    } else {
        const result = encrypt(text_to_work)
        resultEncript.innerText = result
    }
})

decryptBtn.addEventListener("click", (e) => {
    e.preventDefault()
    const text_to_work = document.getElementById("word_to_work").value

    if (!text_to_work) {
        alert("preencha os valores corretamente")
    } else {
        const result = decrypt(text_to_work)
        resultEncript.innerText = result
    }
})
