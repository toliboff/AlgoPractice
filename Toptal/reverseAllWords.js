function reverseAllWords(x) {
  // x is a string
  // return a string
  // (ex. x="Hello from Toptal", you should return "olleH morf latpoT")
  return x.split(' ').map(el=>el.split('').reverse().join('')).join(' ')
};

console.log(reverseAllWords("Hello from Toptal"));

replaceSpaces( "hello world" ) = "hello%world"expected: "hello%20world"

replaceSpaces( "this could be longest string, yet we never know." ) = "this%could%be%longest%string,%yet%we%never%know."expected: "this%20could%20be%20longest%20string,%20yet%20we%20never%20know."

replaceSpaces( "may the 4th be with you" ) = "may%the%4th%be%with%you"expected: "may%20the%204th%20be%20with%20you"

replaceSpaces( " " ) = "%"expected: "%20"

replaceSpaces( "Cupiditate repellendus soluta error et aut numquam." ) = "Cupiditate%repellendus%soluta%error%et%aut%numquam."expected: "Cupiditate%20repellendus%20soluta%20error%20et%20aut%20numquam."

replaceSpaces( "Ipsam ut voluptas molestiae aut fugit cupiditate." ) = "Ipsam%ut%voluptas%molestiae%aut%fugit%cupiditate."expected: "Ipsam%20ut%20voluptas%20molestiae%20aut%20fugit%20cupiditate."

replaceSpaces( "Quia et aliquam perspiciatis laudantium tenetur." ) = "Quia%et%aliquam%perspiciatis%laudantium%tenetur."expected: "Quia%20et%20aliquam%20perspiciatis%20laudantium%20tenetur."