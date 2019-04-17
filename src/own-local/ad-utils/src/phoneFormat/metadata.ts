import defaultMetadata from './defaultMetadata';

import { MetadataType } from './types';

const compare = (a: string, b: string): number => {
  const pa = a.split('.');
  const pb = b.split('.');
  for (let i = 0; i < 3; i++) {
    const na = Number(pa[i]);
    const nb = Number(pb[i]);
    if (na > nb) {
      return 1;
    }
    if (nb > na) {
      return -1;
    }
    if (!isNaN(na) && isNaN(nb)) {
      return 1;
    }
    if (isNaN(na) && !isNaN(nb)) {
      return -1;
    }
  }
  return 0;
};

// Added "possibleLengths" and renamed
// "countryPhoneCodeToCountries" to "countryCallingCodes".
const V2 = '1.0.18';

// Added "idd_prefix" and "default_idd_prefix".
const V3 = '1.2.0';

const DEFAULT_EXT_PREFIX = ' ext. ';

export default class Metadata {
  private metadata: MetadataType;
  private selectedCountry: object;
  private countryMetadata: object;
  private v1: boolean;
  private v2: boolean;
  private v3: boolean;

  constructor(metadata = defaultMetadata) {
    validateMetadata(metadata);

    this.metadata = metadata;

    this.v1 = !metadata.version;
    this.v2 = metadata.version !== undefined && compare(metadata.version, V3) === -1;
    this.v3 = metadata.version !== undefined;
  }

  public hasCountry(country) {
    return this.metadata.countries[country] !== undefined;
  }

  public country(country) {
    if (!country) {
      this.selectedCountry = undefined;
      this.countryMetadata = undefined;
      return this;
    }

    if (!this.hasCountry(country)) {
      throw new Error(`Unknown country: ${country}`);
    }

    this.selectedCountry = country;
    this.countryMetadata = this.metadata.countries[country];
    return this;
  }

  public countryCallingCode() {
    return this.countryMetadata[0];
  }

  public IDDPrefix() {
    if (this.v1 || this.v2) {
      return;
    }
    return this.countryMetadata[1];
  }

  public defaultIDDPrefix() {
    if (this.v1 || this.v2) {
      return;
    }
    return this.countryMetadata[12];
  }

  public nationalNumberPattern() {
    if (this.v1 || this.v2) {
      return this.countryMetadata[1];
    }
    return this.countryMetadata[2];
  }

  public possibleLengths() {
    if (this.v1) {
      return;
    }
    return this.countryMetadata[this.v2 ? 2 : 3];
  }

  public formats() {
    const formats = this.countryMetadata[this.v1 ? 2 : this.v2 ? 3 : 4] || [];
    return formats.map(_ => new Format(_, this));
  }

  public nationalPrefix() {
    return this.countryMetadata[this.v1 ? 3 : this.v2 ? 4 : 5];
  }

  public nationalPrefixFormattingRule() {
    return this.countryMetadata[this.v1 ? 4 : this.v2 ? 5 : 6];
  }

  public nationalPrefixForParsing() {
    // If `national_prefix_for_parsing` is not set explicitly,
    // then infer it from `national_prefix` (if any)
    return this.countryMetadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix();
  }

  public nationalPrefixTransformRule() {
    return this.countryMetadata[this.v1 ? 6 : this.v2 ? 7 : 8];
  }

  public nationalPrefixIsOptionalWhenFormatting() {
    return !!this.countryMetadata[this.v1 ? 7 : this.v2 ? 8 : 9];
  }

  public leadingDigits() {
    return this.countryMetadata[this.v1 ? 8 : this.v2 ? 9 : 10];
  }

  public types() {
    return this.countryMetadata[this.v1 ? 9 : this.v2 ? 10 : 11];
  }

  public hasTypes() {
    // Versions 1.2.0 - 1.2.4: can be `[]`.
    /* istanbul ignore next */
    if (this.types() && this.types().length === 0) {
      return false;
    }
    // Versions <= 1.2.4: can be `undefined`.
    // Version >= 1.2.5: can be `0`.
    return !!this.types();
  }

  public type(type) {
    if (this.hasTypes() && getType(this.types(), type)) {
      return new Type(getType(this.types(), type), this);
    }
  }

  public ext() {
    if (this.v1 || this.v2) {
      return DEFAULT_EXT_PREFIX;
    }
    return this.countryMetadata[13] || DEFAULT_EXT_PREFIX;
  }

  public countryCallingCodes() {
    if (this.v1) {
      return this.metadata.countryPhoneCodeToCountries;
    }
    return this.metadata.countryCallingCodes;
  }

  // Formatting information for regions which share
  // a country calling code is contained by only one region
  // for performance reasons. For example, for NANPA region
  // ("North American Numbering Plan Administration",
  //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
  // it will be contained in the metadata for `US`.
  //
  // `country_calling_code` is always valid.
  // But the actual country may not necessarily be part of the metadata.
  //
  public chooseCountryByCountryCallingCode(countryCallingCode) {
    const country = this.countryCallingCodes()[countryCallingCode][0];

    // Do not want to test this case.
    // (custom metadata, not all countries).
    /* istanbul ignore else */
    if (this.hasCountry(country)) {
      this.country(country);
    }
  }

  public getSelectedCountry() {
    return this.selectedCountry;
  }
}

class Format {
  private format: object;
  private metadata: {
    nationalPrefixFormattingRule: () => void;
    nationalPrefixIsOptionalWhenFormatting: () => void;
  };

  constructor(format, metadata) {
    this.format = format;
    this.metadata = metadata;
  }

  public pattern() {
    return this.format[0];
  }

  public getFormat() {
    return this.format[1];
  }

  public leadingDigitsPatterns() {
    return this.format[2] || [];
  }

  public nationalPrefixFormattingRule() {
    return this.format[3] || this.metadata.nationalPrefixFormattingRule();
  }

  public nationalPrefixIsOptionalWhenFormatting() {
    return !!this.format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting();
  }

  public nationalPrefixIsMandatoryWhenFormatting() {
    // National prefix is omitted if there's no national prefix formatting rule
    // set for this country, or when the national prefix formatting rule
    // contains no national prefix itself, or when this rule is set but
    // national prefix is optional for this phone number format
    // (and it is not enforced explicitly)
    return (
      this.nationalPrefixFormattingRule() &&
      // Check that national prefix formatting rule is not a dummy one.
      // Check that national prefix formatting rule actually has national prefix digit(s).
      this.usesNationalPrefix() &&
      // Or maybe national prefix is optional for this format
      !this.nationalPrefixIsOptionalWhenFormatting()
    );
  }

  // Checks whether national prefix formatting rule contains national prefix
  public usesNationalPrefix() {
    // Check that national prefix formatting rule is not a dummy one
    return (
      this.nationalPrefixFormattingRule() !== '$1' &&
      // Check that national prefix formatting rule actually has national prefix digit(s)
      /\d/.test(this.nationalPrefixFormattingRule().replace('$1', ''))
    );
  }

  public internationalFormat() {
    return this.format[5] || this.getFormat();
  }
}

class Type {
  private type: string;
  private metadata: {
    v1: string;
    possibleLengths: () => void;
  };

  constructor(type, metadata) {
    this.type = type;
    this.metadata = metadata;
  }

  public pattern() {
    if (this.metadata.v1) {
      return this.type;
    }
    return this.type[0];
  }

  public possibleLengths() {
    if (this.metadata.v1) {
      return;
    }
    return this.type[1] || this.metadata.possibleLengths();
  }
}

function getType(types, type) {
  switch (type) {
    case 'FIXED_LINE':
      return types[0];
    case 'MOBILE':
      return types[1];
    case 'TOLL_FREE':
      return types[2];
    case 'PREMIUM_RATE':
      return types[3];
    case 'PERSONAL_NUMBER':
      return types[4];
    case 'VOICEMAIL':
      return types[5];
    case 'UAN':
      return types[6];
    case 'PAGER':
      return types[7];
    case 'VOIP':
      return types[8];
    case 'SHARED_COST':
      return types[9];
  }
}

export function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
  }

  // `countryPhoneCodeToCountries` was renamed to
  // `countryCallingCodes` in `1.0.18`.
  if (
    !isObject(metadata) ||
    !isObject(metadata.countries) ||
    (!isObject(metadata.countryCallingCodes) && !isObject(metadata.countryPhoneCodeToCountries))
  ) {
    throw new Error(
      `[libphonenumber-js] \`metadata\` argument was passed but it's not a valid metadata. Must be an object having \`.countries\` and \`.countryCallingCodes\` child object properties. Got ${
        isObject(metadata)
          ? 'an object of shape: { ' + Object.keys(metadata).join(', ') + ' }'
          : 'a ' + typeOf(metadata) + ': ' + metadata
      }.`
    );
  }
}

// Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".
/* istanbul ignore next */
const isObject = _ => typeof _ === 'object';

// Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".
/* istanbul ignore next */
const typeOf = _ => typeof _;

export function getExtPrefix(country, metadata) {
  return new Metadata(metadata).country(country).ext();
}
