const student = {
    name: "Akash",
    age: 21,
    sex: "male",
    cgpa: 8.34
}

console.log(student)

console.log(student['age'])
console.log(student["age"])
console.log(student.name)


student.name = "Kumar"
student.age = 22
student.sex = "female"
student.cgpa = 8.33

console.log(student)

console.log("...........................")

for(let key in student){
    console.log("Key of student are: ",key, "and the value is:", student[key])
}
