
export type Phone = {
  number: string,
};

export type Place = {
  address1?: string,
  address2?: string,
  city?: string,
  subdivision?: string,
  county?: string,
  country?: string,
  postalCode?: string,
};

export type Contact = {
  place: Place,
  phones: Phone[],
  email?: string,
  website?: string,
};

export type Images = {
  logo?: string,
  picture: {
    sm: string,
    md: string,
    lg: string,
  },
  offsets: {
    horizontal: number,
    vertical: number,
    square: number,
  },
};

export type Print = {
  adLink?: string,
  image?: string,
};

export type Social = {
  facebook?: string,
  instagram?: string,
  twitter?: string,
  yelp?: string,
  youtube?: string,
};

export type AdRecord = {
  adId: string,
  businessId: string,
  partnerId: string,
  about?: string,
  name: string,
  categories: string[],
  headlines: string[],
  contact: Contact,
  images: Images,
  print: Print,
  social: Social,
};