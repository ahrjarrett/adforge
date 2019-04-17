"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHost = getHost;
exports.getCurrentHost = getCurrentHost;
exports.getBackendDomainWithProtocol = getBackendDomainWithProtocol;
exports.getBackendDomain = getBackendDomain;
exports.getParameters = getParameters;

var _iframe = require("./iframe");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getCurrentLocation() {
  var currentURL = (0, _iframe.canAccessFrameElement)() && window.frameElement.getAttribute('data-base-path') || document.location.href;
  return currentURL;
}

function getHost(url) {
  var urlParts = url.split('/');
  return urlParts[0] + '//' + urlParts[2];
}

function getCurrentHost() {
  var currentURL = getCurrentLocation();
  return getHost(currentURL);
}

function getBackendDomainWithProtocol() {
  return process.env.DEFAULT_BACKEND || getCurrentHost();
}

function getBackendDomain() {
  return getBackendDomainWithProtocol().replace(/http(s?):\/\//, '');
}

function getParameters() {
  var currentURL = getCurrentLocation();
  var hashes = currentURL.slice(currentURL.indexOf('?') + 1).split('&');
  var params = {};
  hashes.map(function (hash) {
    var _hash$split = hash.split('='),
        _hash$split2 = _slicedToArray(_hash$split, 2),
        key = _hash$split2[0],
        val = _hash$split2[1];

    params[key] = decodeURIComponent(val);
  });
  return params;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91cmwudHMiXSwibmFtZXMiOlsiZ2V0Q3VycmVudExvY2F0aW9uIiwiY3VycmVudFVSTCIsIndpbmRvdyIsImZyYW1lRWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImRvY3VtZW50IiwibG9jYXRpb24iLCJocmVmIiwiZ2V0SG9zdCIsInVybCIsInVybFBhcnRzIiwic3BsaXQiLCJnZXRDdXJyZW50SG9zdCIsImdldEJhY2tlbmREb21haW5XaXRoUHJvdG9jb2wiLCJwcm9jZXNzIiwiZW52IiwiREVGQVVMVF9CQUNLRU5EIiwiZ2V0QmFja2VuZERvbWFpbiIsInJlcGxhY2UiLCJnZXRQYXJhbWV0ZXJzIiwiaGFzaGVzIiwic2xpY2UiLCJpbmRleE9mIiwicGFyYW1zIiwibWFwIiwiaGFzaCIsImtleSIsInZhbCIsImRlY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQUVBLFNBQVNBLGtCQUFULEdBQXNDO0FBQ3BDLE1BQU1DLFVBQVUsR0FDYix3Q0FBMkJDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsWUFBcEIsQ0FBaUMsZ0JBQWpDLENBQTVCLElBQ0FDLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsSUFGcEI7QUFJQSxTQUFPTixVQUFQO0FBQ0Q7O0FBRU0sU0FBU08sT0FBVCxDQUFpQkMsR0FBakIsRUFBc0M7QUFDM0MsTUFBTUMsUUFBUSxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVSxHQUFWLENBQWpCO0FBQ0EsU0FBT0QsUUFBUSxDQUFDLENBQUQsQ0FBUixHQUFjLElBQWQsR0FBcUJBLFFBQVEsQ0FBQyxDQUFELENBQXBDO0FBQ0Q7O0FBRU0sU0FBU0UsY0FBVCxHQUFrQztBQUN2QyxNQUFNWCxVQUFVLEdBQUdELGtCQUFrQixFQUFyQztBQUNBLFNBQU9RLE9BQU8sQ0FBQ1AsVUFBRCxDQUFkO0FBQ0Q7O0FBRU0sU0FBU1ksNEJBQVQsR0FBZ0Q7QUFDckQsU0FBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQVosSUFBK0JKLGNBQWMsRUFBcEQ7QUFDRDs7QUFFTSxTQUFTSyxnQkFBVCxHQUFvQztBQUN6QyxTQUFPSiw0QkFBNEIsR0FBR0ssT0FBL0IsQ0FBdUMsZUFBdkMsRUFBd0QsRUFBeEQsQ0FBUDtBQUNEOztBQUVNLFNBQVNDLGFBQVQsR0FBaUM7QUFDdEMsTUFBTWxCLFVBQVUsR0FBR0Qsa0JBQWtCLEVBQXJDO0FBQ0EsTUFBTW9CLE1BQU0sR0FBR25CLFVBQVUsQ0FBQ29CLEtBQVgsQ0FBaUJwQixVQUFVLENBQUNxQixPQUFYLENBQW1CLEdBQW5CLElBQTBCLENBQTNDLEVBQThDWCxLQUE5QyxDQUFvRCxHQUFwRCxDQUFmO0FBQ0EsTUFBTVksTUFBTSxHQUFHLEVBQWY7QUFDQUgsRUFBQUEsTUFBTSxDQUFDSSxHQUFQLENBQVcsVUFBQUMsSUFBSSxFQUFJO0FBQUEsc0JBQ0VBLElBQUksQ0FBQ2QsS0FBTCxDQUFXLEdBQVgsQ0FERjtBQUFBO0FBQUEsUUFDVmUsR0FEVTtBQUFBLFFBQ0xDLEdBREs7O0FBRWpCSixJQUFBQSxNQUFNLENBQUNHLEdBQUQsQ0FBTixHQUFjRSxrQkFBa0IsQ0FBQ0QsR0FBRCxDQUFoQztBQUNELEdBSEQ7QUFLQSxTQUFPSixNQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYW5BY2Nlc3NGcmFtZUVsZW1lbnQgfSBmcm9tICcuL2lmcmFtZSc7XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpOiBzdHJpbmcge1xuICBjb25zdCBjdXJyZW50VVJMID1cbiAgICAoY2FuQWNjZXNzRnJhbWVFbGVtZW50KCkgJiYgd2luZG93LmZyYW1lRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFzZS1wYXRoJykpIHx8XG4gICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcblxuICByZXR1cm4gY3VycmVudFVSTDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvc3QodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB1cmxQYXJ0cyA9IHVybC5zcGxpdCgnLycpO1xuICByZXR1cm4gdXJsUGFydHNbMF0gKyAnLy8nICsgdXJsUGFydHNbMl07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50SG9zdCgpOiBzdHJpbmcge1xuICBjb25zdCBjdXJyZW50VVJMID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gIHJldHVybiBnZXRIb3N0KGN1cnJlbnRVUkwpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmFja2VuZERvbWFpbldpdGhQcm90b2NvbCgpOiBzdHJpbmcge1xuICByZXR1cm4gcHJvY2Vzcy5lbnYuREVGQVVMVF9CQUNLRU5EIHx8IGdldEN1cnJlbnRIb3N0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrZW5kRG9tYWluKCk6IHN0cmluZyB7XG4gIHJldHVybiBnZXRCYWNrZW5kRG9tYWluV2l0aFByb3RvY29sKCkucmVwbGFjZSgvaHR0cChzPyk6XFwvXFwvLywgJycpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1ldGVycygpOiBvYmplY3Qge1xuICBjb25zdCBjdXJyZW50VVJMID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gIGNvbnN0IGhhc2hlcyA9IGN1cnJlbnRVUkwuc2xpY2UoY3VycmVudFVSTC5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICBjb25zdCBwYXJhbXMgPSB7fTtcbiAgaGFzaGVzLm1hcChoYXNoID0+IHtcbiAgICBjb25zdCBba2V5LCB2YWxdID0gaGFzaC5zcGxpdCgnPScpO1xuICAgIHBhcmFtc1trZXldID0gZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG4gIH0pO1xuXG4gIHJldHVybiBwYXJhbXM7XG59XG4iXX0=