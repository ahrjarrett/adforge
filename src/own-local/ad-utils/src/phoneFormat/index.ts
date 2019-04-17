import { extractCountryCallingCode, matches_entirely, VALID_PUNCTUATION } from './common';

import Metadata from './metadata';

const defaultOptions = {
  formatExtension: (phoneNumber, extension, metadata) =>
    `${phoneNumber}${metadata.ext()}${extension}`,
};

// Formats a phone number
//
// Example use cases:
//
// ```js
// format('+78005553535', 'National')
// format('+78005553535', 'National', metadata)
// ```
//
export default function format(arg1, arg2, arg3, arg4?, arg5?) {
  const { input, formatType, options, metadata } = sortOutArguments(arg1, arg2, arg3, arg4, arg5);

  if (input.country && metadata.hasCountry(input.country)) {
    metadata.country(input.country);
  }

  // `phoneNumber` is a national (significant) number in this case.
  let { countryCallingCode, phoneNumber } = extractCountryCallingCode(input.phone, null, metadata);

  countryCallingCode = countryCallingCode || input.countryCallingCode;

  if (countryCallingCode) {
    // Check country restriction
    if (
      input.country &&
      metadata.getSelectedCountry() &&
      countryCallingCode !== metadata.countryCallingCode()
    ) {
      return input.phone;
    }

    metadata.chooseCountryByCountryCallingCode(countryCallingCode);
  }

  if (!metadata.getSelectedCountry()) {
    return input.phone;
  }

  switch (formatType) {
    case 'National':
      if (!phoneNumber) {
        return '';
      }
      phoneNumber = format_national_number(phoneNumber, 'National', true, metadata);
      return addExtension(phoneNumber, input.ext, metadata, options.formatExtension);
  }
}

// This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly.  Therefore, we use \d, so that the first
// group actually used in the pattern will be matched.
export const FIRST_GROUP_PATTERN = /(\$\d)/;

export function format_national_number_using_format(
  phoneNumber,
  formatValue,
  international,
  enforceNationalPrefix,
  metadata
) {
  const formatPatternMatcher = new RegExp(formatValue.pattern());

  // National prefix is omitted if there's no national prefix formatting rule
  // set for this country, or when this rule is set but
  // national prefix is optional for this phone number format
  // (and it is not enforced explicitly)
  const nationalPrefixMayBeOmitted =
    !formatValue.nationalPrefixFormattingRule() ||
    (formatValue.nationalPrefixFormattingRule() &&
      formatValue.nationalPrefixIsOptionalWhenFormatting() &&
      !enforceNationalPrefix);

  if (!international && !nationalPrefixMayBeOmitted) {
    return phoneNumber.replace(
      formatPatternMatcher,
      formatValue
        .getFormat()
        .replace(FIRST_GROUP_PATTERN, formatValue.nationalPrefixFormattingRule())
    );
  }

  const formattedNumber = phoneNumber.replace(
    formatPatternMatcher,
    international ? formatValue.internationalFormat() : formatValue.getFormat()
  );

  if (international) {
    return localToInternationalStyle(formattedNumber);
  }

  return formattedNumber;
}

function format_national_number(phoneNumber, formatAs, enforceNationalPrefix, metadata) {
  const formatValue = chooseFormatForNumber(metadata.formats(), phoneNumber);

  if (!formatValue) {
    return phoneNumber;
  }

  return format_national_number_using_format(
    phoneNumber,
    formatValue,
    formatAs === 'International',
    enforceNationalPrefix,
    metadata
  );
}

export function chooseFormatForNumber(availableFormats, nationalNumber) {
  for (const formatValue of availableFormats) {
    // Validate leading digits
    if (formatValue.leadingDigitsPatterns().length > 0) {
      // The last leading_digits_pattern is used here, as it is the most detailed
      const lastLeadingDigitsPattern = formatValue.leadingDigitsPatterns()[
        formatValue.leadingDigitsPatterns().length - 1
      ];

      // If leading digits don't match then move on to the next phone number format
      if (nationalNumber.search(lastLeadingDigitsPattern) !== 0) {
        continue;
      }
    }

    // Check that the national number matches the phone number format regular expression
    if (matches_entirely(nationalNumber, formatValue.pattern())) {
      return formatValue;
    }
  }
}

// Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//
export function localToInternationalStyle(local) {
  return local.replace(new RegExp(`[${VALID_PUNCTUATION}]+`, 'g'), ' ').trim();
}

function sortOutArguments(arg1, arg2, arg3, arg4, arg5) {
  let input;
  let formatType;
  let options;
  let metadata;

  // If the phone number is passed as a string.
  // `format('8005553535', ...)`.
  if (typeof arg1 === 'string') {
    // If country code is supplied.
    // `format('8005553535', 'RU', 'National', [options], metadata)`.
    if (typeof arg3 === 'string') {
      // Will be `parse()`d later in code
      input = {
        phone: arg1,
        country: arg2,
      };

      formatType = arg3;

      if (arg5) {
        options = arg4;
        metadata = arg5;
      } else {
        metadata = arg4;
      }
    }
    // Just an international phone number is supplied
    // `format('+78005553535', 'National', [options], metadata)`.
    else {
      // Will be `parse()`d later in code
      input = {
        phone: arg1,
      };

      if (typeof arg2 !== 'string') {
        throw new Error('`format` argument not passed to `formatNumber(number, format)`');
      }

      formatType = arg2;

      if (arg4) {
        options = arg3;
        metadata = arg4;
      } else {
        metadata = arg3;
      }
    }
  }
  // If the phone number is passed as a parsed number object.
  // `format({ phone: '8005553535', country: 'RU' }, 'National', [options], metadata)`.
  else if (isObject(arg1) && typeof arg1.phone === 'string') {
    input = arg1;
    formatType = arg2;

    if (arg4) {
      options = arg3;
      metadata = arg4;
    } else {
      metadata = arg3;
    }
  } else {
    throw new TypeError(
      'A phone number must either be a string or an object of shape { phone, [country] }.'
    );
  }

  // Validate `format_type`.
  switch (formatType) {
    case 'National':
      break;
    default:
      throw new Error(`Unknown format type argument passed to "format()": "${formatType}"`);
  }

  // Apply default options.
  options = options ? { ...defaultOptions, ...options } : defaultOptions;

  return { input, formatType, options, metadata: new Metadata(metadata) };
}

// Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".
/* istanbul ignore next */
const isObject = _ => typeof _ === 'object';

function addExtension(phoneNumber, ext, metadata, formatExtension) {
  return ext ? formatExtension(phoneNumber, ext, metadata) : phoneNumber;
}
