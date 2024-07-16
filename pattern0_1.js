function pattren1 (str){

    let str1 = ''
    
        for (let i = 1; i < str; i++) {
            
           for (let j = 1; j < i; j++) {
            str1 += '*'        
           }
            str1 += '\n'
        }
        return str1
    
    }
    console.log(pattren1(8));