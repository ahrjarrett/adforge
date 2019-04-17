import { Place } from './types';
interface Config {
    address: (address: Place, renderCompact: boolean) => string[];
    hiddenPlaceFields: string[];
    renamedLabels?: object;
    customSubdivisions?: object;
    findSubdivision?: (subdivisionCode: string) => string;
}
declare const configs: {
    [country: string]: Config;
};
export declare const renamedLabels: (country?: string) => object;
export declare const hiddenPlaceFields: (country?: string) => string[];
export declare const formatPhoneNumber: (phone: string, country: string) => string;
export declare const findSubdivision: (subdivisionCode: string, country: string) => string | void;
export declare const formatAddress: (address: Place, country: string, renderCompact?: boolean) => string[];
export default configs;
