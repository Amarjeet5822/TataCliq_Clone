import { tataTrust, trust } from '../../Links'

function FooterTrust() {
  return (
    <div className='w-4/5 mx-auto relative '>
      <div className='flex justify-center'>
        <div>
          <img src={tataTrust} alt="tataTrust" />
        </div>
      </div>
      <div className='flex justify-center '>
        <div className='absolute -top-4 '>
          <img src={trust} alt="trust" />
        </div>
      </div>
    </div>
  )
}

export default FooterTrust