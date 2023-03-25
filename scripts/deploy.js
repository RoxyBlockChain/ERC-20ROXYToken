const hre = require("hardhat");

async function main() {
  const RoxyToken = await hre.ethers.getContractFactory("RoxyToken");
  const roxyToken = await RoxyToken.deploy(100000000, 50);

  await roxyToken.deployed();

  console.log("Roxy Token deployed: ", roxyToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

