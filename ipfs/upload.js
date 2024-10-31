const {PinataSDK}=require('pinata-web3')
require('dotenv').config()
const fs = require("fs")


// const pinata = new PinataSDK({
//     pinataJwt:process.env.API_JWT,
//     pinataGateway:
//   });

const pinata = new PinataSDK({
    pinataJwt: process.env.API_JWT,
    pinataGateway: process.env.GATEWAY_URL
  })
const upload=async()=>{
    try {
        //console.log(pinata)
        const blob = new Blob([fs.readFileSync("./test.txt")]);
    const file = new File([blob], "hello-world.txt", { type: "text/plain"})
    const upload = await pinata.upload.file(file);
    console.log(upload)
    } catch (error) {
        console.log(error)
    }
}
upload()