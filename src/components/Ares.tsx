import * as React from "react"
import AdUnit from "@own-local/ad-unit"

const CustomImage = {
  logo: null,
  picture: {
    sm: 'https://s3.amazonaws.com/ownlocal-services-production/public/images/categories/640/8e535c8a-960a-427b-908a-cecd8005aa18.jpeg',
    md: 'https://s3.amazonaws.com/ownlocal-services-production/public/images/categories/640/8e535c8a-960a-427b-908a-cecd8005aa18.jpeg',
    lg: 'https://s3.amazonaws.com/ownlocal-services-production/public/images/categories/640/8e535c8a-960a-427b-908a-cecd8005aa18.jpeg'
  },
  offsets: {
    horizontal: 10,
    vertical: -20,
    square: 0
  },
}

const CustomPlace = {
  address1: '123 Main St',
  address2: '',
  city: 'Denver',
  subdivision: '',
  county: '',
  country: '',
  postalCode: '80124'
}

const AdRecord = {
  adId: '1e089241-0ea8-4bcd-b502-1b8012477088',
  businessId: '5141f131-8c24-4e8f-9f8a-5560e5372b6b', 
  partnerId: '5115',
  partnerName: 'Sud Info - AdForge',
  partnerDomain: 'https://www.sudinfo.be/',
  partnerContactEnabled: true,
  about: 'About section!',
  name: 'Business name!',
  categories: ['Painters'],
  headlines: ['Ad thing 1', 'Ad headline 2', 'Ad headline 3'],
  contact: {
    place: CustomPlace,
    phones: [{
      "number": "+15125010002"
    }],
    email: 'jarrett@ownlocal.com',
    website: 'https://ares.ahrjarrett.com'
  },
  images: CustomImage,
  print: {
    "ad_link": "",
    "image": "/uploads/1/large_images.jpg"
  },
  social: {
    facebook: "https://facebook.com/test-business",
    instagram: null,
    twitter: null,
    yelp: null
  },
  locale: 'en'
}

interface AresProps {
  image: string
  offsets: {
    horizontal: number, vertical: number, square: number
  }
  headlines: string[]
  height: string
  width: string
}

const Ares = (props: AresProps) => {
  const images = {
    ...CustomImage, 
    picture: { 
      sm: props.image, 
      md: props.image, 
      lg: props.image 
    }, 
    offsets: props.offsets 
  }
  const adRecord = {
    ...AdRecord,
    images,
    headlines: props.headlines
  }

  console.log("adRecord:", adRecord)
  
  // type Layout = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'
  return (
    <AdUnit
      data={adRecord}
      layout={1}
      track={(category, action, label) => return undefined}
      translateString={(id, locale, defaultValue, options) => return undefined}
      style={{height: props.height, width: props.width}}
    />
  )
}

export default Ares
