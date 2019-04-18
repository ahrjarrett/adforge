import * as React from "react"
import { compact, get, isNull } from "lodash"
import AdUnit from "@own-local/ad-unit/lib/AdUnit.js"
import { AdRecord } from "../types/adRecord.types"

const defaultAd = {
  horizontal_ad_image_offset: 0,
  vertical_ad_image_offset: 0,
  square_ad_image_offset: 0,
  offer_text: "Enter message 1",
  offer_text_2: "Message pt 2",
  offer_text_3: "Final part of the message!",
  "background_image_url.300": "https://i.imgur.com/do1G6aY.png",
  "background_image_url.640": "https://i.imgur.com/do1G6aY.png",
  "background_image_url.1500": "https://i.imgur.com/do1G6aY.png",
}

const makeAd = ({ img, headlines, horizontal, vertical, square }) => ({
  ...defaultAd,
  horizontal_ad_image_offset: horizontal,
  vertical_ad_image_offset: vertical,
  square_ad_image_offset: square,
  offer_text: headlines[0] || defaultAd.offer_text,
  offer_text_2: headlines[1] || defaultAd.offer_text_2,
  offer_text_3: headlines[2] || defaultAd.offer_text_3,
  "background_image_url.300": img,
  "background_image_url.640": img,
  "background_image_url.1500": img,
})



const business = {
  "description": "<p>We connect our neighbors from Big Sky to Bigfork, offering unmatched professionalism and warm Montana hospitality. Our agents are experienced, connected and forward thinking. When you work with an agent from Berkshire Hathaway HomeServices Montana Properties, you can be assured they will work with you every step of the way to provide quality real estate service.</p>\n",
  "name": "Berkshire Hathaway HomeServices Montana Properties",
  "id": 68675290,
  "uuid": "221dbe69-956f-45f0-8b16-e0904ee813c2",
  "category": "real_estate",
  "subcategory": "real_estate_agents",
  "website": "http://www.bhhsmt.com/",
  "logo_url": "https://s3.amazonaws.com/ownlocal-platform-production/public/images/logos/600/190fceb2-78a1-45f1-b9d9-ddce2df694fd.jpeg",
  "email": "info@bhhsmt.com",
  "facebook_url": "https://facebook.com/bhhsrealestate",
  "instagram_url": "https://instagram.com/bhhsrealestate",
  "youtube_url": null,
  "yelp_url": null,
  "twitter_url": "https://twitter.com/bhhsmt",
  "location": {
    "locale": "en-US",
    "place": {
      "address1": "201 1st St W",
      "address2": "",
      "city": "Polson",
      "country": "US",
      "postal_code": "59860",
      "subdivision": "US-MT"
    },
    "phones": [
      {
        "id": 737437,
        "label": "Primary",
        "number": "+14068833800"
      }
    ],
    "id": 860080
  }
}

export const transformToPayload = (
  ad: object,
  business?: object,
  offerTextOverride?: string,
): AdRecord => ({
  adId: '',
  businessId: '',
  partnerId: '',
  name: get(business, 'name', ''),
  categories: [],
  headlines:
    offerTextOverride === undefined
      ? compact([get(ad, 'offer_text'), get(ad, 'offer_text_2'), get(ad, 'offer_text_3')])
      : [offerTextOverride],
  contact: {
    place: get(business, 'location.place', {}),
    email: get(business, 'email'),
    website: get(business, 'website'),
    phones: get(business, 'location.phones', []).map(phone => ({ number: phone.number })),
  },
  images: {
    logo: get(business, 'logo_url'),
    picture: {
      sm: get(ad, 'background_image_url.640'),
      md: get(ad, 'background_image_url.640'),
      lg: get(ad, 'background_image_url.1500'),
    },
    offsets: {
      horizontal: parseInt(get(ad, 'horizontal_ad_image_offset', 0), 10),
      vertical: parseInt(get(ad, 'vertical_ad_image_offset', 0), 10),
      square: parseInt(get(ad, 'square_ad_image_offset', 0), 10),
    },
  },
  print: {
    // TODO: connect this to the ad object.
    // ad_link: '',
    // image: '/uploads/1/large_images.jpg',
  },
  social: {
    youtube: get(business, 'youtube_url'),
    facebook: get(business, 'facebook_url'),
    instagram: get(business, 'instagram_url'),
    twitter: get(business, 'twitter_url'),
    yelp: get(business, 'yelp_url'),
  },
});


interface AresProps {
  image: string
  offsets: {
    horizontal: number, vertical: number, square: number
  }
  headlines: string[]
  dimesions: {
    height: string
    width: string
  }
}

const Ares = (props: AresProps) => {
  const { image, offsets, headlines, dimensions } = props
  const { horizontal, vertical, square } = offsets
  const { width, height } = dimensions

// const makeAd = (img, headlines, horizontal, vertical, square) => ({

  const value = transformToPayload(makeAd({ img: image, headlines, horizontal, vertical, square }), business)
  const json = JSON.stringify(value)
  const record: string = window.btoa(json);
  console.log("record:", record)
  console.log("json:", json)
  console.log("value:", value)

  return (
    <div>
      <iframe 
        src={`https://origami.secure.ownlocal.com/origami_unit/index.html?record=${record}`} 
        width={width}
        height={height}
        style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 8px"}}
      />
    </div>
  )
}

export default Ares


/*
  <AdUnit
    data={adRecord}
    layout={1}
    track={(category, action, label) => {
      // console.log('track function args:', category, action, label)
      return null
    }}
    translateString={(id, locale, defaultValue, options) => {
      // console.log('translate function args:', id, locale, defaultValue, options)
      return null
    }}
  /> 
*/


// const CustomImage = {
//   logo: null,
//   picture: {
//     sm: '',
//     md: '',
//     lg: ''
//   },
//   offsets: {
//     horizontal: 0,
//     vertical: 0,
//     square: 0
//   },
// }

// const CustomPlace = {
//   address1: '123 Main St',
//   address2: '',
//   city: 'Denver',
//   subdivision: '',
//   county: '',
//   country: '',
//   postalCode: '80124'
// }

// const AdRecord = {
//   adId: '1e089241-0ea8-4bcd-b502-1b8012477088',
//   businessId: '5141f131-8c24-4e8f-9f8a-5560e5372b6b', 
//   partnerId: '5115',
//   partnerName: 'Sud Info - AdForge',
//   partnerDomain: 'https://www.sudinfo.be/',
//   partnerContactEnabled: true,
//   about: 'About section!',
//   name: 'Business name!',
//   categories: ['Painters'],
//   headlines: ['Ad thing 1', 'Ad headline 2', 'Ad headline 3'],
//   contact: {
//     place: CustomPlace,
//     phones: [{
//       "number": "+15125010002"
//     }],
//     email: 'jarrett@ownlocal.com',
//     website: 'https://ares.ahrjarrett.com'
//   },
//   images: CustomImage,
//   print: {
//     "ad_link": "",
//     "image": "/uploads/1/large_images.jpg"
//   },
//   social: {
//     facebook: "https://facebook.com/test-business",
//     instagram: null,
//     twitter: null,
//     yelp: null
//   },
//   locale: 'en'
