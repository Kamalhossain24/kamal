const os=require("os");


const ram=os.totalmem();
console.log(`${ram/1024/1024/1024} GB`);
console.log(os.platform());
console.log(os.hostname());
console.log(os.userInfo());
console.log(os.networkInterfaces());
console.log(os.type());