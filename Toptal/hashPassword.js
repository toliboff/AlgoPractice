box.hashPassword = function hashPassword(password, x) {
  // password is a string, x is a number
  // return a string
  // (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
   splitted = password.split``.map(char=>changeLetters(char, x))

    function changeLetters(letter, step){
      let code=letter.charCodeAt();
      if(code>96 && code<123){
        code=letter.toUpperCase().charCodeAt()
      }
      else if(code>64 && code<91){
        code=letter.toLowerCase().charCodeAt()
      }


      if(code>96 && code<123){
        if (step>52){
          step=step%26;
        }
        let pos = code+step;
        if(pos>122){
          pos=96+(pos-122)
        }
        return String.fromCharCode(pos)
      }
      else if(code>64 && code<91){
        if (step>52){
          step=step%26;
        }
        let pos = code+step;
        if(pos>90){
          pos=64+(pos-90)
        }
        return String.fromCharCode(pos)
      }
      else if(code>47 && code<58){
        if (step>19){
          step=step%10;
        }
        let pos = letter.charCodeAt()+step;
        if(pos>57){
          pos=47+(pos-57)
        }
        return String.fromCharCode(pos)
      }
      
    }

    return splitted.join``

};
   