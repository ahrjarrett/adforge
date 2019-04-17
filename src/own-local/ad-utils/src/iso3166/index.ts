import countryCodes from './countries';
import data from './subdivisions';

import { SubdivisionInfo } from './types';

export const getSubdivisionFromCode = (country: string, code?: string): SubdivisionInfo | null => {
  let countryCode = country;
  let subdivisionCode = code;

  // If `code` is undefined assume that the full code is in `country`
  if (code === undefined) {
    code = country.trim().toUpperCase();

    const parts = code.split('-');

    // A full subdivision code must have exactly two parts.
    if (parts.length !== 2) {
      return null;
    }

    countryCode = parts[0];
    subdivisionCode = parts[1];
  }

  // ISO-3166-1 alpha 3 code?
  if (countryCode.length === 3) {
    countryCode = countryCodes[countryCode];
  }

  let fullSubCode = `${countryCode}-${subdivisionCode}`;

  // This country code does not exist in our data set.
  if (!data.hasOwnProperty(countryCode)) {
    return null;
  }

  // All of a country's subdivisions.
  const subdivisions = data[countryCode].sub;
  let record = subdivisions[fullSubCode];

  // If we could not find the subdivision by its code try testing
  // subdivision names.
  if (record === undefined) {
    for (const key in subdivisions) {
      if (
        subdivisions.hasOwnProperty(key) &&
        subdivisions[key].name.toUpperCase() === subdivisionCode.toUpperCase()
      ) {
        record = subdivisions[key];
        fullSubCode = key;
        break;
      }
    }

    // If we still couldn't find it return empty record.
    if (record === undefined) {
      return null;
    }
  }

  // Add some useful data.
  record.countryName = data[countryCode].name;
  record.countryCode = countryCode;
  record.code = fullSubCode;
  record.regionCode = fullSubCode.split('-').length === 2 ? fullSubCode.split('-')[1] : '';

  return record;
};
