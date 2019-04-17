export interface CountryInfo {
    name: string;
    sub: {
        [code: string]: SubdivisionInfo;
    };
    code?: string;
}
export interface SubdivisionInfo {
    type: string;
    name: string;
    countryName?: string;
    countryCode?: string;
    code?: string;
    regionCode?: string;
}
