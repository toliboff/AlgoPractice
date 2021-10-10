function findWord(word, sentence) {
  // Given word and sentence as two strings, 
  // Return the start and end indices of the word in the sentence as an array
  // (ex. word="morning" sentence="Good morning coders!" should return [5,11])
  const s = sentence.toLowerCase();const index=s.indexOf(word.toLowerCase());return index>=0?[index, index+word.length-1]:[]
}

console.log(findWord( "morning","Good morning coder!"));

// findWord( "morning","Good morning coder!" ) = [5,11]

// findWord( "wow","wowowowow!" ) = [0,2]

// findWord( "grow","grogrogrow" ) = [6,9]

// findWord( "Clean work","clean work!" ) = [-1,8]expected: [0,9]

// findWord( "hello","thanks very much" ) = [-1,3]expected: []

// findWord( "quibusdam","incidunt quibusdam" ) = [9,17]

// findWord( "non","itaque non et vitae" ) = [7,9]

// findWord( "sunt","sunt" ) = [0,3]