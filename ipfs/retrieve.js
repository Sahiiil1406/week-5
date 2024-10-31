const { PinataSDK } = require("pinata-web3")
require("dotenv").config()

const pinata = new PinataSDK({
  pinataJwt: process.env.API_JWT,
  pinataGateway: process.env.GATEWAY_URL
})

async function main() {
  try {
    const file = await pinata.gateways.get("bafkreic3se5d365mxohbkkx6wdgqnb4yridv56h6cvr3r7ytoegw42ssuq")
    console.log(file.data)
  } catch (error) {
    console.log(error);
  }
}

main()
