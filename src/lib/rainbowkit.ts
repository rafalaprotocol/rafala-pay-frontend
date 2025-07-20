import '@rainbow-me/rainbowkit/styles.css';
import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    WagmiConfig,
    configureChains,
    createConfig,
} from 'wagmi';
import {
    avalanche,
    arbitrum,
    base,
    mainnet,
} from 'wagmi/chains';
import { lineaTestnet } from 'wagmi/chains'; // Until Linea is added to stable
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

// 👇 Sonic + World Chain custom chains
export const sonic = {
    id: 942,
    name: 'Sonic',
    network: 'sonic',
    nativeCurrency: {
        name: 'Sonic',
        symbol: 'SON',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.sonic.xyz'],
        },
        public: {
            http: ['https://rpc.sonic.xyz'],
        },
    },
    blockExplorers: {
        default: { name: 'SonicScan', url: 'https://scan.sonic.xyz' },
    },
} as const;

export const worldChain = {
    id: 2024021821,
    name: 'World Chain',
    network: 'worldchain',
    nativeCurrency: {
        name: 'WORLD',
        symbol: 'WORLD',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.worldchain.xyz'],
        },
        public: {
            http: ['https://rpc.worldchain.xyz'],
        },
    },
    blockExplorers: {
        default: { name: 'WorldScan', url: 'https://scan.worldchain.xyz' },
    },
} as const;

const { chains, publicClient } = configureChains(
    [
        avalanche,
        arbitrum,
        base,
        mainnet,
        lineaTestnet,
        sonic,
        worldChain,
    ],
    [
        jsonRpcProvider({
            rpc: (chain) => ({
                http: chain.rpcUrls.default.http[0],
            }),
        }),
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'RafalaPay',
    projectId: 'rafala-default', // You can later replace this with WalletConnect Project ID
    chains,
});

export const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
});

export const AppWalletProvider = ({ children }: { children: React.ReactNode }) => (
    <WagmiConfig config= { wagmiConfig } >
    <RainbowKitProvider chains={ chains }>
        { children }
        </RainbowKitProvider>
        </WagmiConfig>
);
