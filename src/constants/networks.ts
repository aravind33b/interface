import { Chain } from 'viem'

export interface NetworkConfig extends Chain {
  rpcUrl: string
}

export const SUPPORTED_NETWORKS: NetworkConfig[] = [
  {
    id: 1,
    name: 'Ethereum',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: [import.meta.env.VITE_MAINNET_RPC_URL]
      },
      public: {
        http: [import.meta.env.VITE_MAINNET_RPC_URL]
      }
    },
    blockExplorers: {
      default: {
        name: 'Etherscan',
        url: 'https://etherscan.io'
      }
    },
    rpcUrl: import.meta.env.VITE_MAINNET_RPC_URL,
  },
  {
    id: 11155111,
    name: 'Ethereum Sepolia',
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: [import.meta.env.VITE_SEPOLIA_RPC_URL]
      },
      public: {
        http: [import.meta.env.VITE_SEPOLIA_RPC_URL]
      }
    },
    blockExplorers: {
      default: {
        name: 'Etherscan',
        url: 'https://sepolia.etherscan.io'
      }
    },
    testnet: true,
    rpcUrl: import.meta.env.VITE_SEPOLIA_RPC_URL,
  },
  {
    id: 1301,
    name: 'Unichain Sepolia',
    nativeCurrency: {
      name: 'Unichain Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: ['https://sepolia.unichain.org']
      },
      public: {
        http: ['https://sepolia.unichain.org']
      }
    },
    blockExplorers: {
      default: {
        name: 'UnichainScan',
        url: 'https://sepolia.unichainscan.com'
      }
    },
    testnet: true,
    rpcUrl: 'https://sepolia.unichain.org',
  },
]