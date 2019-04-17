"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function renderTickerItem(headline, index) {
  var itemNumber = index + 1; // We add the rendering logic below so that when the text is too long on the horizontal ads,
  // then we will make the text proportionally smaller, by applying an inline style.

  var tooMuchTextLim = 35;
  var textLim = 50;
  var length = headline.length;
  var percentOfFontDecrease = (length - tooMuchTextLim) / (textLim - tooMuchTextLim);
  var fixTextOverflow = length > tooMuchTextLim;
  var newFontSize;

  if (window.innerHeight <= 50) {
    newFontSize = 15 - (window.innerWidth <= 300 ? 4 : 3) * percentOfFontDecrease;
  } else if (window.innerHeight <= 90) {
    newFontSize = 25 - 6 * percentOfFontDecrease;
  }

  var smallFontStyle = {
    fontSize: "".concat(newFontSize, "px")
  };
  return React.createElement("div", {
    key: itemNumber,
    className: "ticker-item ticker-item-".concat(itemNumber),
    style: fixTextOverflow ? smallFontStyle : {} // TODO: This is not the goal. Fix this.
    ,
    dangerouslySetInnerHTML: {
      __html: headline
    }
  });
}

var Ticker = function Ticker(props) {
  return React.createElement("div", {
    className: "ticker"
  }, props.headlines.map(renderTickerItem));
};

var _default = Ticker;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UaWNrZXIudHN4Il0sIm5hbWVzIjpbInJlbmRlclRpY2tlckl0ZW0iLCJoZWFkbGluZSIsImluZGV4IiwiaXRlbU51bWJlciIsInRvb011Y2hUZXh0TGltIiwidGV4dExpbSIsImxlbmd0aCIsInBlcmNlbnRPZkZvbnREZWNyZWFzZSIsImZpeFRleHRPdmVyZmxvdyIsIm5ld0ZvbnRTaXplIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJpbm5lcldpZHRoIiwic21hbGxGb250U3R5bGUiLCJmb250U2l6ZSIsIl9faHRtbCIsIlRpY2tlciIsInByb3BzIiwiaGVhZGxpbmVzIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFFQSxTQUFTQSxnQkFBVCxDQUEwQkMsUUFBMUIsRUFBNENDLEtBQTVDLEVBQTJEO0FBQ3pELE1BQU1DLFVBQVUsR0FBR0QsS0FBSyxHQUFHLENBQTNCLENBRHlELENBR3pEO0FBQ0E7O0FBQ0EsTUFBTUUsY0FBYyxHQUFHLEVBQXZCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTCxRQUFRLENBQUNLLE1BQXhCO0FBQ0EsTUFBTUMscUJBQXFCLEdBQUcsQ0FBQ0QsTUFBTSxHQUFHRixjQUFWLEtBQTZCQyxPQUFPLEdBQUdELGNBQXZDLENBQTlCO0FBQ0EsTUFBTUksZUFBZSxHQUFHRixNQUFNLEdBQUdGLGNBQWpDO0FBRUEsTUFBSUssV0FBSjs7QUFDQSxNQUFJQyxNQUFNLENBQUNDLFdBQVAsSUFBc0IsRUFBMUIsRUFBOEI7QUFDNUJGLElBQUFBLFdBQVcsR0FBRyxLQUFLLENBQUNDLE1BQU0sQ0FBQ0UsVUFBUCxJQUFxQixHQUFyQixHQUEyQixDQUEzQixHQUErQixDQUFoQyxJQUFxQ0wscUJBQXhEO0FBQ0QsR0FGRCxNQUVPLElBQUlHLE1BQU0sQ0FBQ0MsV0FBUCxJQUFzQixFQUExQixFQUE4QjtBQUNuQ0YsSUFBQUEsV0FBVyxHQUFHLEtBQUssSUFBSUYscUJBQXZCO0FBQ0Q7O0FBRUQsTUFBTU0sY0FBbUMsR0FBRztBQUMxQ0MsSUFBQUEsUUFBUSxZQUFLTCxXQUFMO0FBRGtDLEdBQTVDO0FBR0EsU0FDRTtBQUNFLElBQUEsR0FBRyxFQUFFTixVQURQO0FBRUUsSUFBQSxTQUFTLG9DQUE2QkEsVUFBN0IsQ0FGWDtBQUdFLElBQUEsS0FBSyxFQUFFSyxlQUFlLEdBQUdLLGNBQUgsR0FBb0IsRUFINUMsQ0FJRTtBQUpGO0FBS0UsSUFBQSx1QkFBdUIsRUFBRTtBQUFFRSxNQUFBQSxNQUFNLEVBQUVkO0FBQVY7QUFMM0IsSUFERjtBQVNEOztBQU1ELElBQU1lLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBd0I7QUFDckMsU0FBTztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBeUJBLEtBQUssQ0FBQ0MsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0JuQixnQkFBcEIsQ0FBekIsQ0FBUDtBQUNELENBRkQ7O2VBSWVnQixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiByZW5kZXJUaWNrZXJJdGVtKGhlYWRsaW5lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgaXRlbU51bWJlciA9IGluZGV4ICsgMTtcblxuICAvLyBXZSBhZGQgdGhlIHJlbmRlcmluZyBsb2dpYyBiZWxvdyBzbyB0aGF0IHdoZW4gdGhlIHRleHQgaXMgdG9vIGxvbmcgb24gdGhlIGhvcml6b250YWwgYWRzLFxuICAvLyB0aGVuIHdlIHdpbGwgbWFrZSB0aGUgdGV4dCBwcm9wb3J0aW9uYWxseSBzbWFsbGVyLCBieSBhcHBseWluZyBhbiBpbmxpbmUgc3R5bGUuXG4gIGNvbnN0IHRvb011Y2hUZXh0TGltID0gMzU7XG4gIGNvbnN0IHRleHRMaW0gPSA1MDtcbiAgY29uc3QgbGVuZ3RoID0gaGVhZGxpbmUubGVuZ3RoO1xuICBjb25zdCBwZXJjZW50T2ZGb250RGVjcmVhc2UgPSAobGVuZ3RoIC0gdG9vTXVjaFRleHRMaW0pIC8gKHRleHRMaW0gLSB0b29NdWNoVGV4dExpbSk7XG4gIGNvbnN0IGZpeFRleHRPdmVyZmxvdyA9IGxlbmd0aCA+IHRvb011Y2hUZXh0TGltO1xuXG4gIGxldCBuZXdGb250U2l6ZTtcbiAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8PSA1MCkge1xuICAgIG5ld0ZvbnRTaXplID0gMTUgLSAod2luZG93LmlubmVyV2lkdGggPD0gMzAwID8gNCA6IDMpICogcGVyY2VudE9mRm9udERlY3JlYXNlO1xuICB9IGVsc2UgaWYgKHdpbmRvdy5pbm5lckhlaWdodCA8PSA5MCkge1xuICAgIG5ld0ZvbnRTaXplID0gMjUgLSA2ICogcGVyY2VudE9mRm9udERlY3JlYXNlO1xuICB9XG5cbiAgY29uc3Qgc21hbGxGb250U3R5bGU6IFJlYWN0LkNTU1Byb3BlcnRpZXMgPSB7XG4gICAgZm9udFNpemU6IGAke25ld0ZvbnRTaXplfXB4YCxcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2l0ZW1OdW1iZXJ9XG4gICAgICBjbGFzc05hbWU9e2B0aWNrZXItaXRlbSB0aWNrZXItaXRlbS0ke2l0ZW1OdW1iZXJ9YH1cbiAgICAgIHN0eWxlPXtmaXhUZXh0T3ZlcmZsb3cgPyBzbWFsbEZvbnRTdHlsZSA6IHt9fVxuICAgICAgLy8gVE9ETzogVGhpcyBpcyBub3QgdGhlIGdvYWwuIEZpeCB0aGlzLlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBoZWFkbGluZSB9fVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlja2VyUHJvcHMge1xuICBoZWFkbGluZXM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBUaWNrZXIgPSAocHJvcHM6IFRpY2tlclByb3BzKSA9PiB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInRpY2tlclwiPntwcm9wcy5oZWFkbGluZXMubWFwKHJlbmRlclRpY2tlckl0ZW0pfTwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpY2tlcjtcbiJdfQ==