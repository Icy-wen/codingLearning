const a=3255397286267934908
const b=4032985

function add(n,m){
    const strn=n.toString()
    const strm=m.toString()
    let lenm=strm.length
    let lenn=strn.length
    if(lemn>lenn){
        strn=strn.padStart(lenm,'0')
    }else{
        strm=strm.padStart(lenn,'0')
    }
    let carry=0;
    let result=''
    for(let i=lemn-1;i>0;i--){
        const num1 = parseInt(strn[i], 10);
        const num2 = parseInt(strm[i], 10);  
        const sum = num1 + num2 + carry;  
        result+=(sum % 10);
        carry = Math.floor(sum / 10);
    }
    
    if (carry > 0) {
        result='1'+result;
    }
    return result
    

}
