console.log("Regular Expression 768");


// let reg = /The/g;

// let string = "The quick brown fox jumps over The lazy dog and the you";

// console.log(reg)
    
    // Functions to match expression 
    //1 .exec() - This function will return an array for match or null for no  match

    // let result = reg.exec(string);
    // console.log(result)
    // result = reg.exec(string);
    // console.log(result)
    // result = reg.exec(string);
    // console.log(result)


    // 2 .test() - retrunn true or false 

    // let result2 = reg.test(string)
    // console.log(result2)

    // 3 .match() - It will return an array of result or null 
    // let result3 = string.match(reg);
    // console.log(result3)

    // 4 .search() - return index of first  match else -1
    // let result4 = string.search(reg);
    // console.log(result4)

    // 5 .replace() - return new replaced string eith all the replacement 
    // let result5 = string.replace(reg, 'A');
    
    // console.log(result5)


                                        // REGULAR EXPRESSION 

// let regex = /fox/;

// let str = "The quick brown fox jumps over The lazy dog and the you";

// let result = regex.exec(str);
// console.log('The result of exec is', result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);

// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);

// }

// lets look into some metacharacter symbols 
//let regex = /^The/; // ^ means expression will match if strings starts with  
 
//regex = /ou$/; // $ at the end of the strings means "string ends with"  
// regex = /T.e/i  // matches any character
// regex = /T*e/i  // matches any 0 or more characters
// regex = /Th?et?/ // ? after character means that character i s optional
// regex = /T\~e/i  // \* means matche with any symbole(*~) character


// let str = "T~e quick brown fox jumps over The lazy dog and the you";

// let result = regex.exec(str);
// console.log('The result of exec is', result);

// if(regex.test(str)){
//     console.log(`The string ${str} matches the expression ${regex.source}`);

// }
// else{
//     console.log(`The string ${str} does not match the expression ${regex.source}`);

// }
let str = "The quick brown fox jumps over The lazy dog and the you";

                    //   CHARACTER SET []
let regex = /f[a-z]x/; // can be any character from a to z
regex = /f[aty]x/; // can be a, t and y
regex = /f[^hy]x/; // can not be h and y
regex = /f[^hy][xy]/; // can not be h and y + can be x and y
regex = /f[a-zA-Z][xy0-9][0-9]/; // we can have as many character as we want

                              // QUANTIFIERS - We use {}
regex = /fo{2}x/; // o can occur exactly 2 times
regex = /fo{0,2}x/; // o can occur exactly 0 to 2 (0 or 1 or 2) times

                     // GROUPINGS - We use paranthesis for groupings ()
regex = /(fox){2}([0-9]r){3}/                    
 str = "The quick brown foxfox5r6r8r jumps over The lazy dog and the you";

let result = regex.exec(str);
console.log('The result of exec is', result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);

}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);

}
