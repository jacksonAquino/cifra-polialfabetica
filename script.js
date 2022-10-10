const alfa = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const form = document.getElementById('encript_form')
const result_encript = document.getElementById('result_encript')

form.addEventListener('submit', e=>{
  e.preventDefault()
  const key_word = document.getElementById('key_to_work').value
  const text_to_work = document.getElementById('word_to_work').value
  if(!key_word || !text_to_work){
    alert('preencha os valores corretamente')
  } else {
    const key_index = getIndex(key_word)
    const result = encript(text_to_work, key_index)
    result_encript.innerText = result
  }
})

function getIndex(key_word){
  return key_word.split('').map(c=>(
    alfa.indexOf(c) + 1
  ))
}

function encript(text_to_work, index){
  let current_index = 0
  let result = text_to_work.split('').map(c=>{
    console.log(current_index)
    if(c == ' '){
      return c
    }
    
    const worked_char = get_position_in_alpha(c, index[current_index])
    current_index += 1
    if(current_index == index.length){
      console.log('setou')
      current_index = 0
    }
    return worked_char
  })

  return result.join('')
}

function get_position_in_alpha(char, jumps){
  const char_position_with_jumps = alfa.indexOf(char) + jumps
  if( char_position_with_jumps > alfa.length - 1){
    const rest = char_position_with_jumps - (alfa.length - 1)
    return alfa[rest - 1]
  } else {
    return alfa[char_position_with_jumps]
  }
}