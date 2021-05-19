import React from 'react'
import Menu from '../Menu'
import ClaimSokuModal from '../ClaimSokuModal'

import { Menu as UikitMenu, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'

import useAuth from '../../hooks/useAuth'

import './MobileFooter.css'

function Home() {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  const truncatedFirstHalf = account?.substring(0, 5)
  const truncatedLastHalf = account?.substring(account.length - 5, account.length)
  const truncatedAddress = `${truncatedFirstHalf}...${truncatedLastHalf}`

  const openHiddenLinks = () => {
    const hiddenLinks = document.getElementsByClassName('hidden_navLinksMobile')
    // console.log(hiddenLinks)
    if (hiddenLinks[0]?.id === 'hidden_navLinks') {
      hiddenLinks[0].id = 'open'
    } else if (hiddenLinks[0]?.id === 'open') {
      hiddenLinks[0].id = 'hidden_navLinks'
    }
  }

  return (
    <div>
      <Menu />
      <h1>Test</h1>

      <div className="connectWallet__options__MOBILE">
        <ul>
          {account ? (
            <li className="account__footer">Account: {truncatedAddress}</li>
          ) : (
            <li className="connectWallet">
              <button type="button" onClick={onPresentConnectModal}>
                Connect Wallet
              </button>
            </li>
          )}
          <li className="claimSoku">
            <ClaimSokuModal />
          </li>
          <li>
            <button type="submit" className="material-icons" onClick={openHiddenLinks}>
              more_horiz
            </button>
          </li>
        </ul>
        <ul className="hidden_navLinksMobile" id="hidden_navLinks">
          <li>
            <a href="https://www.sokuswap.finance/" rel="noreferrer noopener" target="_blank">
              <span className="material-icons">info</span>
              <p>About</p>
            </a>
          </li>
          <li>
            <a href="https://github.com/Soku-Swap-Project" rel="noreferrer noopener" target="_blank">
              <span className="material-icons">code</span>
              <p>Code</p>
            </a>
          </li>
          <li>
            <a href="/" rel="noreferrer noopener" target="_blank">
              <span className="material-icons">analytics</span>
              <p>Analytics</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
