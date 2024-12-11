import {AndroidApple, FooterBottom, FooterTrust, FooterTrustBelow, } from './index'

function Footer() {
  return (
    <div className='w-full box-border'>
      <FooterTrust />
      <FooterTrustBelow />
      <AndroidApple />
      <FooterBottom />
    </div>
  )
}

export default Footer