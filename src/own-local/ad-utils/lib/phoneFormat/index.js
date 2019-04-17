"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = format;
exports.format_national_number_using_format = format_national_number_using_format;
exports.chooseFormatForNumber = chooseFormatForNumber;
exports.localToInternationalStyle = localToInternationalStyle;
exports.FIRST_GROUP_PATTERN = void 0;

var _common = require("./common");

var _metadata = _interopRequireDefault(require("./metadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultOptions = {
  formatExtension: function formatExtension(phoneNumber, extension, metadata) {
    return "".concat(phoneNumber).concat(metadata.ext()).concat(extension);
  }
}; // Formats a phone number
//
// Example use cases:
//
// ```js
// format('+78005553535', 'National')
// format('+78005553535', 'National', metadata)
// ```
//

function format(arg1, arg2, arg3, arg4, arg5) {
  var _sortOutArguments = sortOutArguments(arg1, arg2, arg3, arg4, arg5),
      input = _sortOutArguments.input,
      formatType = _sortOutArguments.formatType,
      options = _sortOutArguments.options,
      metadata = _sortOutArguments.metadata;

  if (input.country && metadata.hasCountry(input.country)) {
    metadata.country(input.country);
  } // `phoneNumber` is a national (significant) number in this case.


  var _extractCountryCallin = (0, _common.extractCountryCallingCode)(input.phone, null, metadata),
      countryCallingCode = _extractCountryCallin.countryCallingCode,
      phoneNumber = _extractCountryCallin.phoneNumber;

  countryCallingCode = countryCallingCode || input.countryCallingCode;

  if (countryCallingCode) {
    // Check country restriction
    if (input.country && metadata.getSelectedCountry() && countryCallingCode !== metadata.countryCallingCode()) {
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
} // This was originally set to $1 but there are some countries for which the
// first group is not used in the national pattern (e.g. Argentina) so the $1
// group does not match correctly.  Therefore, we use \d, so that the first
// group actually used in the pattern will be matched.


var FIRST_GROUP_PATTERN = /(\$\d)/;
exports.FIRST_GROUP_PATTERN = FIRST_GROUP_PATTERN;

function format_national_number_using_format(phoneNumber, formatValue, international, enforceNationalPrefix, metadata) {
  var formatPatternMatcher = new RegExp(formatValue.pattern()); // National prefix is omitted if there's no national prefix formatting rule
  // set for this country, or when this rule is set but
  // national prefix is optional for this phone number format
  // (and it is not enforced explicitly)

  var nationalPrefixMayBeOmitted = !formatValue.nationalPrefixFormattingRule() || formatValue.nationalPrefixFormattingRule() && formatValue.nationalPrefixIsOptionalWhenFormatting() && !enforceNationalPrefix;

  if (!international && !nationalPrefixMayBeOmitted) {
    return phoneNumber.replace(formatPatternMatcher, formatValue.getFormat().replace(FIRST_GROUP_PATTERN, formatValue.nationalPrefixFormattingRule()));
  }

  var formattedNumber = phoneNumber.replace(formatPatternMatcher, international ? formatValue.internationalFormat() : formatValue.getFormat());

  if (international) {
    return localToInternationalStyle(formattedNumber);
  }

  return formattedNumber;
}

function format_national_number(phoneNumber, formatAs, enforceNationalPrefix, metadata) {
  var formatValue = chooseFormatForNumber(metadata.formats(), phoneNumber);

  if (!formatValue) {
    return phoneNumber;
  }

  return format_national_number_using_format(phoneNumber, formatValue, formatAs === 'International', enforceNationalPrefix, metadata);
}

function chooseFormatForNumber(availableFormats, nationalNumber) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = availableFormats[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var formatValue = _step.value;

      // Validate leading digits
      if (formatValue.leadingDigitsPatterns().length > 0) {
        // The last leading_digits_pattern is used here, as it is the most detailed
        var lastLeadingDigitsPattern = formatValue.leadingDigitsPatterns()[formatValue.leadingDigitsPatterns().length - 1]; // If leading digits don't match then move on to the next phone number format

        if (nationalNumber.search(lastLeadingDigitsPattern) !== 0) {
          continue;
        }
      } // Check that the national number matches the phone number format regular expression


      if ((0, _common.matches_entirely)(nationalNumber, formatValue.pattern())) {
        return formatValue;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
} // Removes brackets and replaces dashes with spaces.
//
// E.g. "(999) 111-22-33" -> "999 111 22 33"
//


function localToInternationalStyle(local) {
  return local.replace(new RegExp("[".concat(_common.VALID_PUNCTUATION, "]+"), 'g'), ' ').trim();
}

function sortOutArguments(arg1, arg2, arg3, arg4, arg5) {
  var input;
  var formatType;
  var options;
  var metadata; // If the phone number is passed as a string.
  // `format('8005553535', ...)`.

  if (typeof arg1 === 'string') {
    // If country code is supplied.
    // `format('8005553535', 'RU', 'National', [options], metadata)`.
    if (typeof arg3 === 'string') {
      // Will be `parse()`d later in code
      input = {
        phone: arg1,
        country: arg2
      };
      formatType = arg3;

      if (arg5) {
        options = arg4;
        metadata = arg5;
      } else {
        metadata = arg4;
      }
    } // Just an international phone number is supplied
    // `format('+78005553535', 'National', [options], metadata)`.
    else {
        // Will be `parse()`d later in code
        input = {
          phone: arg1
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
  } // If the phone number is passed as a parsed number object.
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
      throw new TypeError('A phone number must either be a string or an object of shape { phone, [country] }.');
    } // Validate `format_type`.


  switch (formatType) {
    case 'National':
      break;

    default:
      throw new Error("Unknown format type argument passed to \"format()\": \"".concat(formatType, "\""));
  } // Apply default options.


  options = options ? _objectSpread({}, defaultOptions, options) : defaultOptions;
  return {
    input: input,
    formatType: formatType,
    options: options,
    metadata: new _metadata.default(metadata)
  };
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var isObject = function isObject(_) {
  return _typeof(_) === 'object';
};

function addExtension(phoneNumber, ext, metadata, formatExtension) {
  return ext ? formatExtension(phoneNumber, ext, metadata) : phoneNumber;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waG9uZUZvcm1hdC9pbmRleC50cyJdLCJuYW1lcyI6WyJkZWZhdWx0T3B0aW9ucyIsImZvcm1hdEV4dGVuc2lvbiIsInBob25lTnVtYmVyIiwiZXh0ZW5zaW9uIiwibWV0YWRhdGEiLCJleHQiLCJmb3JtYXQiLCJhcmcxIiwiYXJnMiIsImFyZzMiLCJhcmc0IiwiYXJnNSIsInNvcnRPdXRBcmd1bWVudHMiLCJpbnB1dCIsImZvcm1hdFR5cGUiLCJvcHRpb25zIiwiY291bnRyeSIsImhhc0NvdW50cnkiLCJwaG9uZSIsImNvdW50cnlDYWxsaW5nQ29kZSIsImdldFNlbGVjdGVkQ291bnRyeSIsImNob29zZUNvdW50cnlCeUNvdW50cnlDYWxsaW5nQ29kZSIsImZvcm1hdF9uYXRpb25hbF9udW1iZXIiLCJhZGRFeHRlbnNpb24iLCJGSVJTVF9HUk9VUF9QQVRURVJOIiwiZm9ybWF0X25hdGlvbmFsX251bWJlcl91c2luZ19mb3JtYXQiLCJmb3JtYXRWYWx1ZSIsImludGVybmF0aW9uYWwiLCJlbmZvcmNlTmF0aW9uYWxQcmVmaXgiLCJmb3JtYXRQYXR0ZXJuTWF0Y2hlciIsIlJlZ0V4cCIsInBhdHRlcm4iLCJuYXRpb25hbFByZWZpeE1heUJlT21pdHRlZCIsIm5hdGlvbmFsUHJlZml4Rm9ybWF0dGluZ1J1bGUiLCJuYXRpb25hbFByZWZpeElzT3B0aW9uYWxXaGVuRm9ybWF0dGluZyIsInJlcGxhY2UiLCJnZXRGb3JtYXQiLCJmb3JtYXR0ZWROdW1iZXIiLCJpbnRlcm5hdGlvbmFsRm9ybWF0IiwibG9jYWxUb0ludGVybmF0aW9uYWxTdHlsZSIsImZvcm1hdEFzIiwiY2hvb3NlRm9ybWF0Rm9yTnVtYmVyIiwiZm9ybWF0cyIsImF2YWlsYWJsZUZvcm1hdHMiLCJuYXRpb25hbE51bWJlciIsImxlYWRpbmdEaWdpdHNQYXR0ZXJucyIsImxlbmd0aCIsImxhc3RMZWFkaW5nRGlnaXRzUGF0dGVybiIsInNlYXJjaCIsImxvY2FsIiwiVkFMSURf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QUosQ0FDSixvRkFESSxDQUFOO0FBR0QsS0FqRXFELENBbUV0RDs7O0FBQ0EsVUFBUXhDLFVBQVI7QUFDRSxTQUFLLFVBQUw7QUFDRTs7QUFDRjtBQUNFLFlBQU0sSUFBSXNDLEtBQUosa0VBQWlFdEMsVUFBakUsUUFBTjtBQUpKLEdBcEVzRCxDQTJFdEQ7OztBQUNBQyxFQUFBQSxPQUFPLEdBQUdBLE9BQU8scUJBQVFmLGNBQVIsRUFBMkJlLE9BQTNCLElBQXVDZixjQUF4RDtBQUVBLFNBQU87QUFBRWEsSUFBQUEsS0FBSyxFQUFMQSxLQUFGO0FBQVNDLElBQUFBLFVBQVUsRUFBVkEsVUFBVDtBQUFxQkMsSUFBQUEsT0FBTyxFQUFQQSxPQUFyQjtBQUE4QlgsSUFBQUEsUUFBUSxFQUFFLElBQUltRCxpQkFBSixDQUFhbkQsUUFBYjtBQUF4QyxHQUFQO0FBQ0QsQyxDQUVEO0FBQ0E7O0FBQ0E7OztBQUNBLElBQU1pRCxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBRyxDQUFDO0FBQUEsU0FBSSxRQUFPQSxDQUFQLE1BQWEsUUFBakI7QUFBQSxDQUFsQjs7QUFFQSxTQUFTakMsWUFBVCxDQUFzQnJCLFdBQXRCLEVBQW1DRyxHQUFuQyxFQUF3Q0QsUUFBeEMsRUFBa0RILGVBQWxELEVBQW1FO0FBQ2pFLFNBQU9JLEdBQUcsR0FBR0osZUFBZSxDQUFDQyxXQUFELEVBQWNHLEdBQWQsRUFBbUJELFFBQW5CLENBQWxCLEdBQWlERixXQUEzRDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0cmFjdENvdW50cnlDYWxsaW5nQ29kZSwgbWF0Y2hlc19lbnRpcmVseSwgVkFMSURfUFVOQ1RVQVRJT04gfSBmcm9tICcuL2NvbW1vbic7XG5cbmltcG9ydCBNZXRhZGF0YSBmcm9tICcuL21ldGFkYXRhJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gIGZvcm1hdEV4dGVuc2lvbjogKHBob25lTnVtYmVyLCBleHRlbnNpb24sIG1ldGFkYXRhKSA9PlxuICAgIGAke3Bob25lTnVtYmVyfSR7bWV0YWRhdGEuZXh0KCl9JHtleHRlbnNpb259YCxcbn07XG5cbi8vIEZvcm1hdHMgYSBwaG9uZSBudW1iZXJcbi8vXG4vLyBFeGFtcGxlIHVzZSBjYXNlczpcbi8vXG4vLyBgYGBqc1xuLy8gZm9ybWF0KCcrNzgwMDU1NTM1MzUnLCAnTmF0aW9uYWwnKVxuLy8gZm9ybWF0KCcrNzgwMDU1NTM1MzUnLCAnTmF0aW9uYWwnLCBtZXRhZGF0YSlcbi8vIGBgYFxuLy9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChhcmcxLCBhcmcyLCBhcmczLCBhcmc0PywgYXJnNT8pIHtcbiAgY29uc3QgeyBpbnB1dCwgZm9ybWF0VHlwZSwgb3B0aW9ucywgbWV0YWRhdGEgfSA9IHNvcnRPdXRBcmd1bWVudHMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSk7XG5cbiAgaWYgKGlucHV0LmNvdW50cnkgJiYgbWV0YWRhdGEuaGFzQ291bnRyeShpbnB1dC5jb3VudHJ5KSkge1xuICAgIG1ldGFkYXRhLmNvdW50cnkoaW5wdXQuY291bnRyeSk7XG4gIH1cblxuICAvLyBgcGhvbmVOdW1iZXJgIGlzIGEgbmF0aW9uYWwgKHNpZ25pZmljYW50KSBudW1iZXIgaW4gdGhpcyBjYXNlLlxuICBsZXQgeyBjb3VudHJ5Q2FsbGluZ0NvZGUsIHBob25lTnVtYmVyIH0gPSBleHRyYWN0Q291bnRyeUNhbGxpbmdDb2RlKGlucHV0LnBob25lLCBudWxsLCBtZXRhZGF0YSk7XG5cbiAgY291bnRyeUNhbGxpbmdDb2RlID0gY291bnRyeUNhbGxpbmdDb2RlIHx8IGlucHV0LmNvdW50cnlDYWxsaW5nQ29kZTtcblxuICBpZiAoY291bnRyeUNhbGxpbmdDb2RlKSB7XG4gICAgLy8gQ2hlY2sgY291bnRyeSByZXN0cmljdGlvblxuICAgIGlmIChcbiAgICAgIGlucHV0LmNvdW50cnkgJiZcbiAgICAgIG1ldGFkYXRhLmdldFNlbGVjdGVkQ291bnRyeSgpICYmXG4gICAgICBjb3VudHJ5Q2FsbGluZ0NvZGUgIT09IG1ldGFkYXRhLmNvdW50cnlDYWxsaW5nQ29kZSgpXG4gICAgKSB7XG4gICAgICByZXR1cm4gaW5wdXQucGhvbmU7XG4gICAgfVxuXG4gICAgbWV0YWRhdGEuY2hvb3NlQ291bnRyeUJ5Q291bnRyeUNhbGxpbmdDb2RlKGNvdW50cnlDYWxsaW5nQ29kZSk7XG4gIH1cblxuICBpZiAoIW1ldGFkYXRhLmdldFNlbGVjdGVkQ291bnRyeSgpKSB7XG4gICAgcmV0dXJuIGlucHV0LnBob25lO1xuICB9XG5cbiAgc3dpdGNoIChmb3JtYXRUeXBlKSB7XG4gICAgY2FzZSAnTmF0aW9uYWwnOlxuICAgICAgaWYgKCFwaG9uZU51bWJlcikge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICBwaG9uZU51bWJlciA9IGZvcm1hdF9uYXRpb25hbF9udW1iZXIocGhvbmVOdW1iZXIsICdOYXRpb25hbCcsIHRydWUsIG1ldGFkYXRhKTtcbiAgICAgIHJldHVybiBhZGRFeHRlbnNpb24ocGhvbmVOdW1iZXIsIGlucHV0LmV4dCwgbWV0YWRhdGEsIG9wdGlvbnMuZm9ybWF0RXh0ZW5zaW9uKTtcbiAgfVxufVxuXG4vLyBUaGlzIHdhcyBvcmlnaW5hbGx5IHNldCB0byAkMSBidXQgdGhlcmUgYXJlIHNvbWUgY291bnRyaWVzIGZvciB3aGljaCB0aGVcbi8vIGZpcnN0IGdyb3VwIGlzIG5vdCB1c2VkIGluIHRoZSBuYXRpb25hbCBwYXR0ZXJuIChlLmcuIEFyZ2VudGluYSkgc28gdGhlICQxXG4vLyBncm91cCBkb2VzIG5vdCBtYXRjaCBjb3JyZWN0bHkuICBUaGVyZWZvcmUsIHdlIHVzZSBcXGQsIHNvIHRoYXQgdGhlIGZpcnN0XG4vLyBncm91cCBhY3R1YWxseSB1c2VkIGluIHRoZSBwYXR0ZXJuIHdpbGwgYmUgbWF0Y2hlZC5cbmV4cG9ydCBjb25zdCBGSVJTVF9HUk9VUF9QQVRURVJOID0gLyhcXCRcXGQpLztcblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdF9uYXRpb25hbF9udW1iZXJfdXNpbmdfZm9ybWF0KFxuICBwaG9uZU51bWJlcixcbiAgZm9ybWF0VmFsdWUsXG4gIGludGVybmF0aW9uYWwsXG4gIGVuZm9yY2VOYXRpb25hbFByZWZpeCxcbiAgbWV0YWRhdGFcbikge1xuICBjb25zdCBmb3JtYXRQYXR0ZXJuTWF0Y2hlciA9IG5ldyBSZWdFeHAoZm9ybWF0VmFsdWUucGF0dGVybigpKTtcblxuICAvLyBOYXRpb25hbCBwcmVmaXggaXMgb21pdHRlZCBpZiB0aGVyZSdzIG5vIG5hdGlvbmFsIHByZWZpeCBmb3JtYXR0aW5nIHJ1bGVcbiAgLy8gc2V0IGZvciB0aGlzIGNvdW50cnksIG9yIHdoZW4gdGhpcyBydWxlIGlzIHNldCBidXRcbiAgLy8gbmF0aW9uYWwgcHJlZml4IGlzIG9wdGlvbmFsIGZvciB0aGlzIHBob25lIG51bWJlciBmb3JtYXRcbiAgLy8gKGFuZCBpdCBpcyBub3QgZW5mb3JjZWQgZXhwbGljaXRseSlcbiAgY29uc3QgbmF0aW9uYWxQcmVmaXhNYXlCZU9taXR0ZWQgPVxuICAgICFmb3JtYXRWYWx1ZS5uYXRpb25hbFByZWZpeEZvcm1hdHRpbmdSdWxlKCkgfHxcbiAgICAoZm9ybWF0VmFsdWUubmF0aW9uYWxQcmVmaXhGb3JtYXR0aW5nUnVsZSgpICYmXG4gICAgICBmb3JtYXRWYWx1ZS5uYXRpb25hbFByZWZpeElzT3B0aW9uYWxXaGVuRm9ybWF0dGluZygpICYmXG4gICAgICAhZW5mb3JjZU5hdGlvbmFsUHJlZml4KTtcblxuICBpZiAoIWludGVybmF0aW9uYWwgJiYgIW5hdGlvbmFsUHJlZml4TWF5QmVPbWl0dGVkKSB7XG4gICAgcmV0dXJuIHBob25lTnVtYmVyLnJlcGxhY2UoXG4gICAgICBmb3JtYXRQYXR0ZXJuTWF0Y2hlcixcbiAgICAgIGZvcm1hdFZhbHVlXG4gICAgICAgIC5nZXRGb3JtYXQoKVxuICAgICAgICAucmVwbGFjZShGSVJTVF9HUk9VUF9QQVRURVJOLCBmb3JtYXRWYWx1ZS5uYXRpb25hbFByZWZpeEZvcm1hdHRpbmdSdWxlKCkpXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdHRlZE51bWJlciA9IHBob25lTnVtYmVyLnJlcGxhY2UoXG4gICAgZm9ybWF0UGF0dGVybk1hdGNoZXIsXG4gICAgaW50ZXJuYXRpb25hbCA/IGZvcm1hdFZhbHVlLmludGVybmF0aW9uYWxGb3JtYXQoKSA6IGZvcm1hdFZhbHVlLmdldEZvcm1hdCgpXG4gICk7XG5cbiAgaWYgKGludGVybmF0aW9uYWwpIHtcbiAgICByZXR1cm4gbG9jYWxUb0ludGVybmF0aW9uYWxTdHlsZShmb3JtYXR0ZWROdW1iZXIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdHRlZE51bWJlcjtcbn1cblxuZnVuY3Rpb24gZm9ybWF0X25hdGlvbmFsX251bWJlcihwaG9uZU51bWJlciwgZm9ybWF0QXMsIGVuZm9yY2VOYXRpb25hbFByZWZpeCwgbWV0YWRhdGEpIHtcbiAgY29uc3QgZm9ybWF0VmFsdWUgPSBjaG9vc2VGb3JtYXRGb3JOdW1iZXIobWV0YWRhdGEuZm9ybWF0cygpLCBwaG9uZU51bWJlcik7XG5cbiAgaWYgKCFmb3JtYXRWYWx1ZSkge1xuICAgIHJldHVybiBwaG9uZU51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRfbmF0aW9uYWxfbnVtYmVyX3VzaW5nX2Zvcm1hdChcbiAgICBwaG9uZU51bWJlcixcbiAgICBmb3JtYXRWYWx1ZSxcbiAgICBmb3JtYXRBcyA9PT0gJ0ludGVybmF0aW9uYWwnLFxuICAgIGVuZm9yY2VOYXRpb25hbFByZWZpeCxcbiAgICBtZXRhZGF0YVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hvb3NlRm9ybWF0Rm9yTnVtYmVyKGF2YWlsYWJsZUZvcm1hdHMsIG5hdGlvbmFsTnVtYmVyKSB7XG4gIGZvciAoY29uc3QgZm9ybWF0VmFsdWUgb2YgYXZhaWxhYmxlRm9ybWF0cykge1xuICAgIC8vIFZhbGlkYXRlIGxlYWRpbmcgZGlnaXRzXG4gICAgaWYgKGZvcm1hdFZhbHVlLmxlYWRpbmdEaWdpdHNQYXR0ZXJucygpLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIFRoZSBsYXN0IGxlYWRpbmdfZGlnaXRzX3BhdHRlcm4gaXMgdXNlZCBoZXJlLCBhcyBpdCBpcyB0aGUgbW9zdCBkZXRhaWxlZFxuICAgICAgY29uc3QgbGFzdExlYWRpbmdEaWdpdHNQYXR0ZXJuID0gZm9ybWF0VmFsdWUubGVhZGluZ0RpZ2l0c1BhdHRlcm5zKClbXG4gICAgICAgIGZvcm1hdFZhbHVlLmxlYWRpbmdEaWdpdHNQYXR0ZXJucygpLmxlbmd0aCAtIDFcbiAgICAgIF07XG5cbiAgICAgIC8vIElmIGxlYWRpbmcgZGlnaXRzIGRvbid0IG1hdGNoIHRoZW4gbW92ZSBvbiB0byB0aGUgbmV4dCBwaG9uZSBudW1iZXIgZm9ybWF0XG4gICAgICBpZiAobmF0aW9uYWxOdW1iZXIuc2VhcmNoKGxhc3RMZWFkaW5nRGlnaXRzUGF0dGVybikgIT09IDApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdGhhdCB0aGUgbmF0aW9uYWwgbnVtYmVyIG1hdGNoZXMgdGhlIHBob25lIG51bWJlciBmb3JtYXQgcmVndWxhciBleHByZXNzaW9uXG4gICAgaWYgKG1hdGNoZXNfZW50aXJlbHkobmF0aW9uYWxOdW1iZXIsIGZvcm1hdFZhbHVlLnBhdHRlcm4oKSkpIHtcbiAgICAgIHJldHVybiBmb3JtYXRWYWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmVtb3ZlcyBicmFja2V0cyBhbmQgcmVwbGFjZXMgZGFzaGVzIHdpdGggc3BhY2VzLlxuLy9cbi8vIEUuZy4gXCIoOTk5KSAxMTEtMjItMzNcIiAtPiBcIjk5OSAxMTEgMjIgMzNcIlxuLy9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbFRvSW50ZXJuYXRpb25hbFN0eWxlKGxvY2FsKSB7XG4gIHJldHVybiBsb2NhbC5yZXBsYWNlKG5ldyBSZWdFeHAoYFske1ZBTElEX1BVTkNUVUFUSU9OfV0rYCwgJ2cnKSwgJyAnKS50cmltKCk7XG59XG5cbmZ1bmN0aW9uIHNvcnRPdXRBcmd1bWVudHMoYXJnMSwgYXJnMiwgYXJnMywgYXJnNCwgYXJnNSkge1xuICBsZXQgaW5wdXQ7XG4gIGxldCBmb3JtYXRUeXBlO1xuICBsZXQgb3B0aW9ucztcbiAgbGV0IG1ldGFkYXRhO1xuXG4gIC8vIElmIHRoZSBwaG9uZSBudW1iZXIgaXMgcGFzc2VkIGFzIGEgc3RyaW5nLlxuICAvLyBgZm9ybWF0KCc4MDA1NTUzNTM1JywgLi4uKWAuXG4gIGlmICh0eXBlb2YgYXJnMSA9PT0gJ3N0cmluZycpIHtcbiAgICAvLyBJZiBjb3VudHJ5IGNvZGUgaXMgc3VwcGxpZWQuXG4gICAgLy8gYGZvcm1hdCgnODAwNTU1MzUzNScsICdSVScsICdOYXRpb25hbCcsIFtvcHRpb25zXSwgbWV0YWRhdGEpYC5cbiAgICBpZiAodHlwZW9mIGFyZzMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBXaWxsIGJlIGBwYXJzZSgpYGQgbGF0ZXIgaW4gY29kZVxuICAgICAgaW5wdXQgPSB7XG4gICAgICAgIHBob25lOiBhcmcxLFxuICAgICAgICBjb3VudHJ5OiBhcmcyLFxuICAgICAgfTtcblxuICAgICAgZm9ybWF0VHlwZSA9IGFyZzM7XG5cbiAgICAgIGlmIChhcmc1KSB7XG4gICAgICAgIG9wdGlvbnMgPSBhcmc0O1xuICAgICAgICBtZXRhZGF0YSA9IGFyZzU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZXRhZGF0YSA9IGFyZzQ7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEp1c3QgYW4gaW50ZXJuYXRpb25hbCBwaG9uZSBudW1iZXIgaXMgc3VwcGxpZWRcbiAgICAvLyBgZm9ybWF0KCcrNzgwMDU1NTM1MzUnLCAnTmF0aW9uYWwnLCBbb3B0aW9uc10sIG1ldGFkYXRhKWAuXG4gICAgZWxzZSB7XG4gICAgICAvLyBXaWxsIGJlIGBwYXJzZSgpYGQgbGF0ZXIgaW4gY29kZVxuICAgICAgaW5wdXQgPSB7XG4gICAgICAgIHBob25lOiBhcmcxLFxuICAgICAgfTtcblxuICAgICAgaWYgKHR5cGVvZiBhcmcyICE9PSAnc3RyaW5nJykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bmb3JtYXRgIGFyZ3VtZW50IG5vdCBwYXNzZWQgdG8gYGZvcm1hdE51bWJlcihudW1iZXIsIGZvcm1hdClgJyk7XG4gICAgICB9XG5cbiAgICAgIGZvcm1hdFR5cGUgPSBhcmcyO1xuXG4gICAgICBpZiAoYXJnNCkge1xuICAgICAgICBvcHRpb25zID0gYXJnMztcbiAgICAgICAgbWV0YWRhdGEgPSBhcmc0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWV0YWRhdGEgPSBhcmczO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBJZiB0aGUgcGhvbmUgbnVtYmVyIGlzIHBhc3NlZCBhcyBhIHBhcnNlZCBudW1iZXIgb2JqZWN0LlxuICAvLyBgZm9ybWF0KHsgcGhvbmU6ICc4MDA1NTUzNTM1JywgY291bnRyeTogJ1JVJyB9LCAnTmF0aW9uYWwnLCBbb3B0aW9uc10sIG1ldGFkYXRhKWAuXG4gIGVsc2UgaWYgKGlzT2JqZWN0KGFyZzEpICYmIHR5cGVvZiBhcmcxLnBob25lID09PSAnc3RyaW5nJykge1xuICAgIGlucHV0ID0gYXJnMTtcbiAgICBmb3JtYXRUeXBlID0gYXJnMjtcblxuICAgIGlmIChhcmc0KSB7XG4gICAgICBvcHRpb25zID0gYXJnMztcbiAgICAgIG1ldGFkYXRhID0gYXJnNDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWV0YWRhdGEgPSBhcmczO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgJ0EgcGhvbmUgbnVtYmVyIG11c3QgZWl0aGVyIGJlIGEgc3RyaW5nIG9yIGFuIG9iamVjdCBvZiBzaGFwZSB7IHBob25lLCBbY291bnRyeV0gfS4nXG4gICAgKTtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGBmb3JtYXRfdHlwZWAuXG4gIHN3aXRjaCAoZm9ybWF0VHlwZSkge1xuICAgIGNhc2UgJ05hdGlvbmFsJzpcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gZm9ybWF0IHR5cGUgYXJndW1lbnQgcGFzc2VkIHRvIFwiZm9ybWF0KClcIjogXCIke2Zvcm1hdFR5cGV9XCJgKTtcbiAgfVxuXG4gIC8vIEFwcGx5IGRlZmF1bHQgb3B0aW9ucy5cbiAgb3B0aW9ucyA9IG9wdGlvbnMgPyB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0gOiBkZWZhdWx0T3B0aW9ucztcblxuICByZXR1cm4geyBpbnB1dCwgZm9ybWF0VHlwZSwgb3B0aW9ucywgbWV0YWRhdGE6IG5ldyBNZXRhZGF0YShtZXRhZGF0YSkgfTtcbn1cblxuLy8gQmFiZWwgdHJhbnNmb3JtcyBgdHlwZW9mYCBpbnRvIHNvbWUgXCJicmFuY2hlc1wiXG4vLyBzbyBpc3RhbmJ1bCB3aWxsIHNob3cgdGhpcyBhcyBcImJyYW5jaCBub3QgY292ZXJlZFwiLlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmNvbnN0IGlzT2JqZWN0ID0gXyA9PiB0eXBlb2YgXyA9PT0gJ29iamVjdCc7XG5cbmZ1bmN0aW9uIGFkZEV4dGVuc2lvbihwaG9uZU51bWJlciwgZXh0LCBtZXRhZGF0YSwgZm9ybWF0RXh0ZW5zaW9uKSB7XG4gIHJldHVybiBleHQgPyBmb3JtYXRFeHRlbnNpb24ocGhvbmVOdW1iZXIsIGV4dCwgbWV0YWRhdGEpIDogcGhvbmVOdW1iZXI7XG59XG4iXX0=