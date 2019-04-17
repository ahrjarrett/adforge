"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseIncompletePhoneNumber;
exports.parsePhoneNumberCharacter = parsePhoneNumberCharacter;

var _common = require("./common");

/**
 * Parses phone number characters from a string.
 * Drops all punctuation leaving only digits and the leading `+` sign (if any).
 * Also converts wide-ascii and arabic-indic numerals to conventional numerals.
 * E.g. in Iraq they don't write `+442323234` but rather `+٤٤٢٣٢٣٢٣٤`.
 * @param  {string} value
 * @return {string}
 * @example
 * ```js
 * parseIncompletePhoneNumber('8 (800) 555')
 * // Outputs '8800555'.
 * parseIncompletePhoneNumber('+7 800 555')
 * // Outputs '+7800555'.
 * ```
 */
function parseIncompletePhoneNumber(value) {
  var result = ''; // Using `.split('')` here instead of normal `for ... of`
  // because the importing application doesn't necessarily include an ES6 polyfill.
  // The `.split('')` approach discards "exotic" UTF-8 characters
  // (the ones consisting of four bytes) but digits
  // (including non-European ones) don't fall into that range
  // so such "exotic" characters would be discarded anyway.

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = value.split('')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var character = _step.value;
      result += parsePhoneNumberCharacter(character, result) || '';
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

  return result;
}
/**
 * `input-format` `parse()` function.
 * https://github.com/catamphetamine/input-format
 * @param  {string} character - Yet another character from raw input string.
 * @param  {string} value - The value parsed so far.
 * @return {string?} The parsed character.
 */


function parsePhoneNumberCharacter(character, value) {
  // Only allow a leading `+`.
  if (character === '+') {
    // If this `+` is not the first parsed character
    // then discard it.
    if (value) {
      return null;
    }

    return '+';
  } // Allow digits.


  return (0, _common.parseDigit)(character);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waG9uZUZvcm1hdC9wYXJzZUluY29tcGxldGVQaG9uZU51bWJlci50cyJdLCJuYW1lcyI6WyJwYXJzZUluY29tcGxldGVQaG9uZU51bWJlciIsInZhbHVlIiwicmVzdWx0Iiwic3BsaXQiLCJjaGFyYWN0ZXIiLCJwYXJzZVBob25lTnVtYmVyQ2hhcmFjdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUFlZSxTQUFTQSwwQkFBVCxDQUFvQ0MsS0FBcEMsRUFBMkQ7QUFDeEUsTUFBSUMsTUFBTSxHQUFHLEVBQWIsQ0FEd0UsQ0FHeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVJ3RTtBQUFBO0FBQUE7O0FBQUE7QUFTeEUseUJBQXdCRCxLQUFLLENBQUNFLEtBQU4sQ0FBWSxFQUFaLENBQXhCLDhIQUF5QztBQUFBLFVBQTlCQyxTQUE4QjtBQUN2Q0YsTUFBQUEsTUFBTSxJQUFJRyx5QkFBeUIsQ0FBQ0QsU0FBRCxFQUFZRixNQUFaLENBQXpCLElBQWdELEVBQTFEO0FBQ0Q7QUFYdUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFheEUsU0FBT0EsTUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7OztBQU9PLFNBQVNHLHlCQUFULENBQW1DRCxTQUFuQyxFQUFzREgsS0FBdEQsRUFBb0Y7QUFDekY7QUFDQSxNQUFJRyxTQUFTLEtBQUssR0FBbEIsRUFBdUI7QUFDckI7QUFDQTtBQUNBLFFBQUlILEtBQUosRUFBVztBQUNULGFBQU8sSUFBUDtBQUNEOztBQUVELFdBQU8sR0FBUDtBQUNELEdBVndGLENBWXpGOzs7QUFDQSxTQUFPLHdCQUFXRyxTQUFYLENBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHBhcnNlRGlnaXQgfSBmcm9tICcuL2NvbW1vbic7XG5cbi8qKlxuICogUGFyc2VzIHBob25lIG51bWJlciBjaGFyYWN0ZXJzIGZyb20gYSBzdHJpbmcuXG4gKiBEcm9wcyBhbGwgcHVuY3R1YXRpb24gbGVhdmluZyBvbmx5IGRpZ2l0cyBhbmQgdGhlIGxlYWRpbmcgYCtgIHNpZ24gKGlmIGFueSkuXG4gKiBBbHNvIGNvbnZlcnRzIHdpZGUtYXNjaWkgYW5kIGFyYWJpYy1pbmRpYyBudW1lcmFscyB0byBjb252ZW50aW9uYWwgbnVtZXJhbHMuXG4gKiBFLmcuIGluIElyYXEgdGhleSBkb24ndCB3cml0ZSBgKzQ0MjMyMzIzNGAgYnV0IHJhdGhlciBgK9mk2aTZotmj2aLZo9mi2aPZpGAuXG4gKiBAcGFyYW0gIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKiBAZXhhbXBsZVxuICogYGBganNcbiAqIHBhcnNlSW5jb21wbGV0ZVBob25lTnVtYmVyKCc4ICg4MDApIDU1NScpXG4gKiAvLyBPdXRwdXRzICc4ODAwNTU1Jy5cbiAqIHBhcnNlSW5jb21wbGV0ZVBob25lTnVtYmVyKCcrNyA4MDAgNTU1JylcbiAqIC8vIE91dHB1dHMgJys3ODAwNTU1Jy5cbiAqIGBgYFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZUluY29tcGxldGVQaG9uZU51bWJlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgbGV0IHJlc3VsdCA9ICcnO1xuXG4gIC8vIFVzaW5nIGAuc3BsaXQoJycpYCBoZXJlIGluc3RlYWQgb2Ygbm9ybWFsIGBmb3IgLi4uIG9mYFxuICAvLyBiZWNhdXNlIHRoZSBpbXBvcnRpbmcgYXBwbGljYXRpb24gZG9lc24ndCBuZWNlc3NhcmlseSBpbmNsdWRlIGFuIEVTNiBwb2x5ZmlsbC5cbiAgLy8gVGhlIGAuc3BsaXQoJycpYCBhcHByb2FjaCBkaXNjYXJkcyBcImV4b3RpY1wiIFVURi04IGNoYXJhY3RlcnNcbiAgLy8gKHRoZSBvbmVzIGNvbnNpc3Rpbmcgb2YgZm91ciBieXRlcykgYnV0IGRpZ2l0c1xuICAvLyAoaW5jbHVkaW5nIG5vbi1FdXJvcGVhbiBvbmVzKSBkb24ndCBmYWxsIGludG8gdGhhdCByYW5nZVxuICAvLyBzbyBzdWNoIFwiZXhvdGljXCIgY2hhcmFjdGVycyB3b3VsZCBiZSBkaXNjYXJkZWQgYW55d2F5LlxuICBmb3IgKGNvbnN0IGNoYXJhY3RlciBvZiB2YWx1ZS5zcGxpdCgnJykpIHtcbiAgICByZXN1bHQgKz0gcGFyc2VQaG9uZU51bWJlckNoYXJhY3RlcihjaGFyYWN0ZXIsIHJlc3VsdCkgfHwgJyc7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIGBpbnB1dC1mb3JtYXRgIGBwYXJzZSgpYCBmdW5jdGlvbi5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRhbXBoZXRhbWluZS9pbnB1dC1mb3JtYXRcbiAqIEBwYXJhbSAge3N0cmluZ30gY2hhcmFjdGVyIC0gWWV0IGFub3RoZXIgY2hhcmFjdGVyIGZyb20gcmF3IGlucHV0IHN0cmluZy5cbiAqIEBwYXJhbSAge3N0cmluZ30gdmFsdWUgLSBUaGUgdmFsdWUgcGFyc2VkIHNvIGZhci5cbiAqIEByZXR1cm4ge3N0cmluZz99IFRoZSBwYXJzZWQgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VQaG9uZU51bWJlckNoYXJhY3RlcihjaGFyYWN0ZXI6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHN0cmluZyB8IHZvaWQge1xuICAvLyBPbmx5IGFsbG93IGEgbGVhZGluZyBgK2AuXG4gIGlmIChjaGFyYWN0ZXIgPT09ICcrJykge1xuICAgIC8vIElmIHRoaXMgYCtgIGlzIG5vdCB0aGUgZmlyc3QgcGFyc2VkIGNoYXJhY3RlclxuICAgIC8vIHRoZW4gZGlzY2FyZCBpdC5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAnKyc7XG4gIH1cblxuICAvLyBBbGxvdyBkaWdpdHMuXG4gIHJldHVybiBwYXJzZURpZ2l0KGNoYXJhY3Rlcik7XG59XG4iXX0=