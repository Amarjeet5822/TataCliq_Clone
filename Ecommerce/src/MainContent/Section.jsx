import { fullyFramed, gadgetDen, shineOnImage, watchThisSpace } from '../Links';
import {BewareFraud, FullyFramed, GadgetDen, ShineOn, WatchSpace } from './index'


function Section() {
  return (
    <div className='min-w-2xl bg-lightGray pt-10 pb-24'>
      
      <ShineOn images={gadgetDen} CategoryImage="gadgetDen" headingImage="Images/gadgetDen.jpg" headingName="Shine On" />
      <ShineOn images={watchThisSpace} CategoryImage="watch the space" headingImage="Images/watchThisSpace.jpg" headingName="watch the space" />
      <ShineOn images={fullyFramed} CategoryImage="fullyFramed" headingImage="Images/fullyFramed.jpg" headingName="Fully Framed" />
      <ShineOn images={shineOnImage} CategoryImage="shineOn" headingImage="Images/ShineOn.jpg" headingName="Shine On" />
      <BewareFraud />

    </div>
  )
}

export default Section;