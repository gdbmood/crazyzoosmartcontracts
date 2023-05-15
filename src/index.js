import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import config from './config';
import { useNetwork } from 'wagmi'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { arbitrum, arbitrumGoerli } from 'wagmi/chains'
import { alchemyProvider } from "wagmi/providers/alchemy";
import { NetworkContractsContextProvider } from './context/providers/contractProvider'

const chains = [arbitrum, arbitrumGoerli];

const apiKey = "pCXGTOX5cerPI87r5_a_IGJsclHxk6kj";


const { provider } = configureChains(chains, [alchemyProvider({ apiKey })])
// Wagmi client

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ apiKey, version: 1, chains }),
  provider
})

const ethereumClient = new EthereumClient(wagmiClient, chains)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter >
    <WagmiConfig client={wagmiClient}>
        <ScrollToTop />
        <App />
    </WagmiConfig>

    <Web3Modal
      projectId="Qg-FtBXZr0sZeieqGOg1HoR1ma6MscWF"
      ethereumClient={ethereumClient}
      themeMode="light"

      themeColor="green"
      themeBackground='themeColor'
    />

  </BrowserRouter>
);

