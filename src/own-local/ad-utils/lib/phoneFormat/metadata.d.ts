import { MetadataType } from './types';
export default class Metadata {
    private metadata;
    private selectedCountry;
    private countryMetadata;
    private v1;
    private v2;
    private v3;
    constructor(metadata?: MetadataType);
    hasCountry(country: any): boolean;
    country(country: any): this;
    countryCallingCode(): any;
    IDDPrefix(): any;
    defaultIDDPrefix(): any;
    nationalNumberPattern(): any;
    possibleLengths(): any;
    formats(): any;
    nationalPrefix(): any;
    nationalPrefixFormattingRule(): any;
    nationalPrefixForParsing(): any;
    nationalPrefixTransformRule(): any;
    nationalPrefixIsOptionalWhenFormatting(): boolean;
    leadingDigits(): any;
    types(): any;
    hasTypes(): boolean;
    type(type: any): Type;
    ext(): any;
    countryCallingCodes(): object;
    chooseCountryByCountryCallingCode(countryCallingCode: any): void;
    getSelectedCountry(): object;
}
declare class Type {
    private type;
    private metadata;
    constructor(type: any, metadata: any);
    pattern(): string;
    possibleLengths(): string | void;
}
export declare function validateMetadata(metadata: any): void;
export declare function getExtPrefix(country: any, metadata: any): any;
export {};
