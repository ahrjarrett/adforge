
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ContactContent = function ContactContent(props) {
  var active = props.active,
      about = props.about;
  return React.createElement("div", {
    className: "content-wrapper about ".concat(active && 'content-active') // TODO: This is not the goal. Fix this.
    ,
    dangerouslySetInnerHTML: {
      __html: about
    }
  });
};

var _default = ContactContent;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BYm91dENvbnRlbnQudHN4Il0sIm5hbWVzIjpbIkNvbnRhY3RDb250ZW50IiwicHJvcHMiLCJhY3RpdmUiLCJhYm91dCIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBT0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxLQUFELEVBQWdDO0FBQUEsTUFDN0NDLE1BRDZDLEdBQzNCRCxLQUQyQixDQUM3Q0MsTUFENkM7QUFBQSxNQUNyQ0MsS0FEcUMsR0FDM0JGLEtBRDJCLENBQ3JDRSxLQURxQztBQUdyRCxTQUNFO0FBQ0UsSUFBQSxTQUFTLGtDQUEyQkQsTUFBTSxJQUFJLGdCQUFyQyxDQURYLENBRUU7QUFGRjtBQUdFLElBQUEsdUJBQXVCLEVBQUU7QUFBRUUsTUFBQUEsTUFBTSxFQUFFRDtBQUFWO0FBSDNCLElBREY7QUFPRCxDQVZEOztlQVllSCxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3RDb250ZW50UHJvcHMge1xuICBhY3RpdmU6IGJvb2xlYW47XG4gIGFib3V0OiBzdHJpbmc7XG59XG5cbmNvbnN0IENvbnRhY3RDb250ZW50ID0gKHByb3BzOiBDb250YWN0Q29udGVudFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgYWN0aXZlLCBhYm91dCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Bjb250ZW50LXdyYXBwZXIgYWJvdXQgJHthY3RpdmUgJiYgJ2NvbnRlbnQtYWN0aXZlJ31gfVxuICAgICAgLy8gVE9ETzogVGhpcyBpcyBub3QgdGhlIGdvYWwuIEZpeCB0aGlzLlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBhYm91dCB9fVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Q29udGVudDtcbiJdfQ==