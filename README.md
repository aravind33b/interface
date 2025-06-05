:::note This is a test interface to provide a plaground for testing Uniswap V4 contracts and is not meant for production use.
:::

# Uniswap V4 Interface

A frontend application for interacting with Uniswap V4 pools. This interface allows users to create pools, manage liquidity (add/remove), and perform token swaps using the V4 architecture. It features multi-wallet support and integrates Permit2 for efficient token approvals.

## Prerequisites

Before you begin, ensure you have the following installed:
*   [Node.js](https://nodejs.org/)
*   [Yarn](https://yarnpkg.com/)

## Getting Started

### 1. Clone the Repository

Clone the project to your local machine:
```bash
git clone https://github.com/aravind33b/interface
cd interface
```

### 2. Install Dependencies

Install the project dependencies using Yarn:
```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of the project by copying the example file 

```bash
cp .env.example .env
```

### 4. Run the Application

Start the development server:
```bash
yarn start
```

## Key Features

*   **Uniswap V4 Pool Interaction:**
    *   Create new V4 pools.
    *   Add liquidity to V4 pools.
*   **V4 Swaps:** Execute single hop token swaps through the Universal Router, utilizing V4 pool architecture.
*   **PoolKey Management:** Utilizes full `PoolKey` objects for identifying and interacting with pools, rather than just `poolId` strings.
*   **Permit2 Integration:** Leverages Permit2 for gas-efficient token approvals and batch operations.
*   **Multi-Wallet Support:** Connect using various wallets like MetaMask, WalletConnect-compatible wallets, and Coinbase Wallet.

## Tech Stack

*   **Framework:** React
*   **Language:** TypeScript
*   **Wallet Integration:** Wagmi, Web3Modal
*   **Ethereum Interaction:** Viem
*   **Uniswap SDKs:**
    *   `@uniswap/v4-sdk`
    *   `@uniswap/sdk-core`

## Contributing

Contributions are welcome! Please follow the standard fork-and-pull-request workflow. Ensure your code adheres to the project's linting and formatting standards.

(Further details on contribution guidelines can be added here.)

## License

This project is distributed under the GNU General Public License (GPL 2.0)
