"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _formatter = require("@own-local/ad-utils/lib/formatter");

var _trackingKeys = _interopRequireDefault(require("@own-local/ad-utils/lib/trackingKeys"));

var _Address = _interopRequireWildcard(require("@own-local/ad-utils/lib/Address"));

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var InfoContents = function InfoContents(props) {
  var name = props.name,
      social = props.social,
      track = props.track;
  var twitter = social.twitter,
      instagram = social.instagram,
      facebook = social.facebook,
      yelp = social.yelp;
  var _props$contact = props.contact,
      website = _props$contact.website,
      place = _props$contact.place,
      phones = _props$contact.phones;
  var address1 = place.address1,
      city = place.city,
      subdivision = place.subdivision;
  var cleanWebsite;

  if (website) {
    cleanWebsite = website.replace('www.', '').replace('http://', '').replace('https://', '').replace(/\/$/, '');
  } // Safe address display


  var showAddress = !!address1 && !!city;
  var addressUrl = '';

  if (showAddress) {
    addressUrl = 'http://maps.google.com?daddr=' + (0, _Address.urlEncodedAddress)(place);
  }

  var showPhoneNumber = !!phones.length;
  var showShareButtons = !!website && !!city && !!name && !!subdivision;
  var twitterShareLink = "https://twitter.com/intent/tweet?text=".concat(name, " in ").concat(city, ", ").concat(subdivision, "&url=").concat(website);
  var facebookShareLink = "https://www.facebook.com/sharer?u=".concat(website);
  var socialIconStyle = {
    margin: '10px'
  };
  var callLink;

  if (showPhoneNumber) {
    callLink = "tel:".concat(phones[0].number);
  }

  return React.createElement("div", {
    className: "content-wrapper info ".concat(props.active && 'content-active')
  }, showAddress && React.createElement("a", {
    className: "info-block directions-block",
    title: "Get directions",
    target: "_blank",
    href: addressUrl,
    onClick: function onClick() {
      track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.OPEN_DIRECTIONS, addressUrl);
    }
  }, React.createElement(_Icons.MapMarkerIcon, {
    className: "mdi"
  }), React.createElement(_Address.default, {
    place: place
  }), React.createElement(_Icons.DirectionsIcon, {
    className: "mdi guide"
  })), showPhoneNumber && React.createElement("a", {
    className: "info-block phone-block",
    title: "Call phone number",
    target: "_blank",
    href: callLink,
    onClick: function onClick() {
      track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.CALL, callLink);
    }
  }, React.createElement(_Icons.PhoneIcon, {
    className: "mdi"
  }), React.createElement("span", {
    className: "text"
  }, (0, _formatter.formatPhoneNumber)(phones[0].number, place.country)), React.createElement(_Icons.PhoneOutgoingIcon, {
    className: "mdi guide"
  })), website && React.createElement("a", {
    className: "info-block website-block",
    title: "Open website in a new tab",
    target: "_blank",
    href: website,
    onClick: function onClick() {
      track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.WEBSITE, website);
    }
  }, React.createElement(_Icons.LinkIcon, {
    className: "mdi"
  }), React.createElement("span", {
    className: "text"
  }, cleanWebsite), React.createElement(_Icons.OpenInNewIcon, {
    className: "mdi guide"
  })), React.createElement("div", {
    className: "social-buttons"
  }, facebook && React.createElement("a", {
    className: "share-facebook",
    target: "_blank",
    href: facebook,
    onClick: function onClick() {
      track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.FACEBOOK, facebook);
    }
  }, React.createElement(_Icons.FacebookIcon, {
    className: "mdi",
    style: socialIconStyle,
    fill: "rgba(0,0,0,.5)"
  })), twitter && React.createElement("a", {
    className: "share-twitter",
    target: "_blank",
    href: twitter,
    onClick: function onClick() {
      track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.TWITTER, twitter);
    }
  }, React.createElement(_Icons.TwitterIcon, {
    className: "mdi",
    style: socialIconStyle,
    fill: "rgba(0,0,0,.5)"
  })), instagram && React.createElement("a", {
    className: "share-instagram",
    target: "_blank",
    href: instagram,
    onClick: function onClick() {
      track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.INSTAGRAM, instagram);
    }
  }, React.createElement(_Icons.InstagramIcon, {
    className: "mdi",
    style: socialIconStyle,
    fill: "rgba(0,0,0,.5)"
  })), yelp && React.createElement("a", {
    className: "share-yelp",
    target: "_blank",
    href: yelp,
    onClick: function onClick() {
      track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.YELP, yelp);
    }
  }, React.createElement(_Icons.YelpIcon, {
    className: "mdi",
    style: socialIconStyle,
    fill: "rgba(0,0,0,.5)"
  }))), showShareButtons && React.createElement("div", null, React.createElement("span", {
    className: "share-toggle share-toggle-more",
    title: "Show Share Buttons",
    onClick: props.toggleShare
  }, React.createElement(_Icons.ShareIcon, {
    height: 18,
    width: 18,
    className: "mdi",
    fill: "rgba(0,0,0,.5)"
  })), React.createElement("span", {
    className: "share-toggle share-toggle-close mdi mdi-close",
    title: "Hide Share Buttons",
    onClick: props.toggleShare
  }, React.createElement(_Icons.CloseIcon, {
    height: 18,
    width: 18,
    className: "mdi",
    fill: "rgba(0,0,0,.5)"
  }))), React.createElement("div", {
    className: "share-modal inactive"
  }, website && React.createElement("a", {
    className: "share-facebook",
    target: "_blank",
    href: facebookShareLink,
    onClick: function onClick() {
      track(_trackingKeys.default.SHARE.CATEGORY_NAME, _trackingKeys.default.SHARE.ACTIONS.FACEBOOK, facebookShareLink);
    }
  }, React.createElement(_Icons.FacebookIcon, {
    fill: "#FFFFFF",
    style: {
      paddingRight: '6px',
      lineHeight: '30px',
      marginBottom: '-5px'
    }
  }), "Share"), showShareButtons && React.createElement("a", {
    className: "share-twitter",
    target: "_blank",
    href: twitterShareLink,
    onClick: function onClick() {
      track(_trackingKeys.default.SHARE.CATEGORY_NAME, _trackingKeys.default.SHARE.ACTIONS.TWITTER, twitterShareLink);
    }
  }, React.createElement(_Icons.TwitterIcon, {
    fill: "#FFFFFF",
    style: {
      paddingRight: '6px',
      lineHeight: '30px',
      marginBottom: '-5px'
    }
  }), "Tweet")));
};

var _default = InfoContents;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9JbmZvQ29udGVudC50c3giXSwibmFtZXMiOlsiSW5mb0NvbnRlbnRzIiwicHJvcHMiLCJuYW1lIiwic29jaWFsIiwidHJhY2siLCJ0d2l0dGVyIiwiaW5zdGFncmFtIiwiZmFjZWJvb2siLCJ5ZWxwIiwiY29udGFjdCIsIndlYnNpdGUiLCJwbGFjZSIsInBob25lcyIsImFkZHJlc3MxIiwiY2l0eSIsInN1YmRpdmlzaW9uIiwiY2xlYW5XZWJzaXRlIiwicmVwbGFjZSIsInNob3dBZGRyZXNzIiwiYWRkcmVzc1VybCIsInNob3dQaG9uZU51bWJlciIsImxlbmd0aCIsInNob3dTaGFyZUJ1dHRvbnMiLCJ0d2l0dGVyU2hhcmVMaW5rIiwiZmFjZWJvb2tTaGFyZUxpbmsiLCJzb2NpYWxJY29uU3R5bGUiLCJtYXJnaW4iLCJjYWxsTGluayIsIm51bWJlciIsImFjdGl2ZSIsIlRyYWNraW5nS2V5cyIsIkNPTlRBQ1QiLCJDQVRFR09SWV9OQU1FIiwiQUNUSU9OUyIsIk9QRU5fRElSRUNUSU9OUyIsIkNBTEwiLCJjb3VudHJ5IiwiV0VCU0lURSIsIkZBQ0VCT09LIiwiVFdJVFRFUiIsIklOU1RBR1JBTSIsIllFTFAiLCJ0b2dnbGVTaGFyZSIsIlNIQVJFIiwicGFkZGluZ1JpZ2h0IiwibGluZUhlaWdodCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUdBOztBQUNBOzs7Ozs7QUF3QkEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUE4QjtBQUFBLE1BQ3pDQyxJQUR5QyxHQUNqQkQsS0FEaUIsQ0FDekNDLElBRHlDO0FBQUEsTUFDbkNDLE1BRG1DLEdBQ2pCRixLQURpQixDQUNuQ0UsTUFEbUM7QUFBQSxNQUMzQkMsS0FEMkIsR0FDakJILEtBRGlCLENBQzNCRyxLQUQyQjtBQUFBLE1BRXpDQyxPQUZ5QyxHQUVGRixNQUZFLENBRXpDRSxPQUZ5QztBQUFBLE1BRWhDQyxT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IGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgZm9ybWF0UGhvbmVOdW1iZXIgfSBmcm9tICdAb3duLWxvY2FsL2FkLXV0aWxzL2xpYi9mb3JtYXR0ZXInO1xuaW1wb3J0IFRyYWNraW5nS2V5cyBmcm9tICdAb3duLWxvY2FsL2FkLXV0aWxzL2xpYi90cmFja2luZ0tleXMnO1xuaW1wb3J0IHsgQ29udGFjdCwgU29jaWFsLCBUcmFja0Z1bmN0aW9uIH0gZnJvbSAnQG93bi1sb2NhbC9hZC11dGlscy9saWIvdHlwZXMnO1xuXG5pbXBvcnQgQWRkcmVzcywgeyB1cmxFbmNvZGVkQWRkcmVzcyB9IGZyb20gJ0Bvd24tbG9jYWwvYWQtdXRpbHMvbGliL0FkZHJlc3MnO1xuaW1wb3J0IHtcbiAgQ2xvc2VJY29uLFxuICBEaXJlY3Rpb25zSWNvbixcbiAgRmFjZWJvb2tJY29uLFxuICBJbnN0YWdyYW1JY29uLFxuICBMaW5rSWNvbixcbiAgTWFwTWFya2VySWNvbixcbiAgT3BlbkluTmV3SWNvbixcbiAgUGhvbmVJY29uLFxuICBQaG9uZU91dGdvaW5nSWNvbixcbiAgU2hhcmVJY29uLFxuICBUd2l0dGVySWNvbixcbiAgWWVscEljb24sXG59IGZyb20gJy4vSWNvbnMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEluZm9Db250ZW50c1Byb3BzIHtcbiAgY29udGFjdDogQ29udGFjdDtcbiAgc29jaWFsOiBTb2NpYWw7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgdG9nZ2xlU2hhcmU6ICgpID0+IHZvaWQ7XG4gIG5hbWU6IHN0cmluZztcbiAgdHJhY2s6IFRyYWNrRnVuY3Rpb247XG59XG5cbmNvbnN0IEluZm9Db250ZW50cyA9IChwcm9wczogSW5mb0NvbnRlbnRzUHJvcHMpID0+IHtcbiAgY29uc3QgeyBuYW1lLCBzb2NpYWwsIHRyYWNrIH0gPSBwcm9wcztcbiAgY29uc3QgeyB0d2l0dGVyLCBpbnN0YWdyYW0sIGZhY2Vib29rLCB5ZWxwIH0gPSBzb2NpYWw7XG4gIGNvbnN0IHsgd2Vic2l0ZSwgcGxhY2UsIHBob25lcyB9ID0gcHJvcHMuY29udGFjdDtcbiAgY29uc3QgeyBhZGRyZXNzMSwgY2l0eSwgc3ViZGl2aXNpb24gfSA9IHBsYWNlO1xuXG4gIGxldCBjbGVhbldlYnNpdGU7XG4gIGlmICh3ZWJzaXRlKSB7XG4gICAgY2xlYW5XZWJzaXRlID0gd2Vic2l0ZVxuICAgICAgLnJlcGxhY2UoJ3d3dy4nLCAnJylcbiAgICAgIC5yZXBsYWNlKCdodHRwOi8vJywgJycpXG4gICAgICAucmVwbGFjZSgnaHR0cHM6Ly8nLCAnJylcbiAgICAgIC5yZXBsYWNlKC9cXC8kLywgJycpO1xuICB9XG5cbiAgLy8gU2FmZSBhZGRyZXNzIGRpc3BsYXlcbiAgY29uc3Qgc2hvd0FkZHJlc3MgPSAhIWFkZHJlc3MxICYmICEhY2l0eTtcbiAgbGV0IGFkZHJlc3NVcmwgPSAnJztcbiAgaWYgKHNob3dBZGRyZXNzKSB7XG4gICAgYWRkcmVzc1VybCA9ICdodHRwOi8vbWFwcy5nb29nbGUuY29tP2RhZGRyPScgKyB1cmxFbmNvZGVkQWRkcmVzcyhwbGFjZSk7XG4gIH1cblxuICBjb25zdCBzaG93UGhvbmVOdW1iZXIgPSAhIXBob25lcy5sZW5ndGg7XG4gIGNvbnN0IHNob3dTaGFyZUJ1dHRvbnMgPSAhIXdlYnNpdGUgJiYgISFjaXR5ICYmICEhbmFtZSAmJiAhIXN1YmRpdmlzaW9uO1xuXG4gIGNvbnN0IHR3aXR0ZXJTaGFyZUxpbmsgPSBgaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXQ/dGV4dD0ke25hbWV9IGluICR7Y2l0eX0sICR7c3ViZGl2aXNpb259JnVybD0ke3dlYnNpdGV9YDtcbiAgY29uc3QgZmFjZWJvb2tTaGFyZUxpbmsgPSBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlcj91PSR7d2Vic2l0ZX1gO1xuXG4gIGNvbnN0IHNvY2lhbEljb25TdHlsZTogUmVhY3QuQ1NTUHJvcGVydGllcyA9IHtcbiAgICBtYXJnaW46ICcxMHB4JyxcbiAgfTtcblxuICBsZXQgY2FsbExpbms7XG5cbiAgaWYgKHNob3dQaG9uZU51bWJlcikge1xuICAgIGNhbGxMaW5rID0gYHRlbDoke3Bob25lc1swXS5udW1iZXJ9YDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Bjb250ZW50LXdyYXBwZXIgaW5mbyAke3Byb3BzLmFjdGl2ZSAmJiAnY29udGVudC1hY3RpdmUnfWB9PlxuICAgICAge3Nob3dBZGRyZXNzICYmIChcbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmZvLWJsb2NrIGRpcmVjdGlvbnMtYmxvY2tcIlxuICAgICAgICAgIHRpdGxlPVwiR2V0IGRpcmVjdGlvbnNcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgaHJlZj17YWRkcmVzc1VybH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0cmFjayhcbiAgICAgICAgICAgICAgVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQ0FURUdPUllfTkFNRSxcbiAgICAgICAgICAgICAgVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQUNUSU9OUy5PUEVOX0RJUkVDVElPTlMsXG4gICAgICAgICAgICAgIGFkZHJlc3NVcmxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxNYXBNYXJrZXJJY29uIGNsYXNzTmFtZT1cIm1kaVwiIC8+XG4gICAgICAgICAgPEFkZHJlc3MgcGxhY2U9e3BsYWNlfSAvPlxuICAgICAgICAgIDxEaXJlY3Rpb25zSWNvbiBjbGFzc05hbWU9XCJtZGkgZ3VpZGVcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgICAge3Nob3dQaG9uZU51bWJlciAmJiAoXG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5mby1ibG9jayBwaG9uZS1ibG9ja1wiXG4gICAgICAgICAgdGl0bGU9XCJDYWxsIHBob25lIG51bWJlclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBocmVmPXtjYWxsTGlua31cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICB0cmFjayhUcmFja2luZ0tleXMuQ09OVEFDVC5DQVRFR09SWV9OQU1FLCBUcmFja2luZ0tleXMuQ09OVEFDVC5BQ1RJT05TLkNBTEwsIGNhbGxMaW5rKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPFBob25lSWNvbiBjbGFzc05hbWU9XCJtZGlcIiAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRcIj57Zm9ybWF0UGhvbmVOdW1iZXIocGhvbmVzWzBdLm51bWJlciwgcGxhY2UuY291bnRyeSl9PC9zcGFuPlxuICAgICAgICAgIDxQaG9uZU91dGdvaW5nSWNvbiBjbGFzc05hbWU9XCJtZGkgZ3VpZGVcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICApfVxuICAgICAge3dlYnNpdGUgJiYgKFxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImluZm8tYmxvY2sgd2Vic2l0ZS1ibG9ja1wiXG4gICAgICAgICAgdGl0bGU9XCJPcGVuIHdlYnNpdGUgaW4gYSBuZXcgdGFiXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIGhyZWY9e3dlYnNpdGV9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgdHJhY2soXG4gICAgICAgICAgICAgIFRyYWNraW5nS2V5cy5DT05UQUNULkNBVEVHT1JZX05BTUUsXG4gICAgICAgICAgICAgIFRyYWNraW5nS2V5cy5DT05UQUNULkFDVElPTlMuV0VCU0lURSxcbiAgICAgICAgICAgICAgd2Vic2l0ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPExpbmtJY29uIGNsYXNzTmFtZT1cIm1kaVwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dFwiPntjbGVhbldlYnNpdGV9PC9zcGFuPlxuICAgICAgICAgIDxPcGVuSW5OZXdJY29uIGNsYXNzTmFtZT1cIm1kaSBndWlkZVwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgICl9XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b25zXCI+XG4gICAgICAgIHtmYWNlYm9vayAmJiAoXG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlLWZhY2Vib29rXCJcbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICBocmVmPXtmYWNlYm9va31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdHJhY2soXG4gICAgICAgICAgICAgICAgVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQ0FURUdPUllfTkFNRSxcbiAgICAgICAgICAgICAgICBUcmFja2luZ0tleXMuQ09OVEFDVC5BQ1RJT05TLkZBQ0VCT09LLFxuICAgICAgICAgICAgICAgIGZhY2Vib29rXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYWNlYm9va0ljb24gY2xhc3NOYW1lPVwibWRpXCIgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gZmlsbD1cInJnYmEoMCwwLDAsLjUpXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICAgIHt0d2l0dGVyICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmUtdHdpdHRlclwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17dHdpdHRlcn1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdHJhY2soXG4gICAgICAgICAgICAgICAgVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQ0FURUdPUllfTkFNRSxcbiAgICAgICAgICAgICAgICBUcmFja2luZ0tleXMuQ09OVEFDVC5BQ1RJT05TLlRXSVRURVIsXG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8VHdpdHRlckljb24gY2xhc3NOYW1lPVwibWRpXCIgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gZmlsbD1cInJnYmEoMCwwLDAsLjUpXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICAgIHtpbnN0YWdyYW0gJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFyZS1pbnN0YWdyYW1cIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGhyZWY9e2luc3RhZ3JhbX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdHJhY2soXG4gICAgICAgICAgICAgICAgVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQ0FURUdPUllfTkFNRSxcbiAgICAgICAgICAgICAgICBUcmFja2luZ0tleXMuQ09OVEFDVC5BQ1RJT05TLklOU1RBR1JBTSxcbiAgICAgICAgICAgICAgICBpbnN0YWdyYW1cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEluc3RhZ3JhbUljb24gY2xhc3NOYW1lPVwibWRpXCIgc3R5bGU9e3NvY2lhbEljb25TdHlsZX0gZmlsbD1cInJnYmEoMCwwLDAsLjUpXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICAgIHt5ZWxwICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmUteWVscFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17eWVscH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdHJhY2soVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQ0FURUdPUllfTkFNRSwgVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQUNUSU9OUy5ZRUxQLCB5ZWxwKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFllbHBJY29uIGNsYXNzTmFtZT1cIm1kaVwiIHN0eWxlPXtzb2NpYWxJY29uU3R5bGV9IGZpbGw9XCJyZ2JhKDAsMCwwLC41KVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICB7c2hvd1NoYXJlQnV0dG9ucyAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlLXRvZ2dsZSBzaGFyZS10b2dnbGUtbW9yZVwiXG4gICAgICAgICAgICB0aXRsZT1cIlNob3cgU2hhcmUgQnV0dG9uc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy50b2dnbGVTaGFyZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U2hhcmVJY29uIGhlaWdodD17MTh9IHdpZHRoPXsxOH0gY2xhc3NOYW1lPVwibWRpXCIgZmlsbD1cInJnYmEoMCwwLDAsLjUpXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXJlLXRvZ2dsZSBzaGFyZS10b2dnbGUtY2xvc2UgbWRpIG1kaS1jbG9zZVwiXG4gICAgICAgICAgICB0aXRsZT1cIkhpZGUgU2hhcmUgQnV0dG9uc1wiXG4gICAgICAgICAgICBvbkNsaWNrPXtwcm9wcy50b2dnbGVTaGFyZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q2xvc2VJY29uIGhlaWdodD17MTh9IHdpZHRoPXsxOH0gY2xhc3NOYW1lPVwibWRpXCIgZmlsbD1cInJnYmEoMCwwLDAsLjUpXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcmUtbW9kYWwgaW5hY3RpdmVcIj5cbiAgICAgICAge3dlYnNpdGUgJiYgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFyZS1mYWNlYm9va1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17ZmFjZWJvb2tTaGFyZUxpbmt9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHRyYWNrKFxuICAgICAgICAgICAgICAgIFRyYWNraW5nS2V5cy5TSEFSRS5DQVRFR09SWV9OQU1FLFxuICAgICAgICAgICAgICAgIFRyYWNraW5nS2V5cy5TSEFSRS5BQ1RJT05TLkZBQ0VCT09LLFxuICAgICAgICAgICAgICAgIGZhY2Vib29rU2hhcmVMaW5rXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYWNlYm9va0ljb25cbiAgICAgICAgICAgICAgZmlsbD1cIiNGRkZGRkZcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6ICc2cHgnLCBsaW5lSGVpZ2h0OiAnMzBweCcsIG1hcmdpbkJvdHRvbTogJy01cHgnIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgU2hhcmVcbiAgICAgICAgICA8L2E+XG4gICAgICAgICl9XG4gICAgICAgIHtzaG93U2hhcmVCdXR0b25zICYmIChcbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcmUtdHdpdHRlclwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgaHJlZj17dHdpdHRlclNoYXJlTGlua31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgdHJhY2soXG4gICAgICAgICAgICAgICAgVHJhY2tpbmdLZXlzLlNIQVJFLkNBVEVHT1JZX05BTUUsXG4gICAgICAgICAgICAgICAgVHJhY2tpbmdLZXlzLlNIQVJFLkFDVElPTlMuVFdJVFRFUixcbiAgICAgICAgICAgICAgICB0d2l0dGVyU2hhcmVMaW5rXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUd2l0dGVySWNvblxuICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkZGRlwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmdSaWdodDogJzZweCcsIGxpbmVIZWlnaHQ6ICczMHB4JywgbWFyZ2luQm90dG9tOiAnLTVweCcgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBUd2VldFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5mb0NvbnRlbnRzO1xuIl19