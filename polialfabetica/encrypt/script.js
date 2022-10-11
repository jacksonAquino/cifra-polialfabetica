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
    const jumps = getJumps(key_word)
    const result = encript(text_to_work, jumps)
    result_encript.innerText = result
  }
})

function getJumps(key_word){
  return key_word.split('').map(c=>(
    alfa.indexOf(c)
  ))
}

function encript(text_to_work, jumps){
  let current_index = 0
  let result = text_to_work.split('').map(c=>{
    if(c == ' '){
      return c
    }
    
    const worked_char = get_position_in_alpha(c, jumps[current_index])
    current_index += 1
    if(current_index == jumps.length){
      current_index = 0
    }
    return worked_char
  })

  return result.join('')
}

function get_position_in_alpha(char, jumps){
  const char_position_with_jumps = alfa.indexOf(char) + jumps
  if( char_position_with_jumps > alfa.length - 1){
    const rest = char_position_with_jumps - alfa.length
    return alfa[rest]
  } else {
    return alfa[char_position_with_jumps]
  }
}