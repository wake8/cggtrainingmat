function parity(num){
    return num%2 === 0? "even":"odd";
}
console.log(parity(4));
console.log(parity(9));
//2
function maxi(m1,m2,m3){
    if(m1>m2 && m1>m3){
        return m1;
    }
    else if(m2>m1 && m2>m3){
        return m2;
    }
    else{
        return m3;
    }
}
console.log(Math.max(1,9,4));
console.log(maxi(1,4,8));
//5
function padChars(n,char){
    let ch2 = char;
    for(let i =0;i<n-1;i++){
        char += ch2;
    }
    return char;
}
console.log(padChars(5,'x'));
//
let line = document.getElementById('message');
let val = Math.random(0,1);
val  =val*10;
val = Math.floor(val);
console.log(val);
if(val<=5){
    line.innerHTML = '<h2>Have a Bad Day</h2>';
}
else{
    line.innerHTML= '<h2>Have a Good Day</h2>';
}