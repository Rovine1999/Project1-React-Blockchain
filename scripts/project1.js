// const hre = require("hardhat");
// const project1 = require("./abi/project1Abi");

// async function main(){
//         // body
//         const signers = await hre.ethers.getSigners();
       
//         const account0 = signers[0].address;

//         const project1 = await hre.ethers.getContractFactory("project1");
//         const project1 = await project1.deploy("Loibon");
//         await project1.deployed();
    
//         //account0
//     await project1.register("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", 1234, "John", "A004edddf3", 0);
//     //acount1
//     await project1.register(account1, 4566, "Mesh", "AO293393eee", 10);

//     // login the user
//     await project1.connect(signers[0]).login()

//     // deposit
//     await project1.connect(signers[0]).deposit(1000)
//     // check account balance
//     console.log(await project1.connect(signers[0]).balanceOf(account0));

//     // transfer to account2

//     await project1.connect(signers[0]).transfer(account1, 20);

//     // check account 1 balance

//     console.log(await project1.connect(signers[0]).balanceOf(account1));
    
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
//   });