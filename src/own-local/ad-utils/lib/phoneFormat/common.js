"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractCountryCallingCode = extractCountryCallingCode;
exports.matches_entirely = matches_entirely;
exports.parseDigit = parseDigit;
exports.MAX_LENGTH_COUNTRY_CODE = exports.DIGITS = exports.VALID_PUNCTUATION = exports.WHITESPACE = void 0;

var _parseIncompletePhoneNumber = _interopRequireDefault(require("./parseIncompletePhoneNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// `DASHES` will be right after the opening square bracket of the "character class"
var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
exports.WHITESPACE = WHITESPACE;
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]"; // export const OPENING_BRACKETS = '(\uFF08\uFF3B\\\['

var TILDES = "~\u2053\u223C\uFF5E"; // Regular expression of acceptable punctuation found in phone numbers. This
// excludes punctuation found as a leading character only. This consists of dash
// characters, white space characters, full stops, slashes, square brackets,
// parentheses and tildes. Full-width variants are also present.

var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES); // These mappings map a character (key) to a specific digit that should
// replace it for normalization purposes. Non-European digits that
// may be used in phone numbers are mapped to a European equivalent.
//
// E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
//

exports.VALID_PUNCTUATION = VALID_PUNCTUATION;
var DIGITS = {
  '0': '0',
  '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  '6': '6',
  '7': '7',
  '8': '8',
  '9': '9',
  "\uFF10": '0',
  // Fullwidth digit 0
  "\uFF11": '1',
  // Fullwidth digit 1
  "\uFF12": '2',
  // Fullwidth digit 2
  "\uFF13": '3',
  // Fullwidth digit 3
  "\uFF14": '4',
  // Fullwidth digit 4
  "\uFF15": '5',
  // Fullwidth digit 5
  "\uFF16": '6',
  // Fullwidth digit 6
  "\uFF17": '7',
  // Fullwidth digit 7
  "\uFF18": '8',
  // Fullwidth digit 8
  "\uFF19": '9',
  // Fullwidth digit 9
  "\u0660": '0',
  // Arabic-indic digit 0
  "\u0661": '1',
  // Arabic-indic digit 1
  "\u0662": '2',
  // Arabic-indic digit 2
  "\u0663": '3',
  // Arabic-indic digit 3
  "\u0664": '4',
  // Arabic-indic digit 4
  "\u0665": '5',
  // Arabic-indic digit 5
  "\u0666": '6',
  // Arabic-indic digit 6
  "\u0667": '7',
  // Arabic-indic digit 7
  "\u0668": '8',
  // Arabic-indic digit 8
  "\u0669": '9',
  // Arabic-indic digit 9
  "\u06F0": '0',
  // Eastern-Arabic digit 0
  "\u06F1": '1',
  // Eastern-Arabic digit 1
  "\u06F2": '2',
  // Eastern-Arabic digit 2
  "\u06F3": '3',
  // Eastern-Arabic digit 3
  "\u06F4": '4',
  // Eastern-Arabic digit 4
  "\u06F5": '5',
  // Eastern-Arabic digit 5
  "\u06F6": '6',
  // Eastern-Arabic digit 6
  "\u06F7": '7',
  // Eastern-Arabic digit 7
  "\u06F8": '8',
  // Eastern-Arabic digit 8
  "\u06F9": '9' // Eastern-Arabic digit 9

}; // The maximum length of the country calling code.

exports.DIGITS = DIGITS;
var MAX_LENGTH_COUNTRY_CODE = 3; // Parses a formatted phone number
// and returns `{ countryCallingCode, number }`
// where `number` is just the "number" part
// which is left after extracting `countryCallingCode`
// and is not necessarily a "national (significant) number"
// and might as well contain national prefix.
//

exports.MAX_LENGTH_COUNTRY_CODE = MAX_LENGTH_COUNTRY_CODE;

function extractCountryCallingCode(phoneNumber, country, metadata) {
  phoneNumber = (0, _parseIncompletePhoneNumber.default)(phoneNumber);

  if (!phoneNumber) {
    return {};
  } // Fast abortion: country codes do not begin with a '0'


  if (phoneNumber[1] === '0') {
    return {};
  } // The thing with country phone codes
  // is that they are orthogonal to each other
  // i.e. there's no such country phone code A
  // for which country phone code B exists
  // where B starts with A.
  // Therefore, while scanning digits,
  // if a valid country code is found,
  // that means that it is the country code.
  //


  var i = 2;

  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= phoneNumber.length) {
    var countryCallingCode = phoneNumber.slice(1, i);

    if (metadata.countryCallingCodes()[countryCallingCode]) {
      return {
        countryCallingCode: countryCallingCode,
        phoneNumber: phoneNumber.slice(i)
      };
    }

    i++;
  }

  return {};
} // Checks whether the entire input sequence can be matched
// against the regular expression.


function matches_entirely() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var regularExpression = arguments.length > 1 ? arguments[1] : undefined;
  return new RegExp('^(?:' + regularExpression + ')$').test(text);
}

function parseDigit(character) {
  return DIGITS[character];
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waG9uZUZvcm1hdC9jb21tb24udHMiXSwibmFtZXMiOlsiREFTSEVTIiwiU0xBU0hFUyIsIkRPVFMiLCJXSElURVNQQUNFIiwiQlJBQ0tFVFMiLCJUSUxERVMiLCJWQUxJRF9QVU5DVFVBVElPTiIsIkRJR0lUUyIsIk1BWF9MRU5HVEhfQ09VTlRSWV9DT0RFIiwiZXh0cmFjdENvdW50cnlDYWxsaW5nQ29kZSIsInBob25lTnVtYmVyIiwiY291bnRyeSIsIm1ldGFkYXRhIiwiaSIsImxlbmd0aCIsImNvdW50cnlDYWxsaW5nQ29kZSIsInNsaWNlIiwiY291bnRyeUNhbGxpbmdDb2RlcyIsIm1hdGNoZXNfZW50aXJlbHkiLCJ0ZXh0IiwicmVndWxhckV4cHJlc3Npb24iLCJSZWdFeHAiLCJ0ZXN0IiwicGFyc2VEaWdpdCIsImNoYXJhY3RlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBRUE7QUFDQSxJQUFNQSxNQUFNLEdBQUcsa0NBQWY7QUFDQSxJQUFNQyxPQUFPLEdBQUcsU0FBaEI7QUFDQSxJQUFNQyxJQUFJLEdBQUcsU0FBYjtBQUNPLElBQU1DLFVBQVUsR0FBRyw2QkFBbkI7O0FBQ1AsSUFBTUMsUUFBUSxHQUFHLGtDQUFqQixDLENBQ0E7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLHFCQUFmLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQyxpQkFBaUIsYUFBTU4sTUFBTixTQUFlQyxPQUFmLFNBQXlCQyxJQUF6QixTQUFnQ0MsVUFBaEMsU0FBNkNDLFFBQTdDLFNBQXdEQyxNQUF4RCxDQUF2QixDLENBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxJQUFNRSxNQUFNLEdBQUc7QUFDcEIsT0FBSyxHQURlO0FBRXBCLE9BQUssR0FGZTtBQUdwQixPQUFLLEdBSGU7QUFJcEIsT0FBSyxHQUplO0FBS3BCLE9BQUssR0FMZTtBQU1wQixPQUFLLEdBTmU7QUFPcEIsT0FBSyxHQVBlO0FBUXBCLE9BQUssR0FSZTtBQVNwQixPQUFLLEdBVGU7QUFVcEIsT0FBSyxHQVZlO0FBV3BCLFlBQVUsR0FYVTtBQVdMO0FBQ2YsWUFBVSxHQVpVO0FBWUw7QUFDZixZQUFVLEdBYlU7QUFhTDtBQUNmLFlBQVUsR0FkVTtBQWNMO0FBQ2YsWUFBVSxHQWZVO0FBZUw7QUFDZixZQUFVLEdBaEJVO0FBZ0JMO0FBQ2YsWUFBVSxHQWpCVTtBQWlCTDtBQUNmLFlBQVUsR0FsQlU7QUFrQkw7QUFDZixZQUFVLEdBbkJVO0FBbUJMO0FBQ2YsWUFBVSxHQXBCVTtBQW9CTDtBQUNmLFlBQVUsR0FyQlU7QUFxQkw7QUFDZixZQUFVLEdBdEJVO0FBc0JMO0FBQ2YsWUFBVSxHQXZCVTtBQXVCTDtBQUNmLFlBQVUsR0F4QlU7QUF3Qkw7QUFDZixZQUFVLEdBekJVO0FBeUJMO0FBQ2YsWUFBVSxHQTFCVTtBQTBCTDtBQUNmLFlBQVUsR0EzQlU7QUEyQkw7QUFDZixZQUFVLEdBNUJVO0FBNEJMO0FBQ2YsWUFBVSxHQTdCVTtBQTZCTDtBQUNmLFlBQVUsR0E5QlU7QUE4Qkw7QUFDZixZQUFVLEdBL0JVO0FBK0JMO0FBQ2YsWUFBVSxHQWhDVTtBQWdDTDtBQUNmLFlBQVUsR0FqQ1U7QUFpQ0w7QUFDZixZQUFVLEdBbENVO0FBa0NMO0FBQ2YsWUFBVSxHQW5DVTtBQW1DTDtBQUNmLFlBQVUsR0FwQ1U7QUFvQ0w7QUFDZixZQUFVLEdBckNVO0FBcUNMO0FBQ2YsWUFBVSxHQXRDVTtBQXNDTDtBQUNmLFlBQVUsR0F2Q1U7QUF1Q0w7QUFDZixZQUFVLEdBeENVLENBd0NMOztBQXhDSyxDQUFmLEMsQ0EyQ1A7OztBQUNPLElBQU1DLHVCQUF1QixHQUFHLENBQWhDLEMsQ0FFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNPLFNBQVNDLHlCQUFULENBQW1DQyxXQUFuQyxFQUFnREMsT0FBaEQsRUFBeURDLFFBQXpELEVBQW1FO0FBQ3hFRixFQUFBQSxXQUFXLEdBQUcseUNBQTJCQSxXQUEzQixDQUFkOztBQUVBLE1BQUksQ0FBQ0EsV0FBTCxFQUFrQjtBQUNoQixXQUFPLEVBQVA7QUFDRCxHQUx1RSxDQU94RTs7O0FBQ0EsTUFBSUEsV0FBVyxDQUFDLENBQUQsQ0FBWCxLQUFtQixHQUF2QixFQUE0QjtBQUMxQixXQUFPLEVBQVA7QUFDRCxHQVZ1RSxDQVl4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQUlHLENBQUMsR0FBRyxDQUFSOztBQUNBLFNBQU9BLENBQUMsR0FBRyxDQUFKLElBQVNMLHVCQUFULElBQW9DSyxDQUFDLElBQUlILFdBQVcsQ0FBQ0ksTUFBNUQsRUFBb0U7QUFDbEUsUUFBTUMsa0JBQWtCLEdBQUdMLFdBQVcsQ0FBQ00sS0FBWixDQUFrQixDQUFsQixFQUFxQkgsQ0FBckIsQ0FBM0I7O0FBRUEsUUFBSUQsUUFBUSxDQUFDSyxtQkFBVCxHQUErQkYsa0JBQS9CLENBQUosRUFBd0Q7QUFDdEQsYUFBTztBQUNMQSxRQUFBQSxrQkFBa0IsRUFBbEJBLGtCQURLO0FBRUxMLFFBQUFBLFdBQVcsRUFBRUEsV0FBVyxDQUFDTSxLQUFaLENBQWtCSCxDQUFsQjtBQUZSLE9BQVA7QUFJRDs7QUFFREEsSUFBQUEsQ0FBQztBQUNGOztBQUVELFNBQU8sRUFBUDtBQUNELEMsQ0FFRDtBQUNBOzs7QUFDTyxTQUFTSyxnQkFBVCxHQUF3RDtBQUFBLE1BQTlCQyxJQUE4Qix1RUFBdkIsRUFBdUI7QUFBQSxNQUFuQkMsaUJBQW1CO0FBQzdELFNBQU8sSUFBSUMsTUFBSixDQUFXLFNBQVNELGlCQUFULEdBQTZCLElBQXhDLEVBQThDRSxJQUE5QyxDQUFtREgsSUFBbkQsQ0FBUDtBQUNEOztBQUVNLFNBQVNJLFVBQVQsQ0FBb0JDLFNBQXBCLEVBQStCO0FBQ3BDLFNBQU9qQixNQUFNLENBQUNpQixTQUFELENBQWI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZUluY29tcGxldGVQaG9uZU51bWJlciBmcm9tICcuL3BhcnNlSW5jb21wbGV0ZVBob25lTnVtYmVyJztcblxuLy8gYERBU0hFU2Agd2lsbCBiZSByaWdodCBhZnRlciB0aGUgb3BlbmluZyBzcXVhcmUgYnJhY2tldCBvZiB0aGUgXCJjaGFyYWN0ZXIgY2xhc3NcIlxuY29uc3QgREFTSEVTID0gJy1cXHUyMDEwLVxcdTIwMTVcXHUyMjEyXFx1MzBGQ1xcdUZGMEQnO1xuY29uc3QgU0xBU0hFUyA9ICdcXHVGRjBGLyc7XG5jb25zdCBET1RTID0gJ1xcdUZGMEUuJztcbmV4cG9ydCBjb25zdCBXSElURVNQQUNFID0gJyBcXHUwMEEwXFx1MDBBRFxcdTIwMEJcXHUyMDYwXFx1MzAwMCc7XG5jb25zdCBCUkFDS0VUUyA9ICcoKVxcdUZGMDhcXHVGRjA5XFx1RkYzQlxcdUZGM0RcXFxcW1xcXFxdJztcbi8vIGV4cG9ydCBjb25zdCBPUEVOSU5HX0JSQUNLRVRTID0gJyhcXHVGRjA4XFx1RkYzQlxcXFxcXFsnXG5jb25zdCBUSUxERVMgPSAnflxcdTIwNTNcXHUyMjNDXFx1RkY1RSc7XG5cbi8vIFJlZ3VsYXIgZXhwcmVzc2lvbiBvZiBhY2NlcHRhYmxlIHB1bmN0dWF0aW9uIGZvdW5kIGluIHBob25lIG51bWJlcnMuIFRoaXNcbi8vIGV4Y2x1ZGVzIHB1bmN0dWF0aW9uIGZvdW5kIGFzIGEgbGVhZGluZyBjaGFyYWN0ZXIgb25seS4gVGhpcyBjb25zaXN0cyBvZiBkYXNoXG4vLyBjaGFyYWN0ZXJzLCB3aGl0ZSBzcGFjZSBjaGFyYWN0ZXJzLCBmdWxsIHN0b3BzLCBzbGFzaGVzLCBzcXVhcmUgYnJhY2tldHMsXG4vLyBwYXJlbnRoZXNlcyBhbmQgdGlsZGVzLiBGdWxsLXdpZHRoIHZhcmlhbnRzIGFyZSBhbHNvIHByZXNlbnQuXG5leHBvcnQgY29uc3QgVkFMSURfUFVOQ1RVQVRJT04gPSBgJHtEQVNIRVN9JHtTTEFTSEVTfSR7RE9UU30ke1dISVRFU1BBQ0V9JHtCUkFDS0VUU30ke1RJTERFU31gO1xuXG4vLyBUaGVzZSBtYXBwaW5ncyBtYXAgYSBjaGFyYWN0ZXIgKGtleSkgdG8gYSBzcGVjaWZpYyBkaWdpdCB0aGF0IHNob3VsZFxuLy8gcmVwbGFjZSBpdCBmb3Igbm9ybWFsaXphdGlvbiBwdXJwb3Nlcy4gTm9uLUV1cm9wZWFuIGRpZ2l0cyB0aGF0XG4vLyBtYXkgYmUgdXNlZCBpbiBwaG9uZSBudW1iZXJzIGFyZSBtYXBwZWQgdG8gYSBFdXJvcGVhbiBlcXVpdmFsZW50LlxuLy9cbi8vIEUuZy4gaW4gSXJhcSB0aGV5IGRvbid0IHdyaXRlIGArNDQyMzIzMjM0YCBidXQgcmF0aGVyIGAr2aTZpNmi2aPZotmj2aLZo9mkYC5cbi8vXG5leHBvcnQgY29uc3QgRElHSVRTID0ge1xuICAnMCc6ICcwJyxcbiAgJzEnOiAnMScsXG4gICcyJzogJzInLFxuICAnMyc6ICczJyxcbiAgJzQnOiAnNCcsXG4gICc1JzogJzUnLFxuICAnNic6ICc2JyxcbiAgJzcnOiAnNycsXG4gICc4JzogJzgnLFxuICAnOSc6ICc5JyxcbiAgJ1xcdUZGMTAnOiAnMCcsIC8vIEZ1bGx3aWR0aCBkaWdpdCAwXG4gICdcXHVGRjExJzogJzEnLCAvLyBGdWxsd2lkdGggZGlnaXQgMVxuICAnXFx1RkYxMic6ICcyJywgLy8gRnVsbHdpZHRoIGRpZ2l0IDJcbiAgJ1xcdUZGMTMnOiAnMycsIC8vIEZ1bGx3aWR0aCBkaWdpdCAzXG4gICdcXHVGRjE0JzogJzQnLCAvLyBGdWxsd2lkdGggZGlnaXQgNFxuICAnXFx1RkYxNSc6ICc1JywgLy8gRnVsbHdpZHRoIGRpZ2l0IDVcbiAgJ1xcdUZGMTYnOiAnNicsIC8vIEZ1bGx3aWR0aCBkaWdpdCA2XG4gICdcXHVGRjE3JzogJzcnLCAvLyBGdWxsd2lkdGggZGlnaXQgN1xuICAnXFx1RkYxOCc6ICc4JywgLy8gRnVsbHdpZHRoIGRpZ2l0IDhcbiAgJ1xcdUZGMTknOiAnOScsIC8vIEZ1bGx3aWR0aCBkaWdpdCA5XG4gICdcXHUwNjYwJzogJzAnLCAvLyBBcmFiaWMtaW5kaWMgZGlnaXQgMFxuICAnXFx1MDY2MSc6ICcxJywgLy8gQXJhYmljLWluZGljIGRpZ2l0IDFcbiAgJ1xcdTA2NjInOiAnMicsIC8vIEFyYWJpYy1pbmRpYyBkaWdpdCAyXG4gICdcXHUwNjYzJzogJzMnLCAvLyBBcmFiaWMtaW5kaWMgZGlnaXQgM1xuICAnXFx1MDY2NCc6ICc0JywgLy8gQXJhYmljLWluZGljIGRpZ2l0IDRcbiAgJ1xcdTA2NjUnOiAnNScsIC8vIEFyYWJpYy1pbmRpYyBkaWdpdCA1XG4gICdcXHUwNjY2JzogJzYnLCAvLyBBcmFiaWMtaW5kaWMgZGlnaXQgNlxuICAnXFx1MDY2Nyc6ICc3JywgLy8gQXJhYmljLWluZGljIGRpZ2l0IDdcbiAgJ1xcdTA2NjgnOiAnOCcsIC8vIEFyYWJpYy1pbmRpYyBkaWdpdCA4XG4gICdcXHUwNjY5JzogJzknLCAvLyBBcmFiaWMtaW5kaWMgZGlnaXQgOVxuICAnXFx1MDZGMCc6ICcwJywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgMFxuICAnXFx1MDZGMSc6ICcxJywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgMVxuICAnXFx1MDZGMic6ICcyJywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgMlxuICAnXFx1MDZGMyc6ICczJywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgM1xuICAnXFx1MDZGNCc6ICc0JywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgNFxuICAnXFx1MDZGNSc6ICc1JywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgNVxuICAnXFx1MDZGNic6ICc2JywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgNlxuICAnXFx1MDZGNyc6ICc3JywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgN1xuICAnXFx1MDZGOCc6ICc4JywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgOFxuICAnXFx1MDZGOSc6ICc5JywgLy8gRWFzdGVybi1BcmFiaWMgZGlnaXQgOVxufTtcblxuLy8gVGhlIG1heGltdW0gbGVuZ3RoIG9mIHRoZSBjb3VudHJ5IGNhbGxpbmcgY29kZS5cbmV4cG9ydCBjb25zdCBNQVhfTEVOR1RIX0NPVU5UUllfQ09ERSA9IDM7XG5cbi8vIFBhcnNlcyBhIGZvcm1hdHRlZCBwaG9uZSBudW1iZXJcbi8vIGFuZCByZXR1cm5zIGB7IGNvdW50cnlDYWxsaW5nQ29kZSwgbnVtYmVyIH1gXG4vLyB3aGVyZSBgbnVtYmVyYCBpcyBqdXN0IHRoZSBcIm51bWJlclwiIHBhcnRcbi8vIHdoaWNoIGlzIGxlZnQgYWZ0ZXIgZXh0cmFjdGluZyBgY291bnRyeUNhbGxpbmdDb2RlYFxuLy8gYW5kIGlzIG5vdCBuZWNlc3NhcmlseSBhIFwibmF0aW9uYWwgKHNpZ25pZmljYW50KSBudW1iZXJcIlxuLy8gYW5kIG1pZ2h0IGFzIHdlbGwgY29udGFpbiBuYXRpb25hbCBwcmVmaXguXG4vL1xuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RDb3VudHJ5Q2FsbGluZ0NvZGUocGhvbmVOdW1iZXIsIGNvdW50cnksIG1ldGFkYXRhKSB7XG4gIHBob25lTnVtYmVyID0gcGFyc2VJbmNvbXBsZXRlUGhvbmVOdW1iZXIocGhvbmVOdW1iZXIpO1xuXG4gIGlmICghcGhvbmVOdW1iZXIpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICAvLyBGYXN0IGFib3J0aW9uOiBjb3VudHJ5IGNvZGVzIGRvIG5vdCBiZWdpbiB3aXRoIGEgJzAnXG4gIGlmIChwaG9uZU51bWJlclsxXSA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLy8gVGhlIHRoaW5nIHdpdGggY291bnRyeSBwaG9uZSBjb2Rlc1xuICAvLyBpcyB0aGF0IHRoZXkgYXJlIG9ydGhvZ29uYWwgdG8gZWFjaCBvdGhlclxuICAvLyBpLmUuIHRoZXJlJ3Mgbm8gc3VjaCBjb3VudHJ5IHBob25lIGNvZGUgQVxuICAvLyBmb3Igd2hpY2ggY291bnRyeSBwaG9uZSBjb2RlIEIgZXhpc3RzXG4gIC8vIHdoZXJlIEIgc3RhcnRzIHdpdGggQS5cbiAgLy8gVGhlcmVmb3JlLCB3aGlsZSBzY2FubmluZyBkaWdpdHMsXG4gIC8vIGlmIGEgdmFsaWQgY291bnRyeSBjb2RlIGlzIGZvdW5kLFxuICAvLyB0aGF0IG1lYW5zIHRoYXQgaXQgaXMgdGhlIGNvdW50cnkgY29kZS5cbiAgLy9cbiAgbGV0IGkgPSAyO1xuICB3aGlsZSAoaSAtIDEgPD0gTUFYX0xFTkdUSF9DT1VOVFJZX0NPREUgJiYgaSA8PSBwaG9uZU51bWJlci5sZW5ndGgpIHtcbiAgICBjb25zdCBjb3VudHJ5Q2FsbGluZ0NvZGUgPSBwaG9uZU51bWJlci5zbGljZSgxLCBpKTtcblxuICAgIGlmIChtZXRhZGF0YS5jb3VudHJ5Q2FsbGluZ0NvZGVzKClbY291bnRyeUNhbGxpbmdDb2RlXSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY291bnRyeUNhbGxpbmdDb2RlLFxuICAgICAgICBwaG9uZU51bWJlcjogcGhvbmVOdW1iZXIuc2xpY2UoaSksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGkrKztcbiAgfVxuXG4gIHJldHVybiB7fTtcbn1cblxuLy8gQ2hlY2tzIHdoZXRoZXIgdGhlIGVudGlyZSBpbnB1dCBzZXF1ZW5jZSBjYW4gYmUgbWF0Y2hlZFxuLy8gYWdhaW5zdCB0aGUgcmVndWxhciBleHByZXNzaW9uLlxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoZXNfZW50aXJlbHkodGV4dCA9ICcnLCByZWd1bGFyRXhwcmVzc2lvbikge1xuICByZXR1cm4gbmV3IFJlZ0V4cCgnXig/OicgKyByZWd1bGFyRXhwcmVzc2lvbiArICcpJCcpLnRlc3QodGV4dCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURpZ2l0KGNoYXJhY3Rlcikge1xuICByZXR1cm4gRElHSVRTW2NoYXJhY3Rlcl07XG59XG4iXX0=