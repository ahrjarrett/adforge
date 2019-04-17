"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Header = function Header(props) {
  return React.createElement("div", {
    className: "header"
  }, React.createElement("div", {
    className: "header-container"
  }, props.image && React.createElement("div", {
    className: "logo",
    style: {
      backgroundImage: "url(".concat(props.image, ")")
    }
  }), React.createElement("div", {
    className: "name"
  }, React.createElement("div", {
    className: "name-interior"
  }, React.createElement("p", {
    dangerouslySetInnerHTML: {
      __html: props.name
    },
    style: {
      fontSize: props.name.length < 20 ? '16px' : ''
    }
  })))));
};

var _default = Header;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9IZWFkZXIudHN4Il0sIm5hbWVzIjpbIkhlYWRlciIsInByb3BzIiwiaW1hZ2UiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJfX2h0bWwiLCJuYW1lIiwiZm9udFNpemUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQU9BLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBd0I7QUFDckMsU0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR0EsS0FBSyxDQUFDQyxLQUFOLElBQWU7QUFBSyxJQUFBLFNBQVMsRUFBQyxNQUFmO0FBQXNCLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLGVBQWUsZ0JBQVNGLEtBQUssQ0FBQ0MsS0FBZjtBQUFqQjtBQUE3QixJQURsQixFQUVFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQ0UsSUFBQSx1QkFBdUIsRUFBRTtBQUFFRSxNQUFBQSxNQUFNLEVBQUVILEtBQUssQ0FBQ0k7QUFBaEIsS0FEM0I7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxRQUFRLEVBQUVMLEtBQUssQ0FBQ0ksSUFBTixDQUFXRSxNQUFYLEdBQW9CLEVBQXBCLEdBQXlCLE1BQXpCLEdBQWtDO0FBQTlDO0FBRlQsSUFERixDQURGLENBRkYsQ0FERixDQURGO0FBZUQsQ0FoQkQ7O2VBa0JlUCxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcbiAgaW1hZ2U/OiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgSGVhZGVyID0gKHByb3BzOiBIZWFkZXJQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1jb250YWluZXJcIj5cbiAgICAgICAge3Byb3BzLmltYWdlICYmIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb3BzLmltYWdlfSlgIH19IC8+fVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hbWUtaW50ZXJpb3JcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcHJvcHMubmFtZSB9fVxuICAgICAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogcHJvcHMubmFtZS5sZW5ndGggPCAyMCA/ICcxNnB4JyA6ICcnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl19