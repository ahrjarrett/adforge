"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateMetadata = validateMetadata;
exports.getExtPrefix = getExtPrefix;
exports.default = void 0;

var _defaultMetadata = _interopRequireDefault(require("./defaultMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var compare = function compare(a, b) {
  var pa = a.split('.');
  var pb = b.split('.');

  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);

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
}; // Added "possibleLengths" and renamed
// "countryPhoneCodeToCountries" to "countryCallingCodes".


var V2 = '1.0.18'; // Added "idd_prefix" and "default_idd_prefix".

var V3 = '1.2.0';
var DEFAULT_EXT_PREFIX = ' ext. ';

var Metadata =
/*#__PURE__*/
function () {
  function Metadata() {
    var metadata = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _defaultMetadata.default;

    _classCallCheck(this, Metadata);

    _defineProperty(this, "metadata", void 0);

    _defineProperty(this, "selectedCountry", void 0);

    _defineProperty(this, "countryMetadata", void 0);

    _defineProperty(this, "v1", void 0);

    _defineProperty(this, "v2", void 0);

    _defineProperty(this, "v3", void 0);

    validateMetadata(metadata);
    this.metadata = metadata;
    this.v1 = !metadata.version;
    this.v2 = metadata.version !== undefined && compare(metadata.version, V3) === -1;
    this.v3 = metadata.version !== undefined;
  }

  _createClass(Metadata, [{
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.metadata.countries[country] !== undefined;
    }
  }, {
    key: "country",
    value: function country(_country) {
      if (!_country) {
        this.selectedCountry = undefined;
        this.countryMetadata = undefined;
        return this;
      }

      if (!this.hasCountry(_country)) {
        throw new Error("Unknown country: ".concat(_country));
      }

      this.selectedCountry = _country;
      this.countryMetadata = this.metadata.countries[_country];
      return this;
    }
  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.countryMetadata[0];
    }
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) {
        return;
      }

      return this.countryMetadata[1];
    }
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) {
        return;
      }

      return this.countryMetadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) {
        return this.countryMetadata[1];
      }

      return this.countryMetadata[2];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) {
        return;
      }

      return this.countryMetadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "formats",
    value: function formats() {
      var _this = this;

      var formats = this.countryMetadata[this.v1 ? 2 : this.v2 ? 3 : 4] || [];
      return formats.map(function (_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.countryMetadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this.countryMetadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      // If `national_prefix_for_parsing` is not set explicitly,
      // then infer it from `national_prefix` (if any)
      return this.countryMetadata[this.v1 ? 5 : this.v2 ? 6 : 7] || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.countryMetadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormatting",
    value: function nationalPrefixIsOptionalWhenFormatting() {
      return !!this.countryMetadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.countryMetadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.countryMetadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      // Versions 1.2.0 - 1.2.4: can be `[]`.

      /* istanbul ignore next */
      if (this.types() && this.types().length === 0) {
        return false;
      } // Versions <= 1.2.4: can be `undefined`.
      // Version >= 1.2.5: can be `0`.


      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type) {
      if (this.hasTypes() && getType(this.types(), _type)) {
        return new Type(getType(this.types(), _type), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) {
        return DEFAULT_EXT_PREFIX;
      }

      return this.countryMetadata[13] || DEFAULT_EXT_PREFIX;
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) {
        return this.metadata.countryPhoneCodeToCountries;
      }

      return this.metadata.countryCallingCodes;
    } // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
    //
    // `country_calling_code` is always valid.
    // But the actual country may not necessarily be part of the metadata.
    //

  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(countryCallingCode) {
      var country = this.countryCallingCodes()[countryCallingCode][0]; // Do not want to test this case.
      // (custom metadata, not all countries).

      /* istanbul ignore else */

      if (this.hasCountry(country)) {
        this.country(country);
      }
    }
  }, {
    key: "getSelectedCountry",
    value: function getSelectedCountry() {
      return this.selectedCountry;
    }
  }]);

  return Metadata;
}();

exports.default = Metadata;

var Format =
/*#__PURE__*/
function () {
  function Format(format, metadata) {
    _classCallCheck(this, Format);

    _defineProperty(this, "format", void 0);

    _defineProperty(this, "metadata", void 0);

    this.format = format;
    this.metadata = metadata;
  }

  _createClass(Format, [{
    key: "pattern",
    value: function pattern() {
      return this.format[0];
    }
  }, {
    key: "getFormat",
    value: function getFormat() {
      return this.format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this.format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this.format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormatting",
    value: function nationalPrefixIsOptionalWhenFormatting() {
      return !!this.format[4] || this.metadata.nationalPrefixIsOptionalWhenFormatting();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormatting",
    value: function nationalPrefixIsMandatoryWhenFormatting() {
      // National prefix is omitted if there's no national prefix formatting rule
      // set for this country, or when the national prefix formatting rule
      // contains no national prefix itself, or when this rule is set but
      // national prefix is optional for this phone number format
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a dummy one.
      // Check that national prefix formatting rule actually has national prefix digit(s).
      this.usesNationalPrefix() && // Or maybe national prefix is optional for this format
      !this.nationalPrefixIsOptionalWhenFormatting();
    } // Checks whether national prefix formatting rule contains national prefix

  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      // Check that national prefix formatting rule is not a dummy one
      return this.nationalPrefixFormattingRule() !== '$1' && // Check that national prefix formatting rule actually has national prefix digit(s)
      /\d/.test(this.nationalPrefixFormattingRule().replace('$1', ''));
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this.format[5] || this.getFormat();
    }
  }]);

  return Format;
}();

var Type =
/*#__PURE__*/
function () {
  function Type(type, metadata) {
    _classCallCheck(this, Type);

    _defineProperty(this, "type", void 0);

    _defineProperty(this, "metadata", void 0);

    this.type = type;
    this.metadata = metadata;
  }

  _createClass(Type, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) {
        return this.type;
      }

      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) {
        return;
      }

      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);

  return Type;
}();

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

function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error('[libphonenumber-js] `metadata` argument not passed. Check your arguments.');
  } // `countryPhoneCodeToCountries` was renamed to
  // `countryCallingCodes` in `1.0.18`.


  if (!isObject(metadata) || !isObject(metadata.countries) || !isObject(metadata.countryCallingCodes) && !isObject(metadata.countryPhoneCodeToCountries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` and `.countryCallingCodes` child object properties. Got ".concat(isObject(metadata) ? 'an object of shape: { ' + Object.keys(metadata).join(', ') + ' }' : 'a ' + typeOf(metadata) + ': ' + metadata, "."));
  }
} // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var isObject = function isObject(_) {
  return _typeof(_) === 'object';
}; // Babel transforms `typeof` into some "branches"
// so istanbul will show this as "branch not covered".

/* istanbul ignore next */


var typeOf = function typeOf(_) {
  return _typeof(_);
};

function getExtPrefix(country, metadata) {
  return new Metadata(metadata).country(country).ext();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9waG9uZUZvcm1hdC9tZXRhZGF0YS50cyJdLCJuYW1lcyI6WyJjb21wYXJlIiwiYSIsImIiLCJwYSIsInNwbGl0IiwicGIiLCJpIiwibmEiLCJOdW1iZXIiLCJuYiIsImlzTmFOIiwiVjIiLCJWMyIsIkRFRkFVTFRfRVhUX1BSRUZJWCIsIk1ldGFkYXRhIiwibWV0YWRhdGEiLCJkZWZhdWx0TWV0YWRhdGEiLCJ2YWxpZGF0ZU1ldGFkYXRhIiwidjEiLCJ2ZXJzaW9uIiwidjIiLCJ1bmRlZmluZWQiLCJ2MyIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJzZWxlY3RlZENvdW50cnkiLCJjb3VudHJ5TWV0YWRhdGEiLCJoYXNDb3VudHJ5IiwiRXJyb3IiLCJmb3JtYXRzIiwibWFwIiwiXyIsIkZvcm1hdCIsIm5hdGlvbmFsUHJlZml4IiwidHlwZXMiLCJsZW5ndGgiLCJ0eXBlIiwiaGFzVHlwZXMiLCJnZXRUeXBlIiwiVHlwZSIsImNvdW50cnlQaG9uZUNvZGVUb0NvdW50cmllcyIsImNvdW50cnlDYWxsaW5nQ29kZXMiLCJjb3VudHJ5Q2FsbGluZ0NvZGUiLCJmb3JtYXQiLCJuYXRpb25hbFByZWZpeEZvcm1hdHRpbmdSdWxlIiwibmF0aW9uYWxQcmVmaXhJc09wdGlvbmFsV2hlbkZvcm1hdHRpbmciLCJ1c2VzTmF0aW9uYWxQcmVmaXgiLCJ0ZXN0IiwicmVwbGFjZSIsImdldEZvcm1hdCIsInBvc3NpYmxlTGVuZ3RocyIsImlzT2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImpvaW4iLCJ0eXBlT2YiLCJnZXRFeHRQcmVmaXgiLCJleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQUlBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLENBQUQsRUFBWUMsQ0FBWixFQUFrQztBQUNoRCxNQUFNQyxFQUFFLEdBQUdGLENBQUMsQ0FBQ0csS0FBRixDQUFRLEdBQVIsQ0FBWDtBQUNBLE1BQU1DLEVBQUUsR0FB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QUNBLElBQU13QixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFBeEIsQ0FBQztBQUFBLGlCQUFXQSxDQUFYO0FBQUEsQ0FBaEI7O0FBRU8sU0FBU3lCLFlBQVQsQ0FBc0JqQyxPQUF0QixFQUErQlIsUUFBL0IsRUFBeUM7QUFDOUMsU0FBTyxJQUFJRCxRQUFKLENBQWFDLFFBQWIsRUFBdUJRLE9BQXZCLENBQStCQSxPQUEvQixFQUF3Q2tDLEdBQXhDLEVBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkZWZhdWx0TWV0YWRhdGEgZnJvbSAnLi9kZWZhdWx0TWV0YWRhdGEnO1xuXG5pbXBvcnQgeyBNZXRhZGF0YVR5cGUgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgY29tcGFyZSA9IChhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciA9PiB7XG4gIGNvbnN0IHBhID0gYS5zcGxpdCgnLicpO1xuICBjb25zdCBwYiA9IGIuc3BsaXQoJy4nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICBjb25zdCBuYSA9IE51bWJlcihwYVtpXSk7XG4gICAgY29uc3QgbmIgPSBOdW1iZXIocGJbaV0pO1xuICAgIGlmIChuYSA+IG5iKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKG5iID4gbmEpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKCFpc05hTihuYSkgJiYgaXNOYU4obmIpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKGlzTmFOKG5hKSAmJiAhaXNOYU4obmIpKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG4gIHJldHVybiAwO1xufTtcblxuLy8gQWRkZWQgXCJwb3NzaWJsZUxlbmd0aHNcIiBhbmQgcmVuYW1lZFxuLy8gXCJjb3VudHJ5UGhvbmVDb2RlVG9Db3VudHJpZXNcIiB0byBcImNvdW50cnlDYWxsaW5nQ29kZXNcIi5cbmNvbnN0IFYyID0gJzEuMC4xOCc7XG5cbi8vIEFkZGVkIFwiaWRkX3ByZWZpeFwiIGFuZCBcImRlZmF1bHRfaWRkX3ByZWZpeFwiLlxuY29uc3QgVjMgPSAnMS4yLjAnO1xuXG5jb25zdCBERUZBVUxUX0VYVF9QUkVGSVggPSAnIGV4dC4gJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWV0YWRhdGEge1xuICBwcml2YXRlIG1ldGFkYXRhOiBNZXRhZGF0YVR5cGU7XG4gIHByaXZhdGUgc2VsZWN0ZWRDb3VudHJ5OiBvYmplY3Q7XG4gIHByaXZhdGUgY291bnRyeU1ldGFkYXRhOiBvYmplY3Q7XG4gIHByaXZhdGUgdjE6IGJvb2xlYW47XG4gIHByaXZhdGUgdjI6IGJvb2xlYW47XG4gIHByaXZhdGUgdjM6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IobWV0YWRhdGEgPSBkZWZhdWx0TWV0YWRhdGEpIHtcbiAgICB2YWxpZGF0ZU1ldGFkYXRhKG1ldGFkYXRhKTtcblxuICAgIHRoaXMubWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgIHRoaXMudjEgPSAhbWV0YWRhdGEudmVyc2lvbjtcbiAgICB0aGlzLnYyID0gbWV0YWRhdGEudmVyc2lvbiAhPT0gdW5kZWZpbmVkICYmIGNvbXBhcmUobWV0YWRhdGEudmVyc2lvbiwgVjMpID09PSAtMTtcbiAgICB0aGlzLnYzID0gbWV0YWRhdGEudmVyc2lvbiAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGhhc0NvdW50cnkoY291bnRyeSkge1xuICAgIHJldHVybiB0aGlzLm1ldGFkYXRhLmNvdW50cmllc1tjb3VudHJ5XSAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGNvdW50cnkoY291bnRyeSkge1xuICAgIGlmICghY291bnRyeSkge1xuICAgICAgdGhpcy5zZWxlY3RlZENvdW50cnkgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmNvdW50cnlNZXRhZGF0YSA9IHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5oYXNDb3VudHJ5KGNvdW50cnkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gY291bnRyeTogJHtjb3VudHJ5fWApO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0ZWRDb3VudHJ5ID0gY291bnRyeTtcbiAgICB0aGlzLmNvdW50cnlNZXRhZGF0YSA9IHRoaXMubWV0YWRhdGEuY291bnRyaWVzW2NvdW50cnldO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGNvdW50cnlDYWxsaW5nQ29kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudHJ5TWV0YWRhdGFbMF07XG4gIH1cblxuICBwdWJsaWMgSUREUHJlZml4KCkge1xuICAgIGlmICh0aGlzLnYxIHx8IHRoaXMudjIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeU1ldGFkYXRhWzFdO1xuICB9XG5cbiAgcHVibGljIGRlZmF1bHRJRERQcmVmaXgoKSB7XG4gICAgaWYgKHRoaXMudjEgfHwgdGhpcy52Mikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb3VudHJ5TWV0YWRhdGFbMTJdO1xuICB9XG5cbiAgcHVibGljIG5hdGlvbmFsTnVtYmVyUGF0dGVybigpIHtcbiAgICBpZiAodGhpcy52MSB8fCB0aGlzLnYyKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb3VudHJ5TWV0YWRhdGFbMV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvdW50cnlNZXRhZGF0YVsyXTtcbiAgfVxuXG4gIHB1YmxpYyBwb3NzaWJsZUxlbmd0aHMoKSB7XG4gICAgaWYgKHRoaXMudjEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeU1ldGFkYXRhW3RoaXMudjIgPyAyIDogM107XG4gIH1cblxuICBwdWJsaWMgZm9ybWF0cygpIHtcbiAgICBjb25zdCBmb3JtYXRzID0gdGhpcy5jb3VudHJ5TWV0YWRhdGFbdGhpcy52MSA/IDIgOiB0aGlzLnYyID8gMyA6IDRdIHx8IFtdO1xuICAgIHJldHVybiBmb3JtYXRzLm1hcChfID0+IG5ldyBGb3JtYXQoXywgdGhpcykpO1xuICB9XG5cbiAgcHVibGljIG5hdGlvbmFsUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnlNZXRhZGF0YVt0aGlzLnYxID8gMyA6IHRoaXMudjIgPyA0IDogNV07XG4gIH1cblxuICBwdWJsaWMgbmF0aW9uYWxQcmVmaXhGb3JtYXR0aW5nUnVsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudHJ5TWV0YWRhdGFbdGhpcy52MSA/IDQgOiB0aGlzLnYyID8gNSA6IDZdO1xuICB9XG5cbiAgcHVibGljIG5hdGlvbmFsUHJlZml4Rm9yUGFyc2luZygpIHtcbiAgICAvLyBJZiBgbmF0aW9uYWxfcHJlZml4X2Zvcl9wYXJzaW5nYCBpcyBub3Qgc2V0IGV4cGxpY2l0bHksXG4gICAgLy8gdGhlbiBpbmZlciBpdCBmcm9tIGBuYXRpb25hbF9wcmVmaXhgIChpZiBhbnkpXG4gICAgcmV0dXJuIHRoaXMuY291bnRyeU1ldGFkYXRhW3RoaXMudjEgPyA1IDogdGhpcy52MiA/IDYgOiA3XSB8fCB0aGlzLm5hdGlvbmFsUHJlZml4KCk7XG4gIH1cblxuICBwdWJsaWMgbmF0aW9uYWxQcmVmaXhUcmFuc2Zvcm1SdWxlKCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50cnlNZXRhZGF0YVt0aGlzLnYxID8gNiA6IHRoaXMudjIgPyA3IDogOF07XG4gIH1cblxuICBwdWJsaWMgbmF0aW9uYWxQcmVmaXhJc09wdGlvbmFsV2hlbkZvcm1hdHRpbmcoKSB7XG4gICAgcmV0dXJuICEhdGhpcy5jb3VudHJ5TWV0YWRhdGFbdGhpcy52MSA/IDcgOiB0aGlzLnYyID8gOCA6IDldO1xuICB9XG5cbiAgcHVibGljIGxlYWRpbmdEaWdpdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeU1ldGFkYXRhW3RoaXMudjEgPyA4IDogdGhpcy52MiA/IDkgOiAxMF07XG4gIH1cblxuICBwdWJsaWMgdHlwZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeU1ldGFkYXRhW3RoaXMudjEgPyA5IDogdGhpcy52MiA/IDEwIDogMTFdO1xuICB9XG5cbiAgcHVibGljIGhhc1R5cGVzKCkge1xuICAgIC8vIFZlcnNpb25zIDEuMi4wIC0gMS4yLjQ6IGNhbiBiZSBgW11gLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgaWYgKHRoaXMudHlwZXMoKSAmJiB0aGlzLnR5cGVzKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZlcnNpb25zIDw9IDEuMi40OiBjYW4gYmUgYHVuZGVmaW5lZGAuXG4gICAgLy8gVmVyc2lvbiA+PSAxLjIuNTogY2FuIGJlIGAwYC5cbiAgICByZXR1cm4gISF0aGlzLnR5cGVzKCk7XG4gIH1cblxuICBwdWJsaWMgdHlwZSh0eXBlKSB7XG4gICAgaWYgKHRoaXMuaGFzVHlwZXMoKSAmJiBnZXRUeXBlKHRoaXMudHlwZXMoKSwgdHlwZSkpIHtcbiAgICAgIHJldHVybiBuZXcgVHlwZShnZXRUeXBlKHRoaXMudHlwZXMoKSwgdHlwZSksIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBleHQoKSB7XG4gICAgaWYgKHRoaXMudjEgfHwgdGhpcy52Mikge1xuICAgICAgcmV0dXJuIERFRkFVTFRfRVhUX1BSRUZJWDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY291bnRyeU1ldGFkYXRhWzEzXSB8fCBERUZBVUxUX0VYVF9QUkVGSVg7XG4gIH1cblxuICBwdWJsaWMgY291bnRyeUNhbGxpbmdDb2RlcygpIHtcbiAgICBpZiAodGhpcy52MSkge1xuICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEuY291bnRyeVBob25lQ29kZVRvQ291bnRyaWVzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5jb3VudHJ5Q2FsbGluZ0NvZGVzO1xuICB9XG5cbiAgLy8gRm9ybWF0dGluZyBpbmZvcm1hdGlvbiBmb3IgcmVnaW9ucyB3aGljaCBzaGFyZVxuICAvLyBhIGNvdW50cnkgY2FsbGluZyBjb2RlIGlzIGNvbnRhaW5lZCBieSBvbmx5IG9uZSByZWdpb25cbiAgLy8gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuIEZvciBleGFtcGxlLCBmb3IgTkFOUEEgcmVnaW9uXG4gIC8vIChcIk5vcnRoIEFtZXJpY2FuIE51bWJlcmluZyBQbGFuIEFkbWluaXN0cmF0aW9uXCIsXG4gIC8vICB3aGljaCBpbmNsdWRlcyBVU0EsIENhbmFkYSwgQ2F5bWFuIElzbGFuZHMsIEJhaGFtYXMsIGV0YylcbiAgLy8gaXQgd2lsbCBiZSBjb250YWluZWQgaW4gdGhlIG1ldGFkYXRhIGZvciBgVVNgLlxuICAvL1xuICAvLyBgY291bnRyeV9jYWxsaW5nX2NvZGVgIGlzIGFsd2F5cyB2YWxpZC5cbiAgLy8gQnV0IHRoZSBhY3R1YWwgY291bnRyeSBtYXkgbm90IG5lY2Vzc2FyaWx5IGJlIHBhcnQgb2YgdGhlIG1ldGFkYXRhLlxuICAvL1xuICBwdWJsaWMgY2hvb3NlQ291bnRyeUJ5Q291bnRyeUNhbGxpbmdDb2RlKGNvdW50cnlDYWxsaW5nQ29kZSkge1xuICAgIGNvbnN0IGNvdW50cnkgPSB0aGlzLmNvdW50cnlDYWxsaW5nQ29kZXMoKVtjb3VudHJ5Q2FsbGluZ0NvZGVdWzBdO1xuXG4gICAgLy8gRG8gbm90IHdhbnQgdG8gdGVzdCB0aGlzIGNhc2UuXG4gICAgLy8gKGN1c3RvbSBtZXRhZGF0YSwgbm90IGFsbCBjb3VudHJpZXMpLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKHRoaXMuaGFzQ291bnRyeShjb3VudHJ5KSkge1xuICAgICAgdGhpcy5jb3VudHJ5KGNvdW50cnkpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRTZWxlY3RlZENvdW50cnkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRDb3VudHJ5O1xuICB9XG59XG5cbmNsYXNzIEZvcm1hdCB7XG4gIHByaXZhdGUgZm9ybWF0OiBvYmplY3Q7XG4gIHByaXZhdGUgbWV0YWRhdGE6IHtcbiAgICBuYXRpb25hbFByZWZpeEZvcm1hdHRpbmdSdWxlOiAoKSA9PiB2b2lkO1xuICAgIG5hdGlvbmFsUHJlZml4SXNPcHRpb25hbFdoZW5Gb3JtYXR0aW5nOiAoKSA9PiB2b2lkO1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGZvcm1hdCwgbWV0YWRhdGEpIHtcbiAgICB0aGlzLmZvcm1hdCA9IGZvcm1hdDtcbiAgICB0aGlzLm1ldGFkYXRhID0gbWV0YWRhdGE7XG4gIH1cblxuICBwdWJsaWMgcGF0dGVybigpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRbMF07XG4gIH1cblxuICBwdWJsaWMgZ2V0Rm9ybWF0KCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdFsxXTtcbiAgfVxuXG4gIHB1YmxpYyBsZWFkaW5nRGlnaXRzUGF0dGVybnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0WzJdIHx8IFtdO1xuICB9XG5cbiAgcHVibGljIG5hdGlvbmFsUHJlZml4Rm9ybWF0dGluZ1J1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0WzNdIHx8IHRoaXMubWV0YWRhdGEubmF0aW9uYWxQcmVmaXhGb3JtYXR0aW5nUnVsZSgpO1xuICB9XG5cbiAgcHVibGljIG5hdGlvbmFsUHJlZml4SXNPcHRpb25hbFdoZW5Gb3JtYXR0aW5nKCkge1xuICAgIHJldHVybiAhIXRoaXMuZm9ybWF0WzRdIHx8IHRoaXMubWV0YWRhdGEubmF0aW9uYWxQcmVmaXhJc09wdGlvbmFsV2hlbkZvcm1hdHRpbmcoKTtcbiAgfVxuXG4gIHB1YmxpYyBuYXRpb25hbFByZWZpeElzTWFuZGF0b3J5V2hlbkZvcm1hdHRpbmcoKSB7XG4gICAgLy8gTmF0aW9uYWwgcHJlZml4IGlzIG9taXR0ZWQgaWYgdGhlcmUncyBubyBuYXRpb25hbCBwcmVmaXggZm9ybWF0dGluZyBydWxlXG4gICAgLy8gc2V0IGZvciB0aGlzIGNvdW50cnksIG9yIHdoZW4gdGhlIG5hdGlvbmFsIHByZWZpeCBmb3JtYXR0aW5nIHJ1bGVcbiAgICAvLyBjb250YWlucyBubyBuYXRpb25hbCBwcmVmaXggaXRzZWxmLCBvciB3aGVuIHRoaXMgcnVsZSBpcyBzZXQgYnV0XG4gICAgLy8gbmF0aW9uYWwgcHJlZml4IGlzIG9wdGlvbmFsIGZvciB0aGlzIHBob25lIG51bWJlciBmb3JtYXRcbiAgICAvLyAoYW5kIGl0IGlzIG5vdCBlbmZvcmNlZCBleHBsaWNpdGx5KVxuICAgIHJldHVybiAoXG4gICAgICB0aGlzLm5hdGlvbmFsUHJlZml4Rm9ybWF0dGluZ1J1bGUoKSAmJlxuICAgICAgLy8gQ2hlY2sgdGhhdCBuYXRpb25hbCBwcmVmaXggZm9ybWF0dGluZyBydWxlIGlzIG5vdCBhIGR1bW15IG9uZS5cbiAgICAgIC8vIENoZWNrIHRoYXQgbmF0aW9uYWwgcHJlZml4IGZvcm1hdHRpbmcgcnVsZSBhY3R1YWxseSBoYXMgbmF0aW9uYWwgcHJlZml4IGRpZ2l0KHMpLlxuICAgICAgdGhpcy51c2VzTmF0aW9uYWxQcmVmaXgoKSAmJlxuICAgICAgLy8gT3IgbWF5YmUgbmF0aW9uYWwgcHJlZml4IGlzIG9wdGlvbmFsIGZvciB0aGlzIGZvcm1hdFxuICAgICAgIXRoaXMubmF0aW9uYWxQcmVmaXhJc09wdGlvbmFsV2hlbkZvcm1hdHRpbmcoKVxuICAgICk7XG4gIH1cblxuICAvLyBDaGVja3Mgd2hldGhlciBuYXRpb25hbCBwcmVmaXggZm9ybWF0dGluZyBydWxlIGNvbnRhaW5zIG5hdGlvbmFsIHByZWZpeFxuICBwdWJsaWMgdXNlc05hdGlvbmFsUHJlZml4KCkge1xuICAgIC8vIENoZWNrIHRoYXQgbmF0aW9uYWwgcHJlZml4IGZvcm1hdHRpbmcgcnVsZSBpcyBub3QgYSBkdW1teSBvbmVcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5uYXRpb25hbFByZWZpeEZvcm1hdHRpbmdSdWxlKCkgIT09ICckMScgJiZcbiAgICAgIC8vIENoZWNrIHRoYXQgbmF0aW9uYWwgcHJlZml4IGZvcm1hdHRpbmcgcnVsZSBhY3R1YWxseSBoYXMgbmF0aW9uYWwgcHJlZml4IGRpZ2l0KHMpXG4gICAgICAvXFxkLy50ZXN0KHRoaXMubmF0aW9uYWxQcmVmaXhGb3JtYXR0aW5nUnVsZSgpLnJlcGxhY2UoJyQxJywgJycpKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgaW50ZXJuYXRpb25hbEZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtYXRbNV0gfHwgdGhpcy5nZXRGb3JtYXQoKTtcbiAgfVxufVxuXG5jbGFzcyBUeXBlIHtcbiAgcHJpdmF0ZSB0eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgbWV0YWRhdGE6IHtcbiAgICB2MTogc3RyaW5nO1xuICAgIHBvc3NpYmxlTGVuZ3RoczogKCkgPT4gdm9pZDtcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcih0eXBlLCBtZXRhZGF0YSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5tZXRhZGF0YSA9IG1ldGFkYXRhO1xuICB9XG5cbiAgcHVibGljIHBhdHRlcm4oKSB7XG4gICAgaWYgKHRoaXMubWV0YWRhdGEudjEpIHtcbiAgICAgIHJldHVybiB0aGlzLnR5cGU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnR5cGVbMF07XG4gIH1cblxuICBwdWJsaWMgcG9zc2libGVMZW5ndGhzKCkge1xuICAgIGlmICh0aGlzLm1ldGFkYXRhLnYxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnR5cGVbMV0gfHwgdGhpcy5tZXRhZGF0YS5wb3NzaWJsZUxlbmd0aHMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUeXBlKHR5cGVzLCB0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ0ZJWEVEX0xJTkUnOlxuICAgICAgcmV0dXJuIHR5cGVzWzBdO1xuICAgIGNhc2UgJ01PQklMRSc6XG4gICAgICByZXR1cm4gdHlwZXNbMV07XG4gICAgY2FzZSAnVE9MTF9GUkVFJzpcbiAgICAgIHJldHVybiB0eXBlc1syXTtcbiAgICBjYXNlICdQUkVNSVVNX1JBVEUnOlxuICAgICAgcmV0dXJuIHR5cGVzWzNdO1xuICAgIGNhc2UgJ1BFUlNPTkFMX05VTUJFUic6XG4gICAgICByZXR1cm4gdHlwZXNbNF07XG4gICAgY2FzZSAnVk9JQ0VNQUlMJzpcbiAgICAgIHJldHVybiB0eXBlc1s1XTtcbiAgICBjYXNlICdVQU4nOlxuICAgICAgcmV0dXJuIHR5cGVzWzZdO1xuICAgIGNhc2UgJ1BBR0VSJzpcbiAgICAgIHJldHVybiB0eXBlc1s3XTtcbiAgICBjYXNlICdWT0lQJzpcbiAgICAgIHJldHVybiB0eXBlc1s4XTtcbiAgICBjYXNlICdTSEFSRURfQ09TVCc6XG4gICAgICByZXR1cm4gdHlwZXNbOV07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlTWV0YWRhdGEobWV0YWRhdGEpIHtcbiAgaWYgKCFtZXRhZGF0YSkge1xuICAgIHRocm93IG5ldyBFcnJvcignW2xpYnBob25lbnVtYmVyLWpzXSBgbWV0YWRhdGFgIGFyZ3VtZW50IG5vdCBwYXNzZWQuIENoZWNrIHlvdXIgYXJndW1lbnRzLicpO1xuICB9XG5cbiAgLy8gYGNvdW50cnlQaG9uZUNvZGVUb0NvdW50cmllc2Agd2FzIHJlbmFtZWQgdG9cbiAgLy8gYGNvdW50cnlDYWxsaW5nQ29kZXNgIGluIGAxLjAuMThgLlxuICBpZiAoXG4gICAgIWlzT2JqZWN0KG1ldGFkYXRhKSB8fFxuICAgICFpc09iamVjdChtZXRhZGF0YS5jb3VudHJpZXMpIHx8XG4gICAgKCFpc09iamVjdChtZXRhZGF0YS5jb3VudHJ5Q2FsbGluZ0NvZGVzKSAmJiAhaXNPYmplY3QobWV0YWRhdGEuY291bnRyeVBob25lQ29kZVRvQ291bnRyaWVzKSlcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYFtsaWJwaG9uZW51bWJlci1qc10gXFxgbWV0YWRhdGFcXGAgYXJndW1lbnQgd2FzIHBhc3NlZCBidXQgaXQncyBub3QgYSB2YWxpZCBtZXRhZGF0YS4gTXVzdCBiZSBhbiBvYmplY3QgaGF2aW5nIFxcYC5jb3VudHJpZXNcXGAgYW5kIFxcYC5jb3VudHJ5Q2FsbGluZ0NvZGVzXFxgIGNoaWxkIG9iamVjdCBwcm9wZXJ0aWVzLiBHb3QgJHtcbiAgICAgICAgaXNPYmplY3QobWV0YWRhdGEpXG4gICAgICAgICAgPyAnYW4gb2JqZWN0IG9mIHNoYXBlOiB7ICcgKyBPYmplY3Qua2V5cyhtZXRhZGF0YSkuam9pbignLCAnKSArICcgfSdcbiAgICAgICAgICA6ICdhICcgKyB0eXBlT2YobWV0YWRhdGEpICsgJzogJyArIG1ldGFkYXRhXG4gICAgICB9LmBcbiAgICApO1xuICB9XG59XG5cbi8vIEJhYmVsIHRyYW5zZm9ybXMgYHR5cGVvZmAgaW50byBzb21lIFwiYnJhbmNoZXNcIlxuLy8gc28gaXN0YW5idWwgd2lsbCBzaG93IHRoaXMgYXMgXCJicmFuY2ggbm90IGNvdmVyZWRcIi5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5jb25zdCBpc09iamVjdCA9IF8gPT4gdHlwZW9mIF8gPT09ICdvYmplY3QnO1xuXG4vLyBCYWJlbCB0cmFuc2Zvcm1zIGB0eXBlb2ZgIGludG8gc29tZSBcImJyYW5jaGVzXCJcbi8vIHNvIGlzdGFuYnVsIHdpbGwgc2hvdyB0aGlzIGFzIFwiYnJhbmNoIG5vdCBjb3ZlcmVkXCIuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuY29uc3QgdHlwZU9mID0gXyA9PiB0eXBlb2YgXztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV4dFByZWZpeChjb3VudHJ5LCBtZXRhZGF0YSkge1xuICByZXR1cm4gbmV3IE1ldGFkYXRhKG1ldGFkYXRhKS5jb3VudHJ5KGNvdW50cnkpLmV4dCgpO1xufVxuIl19