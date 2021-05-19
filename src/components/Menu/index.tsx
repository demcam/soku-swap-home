import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Menu as UikitMenu, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'

import useAuth from '../../hooks/useAuth'
import ClaimSokuModal from '../ClaimSokuModal'
import AccountModal from '../AccountModal'

import './Menu.css'
import { ChainId } from '@pancakeswap-libs/sdk'

const Menu: React.FC = props => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { onPresentConnectModal } = useWalletModal(login, logout)

  const truncatedFirstHalf = account?.substring(0, 5)
  const truncatedLastHalf = account?.substring(account.length - 5, account.length)
  const truncatedAddress = `${truncatedFirstHalf}...${truncatedLastHalf}`

  const openHiddenLinks = () => {
    const hiddenLinks = document.getElementsByClassName('hidden_navLinks')
    // console.log(hiddenLinks)
    if (hiddenLinks[0]?.id === 'hidden_navLinks') {
      hiddenLinks[0].id = 'open'
    } else if (hiddenLinks[0]?.id === 'open') {
      hiddenLinks[0].id = 'hidden_navLinks'
    }
  }

  console.log(window.location)

  return (
    <div className="sokuswap__navbar">
      <nav>
        <ul className="navbar__items">
          <Link to="/">
            <img className="nav_logo" style={{ height: '50px' }} alt="Logo" src="images/Web-Corner-Logo.png" />
          </Link>
          <div className="navbar__options">
            <button
              className="nav_link"
              onClick={() => {
                window.location.href = `${origin}/bsc/#/swap`
              }}
            >
              <li onClick={window.location.reload}>Swap</li>
            </button>
            <button
              className="nav_link"
              onClick={() => {
                window.location.href = `${origin}/bsc/#/swap`
              }}
            >
              <li>Pool</li>
            </button>
            <button
              className="nav_link"
              onClick={() => {
                window.location.href = `https://www.binance.org/en/bridge`
              }}
            >
              <li>Bridge</li>
            </button>
            {/* <NavLink className="nav_link" to="/soku" activeClassName="active">
              <li>SOKU</li>
            </NavLink> */}
          </div>
        </ul>
        <ul className="connectWallet__options__DESKTOP">
          {account ? (
            <AccountModal />
          ) : (
            <li className="connectWallet__nav">
              <button type="button" onClick={onPresentConnectModal}>
                Connect Wallet
              </button>
            </li>
          )}

          <li className="claimSoku__nav">
            <ClaimSokuModal />
          </li>
          <li>
            <button type="button" className="material-icons" onClick={openHiddenLinks}>
              more_horiz
            </button>
          </li>
        </ul>
        <ul className="hidden_navLinks" id="hidden_navLinks">
          <li className="hidden_navLink">
            <a href="https://www.sokuswap.finance/" rel="noreferrer noopener" target="_blank">
              <span className="material-icons">info</span>
              <p>About</p>
            </a>
          </li>
          <li className="hidden_navLink">
            <a href="https://github.com/Soku-Swap-Project" rel="noreferrer noopener" target="_blank">
              <span className="material-icons">code</span>
              <p>Code</p>
            </a>
          </li>
          <li className="hidden_navLink">
            <a href="https://sokuswap-1.gitbook.io/sokuswap-whitepaper/" rel="noreferrer noopener" target="_blank">
              <span className="material-icons">school</span>
              <p>Docs</p>
            </a>
          </li>
          <li className="hidden_navLink">
            <a href="/" rel="noreferrer noopener" className="disabled_link" target="_blank">
              <span className="material-icons">analytics</span>
              <p>Analytics</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

// <UikitMenu
//   links={links}
//   account={account as string}
//   login={login}
//   logout={logout}
//   isDark={isDark}
//   toggleTheme={toggleTheme}
//   currentLang={selectedLanguage?.code || ''}
//   langs={allLanguages}
//   setLang={setSelectedLanguage}
//   cakePriceUsd={cakePriceUsd}
//   profile={profile}
//   {...props}
// />

export default Menu
