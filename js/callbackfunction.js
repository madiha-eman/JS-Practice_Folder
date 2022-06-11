console.log("768");



const students = [
    {name: 'jungju', subject:"love's madiha"},
    {name: 'madiha', subject:"love's jungju"}
]

function enrollStudents(student, callback){
    setTimeout(function() {
       students.push(student)
       console.log("Student has been enrolled");
       callback();
    }, 3000)
}

function getStudents(){
    setTimeout(function() {
     let str = "";
     students.forEach(function(student){
         str += `<li>${student.name} : ${student.subject}</li>`
     });
     document.getElementById("students").innerHTML = str;
     console.log("Students have been fetched");
     }, 1000)
}

let studentsBio = {name: 'eman', subject: "dad amd mom's love"}
enrollStudents(studentsBio, getStudents)