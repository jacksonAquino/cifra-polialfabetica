const result_encript = document.getElementById("result_encript");
const decryptBtn = document.getElementById("decryptBtn");


decryptBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const key_word = document.getElementById("key_to_work").value;
  const text_to_work = document.getElementById("word_to_work").value;

  if (!key_word || !text_to_work) {
    alert("preencha os valores corretamente");
  }
  encrypt(text_to_work, key_word);
});

function encrypt(text, key) {
  let keyArray = filterKey(key);

    for (let i = 0; i < keyArray.length; i++)
      keyArray[i] = (26 - keyArray[i]) % 26;

  result_encript.innerText = crypt(text, keyArray);
};

function crypt(input, key) {
  let output = "";
  let j = 0;
  for (const ch of input) {
    const cc = ch.codePointAt(0);
    if (isUppercase(cc)) {
      output += String.fromCodePoint(
        ((cc - 65 + key[j % key.length]) % 26) + 65
      );
      j++;
    } else if (isLowercase(cc)) {
      output += String.fromCodePoint(
        ((cc - 97 + key[j % key.length]) % 26) + 97
      );
      j++;
    } else {
      output += ch;
    }
  }
  return output;
}

function filterKey(key) {
  let result = [];
  for (const ch of key) {
    const cc = ch.codePointAt(0);
    if (isLetter(cc)) result.push((cc - 65) % 32);
  }

  return result;
}

function isLetter(c) {
  return isUppercase(c) || isLowercase(c);
}

function isUppercase(c) {
  return 65 <= c && c <= 90;
}

function isLowercase(c) {
  return 97 <= c && c <= 122;
}

console.log("console");
