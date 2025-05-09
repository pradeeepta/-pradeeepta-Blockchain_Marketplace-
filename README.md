<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<h1>NFTify | Simple NFT Marketplace</h1>
<div align="center">
  <a href="https://nftify-interface.vercel.app/">
    <img src="https://i.ibb.co/555S7sx/frame.png" alt="NFTify">
  </a>

  <p align="center">
    An awesome NFT marketplace for buying, selling and minting NFTs 
    <br />
    <a href="https://nftify-interface.vercel.app/"><strong>View website »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Al-Qa-qa/NFTify-interface">Dapp Interface Repo</a>
    ·
    <a href="https://sepolia.etherscan.io/address/0x5Bc5d7Af02A93a3ed9De70300EB951B29B8b3b0d">Smart Contract Address</a>
    ·
    <a href="https://github.com/Al-Qa-qa/NFTify/issues">Request Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

NFTify is a decentralized NFT marketplace built on the Ethereum blockchain (Sepolia testnet) where users can mint, list, and trade NFTs.

## Features

- Mint new NFTs
- List NFTs for sale
- Buy listed NFTs
- View your NFTs and listings
- Update listing prices
- Cancel listings
- MetaMask integration
- MongoDB integration for storing listing information

## Prerequisites

- Node.js (version 14 or higher)
- MetaMask browser extension
- MongoDB database
- Sepolia testnet ETH for testing

## Installation and Setup

### Step 1: Clone and Setup Backend

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file in the root directory:
```env
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY
PRIVATE_KEY=your_wallet_private_key
ETHERSCAN_API_KEY=your_etherscan_api_key
REPORT_GAS=true
UPDATE_FRONT_END=true
```

3. Deploy smart contracts to Sepolia:
```bash
# Compile the contracts
npx hardhat compile

# Deploy to Sepolia network
npx hardhat run scripts/deployments/main.ts --network sepolia
```

### Step 2: Setup Frontend

1. Navigate to frontend directory:
```bash
cd NFTify-interface-master
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file in the NFTify-interface-master directory:
```env
API_URL=http://localhost:3000/api/
MORALIS_API_KEY=your_moralis_api_key
DATABASE_URL=your_mongodb_connection_string
```

### Step 3: Configure MetaMask

1. Install MetaMask browser extension
2. Add Sepolia network to MetaMask:
   - Network Name: Sepolia Test Network
   - RPC URL: https://eth-sepolia.g.alchemy.com/v2/YOUR-API-KEY
   - Chain ID: 11155111
   - Currency Symbol: ETH

### Step 4: Get Sepolia ETH

Get test ETH from Sepolia faucets:
- https://sepoliafaucet.com/
- https://faucet.sepolia.dev/

### Step 5: Start the Application

1. Start the frontend application:
```bash
cd NFTify-interface-master
npm run dev
```

2. Access the application at `http://localhost:3000`

## Usage

1. Connect your MetaMask wallet
2. Ensure you're on Sepolia network
3. You can:
   - Mint new NFTs from the "Mint" page
   - List your NFTs for sale
   - Browse and buy listed NFTs
   - View your NFTs and listings in your account
   - Update or cancel your listings

## Troubleshooting

Common issues and solutions:

1. Transactions failing:
   - Ensure you have enough Sepolia ETH
   - Check if you're connected to the correct network

2. MetaMask connection issues:
   - Try refreshing the page
   - Ensure MetaMask is unlocked
   - Switch to Sepolia network

3. Listings not appearing:
   - Verify MongoDB connection string
   - Check if MongoDB database is accessible
   - Ensure your wallet is connected

4. Smart contract interactions:
   - Approve marketplace access when listing NFTs
   - Wait for transactions to be confirmed
   - Check transaction status on Sepolia Etherscan

## Architecture

- Backend: Ethereum Smart Contracts (Solidity)
- Frontend: Next.js/React
- Database: MongoDB (for storing listing information)
- Blockchain Network: Sepolia Testnet
- Wallet Integration: MetaMask

## Security Considerations

1. Never share your private keys or seed phrases
2. Always verify transaction details in MetaMask
3. Use a dedicated test wallet for development
4. Keep your MetaMask up to date

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

The smart contract is built using hardhat framework, ethersjs and some other packages and dependencies that speeds up in development process.

* [![Soliditylang][Solidity]][Solidity-url]
* [![Hardhat][Hardhat]][Hardhat-url]
* [![Chainlink][Chainlink]][Chainlink-url]
* [![Openzeppelin-contracts][Openzeppelin]][Openzeppelin-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how to run the market smart contract locally on your computer.

### Prerequisites

You need to check if nodejs and npm are installed on your computer first.

```sh
npm --version
```

```sh
node --version
```

If you don't have node, you can install it from there [official website](https://nodejs.org/en)


### Installation

Below is an example of how to start interacting with the NFT marketplace contract locally.

1. Clone the repo
   ```sh
   git clone https://github.com/Al-Qa-qa/NFTify.git
   ```
2. Install NPM packages (remember to move to the directory `NFTify` first)
   ```sh
   npm install
   ```
3. Rename `.env.sample` file to `.env`
4. Get the required API keys and information and add it to the `.env` file.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

You can interact with the smart contract on the local network now.

- `npm run compile` to compile the solidity code
- `npm run deploy` to deploy the contract on the hardhat network
- `npm run test` to run the unit testing of the contract

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

This project is under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Al-Qa'qa' - [@Al_Qa_qa](https://twitter.com/Al_Qa_qa) - alqaqa.fighter@gmail.com

Project Link: [https://github.com/Al-Qa-qa/NFTify](https://github.com/Al-Qa-qa/NFTify)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

We used some web services, open source projects and packages that helps us in our development process, which will be listed down below.

We would like to apologize if we used a free package or service and forgot to mention it.

* [Sepolia Testnet](https://sepolia.dev/)
* [Best README Template](https://github.com/othneildrew/Best-README-Template)
* [Chainlink Contracts](https://www.npmjs.com/package/@chainlink/contracts)
* [Pinata SDK](https://github.com/PinataCloud/Pinata-SDK)
* [solhint](https://github.com/protofire/solhint)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

[Solidity]: https://img.shields.io/badge/solidity-363636?style=for-the-badge&logo=solidity&logoColor=white
[Solidity-url]: https://soliditylang.org/
[Hardhat]: https://img.shields.io/badge/hardhat-FFF100?style=for-the-badge&logoColor=black
[Hardhat-url]: https://hardhat.org/
[Chainlink]: https://img.shields.io/badge/chainlink-375BD2?style=for-the-badge&logo=chainlink&logoColor=white
[Chainlink-url]: https://chain.link/
[Openzeppelin]: https://img.shields.io/badge/open_zeppelin-412991?style=for-the-badge&logo=openzeppelin&logoColor=white
[Openzeppelin-url]: https://www.openzeppelin.com/contracts


#   - p r a d e e e p t a - B l o c k c h a i n _ M a r k e t p l a c e - 
 
 
