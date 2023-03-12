const hre = require("hardhat");

const CONTRACT_ADDR = "0xa4528EAD5420E9e4Bb4d04B26DA07581dEE2d712"

async function main() {


  const contract = await hre.ethers.getContractAt("Contract", CONTRACT_ADDR);

  const tx = await contract.changeX(30);

  await tx.wait();

}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
