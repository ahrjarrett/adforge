export interface MetadataType {
    version?: string;
    countries: {
        [country: string]: object;
    };
    countryPhoneCodeToCountries: object;
    countryCallingCodes?: object;
}
