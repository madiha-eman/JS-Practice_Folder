console.log('iterator 768  its means travel');

function iterator(values){
         let nextIndex = 0;
         // we will return an object
         return {
            next: function(){
                if(nextIndex < values.length){
                   return {
                        value:values[nextIndex++],
                        done: false
                    }
                }
                    else{
         // we will return an object with only done 
                        return{
                            done:true
                        }
                    
                }

            }
         }
}

let myArray = ['Apple', 'Banana', 'oranges']
console.log(myArray)

// Using the iterator

const fruits = iterator(myArray);
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())
console.log(fruits.next())