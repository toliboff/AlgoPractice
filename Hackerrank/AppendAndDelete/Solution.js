/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */

function appendAndDelete(s, t, k) {
    let n=0;
    let i=0;

    while(s[i]==t[i]){
        n++
        i++
        if(i==s.length) break;
    }
    return t.substr(n).length+s.substr(n).length <= k ? 'Yes' : 'No'
}

console.log(appendAndDelete('y','yu', 2))