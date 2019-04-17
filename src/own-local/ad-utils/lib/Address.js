"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.urlEncodedAddress = void 0;

var React = _interopRequireWildcard(require("react"));

var _formatter = require("./formatter");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* tslint:disable-next-line no-implicit-dependencies */
var urlEncodedAddress = function urlEncodedAddress(place) {
  var addressParts = [];
  Object.keys(place).forEach(function (key) {
    var addressPart = place[key] || '';

    if (addressPart) {
      if (key === 'subdivision') {
        addressPart = (0, _formatter.findSubdivision)(addressPart, place.country || '') || '';
      }

      addressParts.push(addressPart.replace(/\s+/g, '+'));
    }
  });
  return addressParts.join('+');
};

exports.urlEncodedAddress = urlEncodedAddress;

var Address = function Address(props) {
  var place = props.place;
  var formattedAddress = (0, _formatter.formatAddress)(place, place.country || '');

  if (formattedAddress.length === 1) {
    return React.createElement("span", {
      className: "text strong"
    }, formattedAddress[0]);
  }

  return React.createElement(React.Fragment, null, React.createElement("span", {
    className: "text strong"
  }, formattedAddress[0]), React.createElement("span", {
    className: "text weak"
  }, formattedAddress[1]));
};

var _default = Address;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BZGRyZXNzLnRzeCJdLCJuYW1lcyI6WyJ1cmxFbmNvZGVkQWRkcmVzcyIsInBsYWNlIiwiYWRkcmVzc1BhcnRzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJhZGRyZXNzUGFydCIsImNvdW50cnkiLCJwdXNoIiwicmVwbGFjZSIsImpvaW4iLCJBZGRyZXNzIiwicHJvcHMiLCJmb3JtYXR0ZWRBZGRyZXNzIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBRUE7Ozs7QUFIQTtBQU1PLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUEwQjtBQUN6RCxNQUFNQyxZQUFzQixHQUFHLEVBQS9CO0FBRUFDLEVBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxLQUFaLEVBQW1CSSxPQUFuQixDQUEyQixVQUFDQyxHQUFELEVBQWlCO0FBQzFDLFFBQUlDLFdBQVcsR0FBR04sS0FBSyxDQUFDSyxHQUFELENBQUwsSUFBYyxFQUFoQzs7QUFFQSxRQUFJQyxXQUFKLEVBQWlCO0FBQ2YsVUFBSUQsR0FBRyxLQUFLLGFBQVosRUFBMkI7QUFDekJDLFFBQUFBLFdBQVcsR0FBRyxnQ0FBZ0JBLFdBQWhCLEVBQTZCTixLQUFLLENBQUNPLE9BQU4sSUFBaUIsRUFBOUMsS0FBcUQsRUFBbkU7QUFDRDs7QUFFRE4sTUFBQUEsWUFBWSxDQUFDTyxJQUFiLENBQWtCRixXQUFXLENBQUNHLE9BQVosQ0FBb0IsTUFBcEIsRUFBNEIsR0FBNUIsQ0FBbEI7QUFDRDtBQUNGLEdBVkQ7QUFZQSxTQUFPUixZQUFZLENBQUNTLElBQWIsQ0FBa0IsR0FBbEIsQ0FBUDtBQUNELENBaEJNOzs7O0FBc0JQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBeUI7QUFBQSxNQUMvQlosS0FEK0IsR0FDckJZLEtBRHFCLENBQy9CWixLQUQrQjtBQUV2QyxNQUFNYSxnQkFBZ0IsR0FBRyw4QkFBY2IsS0FBZCxFQUFxQkEsS0FBSyxDQUFDTyxPQUFOLElBQWlCLEVBQXRDLENBQXpCOztBQUVBLE1BQUlNLGdCQUFnQixDQUFDQyxNQUFqQixLQUE0QixDQUFoQyxFQUFtQztBQUNqQyxXQUFPO0FBQU0sTUFBQSxTQUFTLEVBQUM7QUFBaEIsT0FBK0JELGdCQUFnQixDQUFDLENBQUQsQ0FBL0MsQ0FBUDtBQUNEOztBQUVELFNBQ0Usb0JBQUMsS0FBRCxDQUFPLFFBQVAsUUFDRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLEtBQStCQSxnQkFBZ0IsQ0FBQyxDQUFELENBQS9DLENBREYsRUFFRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLEtBQTZCQSxnQkFBZ0IsQ0FBQyxDQUFELENBQTdDLENBRkYsQ0FERjtBQU1ELENBZEQ7O2VBZ0JlRixPIiwic291cmNlc0NvbnRlbnQiOlsiLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWRlcGVuZGVuY2llcyAqL1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBmaW5kU3ViZGl2aXNpb24sIGZvcm1hdEFkZHJlc3MgfSBmcm9tICcuL2Zvcm1hdHRlcic7XG5pbXBvcnQgeyBQbGFjZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdXJsRW5jb2RlZEFkZHJlc3MgPSAocGxhY2U6IFBsYWNlKTogc3RyaW5nID0+IHtcbiAgY29uc3QgYWRkcmVzc1BhcnRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIE9iamVjdC5rZXlzKHBsYWNlKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgIGxldCBhZGRyZXNzUGFydCA9IHBsYWNlW2tleV0gfHwgJyc7XG5cbiAgICBpZiAoYWRkcmVzc1BhcnQpIHtcbiAgICAgIGlmIChrZXkgPT09ICdzdWJkaXZpc2lvbicpIHtcbiAgICAgICAgYWRkcmVzc1BhcnQgPSBmaW5kU3ViZGl2aXNpb24oYWRkcmVzc1BhcnQsIHBsYWNlLmNvdW50cnkgfHwgJycpIHx8ICcnO1xuICAgICAgfVxuXG4gICAgICBhZGRyZXNzUGFydHMucHVzaChhZGRyZXNzUGFydC5yZXBsYWNlKC9cXHMrL2csICcrJykpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGFkZHJlc3NQYXJ0cy5qb2luKCcrJyk7XG59O1xuXG5pbnRlcmZhY2UgQWRkcmVzc1Byb3BzIHtcbiAgcGxhY2U6IFBsYWNlO1xufVxuXG5jb25zdCBBZGRyZXNzID0gKHByb3BzOiBBZGRyZXNzUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwbGFjZSB9ID0gcHJvcHM7XG4gIGNvbnN0IGZvcm1hdHRlZEFkZHJlc3MgPSBmb3JtYXRBZGRyZXNzKHBsYWNlLCBwbGFjZS5jb3VudHJ5IHx8ICcnKTtcblxuICBpZiAoZm9ybWF0dGVkQWRkcmVzcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dCBzdHJvbmdcIj57Zm9ybWF0dGVkQWRkcmVzc1swXX08L3NwYW4+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0IHN0cm9uZ1wiPntmb3JtYXR0ZWRBZGRyZXNzWzBdfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQgd2Vha1wiPntmb3JtYXR0ZWRBZGRyZXNzWzFdfTwvc3Bhbj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzcztcbiJdfQ==