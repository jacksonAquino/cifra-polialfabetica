const baseDictionary = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const keys = baseDictionary.slice().sort((a, b) => 0.5 - Math.random())

console.log(baseDictionary, keys)

const result_encript = document.getElementById('result_encript')

const encryptBtn = document.getElementById('encryptBtn')
const decryptBtn = document.getElementById('decryptBtn')

encryptBtn.addEventListener('click', e => {
  e.preventDefault()
  const text_to_work = document.getElementById('word_to_work').value

  if (!text_to_work) {
    alert('preencha os valores corretamente')
  } else {
    const result = encrypt(text_to_work)
    result_encript.innerText = result
  }
})

decryptBtn.addEventListener('click', e => {
  e.preventDefault()
  const text_to_work = document.getElementById('word_to_work').value

  if (!text_to_work) {
    alert('preencha os valores corretamente')
  } else {
    const result = decrypt(text_to_work)
    result_encript.innerText = result
  }
})

const encrypt = (input) => {
  let encryptedString = "";

  for (let i = 0; i < input.length; i++) {
    const index = baseDictionary.findIndex((o) => o === input[i])
    if (index !== -1) {
      const newKey = keys[index]
      encryptedString += newKey;
    } else {
      encryptedString += input[i];
    }
  }
  return encryptedString;
};

const decrypt = (input) => {
  let decryptedString = "";

  for (let i = 0; i < input.length; i++) {
    const index = keys.findIndex((o) => o === input[i]);
    if (index !== -1) {
      const decryptedKey = baseDictionary[index]
      decryptedString += decryptedKey;
    } else {
      decryptedString += input[i];
    }
  }
  return decryptedString;
};

