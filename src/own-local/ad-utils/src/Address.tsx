/* tslint:disable-next-line no-implicit-dependencies */
import * as React from 'react';

import { findSubdivision, formatAddress } from './formatter';
import { Place } from './types';

export const urlEncodedAddress = (place: Place): string => {
  const addressParts: string[] = [];

  Object.keys(place).forEach((key: string) => {
    let addressPart = place[key] || '';

    if (addressPart) {
      if (key === 'subdivision') {
        addressPart = findSubdivision(addressPart, place.country || '') || '';
      }

      addressParts.push(addressPart.replace(/\s+/g, '+'));
    }
  });

  return addressParts.join('+');
};

interface AddressProps {
  place: Place;
}

const Address = (props: AddressProps) => {
  const { place } = props;
  const formattedAddress = formatAddress(place, place.country || '');

  if (formattedAddress.length === 1) {
    return <span className="text strong">{formattedAddress[0]}</span>;
  }

  return (
    <React.Fragment>
      <span className="text strong">{formattedAddress[0]}</span>
      <span className="text weak">{formattedAddress[1]}</span>
    </React.Fragment>
  );
};

export default Address;
