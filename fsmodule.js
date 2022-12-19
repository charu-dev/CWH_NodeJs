const fs = require('fs'); 

// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// }) //yeh aage ke code ko rokega nhhi. isliy late print hota hai. fileread krne me time lgta hai or utni der me neeche wala cod run ho jaata hai.

// const a = fs.readFileSync('file.txt') //yeh phle khud run hoga. complete hoga. fir aage jaega 

// console.log(a.toString())

fs.writeFile('file2.txt', "This is a dataess", ()=>{
    console.log("Written to the file")
});

b = fs.writeFileSync('file2.txt', "This is a data2")
console.log(b)
console.log("Finished reading file")