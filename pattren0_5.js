
let ba = 5
    // let str2 =''
    for (let i = ba; i > 1; i--) {

        for(let k = 1; k <= ba-i ; k++){
        // str2+= ' '
        document.write(`&nbsp;&nbsp`)

        }
       for (let j = 1; j <=i; j++) {
    //   str2 += '*'
    document.write('*')
       }
       for (let l = 2; l <= i; l++) {
    //   str2 += '*'/
    document.write('*')

    }
    
    // str2 += '\n'
    document.write('<br>')
}
// console.log(str2);

let b = 5
    // let str1 =''
    for (let q = 1; q <= b; q++) {

        for(let k =1; k <=  b-q; k++){
        // str1 += ' '
        document.write(`&nbsp;&nbsp`)

        }
       for (let j = 1; j <=q; j++) {
    //   str1 += '*'
    document.write('*')

       }
       for (let l = 2; l <= q; l++) {
    //   str1 += '*'
    document.write('*')

    }
    
    // str1 += '\n'
    document.write('<br>')
}
// console.log(str1);
