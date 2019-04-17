"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _AdUnit = require("./AdUnit");

var _Icons = require("./Icons");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var TabNav = function TabNav(props) {
  var locale = props.locale,
      translateString = props.translateString;
  var c = 'tab';
  var title = '';
  var Icon;

  if (props.tab === props.activeTab) {
    c += ' active';
  }

  switch (props.tab) {
    case _AdUnit.Tab.Info:
      c += ' info-tab';
      title = translateString('contact_info', locale, 'Contact Info');
      Icon = _Icons.FormattedListBulletedTypeIcon;
      break;

    case _AdUnit.Tab.About:
      c += ' about-tab';
      title = translateString('more_info', locale, 'More Info');
      Icon = _Icons.InformationOutlineIcon;
      break;

    case _AdUnit.Tab.Contact:
      c += ' contact-tab';
      title = translateString('sent_message', locale, 'Sent Message');
      Icon = _Icons.EmailOutlineIcon;
      break;

    case _AdUnit.Tab.Print:
      c += ' print-tab';
      title = translateString('print_version', locale, 'Print Version');
      Icon = _Icons.NewspaperIcon;
  }

  return React.createElement("div", {
    className: c,
    title: title,
    onClick: props.onClick(props.tab)
  }, React.createElement(Icon, {
    fill: "rgba(0,0,0,0.5)"
  }));
};

var _default = TabNav;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9UYWJOYXYudHN4Il0sIm5hbWVzIjpbIlRhYk5hdiIsInByb3BzIiwibG9jYWxlIiwidHJhbnNsYXRlU3RyaW5nIiwiYyIsInRpdGxlIiwiSWNvbiIsInRhYiIsImFjdGl2ZVRhYiIsIlRhYiIsIkluZm8iLCJGb3JtYXR0ZWRMaXN0QnVsbGV0ZWRUeXBlSWNvbiIsIkFib3V0IiwiSW5mb3JtYXRpb25PdXRsaW5lSWNvbiIsIkNvbnRhY3QiLCJFbWFpbE91dGxpbmVJY29uIiwiUHJpbnQiLCJOZXdzcGFwZXJJY29uIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOztBQUNBOzs7O0FBZUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUF3QjtBQUFBLE1BQzdCQyxNQUQ2QixHQUNERCxLQURDLENBQzdCQyxNQUQ2QjtBQUFBLE1BQ3JCQyxlQURxQixHQUNERixLQURDLENBQ3JCRSxlQURxQjtBQUdyQyxNQUFJQyxDQUFDLEdBQUcsS0FBUjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsSUFBSjs7QUFFQSxNQUFJTCxLQUFLLENBQUNNLEdBQU4sS0FBY04sS0FBSyxDQUFDTyxTQUF4QixFQUFtQztBQUNqQ0osSUFBQUEsQ0FBQyxJQUFJLFNBQUw7QUFDRDs7QUFFRCxVQUFRSCxLQUFLLENBQUNNLEdBQWQ7QUFDRSxTQUFLRSxZQUFJQyxJQUFUO0FBQ0VOLE1BQUFBLENBQUMsSUFBSSxXQUFMO0FBQ0FDLE1BQUFBLEtBQUssR0FBR0YsZUFBZSxDQUFDLGNBQUQsRUFBaUJELE1BQWpCLEVBQXlCLGNBQXpCLENBQXZCO0FBQ0FJLE1BQUFBLElBQUksR0FBR0ssb0NBQVA7QUFDQTs7QUFDRixTQUFLRixZQUFJRyxLQUFUO0FBQ0VSLE1BQUFBLENBQUMsSUFBSSxZQUFMO0FBQ0FDLE1BQUFBLEtBQUssR0FBR0YsZUFBZSxDQUFDLFdBQUQsRUFBY0QsTUFBZCxFQUFzQixXQUF0QixDQUF2QjtBQUNBSSxNQUFBQSxJQUFJLEdBQUdPLDZCQUFQO0FBQ0E7O0FBQ0YsU0FBS0osWUFBSUssT0FBVDtBQUNFVixNQUFBQSxDQUFDLElBQUksY0FBTDtBQUNBQyxNQUFBQSxLQUFLLEdBQUdGLGVBQWUsQ0FBQyxjQUFELEVBQWlCRCxNQUFqQixFQUF5QixjQUF6QixDQUF2QjtBQUNBSSxNQUFBQSxJQUFJLEdBQUdTLHVCQUFQO0FBQ0E7O0FBQ0YsU0FBS04sWUFBSU8sS0FBVDtBQUNFWixNQUFBQSxDQUFDLElBQUksWUFBTDtBQUNBQyxNQUFBQSxLQUFLLEdBQUdGLGVBQWUsQ0FBQyxlQUFELEVBQWtCRCxNQUFsQixFQUEwQixlQUExQixDQUF2QjtBQUNBSSxNQUFBQSxJQUFJLEdBQUdXLG9CQUFQO0FBbkJKOztBQXNCQSxTQUNFO0FBQUssSUFBQSxTQUFTLEVBQUViLENBQWhCO0FBQW1CLElBQUEsS0FBSyxFQUFFQyxLQUExQjtBQUFpQyxJQUFBLE9BQU8sRUFBRUosS0FBSyxDQUFDaUIsT0FBTixDQUFjakIsS0FBSyxDQUFDTSxHQUFwQjtBQUExQyxLQUNFLG9CQUFDLElBQUQ7QUFBTSxJQUFBLElBQUksRUFBQztBQUFYLElBREYsQ0FERjtBQUtELENBdENEOztlQXdDZVAsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgVHJhbnNsYXRlRnVuY3Rpb24gfSBmcm9tICdAb3duLWxvY2FsL2FkLXV0aWxzL2xpYi90eXBlcyc7XG5cbmltcG9ydCB7IFRhYiB9IGZyb20gJy4vQWRVbml0JztcbmltcG9ydCB7XG4gIEVtYWlsT3V0bGluZUljb24sXG4gIEZvcm1hdHRlZExpc3RCdWxsZXRlZFR5cGVJY29uLFxuICBJbmZvcm1hdGlvbk91dGxpbmVJY29uLFxuICBOZXdzcGFwZXJJY29uLFxufSBmcm9tICcuL0ljb25zJztcblxuZXhwb3J0IGludGVyZmFjZSBUYWJOYXZQcm9wcyB7XG4gIHRhYjogVGFiO1xuICBvbkNsaWNrOiAodGFiOiBUYWIpID0+ICgpID0+IHZvaWQ7XG4gIGFjdGl2ZVRhYjogVGFiO1xuICBsb2NhbGU6IHN0cmluZztcbiAgdHJhbnNsYXRlU3RyaW5nOiBUcmFuc2xhdGVGdW5jdGlvbjtcbn1cblxuY29uc3QgVGFiTmF2ID0gKHByb3BzOiBUYWJOYXZQcm9wcykgPT4ge1xuICBjb25zdCB7IGxvY2FsZSwgdHJhbnNsYXRlU3RyaW5nIH0gPSBwcm9wcztcblxuICBsZXQgYyA9ICd0YWInO1xuICBsZXQgdGl0bGUgPSAnJztcbiAgbGV0IEljb246IChwcm9wczogYW55KSA9PiBKU1guRWxlbWVudDtcblxuICBpZiAocHJvcHMudGFiID09PSBwcm9wcy5hY3RpdmVUYWIpIHtcbiAgICBjICs9ICcgYWN0aXZlJztcbiAgfVxuXG4gIHN3aXRjaCAocHJvcHMudGFiKSB7XG4gICAgY2FzZSBUYWIuSW5mbzpcbiAgICAgIGMgKz0gJyBpbmZvLXRhYic7XG4gICAgICB0aXRsZSA9IHRyYW5zbGF0ZVN0cmluZygnY29udGFjdF9pbmZvJywgbG9jYWxlLCAnQ29udGFjdCBJbmZvJyk7XG4gICAgICBJY29uID0gRm9ybWF0dGVkTGlzdEJ1bGxldGVkVHlwZUljb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFRhYi5BYm91dDpcbiAgICAgIGMgKz0gJyBhYm91dC10YWInO1xuICAgICAgdGl0bGUgPSB0cmFuc2xhdGVTdHJpbmcoJ21vcmVfaW5mbycsIGxvY2FsZSwgJ01vcmUgSW5mbycpO1xuICAgICAgSWNvbiA9IEluZm9ybWF0aW9uT3V0bGluZUljb247XG4gICAgICBicmVhaztcbiAgICBjYXNlIFRhYi5Db250YWN0OlxuICAgICAgYyArPSAnIGNvbnRhY3QtdGFiJztcbiAgICAgIHRpdGxlID0gdHJhbnNsYXRlU3RyaW5nKCdzZW50X21lc3NhZ2UnLCBsb2NhbGUsICdTZW50IE1lc3NhZ2UnKTtcbiAgICAgIEljb24gPSBFbWFpbE91dGxpbmVJY29uO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBUYWIuUHJpbnQ6XG4gICAgICBjICs9ICcgcHJpbnQtdGFiJztcbiAgICAgIHRpdGxlID0gdHJhbnNsYXRlU3RyaW5nKCdwcmludF92ZXJzaW9uJywgbG9jYWxlLCAnUHJpbnQgVmVyc2lvbicpO1xuICAgICAgSWNvbiA9IE5ld3NwYXBlckljb247XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjfSB0aXRsZT17dGl0bGV9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2socHJvcHMudGFiKX0+XG4gICAgICA8SWNvbiBmaWxsPVwicmdiYSgwLDAsMCwwLjUpXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYk5hdjtcbiJdfQ==