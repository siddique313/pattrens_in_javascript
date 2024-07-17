function pattren2(num){
    let str =''
    for (let i = 1; i <num; i++) {
        for(let k = 1 ;k < num-i ; k++){
            str += ' '
        }
        for (let j = 1; j < i; j++) {
            str += '*'
            
        }
        str += '\n'
    }
    return str

}

console.log(pattren2(10));