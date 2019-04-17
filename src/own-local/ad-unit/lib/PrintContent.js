"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var PrintContent = function PrintContent(props) {
  var active = props.active;
  var _props$print = props.print,
      adLink = _props$print.adLink,
      image = _props$print.image;

  if (!adLink || !image) {
    return null;
  } // TODO: this can be removed onced the backend back-fills all the ads.


  var correctedAdLink = adLink.match(/^\/\/s3/) ? "https:".concat(adLink) : adLink;
  return React.createElement("div", {
    className: "content-wrapper print ".concat(active && 'content-active')
  }, active && React.createElement("a", {
    href: correctedAdLink,
    target: "_blank",
    title: "Open print version in new tab"
  }, React.createElement("img", {
    src: image
  })));
};

var _default = PrintContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QcmludENvbnRlbnQudHN4Il0sIm5hbWVzIjpbIlByaW50Q29udGVudCIsInByb3BzIiwiYWN0aXZlIiwicHJpbnQiLCJhZExpbmsiLCJpbWFnZSIsImNvcnJlY3RlZEFkTGluayIsIm1hdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFTQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQThCO0FBQUEsTUFDekNDLE1BRHlDLEdBQzlCRCxLQUQ4QixDQUN6Q0MsTUFEeUM7QUFBQSxxQkFFdkJELEtBQUssQ0FBQ0UsS0FGaUI7QUFBQSxNQUV6Q0MsTUFGeUMsZ0JBRXpDQSxNQUZ5QztBQUFBLE1BRWpDQyxLQUZpQyxnQkFFakNBLEtBRmlDOztBQUlqRCxNQUFJLENBQUNELE1BQUQsSUFBVyxDQUFDQyxLQUFoQixFQUF1QjtBQUNyQixXQUFPLElBQVA7QUFDRCxHQU5nRCxDQVFqRDs7O0FBQ0EsTUFBTUMsZUFBZSxHQUFHRixNQUFNLENBQUNHLEtBQVAsQ0FBYSxTQUFiLG9CQUFtQ0gsTUFBbkMsSUFBOENBLE1BQXRFO0FBRUEsU0FDRTtBQUFLLElBQUEsU0FBUyxrQ0FBMkJGLE1BQU0sSUFBSSxnQkFBckM7QUFBZCxLQUNHQSxNQUFNLElBQ0w7QUFBRyxJQUFBLElBQUksRUFBRUksZUFBVDtBQUEwQixJQUFBLE1BQU0sRUFBQyxRQUFqQztBQUEwQyxJQUFBLEtBQUssRUFBQztBQUFoRCxLQUNFO0FBQUssSUFBQSxHQUFHLEVBQUVEO0FBQVYsSUFERixDQUZKLENBREY7QUFTRCxDQXBCRDs7ZUFzQmVMLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IFByaW50IH0gZnJvbSAnQG93bi1sb2NhbC9hZC11dGlscy9saWIvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByaW50Q29udGVudFByb3BzIHtcbiAgYWN0aXZlOiBib29sZWFuO1xuICBwcmludDogUHJpbnQ7XG59XG5cbmNvbnN0IFByaW50Q29udGVudCA9IChwcm9wczogUHJpbnRDb250ZW50UHJvcHMpID0+IHtcbiAgY29uc3QgeyBhY3RpdmUgfSA9IHByb3BzO1xuICBjb25zdCB7IGFkTGluaywgaW1hZ2UgfSA9IHByb3BzLnByaW50O1xuXG4gIGlmICghYWRMaW5rIHx8ICFpbWFnZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gVE9ETzogdGhpcyBjYW4gYmUgcmVtb3ZlZCBvbmNlZCB0aGUgYmFja2VuZCBiYWNrLWZpbGxzIGFsbCB0aGUgYWRzLlxuICBjb25zdCBjb3JyZWN0ZWRBZExpbmsgPSBhZExpbmsubWF0Y2goL15cXC9cXC9zMy8pID8gYGh0dHBzOiR7YWRMaW5rfWAgOiBhZExpbms7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtd3JhcHBlciBwcmludCAke2FjdGl2ZSAmJiAnY29udGVudC1hY3RpdmUnfWB9PlxuICAgICAge2FjdGl2ZSAmJiAoXG4gICAgICAgIDxhIGhyZWY9e2NvcnJlY3RlZEFkTGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJPcGVuIHByaW50IHZlcnNpb24gaW4gbmV3IHRhYlwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByaW50Q29udGVudDtcbiJdfQ==