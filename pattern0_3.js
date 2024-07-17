function pattren3(str){
    let str1 =''
    for (let i = 1; i < str; i++) {

        for(let k = 1; k <= str-i ; k++){
        str1 += ' '

        }
       for (let j = 1; j <=i; j++) {
      str1 += '*'

       }
       for (let l = 2; l <= i; l++) {
      str1 += '*'

    }

    str1 += '\n'
    }
    return str1
}
console.log(pattren3(5));