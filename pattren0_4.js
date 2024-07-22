
// let b = 5
    // let str1 =''
    for (let i = 1; i < b; i++) {

        for(let k = 1; k <= b-i ; k++){
        // str1 += ' '
        document.write(`&nbsp;&nbsp`)

        }
       for (let j = 1; j <=i; j++) {
    //   str1 += '*'
    document.write('*')

       }
       for (let l = 2; l <= i; l++) {
    //   str1 += '*'
    document.write('*')

    }
    
    // str1 += '\n'
    document.write('<br>')
}
console.log(str1);



//  olta print 




let b = 5
    // let str1 =''
    for (let i = b; i >= 1; i--) {

        for(let k =1; k <=  b-i; k++){
        // str1 += ' '
        document.write(`&nbsp;&nbsp`)

        }
       for (let j = 1; j <=i; j++) {
    //   str1 += '*'
    document.write('*')

       }
       for (let l = 2; l <= i; l++) {
    //   str1 += '*'
    document.write('*')

    }
    
    // str1 += '\n'
    document.write('<br>')
}
console.log(str1);
