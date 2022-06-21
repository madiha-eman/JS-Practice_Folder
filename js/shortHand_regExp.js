console.log('shortHand Regular Expression 768');


// Character classes
let regex = /\wox/;         // word character - _ or alphabet or number
regex = /\w+x5r/  ;         // \w+ means one or more word character
regex = /\Wjumps/;         // Non word character(space is non word charchter)         
regex = /\W+jumps/;         // \W+ means more than one Non word character        
regex = /number \d999/;    // \d means digit
regex = /number \d+/;     // \d means more than one digit     
regex = /\D999/;          // \D means  Non digit     
regex = /\D+999/;         // \D+ means more than one Non digit     
regex = /\sover The/;     // \s match whitespace character    
regex = /\s+over The/;     // \s means more than one match whitespace character    
regex = /\Sover The/;     // \S  match non whitespace character    
regex = /\S+over The/;     // \S+  match one or more than one non whitespace character    
regex = /quick\b/;     // word boundry   

              // Assertions 
regex = /T(?=h)/;
regex = /T(?!y)/;


let str = "The quick brown foxfo7x5r6r8r jumps over The lazy dog and the you";
str = "The quick brown foxfo7x5r6r8r %$#@jumps over The lazy dog and the you";
str = "The quick  brown foxfo7x5r6r8r %$#@jumps emiiover The lazy dog and your number 899emo999 766";


let result = regex.exec(str);
console.log('The result of exec is', result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);

}
else{
    console.log(`The string ${str} does not match the expression ${regex.source}`);

}


// Usernames can only use alpha-numeric characters.

// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

// Username letters can be lowercase and uppercase.

// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

// Answer 
//   /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; 

//1. ^ - start of input
//2. [a-z] - first character is a letter
//3. [a-z]+ - following characters are letters
//4. \d*$ - input ends with 0 or more digits
//5. | - or
//6. ^[a-z] - first character is a letter
//7. \d\d+ - following characters are 2 or more digits
//8. $ - end of input


                                                // OR
//    /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;

//1. ^ - start of input
//2. [a-z] - first character is a letter
//3. [0-9]{2,0} - ends with two or more numbers
//4. | - or
//5. [a-z]+ - has one or more letters next
//6. \d* - and ends with zero or more numbers
//7. $ - end of input
//8. i - ignore case of input