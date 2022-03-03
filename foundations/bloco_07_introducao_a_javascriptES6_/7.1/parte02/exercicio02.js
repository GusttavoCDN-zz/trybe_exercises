const longestWord = (string) => {
  const words = string.split(' ');
  
  let longest = '';
  
  for (let i = 0; i < words.length; i += 1) {
    words[i].length > longest.length ? longest = words[i]: longest = longest
  }
  
  return longest;
}

console.log(longestWord('The quicked brown fox jumped overeee the lazy dog'));