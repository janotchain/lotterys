require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

module.exports = {
  defaultNetwork: 'mumbai',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/n7HfrIcluZLlgIJ9Z-2yyNYIZC-pK0h1',
      accounts: ['af0c20dc18ef2f1c3f2f2658c8d9cf9badf5c057d4f9e7f35a3f2e15828a66f2'],
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
