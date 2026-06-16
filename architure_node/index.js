const fs = require("fs");
const os=require("os");// os is a built-in module in node js which is used for getting information about the operating system

//console.log(os.platform()); // it will return the platform of the operating system (win32, linux, darwin etc)
//console.log(os.cpus()); // it will return the information about the CPUs of the operating system

//sync
console.log("This is the architecture of Node.js!"); 
fs.writeFileSync("hellooo2.txt","Hello World Synchronous!"); // it will be printed after the file is written, as fs.writeFileSync() is a synchronous method and it will wait for the file to be written before moving to the next line of code
console.log("This will be printed after the file is written!"); // it will be printed after the file is written, as fs.writeFileSync() is a synchronous method and it will wait for the file to be written before moving to the next line of code

//async 
console.log("This is the architecture of Node.js!"); // it will be printed before the file is written, as fs.writeFile() is an asynchronous method and it will not wait for the file to be written before moving to the next line of code
fs.writeFile("hellooo.txt","Hello World Asynchronous!",(err)=>{});
console.log("This will be printed before the file is written!"); // it will be printed before the file is written, as fs.writeFile() is an asynchronous method and it will not wait for the file to be written before moving to the next line of code 

//thread pool
//Node.js uses a thread pool to handle asynchronous operations, which allows it to perform non-blocking I/O operations. When an asynchronous operation is initiated, it is offloaded to the thread pool, allowing the main event loop to continue processing other tasks without waiting for the operation to complete. This is why asynchronous methods in Node.js do not block the execution of subsequent code and can lead to improved performance and responsiveness in applications.
//default size of thread pool is 4, but we can change it by setting the environment variable UV_THREADPOOL_SIZE to a different value, for example, if we set UV_THREADPOOL_SIZE to 8, then the thread pool will have 8 threads instead of 4. This can be useful in scenarios where we have a large number of asynchronous operations that need to be handled concurrently, as it allows us to increase the number of threads available for handling those operations and potentially improve performance. However, it's important to note that increasing the thread pool size can also lead to increased resource usage and may not always result in improved performance, so it should be done with caution and based on the specific needs of the application.

//max thread pool size is 128, if we set UV_THREADPOOL_SIZE to a value greater than 128, it will be set to 128 by default. This is because the maximum number of threads that can be created in a thread pool is limited by the operating system and the hardware resources available. Setting the thread pool size to a value greater than the maximum allowed can lead to performance issues and may cause the application to crash or become unresponsive. Therefore, it's important to ensure that the thread pool size is set within the limits of the system's capabilities.
//max thread pool size? -8core cpu have 8 max threads, 16 core cpu have 16 max threads, but it also depends on the operating system and the hardware resources available, so it's not a fixed number and can vary based on the specific system configuration. It's important to consider the workload and the number of concurrent operations when setting the thread pool size to ensure optimal performance without overloading the system.

console.log(os.cpus().length); // it will return the number of cores available in the system, which is the maximum number of threads that can be created in a thread pool
//if we have a 4 core cpu, then the maximum number of threads that can be created in a thread pool is 4, if we set UV_THREADPOOL_SIZE to a value greater than 4, it will be set to 4 by default. This is because the maximum number of threads that can be created in a thread pool is limited by the number of cores available in the system. Setting the thread pool size to a value greater than the number of cores can lead to performance issues and may cause the application to crash or become unresponsive. Therefore, it's important to ensure that the thread pool size is set within the limits of the system's capabilities.