const dictionary = {
  // LOWER CASE
  a: "q",
  b: "w",
  c: "e",
  d: "r",
  e: "t",
  f: "y",
  g: "u",
  h: "i",
  i: "o",
  j: "p",
  k: "a",
  l: "s",
  m: "d",
  n: "f",
  o: "g",
  p: "h",
  q: "j",
  r: "k",
  s: "l",
  t: "z",
  u: "x",
  v: "c",
  w: "v",
  x: "b",
  y: "n",
  z: "m",

  //UPPER CASE
  A: "Q",
  B: "W",
  C: "E",
  D: "R",
  E: "T",
  F: "Y",
  G: "U",
  H: "I",
  I: "O",
  J: "P",
  K: "A",
  L: "S",
  M: "D",
  N: "F",
  O: "G",
  P: "H",
  Q: "J",
  R: "K",
  S: "L",
  T: "Z",
  U: "X",
  V: "C",
  W: "V",
  X: "B",
  Y: "N",
  Z: "M",

  //NUMBERS
  0: "7",
  1: "9",
  2: "3",
  3: "1",
  4: "2",
  5: "0",
  6: "4",
  7: "5",
  8: "6",
  9: "8",
};

const result_encript = document.getElementById('result_encript')

const encryptBtn = document.getElementById('encryptBtn')
const decryptBtn = document.getElementById('decryptBtn')


encryptBtn.addEventListener('click', e => {
  e.preventDefault()
  const text_to_work = document.getElementById('word_to_work').value

  if(!text_to_work){
    alert('preencha os valores corretamente')
  } else {
      const result = encrypt(text_to_work)
      result_encript.innerText = result
  }
})

decryptBtn.addEventListener('click', e => {
  e.preventDefault()
  const text_to_work = document.getElementById('word_to_work').value

  if(!text_to_work){
    alert('preencha os valores corretamente')
  } else {
      const result = decrypt(text_to_work)
      result_encript.innerText = result
  }
})

const encrypt = (input) => {
  const dictKeys = Object.keys(dictionary);
  let encryptedString = "";
  for (let i = 0; i < input.length; i++) {
    if (dictKeys.includes(input[i])) {
      encryptedString += dictionary[input[i]];
    } else {
      encryptedString += input[i];
    }
  }
  return encryptedString;
};

const decrypt = (input) => {
  const dictValues = Object.values(dictionary);
  const dictEntries = Object.entries(dictionary);
  let decryptedString = "";

  for (let i = 0; i < input.length; i++) {
    if (dictValues.includes(input[i])) {
      const key = dictEntries.find((entry) => entry[1] === input[i]);
      decryptedString += key[0];
    } else {
      decryptedString += input[i];
    }
  }
  return decryptedString;
};

