function go(){
const solution = {
  cube: 'return Math.pow(x,3)',
  averageAsciiChar: "let avg=x.split('').map(l=>l.charCodeAt()).reduce((a,b)=>a+b)/x.length;return String.fromCharCode(Math.round(avg))",
  charCountInString: "return y.split('').filter(a=>a===x).length",
  countUniqueNumbers: "return Array.from(new Set(x)).length",
  digitOccurrence: "let numbers = '';while(n>=0){numbers+=n;n--;}return numbers.split``.filter(a=>a==x).length;",
  findAverage: "return Math.ceil(x.reduce((a,b)=>a+b)/x.length)",
  firstUniqueChar: "let arr=x.split('');for(let i=0; i<x.length;i++){if(arr.filter(a=>a===arr[i]).length===1)return arr[i]};return false",
  hashPassword: "splitted = password.split``.map(char=>changeLetters(char, x));function changeLetters(letter, step){let code=letter.charCodeAt();if(code>96 && code<123){code=letter.toUpperCase().charCodeAt();}else if(code>64 && code<91){code=letter.toLowerCase().charCodeAt();}if(code>96 && code<123){if (step>52){step=step%26;}let pos = code+step;if(pos>122){pos=96+(pos-122);}return String.fromCharCode(pos);}else if(code>64 && code<91){if (step>52){step=step%26;}let pos = code+step;if(pos>90){pos=64+(pos-90)}return String.fromCharCode(pos);}else if(code>47 && code<58){if (step>19){step=step%10;}let pos = letter.charCodeAt()+step;if(pos>57){pos=47+(pos-57)}return String.fromCharCode(pos);}}return splitted.join``",
  hexToRGB: "let hex=[x.slice(1,3), x.slice(3,5), x.slice(5)];return hex.map(h=>parseInt(h, 16))",
  isPrime: "if (x <= 1){return false;}for (let i = 2; i < x; i++){if (x % i == 0){return false;}}return true;",
  isRotatedStr: "if(x.length!==y.length){return false;}if(x===y){return true}let rotated = x.split('');for (let i=0; i<x.length; i++){rotated.push(rotated.shift());if(rotated.join('')===y){return true;}}return false;",
  matchingType: "return typeof x === typeof y",
  multiplierCount: "t=0;for(let i=1; i*y<=x; i++) {t++};return t;",
  numberOfCircles: "x=Math.abs(x);circles={0:1,1:0,2:0,3:0,4:0,5:0,6:1,7:0,8:2,9:1,};return String(x).split('').map(n=>circles[n]).reduce((a,b)=>a+b)",
  numberRepresentation: "let numbers = Array.from(new Set(arr));return Number(numbers.sort().map(n=>arr.filter(a=>a===n).length).join(''))",
  removeAllSpaces: "return x.replace(/\\s/g, '')",
  reverseString: "return x.split(' ').map(a=>a.split('').reverse().join('')).reverse().join(' ')",
  romanToInt: `var myMap = new Map();myMap.set('I', 1);myMap.set('V', 5);myMap.set('X', 10);myMap.set('L', 50);myMap.set('C', 100);myMap.set('D', 500);myMap.set('M', 1000);let result = 0, current, previous = 0;for (const char of x.split("").reverse()) {current = myMap.get(char);if (current >= previous) {result += current;} else {result -= current;}previous = current;}return result;`,
  squareRoot: "return Math.sqrt(x)",
  twoArrayAvg: "return ((x.reduce((a,b)=>a+b)/x.length)+(y.reduce((a,b)=>a+b)/y.length))/2;",
  validateIP: "  let arr= x.split('.'); return (arr.length===4 && !(arr.some(num=>num.length===0 || num>255 || num<0)) && (arr.every(num=>num.replace(/\\D/g,'').length==num.length)))",
  isPalindrome: "let cleaned = x.replace(/[^A-Za-z0-9]/ig, ''); return cleaned.toLowerCase()===cleaned.toLowerCase().split('').reverse().join('')",
  reverseCase: "return x.split('').map(str=>str===str.toLowerCase()?str.toUpperCase():str.toLowerCase()).join('')",
  replaceSpaces: "return x.replace(/\\s/g, '%20')",
  arrayToObject: "const obj = {};x.forEach(element => { obj[element[0]]=element[1] }); return obj;",
  monthToString: "const month=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']; return month[x-1];",
  reverseAllWords: "return x.split(' ').map(el=>el.split('').reverse().join('')).join(' ')",
  findWord: "const s = sentence.toLowerCase();const index=s.indexOf(word.toLowerCase());return index>=0?[index, index+word.length-1]:[]",
  binaryToNumber: "return parseInt(x, 2)",
  getHalfArray: "return x.slice(0, Math.ceil(x.length/2))",
  removeDuplicates: "return Array.from(new Set(x.split(''))).join('')",
 
};

const line = document.querySelectorAll('.ace_editor')[0];
const challenge = document.querySelector('.ace_name').innerText;
line.addEventListener('click', ()=>navigator.clipboard.writeText(solution[challenge]))

}
setInterval(go, 500)


























// function go(){
//   const solution = {
//     cube: 'return Math.pow(x,3)',
//   };

//   const challenge = document.querySelector('.ace_name').innerText;
//   const comments = document.querySelectorAll('.ace_comment');
//   const codeLine=comments[comments.length-1].parentNode.nextSibling;

//   codeLine.addEventListener('click', ()=>solveChallenge(challenge));

//   function solveChallenge(name){
//     const solution = sex[name]
//     alert(solution)
//     navigator.clipboard.writeText(solution)
//   }
// }

// //  button class=> _1qZ3sPRa _3saSLDGa _20Go3tJh  
// // <div class="ace_line" style="height:19"

// // ////////////////////////////////////

// function solveChallenge(challenge){
//   const solution={
//     cube:`<span class="ace_keyword">return</span>
//     <span class="ace_variable ace_language">Math</span>
//     <span class="ace_punctuation ace_operator">.</span>
//     <span class="ace_support ace_function">pow</span>
//     <span class="ace_paren ace_lparen">(</span>
//     <span class="ace_identifier">x</span>
//     <span class="ace_punctuation ace_operator">,</span>
//     <span class="ace_constant ace_numeric">3</span>
//     <span class="ace_paren ace_rparen">)</span>`,
//   }
//   return solution[challenge]
// }
// {/* <span class="ace_keyword">return</span>
// <span class="ace_variable ace_language">Math</span>
// <span class="ace_punctuation ace_operator">.</span>
// <span class="ace_support ace_function">pow</span>
// <span class="ace_paren ace_lparen">(</span>
// <span class="ace_identifier">x</span>
// <span class="ace_punctuation ace_operator">,</span>
// <span class="ace_constant ace_numeric">3</span>
// <span class="ace_paren ace_rparen">)</span>
//  */}
// arr.filter((a,b)=>a+b)