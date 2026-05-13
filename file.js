
const fs = require("fs"); // here we are importing the fs module which is a built-in module in node.js. it provides an API for interacting with the file system.

// //synchronous call, 
// fs.writeFileSync('./test.txt', "heyy there!"); // here we are using the writeFileSync method of the fs module to create a file named test.txt and write the string "hello world!" into it. if the file already exists, it will overwrite the existing content. if the file does not exist, it will create a new file and write the content into it. this method is synchronous, which means that it will block the execution of the code until the file is written. if you want to use an asynchronous method, you can use writeFile method instead of writeFileSync.


//asunc call
//fs.writeFile('./test.txt',"hello there async", (err)=>{});

//reading the file

// const result = fs.readFileSync("./contacts.txt","utf-8");
// console.log(result);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err){
//       console.log("Error is: ",err);  
//     }
//     else{
//         console.log(result);
//     }
// })

//to add content rather than overwriting the existing content, we can use the appendFile method of the fs module. this method is asynchronous and it takes three arguments: the file name, the content to be added, and a callback function that will be called when the operation is complete.
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString()); // here we are using the appendFileSync method to add the current date and time to the test.txt file. this method is synchronous, which means that it will block the execution of the code until the content is added to the file. if you want to use an asynchronous method, you can use appendFile method instead of appendFileSync.


fs.appendFileSync("./test.txt",'${Date.now()} hey there\n'); // here we are adding a new line after the date and time to separate it from the next content that will be added to the file. this is optional, but it helps to keep the file organized and readable. you can also use "\r\n" for a new line if you are working on a Windows system.

//fs.cpSync("./test.txt", "./copy.txt");

//fs.unlinkSync("./copy.txt"); // here we are using the unlinkSync method to delete the copy.txt file. this method is synchronous, which means that it will block the execution of the code until the file is deleted. if you want to use an asynchronous method, you can use unlink method instead of unlinkSync.

console.log(fs.statSync("./test.txt").size); // here we are using the statSync method to get the statistics of the test.txt file. this method is synchronous, which means that it will block the execution of the code until the statistics are retrieved. if you want to use an asynchronous method, you can use stat method instead of statSync. the statSync method returns an object that contains various properties about the file, such as its size, creation time, and modification time. you can access these properties using dot notation, for example: fs.statSync("./test.txt").size will return the size of the file in bytes. 

//creating a new directory
// fs.mkdirSync('my-docs');

console.log("1");

//non - blocking....
fs.readFile("contacts.txt","utf-8", (err, result) => {
    console.log(result);
});

console.log("2");
console.log("3");
console.log("4");

