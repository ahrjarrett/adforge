export declare type SnowPlowFunction = (p: any, l: any, o: any, w?: any, i?: any, n?: any, g?: any) => void;
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
export declare type TrackFunction = (category: string, action: string, label: any) => void;
export declare type TranslateFunction = (id: string, locale: string, defaultValue: string, options?: {
    [variable: string]: string;
}) => string;
export declare type Layout = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
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
