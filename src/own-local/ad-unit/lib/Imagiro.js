"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Imagiro = function Imagiro(props) {
  var c = 'imagiro';

  if (props.expanded) {
    c += ' expanded';
  } else {
    c += ' collapsed';
  }

  if (props.shareModalExpanded) {
    c += ' share-active';
  } else {
    c += ' share-inactive';
  }

  if (props.stretched) {
    c += ' stretched';
  }

  if (props.tabCount) {
    c += " tabs-tally-".concat(props.tabCount);
  }

  if (props.tickerCount) {
    c += " ticker-items-tally-".concat(props.tickerCount);
  }

  if (!props.hasLogo) {
    c += ' no-logo';
  }

  if (props.isAgent) {
    c += ' agent';
  }

  c += " layout-".concat(props.layout);
  return React.createElement("div", {
    className: c
  }, props.children);
};

Imagiro.defaultProps = {
  layout: '1'
};
var _default = Imagiro;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbWFnaXJvLnRzeCJdLCJuYW1lcyI6WyJJbWFnaXJvIiwicHJvcHMiLCJjIiwiZXhwYW5kZWQiLCJzaGFyZU1vZGFsRXhwYW5kZWQiLCJzdHJldGNoZWQiLCJ0YWJDb3VudCIsInRpY2tlckNvdW50IiwiaGFzTG9nbyIsImlzQWdlbnQiLCJsYXlvdXQiLCJjaGlsZHJlbiIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBZ0JBLElBQU1BLE9BQWdDLEdBQUcsU0FBbkNBLE9BQW1DLENBQUFDLEtBQUssRUFBSTtBQUNoRCxNQUFJQyxDQUFDLEdBQUcsU0FBUjs7QUFFQSxNQUFJRCxLQUFLLENBQUNFLFFBQVYsRUFBb0I7QUFDbEJELElBQUFBLENBQUMsSUFBSSxXQUFMO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLElBQUFBLENBQUMsSUFBSSxZQUFMO0FBQ0Q7O0FBRUQsTUFBSUQsS0FBSyxDQUFDRyxrQkFBVixFQUE4QjtBQUM1QkYsSUFBQUEsQ0FBQyxJQUFJLGVBQUw7QUFDRCxHQUZELE1BRU87QUFDTEEsSUFBQUEsQ0FBQyxJQUFJLGlCQUFMO0FBQ0Q7O0FBRUQsTUFBSUQsS0FBSyxDQUFDSSxTQUFWLEVBQXFCO0FBQ25CSCxJQUFBQSxDQUFDLElBQUksWUFBTDtBQUNEOztBQUVELE1BQUlELEtBQUssQ0FBQ0ssUUFBVixFQUFvQjtBQUNsQkosSUFBQUEsQ0FBQywwQkFBbUJELEtBQUssQ0FBQ0ssUUFBekIsQ0FBRDtBQUNEOztBQUVELE1BQUlMLEtBQUssQ0FBQ00sV0FBVixFQUF1QjtBQUNyQkwsSUFBQUEsQ0FBQyxrQ0FBMkJELEtBQUssQ0FBQ00sV0FBakMsQ0FBRDtBQUNEOztBQUVELE1BQUksQ0FBQ04sS0FBSyxDQUFDTyxPQUFYLEVBQW9CO0FBQ2xCTixJQUFBQSxDQUFDLElBQUksVUFBTDtBQUNEOztBQUVELE1BQUlELEtBQUssQ0FBQ1EsT0FBVixFQUFtQjtBQUNqQlAsSUFBQUEsQ0FBQyxJQUFJLFFBQUw7QUFDRDs7QUFFREEsRUFBQUEsQ0FBQyxzQkFBZUQsS0FBSyxDQUFDUyxNQUFyQixDQUFEO0FBRUEsU0FBTztBQUFLLElBQUEsU0FBUyxFQUFFUjtBQUFoQixLQUFvQkQsS0FBSyxDQUFDVSxRQUExQixDQUFQO0FBQ0QsQ0F0Q0Q7O0FBd0NBWCxPQUFPLENBQUNZLFlBQVIsR0FBdUI7QUFDckJGLEVBQUFBLE1BQU0sRUFBRTtBQURhLENBQXZCO2VBSWVWLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IExheW91dCB9IGZyb20gJ0Bvd24tbG9jYWwvYWQtdXRpbHMvbGliL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJbWFnaXJvUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICBleHBhbmRlZDogYm9vbGVhbjtcbiAgc2hhcmVNb2RhbEV4cGFuZGVkOiBib29sZWFuO1xuICBzdHJldGNoZWQ6IGJvb2xlYW47XG4gIGhhc0xvZ286IGJvb2xlYW47XG4gIGlzQWdlbnQ6IGJvb2xlYW47XG4gIHRhYkNvdW50OiBudW1iZXI7XG4gIHRpY2tlckNvdW50OiBudW1iZXI7XG4gIGxheW91dD86IExheW91dDtcbn1cblxuY29uc3QgSW1hZ2lybzogUmVhY3QuU0ZDPEltYWdpcm9Qcm9wcz4gPSBwcm9wcyA9PiB7XG4gIGxldCBjID0gJ2ltYWdpcm8nO1xuXG4gIGlmIChwcm9wcy5leHBhbmRlZCkge1xuICAgIGMgKz0gJyBleHBhbmRlZCc7XG4gIH0gZWxzZSB7XG4gICAgYyArPSAnIGNvbGxhcHNlZCc7XG4gIH1cblxuICBpZiAocHJvcHMuc2hhcmVNb2RhbEV4cGFuZGVkKSB7XG4gICAgYyArPSAnIHNoYXJlLWFjdGl2ZSc7XG4gIH0gZWxzZSB7XG4gICAgYyArPSAnIHNoYXJlLWluYWN0aXZlJztcbiAgfVxuXG4gIGlmIChwcm9wcy5zdHJldGNoZWQpIHtcbiAgICBjICs9ICcgc3RyZXRjaGVkJztcbiAgfVxuXG4gIGlmIChwcm9wcy50YWJDb3VudCkge1xuICAgIGMgKz0gYCB0YWJzLXRhbGx5LSR7cHJvcHMudGFiQ291bnR9YDtcbiAgfVxuXG4gIGlmIChwcm9wcy50aWNrZXJDb3VudCkge1xuICAgIGMgKz0gYCB0aWNrZXItaXRlbXMtdGFsbHktJHtwcm9wcy50aWNrZXJDb3VudH1gO1xuICB9XG5cbiAgaWYgKCFwcm9wcy5oYXNMb2dvKSB7XG4gICAgYyArPSAnIG5vLWxvZ28nO1xuICB9XG5cbiAgaWYgKHByb3BzLmlzQWdlbnQpIHtcbiAgICBjICs9ICcgYWdlbnQnO1xuICB9XG5cbiAgYyArPSBgIGxheW91dC0ke3Byb3BzLmxheW91dH1gO1xuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17Y30+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn07XG5cbkltYWdpcm8uZGVmYXVsdFByb3BzID0ge1xuICBsYXlvdXQ6ICcxJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEltYWdpcm87XG4iXX0=