// Includes only the functions that we need from https://www.npmjs.com/package/libphonenumber-js
import format from './phoneFormat';

// This file is a copy of https://www.npmjs.com/package/iso-3166-2 but just
// with the countries and functions we need
import { getSubdivisionFromCode } from './iso3166';

import { Place } from './types';

const compact = <T extends {}>(arr: T[]): T[] => arr.filter(val => val);

const getSubdivision = (country: string, subdivision: string, kind: string): string => {
  if (!subdivision || !kind) {
    return '';
  }

  const possibleSub = getSubdivisionFromCode(subdivision);

  if (possibleSub && possibleSub.countryCode === country) {
    return possibleSub[kind] || '';
  }

  return subdivision || '';
};

interface Config {
  // The returned array corresponds to lines when displaying the address
  address: (address: Place, renderCompact: boolean) => string[];
  // Safe to hide these place fields in forms
  hiddenPlaceFields: string[];
  // Fields with different localization keys
  renamedLabels?: object;
  customSubdivisions?: object;
  findSubdivision?: (subdivisionCode: string) => string;
}

const configs: { [country: string]: Config } = {
  US: {
    address: ({ address1, address2, city, subdivision, postalCode, country }, renderCompact) => {
      const state = configs.US.findSubdivision(subdivision);

      const formattedAddress = compact([
        compact([address1, address2]).join(', '),
        compact([city ? `${city}, ${state}` : state, postalCode]).join(' '),
      ]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: [],
    renamedLabels: { subdivision: 'state', postal_code: 'zip_code' },
    findSubdivision: subdivisionCode => getSubdivision('US', subdivisionCode, 'regionCode'),
  },

  GB: {
    address: ({ address1, address2, postalCode, city, country, subdivision }, renderCompact) => {
      const county = configs.GB.findSubdivision(subdivision);
      const formattedAddress = compact([address1, address2, city, county, postalCode]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: [],
    renamedLabels: {
      subdivision: 'county',
      postal_code: 'post_code',
      address2: 'locality',
      city: 'post_town',
    },
    findSubdivision: subdivisionCode => getSubdivision('GB', subdivisionCode, 'name'),
  },

  CA: {
    address: (
      { address1, address2, city, subdivision, postalCode, country },
      renderCompact
    ): string[] => {
      const province = configs.CA.findSubdivision(subdivision);

      const formattedAddress = compact([
        compact([address1, address2]).join(', '),
        compact([city ? `${city}, ${province}` : province, postalCode]).join(' '),
      ]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: [],
    renamedLabels: { subdivision: 'province' },
    findSubdivision: subdivisionCode => getSubdivision('CA', subdivisionCode, 'regionCode'),
  },

  AU: {
    address: ({ address1, address2, city, subdivision, postalCode, country }, renderCompact) => {
      const state = configs.AU.findSubdivision(subdivision);

      const formattedAddress = compact([
        address1 || '',
        address2 || '',
        compact([city ? `${city}, ${state}` : state, postalCode]).join(' '),
      ]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: [],
    renamedLabels: { subdivision: 'state' },
    findSubdivision: subdivisionCode => getSubdivision('AU', subdivisionCode, 'regionCode'),
  },

  /* Sample German Address:
    Herrn                         ["to Mr." (form of address)]
    Eberhard Wellhausen           [name]
    Wittekindshof                 [institution / company name]
    Schulstrasse 4                [street address]
    32547 Bad Oyenhausen          [postal code + city/town]
  */
  DE: {
    address: ({ address1, address2, city, postalCode }, renderCompact): string[] => {
      const formattedAddress = compact([
        compact([address1, address2]).join(', '),
        ...compact([city ? `${postalCode} ${city}` : postalCode]),
      ]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: [],
    renamedLabels: { subdivision: 'state' },
  },

  NL: {
    address: ({ address1, address2, city, postalCode }, renderCompact) => {
      const formattedAddress = compact([address2, address1, compact([postalCode, city]).join(' ')]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: ['subdivision'],
    renamedLabels: {
      address1: 'address',
      address2: 'building_name',
      city: 'locality',
      postal_code: 'post_code',
    },
  },

  // Based on this: https://primacomputing.co.nz/PRIMAMetro/images/AVSSample.jpg
  NZ: {
    address: ({ address1, address2, city, subdivision, postalCode, country }, renderCompact) => {
      const subdivisionValue = configs.NZ.findSubdivision(subdivision);

      const formattedAddress = compact([
        address1,
        address2,
        city,
        compact([subdivisionValue, postalCode]).join(' '),
      ]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: [],
    renamedLabels: { city: 'Locality', subdivision: 'City' },
    findSubdivision: subdivisionCode => getSubdivision('NZ', subdivisionCode, 'name'),
  },

  PA: {
    address: ({ address1, address2, city, subdivision }, renderCompact) => {
      const state = configs.PA.findSubdivision(subdivision);

      const formattedAddress = compact([address1, address2, city, state]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    customSubdivisions: {
      BC: 'Bocas del Toro',
      PA: 'Panamá Oeste',
      CC: 'Coclé',
      CL: 'Colón',
      CH: 'Chiriquí',
      DA: 'Darién',
      HE: 'Herrera',
      LS: 'Los Santos',
      PM: 'Panamá',
      VR: 'Veraguas',
      EM: 'Emberá',
      SB: 'Kuna Yala',
      NB: 'Ngöbe-Buglé',
    },
    hiddenPlaceFields: ['postal_code'],
    renamedLabels: {},
    findSubdivision: subdivisionCode => {
      const customState = configs.PA.customSubdivisions[subdivisionCode.split('-')[1]];

      if (customState) {
        return customState;
      }
    },
  },

  BE: {
    address: ({ address1, address2, city, postalCode }, renderCompact) => {
      const formattedAddress = compact([address1, address2, compact([city, postalCode]).join(' ')]);

      if (renderCompact) {
        return [formattedAddress.join(', ')];
      }

      return formattedAddress;
    },
    hiddenPlaceFields: ['subdivision'],
    renamedLabels: {},
  },
};

export const renamedLabels = (country?: string): object => {
  if (!country) {
    return {};
  }

  if (configs[country]) {
    return configs[country].renamedLabels;
  }

  return {};
};

export const hiddenPlaceFields = (country?: string): string[] => {
  if (!country) {
    return [];
  }

  const labels = configs[country];

  if (!labels) {
    return [];
  }

  return labels.hiddenPlaceFields;
};

export const formatPhoneNumber = (phone: string, country: string): string =>
  format(phone, country, 'National');

export const findSubdivision = (subdivisionCode: string, country: string): string | void => {
  if (!configs[country]) {
    return `No formatter for ${country}`;
  }

  if (!configs[country].findSubdivision) {
    return subdivisionCode;
  }

  return configs[country].findSubdivision(subdivisionCode);
};

export const formatAddress = (
  address: Place,
  country: string,
  renderCompact: boolean = false
): string[] =>
  configs[country]
    ? configs[country].address(address, renderCompact)
    : [`No formatter for ${country}`];

export default configs;
