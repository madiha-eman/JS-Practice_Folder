console.log("768 Promises")


function func1(){
    return new Promise(function(resolve,reject){
        const ques = input("does he love you?")
     
        if(ques == "yes"){
            console.log("Function: Your promise has been resolved")
            resolve()
        }
        else {
            console.log("Function: Your promise has not been resolved");
            reject("sorry not fulfiled");
        }
    })
}
func1()