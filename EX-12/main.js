// EXERCISE 12: Write a for...in loop to iterate over the student object you created above

// Your code here:
let student = {
    name : "devid",
    age : 19,
    major : "cyber security",
};
for(let key in student){
    console.log(key + ": " + student[key])
}