import { bestBrandOffers, fullyFramed, gadgetDen, homeChecklist, hotBoyFits, indianReimagined, nextGeneration, shineOnImage, watchThisSpace, westSideStore } from '../Links';
import { ShineOn, BewareFraud, MainSlider, WScreenImage } from './index'

const shineOnSameList = [
  {
    images: bestBrandOffers,
    CategoryImage: "bestBrandOffers",
    headingImage: "Images/BestBrandsOffer.jpg",
    headingName: "bestBrandOffers",
  },
  {
    images: westSideStore,
    CategoryImage: "westSideStore",
    headingImage: "Images/westSideStore.jpg",
    headingName: "westSideStore",
  },
  {
    images: indianReimagined,
    CategoryImage: "indainReimagined",
    headingImage: "Images/reimagined.jpg",
    headingName: "indainReimagined",
    weddingWonders: "Images/weddingsWonders.jpg"
  },
  {
    images: hotBoyFits,
    CategoryImage: "hotBoyFits",
    headingImage: "Images/hotsBoyFits.jpg",
    headingName: "hotBoyFits",
  },
  {
    images: nextGeneration,
    CategoryImage: "next-Genration",
    headingImage: "Images/nextGenFashion.jpg",
    headingName: "next-Genration",
  },
  {
    images: homeChecklist,
    CategoryImage: "Home Checklist",
    headingImage: "Images/homeCheckList.jpg",
    headingName: "Home Checklist",
  },
  {
    images: gadgetDen,
    CategoryImage: "Gadget Den",
    headingImage: "Images/gadgetDen.jpg",
    headingName: "Gadget Den",
  },
  {
    images: watchThisSpace,
    CategoryImage: "watchSpace",
    headingImage: "Images/watchThisSpace.jpg",
    headingName: "watchSpace",
  },
  {
    images: fullyFramed,
    CategoryImage: "fullyFramed",
    headingImage: "Images/fullyFramed.jpg",
    headingName: "Fully Framed",
  },
  {
    images: shineOnImage,
    CategoryImage: "shineOn",
    headingImage: "Images/ShineOn.jpg",
    headingName: "Shine On",
  },
]
const smallImages = ["01westside.png", "02womenswear.png", "03mensWear.png", "04handBags.png","05Watches.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png" ]

function Section() {
  return (
    <div className='w-full box-border bg-lightGray pt-1 pb-24'>
    
      <MainSlider  />
      <WScreenImage images={smallImages}/>
      <div className='w-4/5 mx-auto flex justify-center gap-3 mb-10 '>
        <div>
          <img src="Images/loanApply.jpg" alt="loanApply" />
        </div>
        <div>
          <img src="Images/paytmCashback.jpg" alt="paytmCashback" />
        </div>
        <div>
          <img src="Images/bankJ&K.jpg" alt="bankJ&K" />
        </div>
      </div>
      {
        shineOnSameList.map((item, index) => {
          const { images, CategoryImage, headingImage, headingName, weddingWonders = "" } = item || {}
          return <ShineOn key={index} images={images} CategoryImage={CategoryImage} headingImage={headingImage} headingName={headingName} weddingWonders={weddingWonders} />
        })
      }
      <BewareFraud />

    </div>
  )
}

export default Section;