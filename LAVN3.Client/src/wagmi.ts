import { http, createConfig, createStorage } from '@wagmi/vue'
import { mainnet, optimism, arbitrum } from '@wagmi/vue/chains'
import { coinbaseWallet, walletConnect } from '@wagmi/vue/connectors'
import { createWeb3Modal } from '@web3modal/wagmi'

const projectId = import.meta.env.VITE_WC_PROJECT_ID

if (projectId == null) console.log("Project id is not set")

export const config = createConfig({
  chains: [mainnet, arbitrum, optimism],
  connectors: [
    walletConnect({
      projectId: projectId,
      showQrModal: true,
    }),
    coinbaseWallet({ appName: 'WalletConnect', darkMode: true }),
  ],
  storage: createStorage({ storage: localStorage, key: 'vite-vue' }),
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [optimism.id]: http(),
  },
})

export const modal = createWeb3Modal({
  wagmiConfig: config,
  projectId: projectId,
})

declare module '@wagmi/vue' {
  interface Register {
    config: typeof config
  }
}
