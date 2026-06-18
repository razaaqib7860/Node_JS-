const fs=require('fs'); // fs is a built-in module in node js which is used for file handling(fs=file system)

/****** Lets CREATE A FILE and write some data in it *******/

//#### Synchronous method ####
// its a blocking method, it will wait until the file is created and data is written in it, then it will move to next line of code
//it can return , 

const files=fs.writeFileSync("hello.txt","Hello World Synchronous!"); //it can return the data which is written in the file, but it will not return anything if the file is not created or data is not written in it

fs.writeFileSync("hello.txt","Hello World Synchronous!"); // it will create a file (name as hello.txt) and write the data (which is "Hello World!") in it
fs.writeFileSync("hello.txt","Hello Bitch Overwrite!"); // it will OVERWRITE the data in existing file

const files=fs.writeFileSync("hello.txt","Hello World Synchronous!"); 



//#### Asynchronous method ####
//its a Non-blocking method, it will not wait for the file to be created and data to be written, it will move to next line of code
//it never return anything, always expect a call back fucntion

const file = fs.writeFile("hellooo2.txt","Hello World Asynchronous!",(err)=>{});  // it will show void in console
//console.log(file)   // it will return void as async method never return,

fs.writeFile("hellooo.txt","Hello World Asynchronous!",(err)=>{ // it will create a file (name as hello.txt) and write the data (which is "Hello World!") in it and its always expect acall back fucntion (err)
    if(err){
        console.error(err);
    }
    else{
        console.log("File written successfully!");
    }
});
//OR
fs.writeFile("hellooo2.txt","Hello World Asynchronous!",(err)=>{}); // it will create a file (name as hello.txt) and write the data (which is "Hello World!") in it without any console log, as we are not providing any call back function to handle the error or success message
//it will still create the file and write the data in it but we will not get any console log for success or error message, as we are not providing any call back function to handle the error or success message



/****** ## Lets READ A FILE and write some data in it *******/

//#### Synchronous method ####

const result = fs.readFileSync("./hello.txt","utf8");
console.log(result); // it will return the data which is written in the file

    // if we dont provide the encoding (utf8) it will return the data in buffer format which is not human readable, but if we provide the encoding it will return the data in string format which is human readable 
    //there are many encoding formats available in node js like utf8, ascii, base64 etc, but utf8 is the most commonly used encoding format
    //utf8 is a character encoding format that can represent all characters in the Unicode character set, which includes characters from all languages and symbols. It is widely used for encoding text data in web applications and other software.

 //some more fs methods//

fs.renameSync("hellooo2.txt","greeting.txt"); // it will rename the file
fs.unlinkSync("greeting.txt"); // it will delete the file
fs.appendFileSync("hello.txt"," Hello Again!"); // it will append the data in existing file
//there are many more methods available in fs module like fs.copyFileSync(), fs.mkdirSync(), fs.rmdirSync() etc, you can check the documentation for more details
//for more methods check using fs. and you will get a list of all the methods available in fs module



//#### Asynchronous method ####

fs.readFile("./hello.txt","utf8",(err,data)=>{ // again it will always expect a call back fucntion (err,data) and cant return anything , we cant assign it to a variable , as it will return void in console
    if(err){
        console.error(err);
    }
    else{
        console.log(data); // it will return the data which is written in the file
    }
});

//some more fs methods//
//just like synchronous methods there are also asynchronous methods available for these operations like fs.rename(), fs.unlink(), fs.appendFile() etc, you can check the documentation for more details

fs.rename("hellooo2.txt","greeting.txt",(err)=>{ // it will rename the file
    if(err){
        console.error(err);
    }
    else{
        console.log("File renamed successfully!");
    }
});

fs.unlink("greeting.txt",(err)=>{ // it will delete the file
    if(err){
        console.error(err);
    }
    else{
        console.log("File deleted successfully!");
    }
}); 

fs.appendFile("hello.txt"," Hello Again!",(err)=>{ // it will append the data in existing file
    if(err){
        console.error(err);
    }
    else{
        console.log("Data appended successfully!");
    }
}); 
// if we dont provide the call back function to handle the error or success message it will still append the data in existing file but we will not get any console log for success or error message, as we are not providing any call back function to handle the error or success message
fs.appendFile("hello.txt"," Hello Again!",(err)=>{}); // it will append the data in existing file without any console log, as we are not providing any call back function to handle the error or success message
