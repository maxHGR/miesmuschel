const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });


async function main() {
  
  const nft = await ethers.getContractFactory(
    "ChainBattles"
  );

  // deploy the contract
  const deployedNFT = await nft.deploy();

  await deployedNFT.deployed();
  // print the address of the deployed contract
  console.log(
    `NFT Address: ${deployedNFT.address}`
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });