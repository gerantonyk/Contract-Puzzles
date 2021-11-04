const { assert } = require("chai");

describe("Game5", function() {
  it("should be a winner", async function() {
    const Game = await ethers.getContractFactory("Game5");
    const game = await Game.deploy();
    await game.deployed();

    // good luck
    const signer1 = await ethers.provider.getSigner(0)
    // const address1 = await signer1.getAddress()
    //  const valor = await game.asa();
    //  console.log("asadasd",valor)
    //  const valor2 = await game.asa2();
    //  console.log("as2",valor2)
    // let randomWallet = {}
    // let address ="0xffffffffffffffffffffffffffffffffffffffff"
    // while(address.toLowerCase()>"0x00ffffffffffffffffffffffffffffffffffffff") {
    //   randomWallet = ethers.Wallet.createRandom();
    //   address = await randomWallet.getAddress()
    // }


    const randomWallet = new ethers.Wallet ( "0xa2cab8743f61c4595a69f8d375a98c05f7f15f81738565ce985a4fa615bdd8df", ethers.provider)
    const tx = await signer1.sendTransaction({
      to: "0x00fdb9c46b0e2da7cd2df4c38cdf41daf681053d",
      value: ethers.utils.parseEther('10'),
    });
    await game.connect(randomWallet).win();
    // leave this assertion as-is
    assert(await game.isWon(), "You did not win the game");
  });
});
