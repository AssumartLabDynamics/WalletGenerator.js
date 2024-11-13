// Wallet Generator JavaScript Code

async function generateBitcoinMnemonic() {
  const mnemonic = bip39.generateMnemonic();
  document.getElementById('output').innerHTML = `<strong>Bitcoin Mnemonic:</strong> ${mnemonic}`;
}

async function generateEthereumWallet() {
  const wallet = ethers.Wallet.createRandom();
  const output = `
    <strong>Ethereum Address:</strong> ${wallet.address}<br>
    <strong>Ethereum Private Key:</strong> ${wallet.privateKey}
  `;
  document.getElementById('output').innerHTML = output;
}
