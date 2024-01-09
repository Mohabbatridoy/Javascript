var marks = prompt("Please Enter your marks: ")
marks = parseInt(marks)

if(marks>=90 && marks<=100){
    console.log("Grade = A+")
}
else if(marks>=70 && marks<=89){
    console.log("grade = A")
}
else if(marks >= 50 && marks<=69){
    console.log("grade = A-")
}
else if(marks>=40 && marks<=49){
    console.log("grade = B")
}
else if(marks>=0 && marks<=39){
    console.log("grade = Fail")
}
else{
    console.log("Invalid Marks! please enter a valid marks.")
}