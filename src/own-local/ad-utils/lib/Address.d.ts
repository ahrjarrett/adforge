import { Place } from './types';
export declare const urlEncodedAddress: (place: Place) => string;
interface AddressProps {
    place: Place;
}
declare const Address: (props: AddressProps) => JSX.Element;
export default Address;
