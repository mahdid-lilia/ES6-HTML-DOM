const { async } = require("q")

//create a promise
let p = new Promise((resolve, reject)=>{
    let name = "Abir" + "Hammache"
    if(name=="AbirHammache"){
        resolve("Success")
    }else{
        reject("Failed")
    }
})

p
.then((message)=>console.log("We are on then block " +message))
.catch((message)=>console.log("We are on catch block " +message))
