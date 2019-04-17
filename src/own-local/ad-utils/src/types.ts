// The meaning of these arguments vary depending on the value of the first parameter
// https://github.com/snowplow/snowplow/wiki/2-Specific-event-tracking-with-the-Javascript-tracker#trackPageView
// if p == 'trackPageView' then the following arguments are: page title, array of static context

// https://github.com/snowplow/snowplow/wiki/2-Specific-event-tracking-with-the-Javascript-tracker#custom-structured-events
// if p == 'trackStructEvent' then the following arguments are: category, action, label, property, value, array of static context
export type SnowPlowFunction = (p: any, l: any, o: any, w?: any, i?: any, n?: any, g?: any) => void;

export interface SnowPlowContext {
  schema: string;
  data: {
    aid?: string;
    bid?: string;
    pid?: string;
  };
}

export interface SnowPlow {
  track: SnowPlowFunction;
  context: SnowPlowContext;
}

export type TrackFunction = (category: string, action: string, label: any) => void;

export type TranslateFunction = (
  id: string,
  locale: string,
  defaultValue: string,
  options?: { [variable: string]: string }
) => string;

/*
Here is the shape coming in from the back end. This is a json file stored on S3 that is served via
fastly CDN.

{
  "id": "d6fabe89-4e29-4dd6-a57d-8b8ac7376463",
  "business_id": "2b6cdbb8-3dac-4ae4-b72f-c7979a3d7315",
  "about": "We take great pride in mowing and landscaping. We are a family-owned business and lawn care is our middle name.",
  "categories": ["category2_sub-category2"],
  "headlines": ["this is a headline", "and this is another one"],
  "name": "Test Business",
  "contact": {
    "place": {
      "address1": "123 Main St.",
      "address2": null,
      "city": "Austin",
      "subdivision": "US-TX",
      "county": null,
      "country": "US",
      "postal_code": "78702"
    },
    "email": "dude@business.com",
    "website": "https://google.com",
    "phones": [{
      "number": "+15125010002"
    }]
  },
  "images": {
    "logo": null,
    "picture": {
      "300": "https://s3.amazonaws.com/ownlocal.platform/300/construction--residential-construction-01.jpg",
      "640": "https://s3.amazonaws.com/ownlocal.platform/640/construction--residential-construction-01.jpg",
      "1500": "https://s3.amazonaws.com/ownlocal.platform/1500/construction--residential-construction-01.jpg"
    },
    "horizontal_ad_image_offset": -20,
    "vertical_ad_image_offset": 10,
    "square_ad_image_offset": 0
  },
  "print": {
    "ad_link": "",
    "image": "/uploads/1/large_images.jpg"
  },
  "social": {
    "facebook": "https://facebook.com/test-business",
    "instagram": null,
    "twitter": null,
    "yelp": null
  }
}
*/

export type Layout = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';

export interface Contact {
  place: Place;
  phones: Phone[];
  email?: string;
  website?: string;
}

export interface Phone {
  number: string;
}

export interface Place {
  [key: string]: string | undefined;
  address1?: string;
  address2?: string;
  city?: string;
  subdivision?: string;
  county?: string;
  country?: string;
  postalCode?: string;
}

export interface Images {
  logo?: string;
  picture: {
    sm: string;
    md: string;
    lg: string;
  };
  offsets: {
    horizontal: number;
    vertical: number;
    square: number;
  };
}

export interface Print {
  adLink?: string;
  image?: string;
}

export interface Social {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  yelp?: string;
}

export interface AdRecord {
  adId: string;
  businessId: string;
  partnerId: string;
  partnerName: string;
  partnerDomain: string;
  about?: string;
  name: string;
  categories: string[];
  headlines: string[];
  contact: Contact;
  images: Images;
  print: Print;
  social: Social;
  locale: string;
}
