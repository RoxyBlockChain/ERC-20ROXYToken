require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    // goreli:{
    //   url: process.env.ALCHEMYAPI,
    //   accounts: [process.env.PRIVATE_KEY]
    // },
    Mainnet:{
      url: process.env.ALCHEMYAPI,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
