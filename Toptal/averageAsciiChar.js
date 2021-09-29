let avg=x.split('').map(l=>l.charCodeAt()).reduce((a,b)=>a+b)/x.length
return String.fromCharCode(Math.round(avg))
