"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tab = void 0;

var React = _interopRequireWildcard(require("react"));

var _trackingKeys = _interopRequireDefault(require("@own-local/ad-utils/lib/trackingKeys"));

var _AboutContent = _interopRequireDefault(require("./AboutContent"));

var _Background = _interopRequireDefault(require("./Background"));

var _ContactContent = _interopRequireDefault(require("./ContactContent"));

var _Header = _interopRequireDefault(require("./Header"));

var _Imagiro = _interopRequireDefault(require("./Imagiro"));

var _InfoContent = _interopRequireDefault(require("./InfoContent"));

var _PrintContent = _interopRequireDefault(require("./PrintContent"));

var _TabNav = _interopRequireDefault(require("./TabNav"));

var _Ticker = _interopRequireDefault(require("./Ticker"));

var _Icons = require("./Icons");

require("./unit.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tab;
exports.Tab = Tab;

(function (Tab) {
  Tab[Tab["Info"] = 0] = "Info";
  Tab[Tab["About"] = 1] = "About";
  Tab[Tab["Contact"] = 2] = "Contact";
  Tab[Tab["Print"] = 3] = "Print";
})(Tab || (exports.Tab = Tab = {}));

var AdUnit =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AdUnit, _React$Component);

  function AdUnit(props) {
    var _this;

    _classCallCheck(this, AdUnit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AdUnit).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleExpandUnit", function () {
      _this.setState({
        expanded: !_this.state.expanded
      });

      _this.props.track(_trackingKeys.default.NAVIGATION.CATEGORY_NAME, _trackingKeys.default.NAVIGATION.ACTIONS.EXPAND, '');
    });

    _defineProperty(_assertThisInitialized(_this), "selectTab", function (tab) {
      return function () {
        switch (tab) {
          case Tab.About:
            _this.props.track(_trackingKeys.default.NAVIGATION.CATEGORY_NAME, _trackingKeys.default.NAVIGATION.ACTIONS.CHANGE_VIEW, 'about-us');

            break;

          case Tab.Print:
            _this.props.track(_trackingKeys.default.NAVIGATION.CATEGORY_NAME, _trackingKeys.default.NAVIGATION.ACTIONS.CHANGE_VIEW, 'print-ad');

            break;

          default:
            break;
        }

        _this.setState({
          selectedTab: tab
        });
      };
    });

    _defineProperty(_assertThisInitialized(_this), "toggleShare", function () {
      _this.setState({
        shareModalExpanded: !_this.state.shareModalExpanded
      });
    });

    _this.state = {
      expanded: false,
      shareModalExpanded: false,
      stretched: false,
      selectedTab: Tab.Info,
      isAgent: false,
      tabCount: 0,
      showInfoTab: false,
      showAboutTab: false,
      showContactTab: false,
      showPrintTab: false,
      adShape: 'square'
    };
    return _this;
  }

  _createClass(AdUnit, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.title = this.props.data.name;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          data = _this$props.data,
          layout = _this$props.layout,
          track = _this$props.track,
          translateString = _this$props.translateString;
      var headlines = data.headlines,
          name = data.name,
          about = data.about,
          print = data.print,
          contact = data.contact,
          social = data.social,
          images = data.images;
      var _this$state = this.state,
          tabCount = _this$state.tabCount,
          showAboutTab = _this$state.showAboutTab,
          showContactTab = _this$state.showContactTab,
          showInfoTab = _this$state.showInfoTab,
          showPrintTab = _this$state.showPrintTab,
          isAgent = _this$state.isAgent;
      return React.createElement(_Imagiro.default, {
        expanded: this.state.expanded,
        shareModalExpanded: this.state.shareModalExpanded,
        stretched: this.state.stretched,
        tabCount: tabCount,
        tickerCount: headlines.length,
        hasLogo: !!images.logo,
        isAgent: isAgent,
        layout: layout
      }, React.createElement("div", {
        className: "unit-outer"
      }, React.createElement(_Header.default, {
        image: images.logo,
        name: name
      }), React.createElement(_Background.default, {
        adShape: this.state.adShape,
        images: images,
        isBig: window.innerWidth > 700
      }), React.createElement(_Ticker.default, {
        headlines: headlines
      }), React.createElement("div", {
        className: "expand-button",
        onClick: this.toggleExpandUnit
      }, React.createElement("div", {
        className: "chevrons"
      }))), React.createElement("div", {
        className: "unit-inner"
      }, React.createElement("div", {
        className: "collapse-button",
        onClick: this.toggleExpandUnit
      }, React.createElement(_Icons.ChevronUpIcon, null)), React.createElement("div", {
        className: "content"
      }, React.createElement("div", {
        className: "content-nav"
      }, showInfoTab && React.createElement(_TabNav.default, {
        tab: Tab.Info,
        onClick: this.selectTab,
        activeTab: this.state.selectedTab,
        locale: data.locale,
        translateString: translateString
      }), showAboutTab && React.createElement(_TabNav.default, {
        tab: Tab.About,
        onClick: this.selectTab,
        activeTab: this.state.selectedTab,
        locale: data.locale,
        translateString: translateString
      }), showContactTab && React.createElement(_TabNav.default, {
        tab: Tab.Contact,
        onClick: this.selectTab,
        activeTab: this.state.selectedTab,
        locale: data.locale,
        translateString: translateString
      }), showPrintTab && React.createElement(_TabNav.default, {
        tab: Tab.Print,
        onClick: this.selectTab,
        activeTab: this.state.selectedTab,
        locale: data.locale,
        translateString: translateString
      }), React.createElement("div", {
        className: "clear"
      })), React.createElement(_InfoContent.default, {
        contact: contact,
        social: social,
        active: this.state.selectedTab === Tab.Info,
        toggleShare: this.toggleShare,
        name: name,
        track: track
      }), React.createElement(_AboutContent.default, {
        active: this.state.selectedTab === Tab.About,
        about: about
      }), React.createElement(_ContactContent.default, {
        active: this.state.selectedTab === Tab.Contact,
        email: contact.email,
        track: track,
        locale: data.locale,
        translateString: translateString,
        country: data.contact.place.country,
        partnerDomain: data.partnerDomain
      }), React.createElement(_PrintContent.default, {
        active: this.state.selectedTab === Tab.Print,
        print: print
      }))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      var _nextProps$data = nextProps.data,
          categories = _nextProps$data.categories,
          about = _nextProps$data.about,
          contact = _nextProps$data.contact,
          print = _nextProps$data.print;
      var email = contact.email,
          place = contact.place,
          phones = contact.phones;
      var showInfoTab = !!place.address1 || !!phones.length;
      var showAboutTab = !!about;
      var showContactTab = !!email;
      var showPrintTab = !!print.image && !!print.adLink;
      var isAgent = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = categories[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;

          if (c === 'real-estate' || c === 'insurance') {
            isAgent = true;
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var tabCount = 0;

      if (showInfoTab) {
        tabCount++;
      }

      if (showAboutTab) {
        tabCount++;
      }

      if (showContactTab) {
        tabCount++;
      }

      if (showPrintTab) {
        tabCount++;
      }

      var iframeHeight = window.innerHeight;
      var iframeWidth = window.innerWidth;
      var adShape;

      if (iframeHeight > iframeWidth) {
        adShape = 'vertical';
      } else if (iframeWidth > iframeHeight) {
        adShape = 'horizontal';
      } else if (iframeHeight === iframeWidth) {
        adShape = 'square';
      }

      return {
        isAgent: isAgent,
        tabCount: tabCount,
        showInfoTab: showInfoTab,
        showAboutTab: showAboutTab,
        showContactTab: showContactTab,
        showPrintTab: showPrintTab,
        adShape: adShape
      };
    }
  }]);

  return AdUnit;
}(React.Component);

exports.default = AdUnit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BZFVuaXQudHN4Il0sIm5hbWVzIjpbIlRhYiIsIkFkVW5pdCIsInByb3BzIiwic2V0U3RhdGUiLCJleHBhbmRlZCIsInN0YXRlIiwidHJhY2siLCJUcmFja2luZ0tleXMiLCJOQVZJR0FUSU9OIiwiQ0FURUdPUllfTkFNRSIsIkFDVElPTlMiLCJFWFBBTkQiLCJ0YWIiLCJBYm91dCIsIkNIQU5HRV9WSUVXIiwiUHJpbnQiLCJzZWxlY3RlZFRhYiIsInNoYXJlTW9kYWxFeHBhbmRlZCIsInN0cmV0Y2hlZCIsIkluZm8iLCJpc0FnZW50IiwidGFiQ291bnQiLCJzaG93SW5mb1RhYiIsInNob3dBYm91dFRhYiIsInNob3dDb250YWN0VGFiIiwic2hvd1ByaW50VGFiIiwiYWRTaGFwZSIsImRvY3VtZW50IiwidGl0bGUiLCJkYXRhIiwibmFtZSIsImxheW91dCIsInRyYW5zbGF0ZVN0cmluZyIsImhlYWRsaW5lcyIsImFib3V0IiwicHJpbnQiLCJjb250YWN0Iiwic29jaWFsIiwiaW1hZ2VzIiwibGVuZ3RoIiwibG9nbyIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ0b2dnbGVFeHBhbmRVbml0Iiwic2VsZWN0VGFiIiwibG9jYWxlIiwiQ29udGFjdCIsInRvZ2dsZVNoYXJlIiwiZW1haWwiLCJwbGFjZSIsImNvdW50cnkiLCJwYXJ0bmVyRG9tYWluIiwibmV4dFByb3BzIiwiY2F0ZWdvcmllcyIsInBob25lcyIsImFkZHJlc3MxIiwiaW1hZ2UiLCJhZExpbmsiLCJjIiwiaWZyYW1lSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpZnJhbWVXaWR0aCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBR0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBU1lBLEc7OztXQUFBQSxHO0FBQUFBLEVBQUFBLEcsQ0FBQUEsRztBQUFBQSxFQUFBQSxHLENBQUFBLEc7QUFBQUEsRUFBQUEsRyxDQUFBQSxHO0FBQUFBLEVBQUFBLEcsQ0FBQUEsRztHQUFBQSxHLG1CQUFBQSxHOztJQXFCU0MsTTs7Ozs7QUFDbkIsa0JBQVlDLEtBQVosRUFBZ0M7QUFBQTs7QUFBQTs7QUFDOUIsZ0ZBQU1BLEtBQU47O0FBRDhCLHVFQTZFTixZQUFNO0FBQzlCLFlBQUtDLFFBQUwsQ0FBYztBQUNaQyxRQUFBQSxRQUFRLEVBQUUsQ0FBQyxNQUFLQyxLQUFMLENBQVdEO0FBRFYsT0FBZDs7QUFJQSxZQUFLRixLQUFMLENBQVdJLEtBQVgsQ0FDRUMsc0JBQWFDLFVBQWIsQ0FBd0JDLGFBRDFCLEVBRUVGLHNCQUFhQyxVQUFiLENBQXdCRSxPQUF4QixDQUFnQ0MsTUFGbEMsRUFHRSxFQUhGO0FBS0QsS0F2RitCOztBQUFBLGdFQXlGYixVQUFDQyxHQUFEO0FBQUEsYUFBYyxZQUFNO0FBQ3JDLGdCQUFRQSxHQUFSO0FBQ0UsZUFBS1osR0FBRyxDQUFDYSxLQUFUO0FBQ0Usa0JBQUtYLEtBQUwsQ0FBV0ksS0FBWCxDQUNFQyxzQkFBYUMsVUFBYixDQUF3QkMsYUFEMUIsRUFFRUYsc0JBQWFDLFVBQWIsQ0FBd0JFLE9BQXhCLENBQWdDSSxXQUZsQyxFQUdFLFVBSEY7O0FBS0E7O0FBQ0YsZUFBS2QsR0FBRyxDQUFDZSxLQUFUO0FBQ0Usa0JBQUtiLEtBQUwsQ0FBV0ksS0FBWCxDQUNFQyxzQkFBYUMsVUFBYixDQUF3QkMsYUFEMUIsRUFFRUYsc0JBQWFDLFVBQWIsQ0FBd0JFLE9BQXhCLENBQWdDSSxXQUZsQyxFQUdFLFVBSEY7O0FBS0E7O0FBQ0Y7QUFDRTtBQWhCSjs7QUFtQkEsY0FBS1gsUUFBTCxDQUFjO0FBQ1phLFVBQUFBLFdBQVcsRUFBRUo7QUFERCxTQUFkO0FBR0QsT0F2QmtCO0FBQUEsS0F6RmE7O0FBQUEsa0VBa0hYLFlBQU07QUFDekIsWUFBS1QsUUFBTCxDQUFjO0FBQ1pjLFFBQUFBLGtCQUFrQixFQUFFLENBQUMsTUFBS1osS0FBTCxDQUFXWTtBQURwQixPQUFkO0FBR0QsS0F0SCtCOztBQUU5QixVQUFLWixLQUFMLEdBQWE7QUFDWEQsTUFBQUEsUUFBUSxFQUFFLEtBREM7QUFFWGEsTUFBQUEsa0JBQWtCLEVBQUUsS0FGVDtBQUdYQyxNQUFBQSxTQUFTLEVBQUUsS0FIQTtBQUlYRixNQUFBQSxXQUFXLEVBQUVoQixHQUFHLENBQUNtQixJQUpOO0FBTVhDLE1BQUFBLE9BQU8sRUFBRSxLQU5FO0FBT1hDLE1BQUFBLFFBQVEsRUFBRSxDQVBDO0FBUVhDLE1BQUFBLFdBQVcsRUFBRSxLQVJGO0FBU1hDLE1BQUFBLFlBQVksRUFBRSxLQVRIO0FBVVhDLE1BQUFBLGNBQWMsRUFBRSxLQVZMO0FBV1hDLE1BQUFBLFlBQVksRUFBRSxLQVhIO0FBWVhDLE1BQUFBLE9BQU8sRUFBRTtBQVpFLEtBQWI7QUFGOEI7QUFnQi9COzs7O3dDQUUwQjtBQUN6QkMsTUFBQUEsUUFBUSxDQUFDQyxLQUFULEdBQWlCLEtBQUsxQixLQUFMLENBQVcyQixJQUFYLENBQWdCQyxJQUFqQztBQUNEOzs7NkJBb0dlO0FBQUEsd0JBQ21DLEtBQUs1QixLQUR4QztBQUFBLFVBQ04yQixJQURNLGVBQ05BLElBRE07QUFBQSxVQUNBRSxNQURBLGVBQ0FBLE1BREE7QUFBQSxVQUNRekIsS0FEUixlQUNRQSxLQURSO0FBQUEsVUFDZTBCLGVBRGYsZUFDZUEsZUFEZjtBQUFBLFVBRU5DLFNBRk0sR0FFcURKLElBRnJELENBRU5JLFNBRk07QUFBQSxVQUVLSCxJQUZMLEdBRXFERCxJQUZyRCxDQUVLQyxJQUZMO0FBQUEsVUFFV0ksS0FGWCxHQUVxREwsSUFGckQsQ0FFV0ssS0FGWDtBQUFBLFVBRWtCQyxLQUZsQixHQUVxRE4sSUFGckQsQ0FFa0JNLEtBRmxCO0FBQUEsVUFFeUJDLE9BRnpCLEdBRXFEUCxJQUZyRCxDQUV5Qk8sT0FGekI7QUFBQSxVQUVrQ0MsTUFGbEMsR0FFcURSLElBRnJELENBRWtDUSxNQUZsQztBQUFBLFVBRTBDQyxNQUYxQyxHQUVxRFQsSUFGckQsQ0FFMENTLE1BRjFDO0FBQUEsd0JBVVYsS0FBS2pDLEtBVks7QUFBQSxVQUlaZ0IsUUFKWSxlQUlaQSxRQUpZO0FBQUEsVUFLWkUsWUFMWSxlQUtaQSxZQUxZO0FBQUEsVUFNWkMsY0FOWSxlQU1aQSxjQU5ZO0FBQUEsVUFPWkYsV0FQWSxlQU9aQSxXQVBZO0FBQUEsVUFRWkcsWUFSWSxlQVFaQSxZQVJZO0FBQUEsVUFTWkwsT0FUWSxlQVNaQSxPQVRZO0FBWWQsYUFDRSxvQkFBQyxnQkFBRDtBQUNFLFFBQUEsUUFBUSxFQUFFLEtBQUtmLEtBQUwsQ0FBV0QsUUFEdkI7QUFFRSxRQUFBLGtCQUFrQixFQUFFLEtBQUtDLEtBQUwsQ0FBV1ksa0JBRmpDO0FBR0UsUUFBQSxTQUFTLEVBQUUsS0FBS1osS0FBTCxDQUFXYSxTQUh4QjtBQUlFLFFBQUEsUUFBUSxFQUFFRyxRQUpaO0FBS0UsUUFBQSxXQUFXLEVBQUVZLFNBQVMsQ0FBQ00sTUFMekI7QUFNRSxRQUFBLE9BQU8sRUFBRSxDQUFDLENBQUNELE1BQU0sQ0FBQ0UsSUFOcEI7QUFPRSxRQUFBLE9BQU8sRUFBRXBCLE9BUFg7QUFRRSxRQUFBLE1BQU0sRUFBRVc7QUFSVixTQVVFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFLG9CQUFDLGVBQUQ7QUFBUSxRQUFBLEtBQUssRUFBRU8sTUFBTSxDQUFDRSxJQUF0QjtBQUE0QixRQUFBLElBQUksRUFBRVY7QUFBbEMsUUFERixFQUVFLG9CQUFDLG1CQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUUsS0FBS3pCLEtBQUwsQ0FBV3FCLE9BRHRCO0FBRUUsUUFBQSxNQUFNLEVBQUVZLE1BRlY7QUFHRSxRQUFBLEtBQUssRUFBRUcsTUFBTSxDQUFDQyxVQUFQLEdBQW9CO0FBSDdCLFFBRkYsRUFPRSxvQkFBQyxlQUFEO0FBQVEsUUFBQSxTQUFTLEVBQUVUO0FBQW5CLFFBUEYsRUFRRTtBQUFLLFFBQUEsU0FBUyxFQUFDLGVBQWY7QUFBK0IsUUFBQSxPQUFPLEVBQUUsS0FBS1U7QUFBN0MsU0FDRTtBQUFLLFFBQUEsU0FBUyxFQUFDO0FBQWYsUUFERixDQVJGLENBVkYsRUFzQkU7QUFBSyxRQUFBLFNBQVMsRUFBQztBQUFmLFNBQ0U7QUFBSyxRQUFBLFNBQVMsRUFBQyxpQkFBZjtBQUFpQyxRQUFBLE9BQU8sRUFBRSxLQUFLQTtBQUEvQyxTQUNFLG9CQUFDLG9CQUFELE9BREYsQ0FERixFQUlFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNHckIsV0FBVyxJQUNWLG9CQUFDLGVBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRXRCLEdBQUcsQ0FBQ21CLElBRFg7QUFFRSxRQUFBLE9BQU8sRUFBRSxLQUFLeUIsU0FGaEI7QUFHRSxRQUFBLFNBQVMsRUFBRSxLQUFLdkMsS0FBTCxDQUFXVyxXQUh4QjtBQUlFLFFBQUEsTUFBTSxFQUFFYSxJQUFJLENBQUNnQixNQUpmO0FBS0UsUUFBQSxlQUFlLEVBQUViO0FBTG5CLFFBRkosRUFVR1QsWUFBWSxJQUNYLG9CQUFDLGVBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRXZCLEdBQUcsQ0FBQ2EsS0FEWDtBQUVFLFFBQUEsT0FBTyxFQUFFLEtBQUsrQixTQUZoQjtBQUdFLFFBQUEsU0FBUyxFQUFFLEtBQUt2QyxLQUFMLENBQVdXLFdBSHhCO0FBSUUsUUFBQSxNQUFNLEVBQUVhLElBQUksQ0FBQ2dCLE1BSmY7QUFLRSxRQUFBLGVBQWUsRUFBRWI7QUFMbkIsUUFYSixFQW1CR1IsY0FBYyxJQUNiLG9CQUFDLGVBQUQ7QUFDRSxRQUFBLEdBQUcsRUFBRXhCLEdBQUcsQ0FBQzhDLE9BRFg7QUFFRSxRQUFBLE9BQU8sRUFBRSxLQUFLRixTQUZoQjtBQUdFLFFBQUEsU0FBUyxFQUFFLEtBQUt2QyxLQUFMLENBQVdXLFdBSHhCO0FBSUUsUUFBQSxNQUFNLEVBQUVhLElBQUksQ0FBQ2dCLE1BSmY7QUFLRSxRQUFBLGVBQWUsRUFBRWI7QUFMbkIsUUFwQkosRUE0QkdQLFlBQVksSUFDWCxvQkFBQyxlQUFEO0FBQ0UsUUFBQSxHQUFHLEVBQUV6QixHQUFHLENBQUNlLEtBRFg7QUFFRSxRQUFBLE9BQU8sRUFBRSxLQUFLNkIsU0FGaEI7QUFHRSxRQUFBLFNBQVMsRUFBRSxLQUFLdkMsS0FBTCxDQUFXVyxXQUh4QjtBQUlFLFFBQUEsTUFBTSxFQUFFYSxJQUFJLENBQUNnQixNQUpmO0FBS0UsUUFBQSxlQUFlLEVBQUViO0FBTG5CLFFBN0JKLEVBcUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixRQXJDRixDQURGLEVBd0NFLG9CQUFDLG9CQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUVJLE9BRFg7QUFFRSxRQUFBLE1BQU0sRUFBRUMsTUFGVjtBQUdFLFFBQUEsTUFBTSxFQUFFLEtBQUtoQyxLQUFMLENBQVdXLFdBQVgsS0FBMkJoQixHQUFHLENBQUNtQixJQUh6QztBQUlFLFFBQUEsV0FBVyxFQUFFLEtBQUs0QixXQUpwQjtBQUtFLFFBQUEsSUFBSSxFQUFFakIsSUFMUjtBQU1FLFFBQUEsS0FBSyxFQUFFeEI7QUFOVCxRQXhDRixFQWdERSxvQkFBQyxxQkFBRDtBQUFjLFFBQUEsTUFBTSxFQUFFLEtBQUtELEtBQUwsQ0FBV1csV0FBWCxLQUEyQmhCLEdBQUcsQ0FBQ2EsS0FBckQ7QUFBNEQsUUFBQSxLQUFLLEVBQUVxQjtBQUFuRSxRQWhERixFQWlERSxvQkFBQyx1QkFBRDtBQUNFLFFBQUEsTUFBTSxFQUFFLEtBQUs3QixLQUFMLENBQVdXLFdBQVgsS0FBMkJoQixHQUFHLENBQUM4QyxPQUR6QztBQUVFLFFBQUEsS0FBSyxFQUFFVixPQUFPLENBQUNZLEtBRmpCO0FBR0UsUUFBQSxLQUFLLEVBQUUxQyxLQUhUO0FBSUUsUUFBQSxNQUFNLEVBQUV1QixJQUFJLENBQUNnQixNQUpmO0FBS0UsUUFBQSxlQUFlLEVBQUViLGVBTG5CO0FBTUUsUUFBQSxPQUFPLEVBQUVILElBQUksQ0FBQ08sT0FBTCxDQUFhYSxLQUFiLENBQW1CQyxPQU45QjtBQU9FLFFBQUEsYUFBYSxFQUFFckIsSUFBSSxDQUFDc0I7QUFQdEIsUUFqREYsRUEwREUsb0JBQUMscUJBQUQ7QUFBYyxRQUFBLE1BQU0sRUFBRSxLQUFLOUMsS0FBTCxDQUFXVyxXQUFYLEtBQTJCaEIsR0FBRyxDQUFDZSxLQUFyRDtBQUE0RCxRQUFBLEtBQUssRUFBRW9CO0FBQW5FLFFBMURGLENBSkYsQ0F0QkYsQ0FERjtBQTBGRDs7OzZDQXhNc0NpQixTLEVBQXdCO0FBQUEsNEJBQ2ZBLFNBQVMsQ0FBQ3ZCLElBREs7QUFBQSxVQUNyRHdCLFVBRHFELG1CQUNyREEsVUFEcUQ7QUFBQSxVQUN6Q25CLEtBRHlDLG1CQUN6Q0EsS0FEeUM7QUFBQSxVQUNsQ0UsT0FEa0MsbUJBQ2xDQSxPQURrQztBQUFBLFVBQ3pCRCxLQUR5QixtQkFDekJBLEtBRHlCO0FBQUEsVUFFckRhLEtBRnFELEdBRTVCWixPQUY0QixDQUVyRFksS0FGcUQ7QUFBQSxVQUU5Q0MsS0FGOEMsR0FFNUJiLE9BRjRCLENBRTlDYSxLQUY4QztBQUFBLFVBRXZDSyxNQUZ1QyxHQUU1QmxCLE9BRjRCLENBRXZDa0IsTUFGdUM7QUFJN0QsVUFBTWhDLFdBQVcsR0FBRyxDQUFDLENBQUMyQixLQUFLLENBQUNNLFFBQVIsSUFBb0IsQ0FBQyxDQUFDRCxNQUFNLENBQUNmLE1BQWpEO0FBQ0EsVUFBTWhCLFlBQVksR0FBRyxDQUFDLENBQUNXLEtBQXZCO0FBQ0EsVUFBTVYsY0FBYyxHQUFHLENBQUMsQ0FBQ3dCLEtBQXpCO0FBQ0EsVUFBTXZCLFlBQVksR0FBRyxDQUFDLENBQUNVLEtBQUssQ0FBQ3FCLEtBQVIsSUFBaUIsQ0FBQyxDQUFDckIsS0FBSyxDQUFDc0IsTUFBOUM7QUFFQSxVQUFJckMsT0FBTyxHQUFHLEtBQWQ7QUFUNkQ7QUFBQTtBQUFBOztBQUFBO0FBVzdELDZCQUFnQmlDLFVBQWhCLDhIQUE0QjtBQUFBLGNBQWpCSyxDQUFpQjs7QUFDMUIsY0FBSUEsQ0FBQyxLQUFLLGFBQU4sSUFBdUJBLENBQUMsS0FBSyxXQUFqQyxFQUE4QztBQUM1Q3RDLFlBQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0E7QUFDRDtBQUNGO0FBaEI0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWtCN0QsVUFBSUMsUUFBUSxHQUFHLENBQWY7O0FBRUEsVUFBSUMsV0FBSixFQUFpQjtBQUNmRCxRQUFBQSxRQUFRO0FBQ1Q7O0FBQ0QsVUFBSUUsWUFBSixFQUFrQjtBQUNoQkYsUUFBQUEsUUFBUTtBQUNUOztBQUNELFVBQUlHLGNBQUosRUFBb0I7QUFDbEJILFFBQUFBLFFBQVE7QUFDVDs7QUFDRCxVQUFJSSxZQUFKLEVBQWtCO0FBQ2hCSixRQUFBQSxRQUFRO0FBQ1Q7O0FBRUQsVUFBTXNDLFlBQVksR0FBR2xCLE1BQU0sQ0FBQ21CLFdBQTVCO0FBQ0EsVUFBTUMsV0FBVyxHQUFHcEIsTUFBTSxDQUFDQyxVQUEzQjtBQUNBLFVBQUloQixPQUFKOztBQUNBLFVBQUlpQyxZQUFZLEdBQUdFLFdBQW5CLEVBQWdDO0FBQzlCbkMsUUFBQUEsT0FBTyxHQUFHLFVBQVY7QUFDRCxPQUZELE1BRU8sSUFBSW1DLFdBQVcsR0FBR0YsWUFBbEIsRUFBZ0M7QUFDckNqQyxRQUFBQSxPQUFPLEdBQUcsWUFBVjtBQUNELE9BRk0sTUFFQSxJQUFJaUMsWUFBWSxLQUFLRSxXQUFyQixFQUFrQztBQUN2Q25DLFFBQUFBLE9BQU8sR0FBRyxRQUFWO0FBQ0Q7O0FBRUQsYUFBTztBQUNMTixRQUFBQSxPQUFPLEVBQVBBLE9BREs7QUFFTEMsUUFBQUEsUUFBUSxFQUFSQSxRQUZLO0FBR0xDLFFBQUFBLFdBQVcsRUFBWEEsV0FISztBQUlMQyxRQUFBQSxZQUFZLEVBQVpBLFlBSks7QUFLTEMsUUFBQUEsY0FBYyxFQUFkQSxjQUxLO0FBTUxDLFFBQUFBLFlBQVksRUFBWkEsWUFOSztBQU9MQyxRQUFBQSxPQUFPLEVBQVBBO0FBUEssT0FBUDtBQVNEOzs7O0VBNUVpQ29DLEtBQUssQ0FBQ0MsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFRyYWNraW5nS2V5cyBmcm9tICdAb3duLWxvY2FsL2FkLXV0aWxzL2xpYi90cmFja2luZ0tleXMnO1xuaW1wb3J0IHsgQWRSZWNvcmQsIExheW91dCwgVHJhY2tGdW5jdGlvbiwgVHJhbnNsYXRlRnVuY3Rpb24gfSBmcm9tICdAb3duLWxvY2FsL2FkLXV0aWxzL2xpYi90eXBlcyc7XG5cbmltcG9ydCBBYm91dENvbnRlbnQgZnJvbSAnLi9BYm91dENvbnRlbnQnO1xuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi9CYWNrZ3JvdW5kJztcbmltcG9ydCBDb250YWN0Q29udGVudCBmcm9tICcuL0NvbnRhY3RDb250ZW50JztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEltYWdpcm8gZnJvbSAnLi9JbWFnaXJvJztcbmltcG9ydCBJbmZvQ29udGVudHMgZnJvbSAnLi9JbmZvQ29udGVudCc7XG5pbXBvcnQgUHJpbnRDb250ZW50IGZyb20gJy4vUHJpbnRDb250ZW50JztcbmltcG9ydCBUYWJOYXYgZnJvbSAnLi9UYWJOYXYnO1xuaW1wb3J0IFRpY2tlciBmcm9tICcuL1RpY2tlcic7XG5cbmltcG9ydCB7IENoZXZyb25VcEljb24gfSBmcm9tICcuL0ljb25zJztcbmltcG9ydCAnLi91bml0LnNjc3MnO1xuXG5pbnRlcmZhY2UgQWRVbml0UHJvcHMge1xuICBkYXRhOiBBZFJlY29yZDtcbiAgbGF5b3V0PzogTGF5b3V0O1xuICB0cmFjazogVHJhY2tGdW5jdGlvbjtcbiAgdHJhbnNsYXRlU3RyaW5nOiBUcmFuc2xhdGVGdW5jdGlvbjtcbn1cblxuZXhwb3J0IGVudW0gVGFiIHtcbiAgSW5mbyA9IDAsXG4gIEFib3V0ID0gMSxcbiAgQ29udGFjdCA9IDIsXG4gIFByaW50ID0gMyxcbn1cblxuaW50ZXJmYWNlIEFkVW5pdFN0YXRlIHtcbiAgZXhwYW5kZWQ6IGJvb2xlYW47XG4gIHNoYXJlTW9kYWxFeHBhbmRlZDogYm9vbGVhbjtcbiAgc3RyZXRjaGVkOiBib29sZWFuO1xuICBzZWxlY3RlZFRhYjogVGFiO1xuICBpc0FnZW50OiBib29sZWFuO1xuICB0YWJDb3VudDogbnVtYmVyO1xuICBzaG93SW5mb1RhYjogYm9vbGVhbjtcbiAgc2hvd0Fib3V0VGFiOiBib29sZWFuO1xuICBzaG93Q29udGFjdFRhYjogYm9vbGVhbjtcbiAgc2hvd1ByaW50VGFiOiBib29sZWFuO1xuICBhZFNoYXBlOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnIHwgJ3NxdWFyZSc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkVW5pdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxBZFVuaXRQcm9wcywgQWRVbml0U3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IEFkVW5pdFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRlZDogZmFsc2UsXG4gICAgICBzaGFyZU1vZGFsRXhwYW5kZWQ6IGZhbHNlLFxuICAgICAgc3RyZXRjaGVkOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkVGFiOiBUYWIuSW5mbyxcblxuICAgICAgaXNBZ2VudDogZmFsc2UsXG4gICAgICB0YWJDb3VudDogMCxcbiAgICAgIHNob3dJbmZvVGFiOiBmYWxzZSxcbiAgICAgIHNob3dBYm91dFRhYjogZmFsc2UsXG4gICAgICBzaG93Q29udGFjdFRhYjogZmFsc2UsXG4gICAgICBzaG93UHJpbnRUYWI6IGZhbHNlLFxuICAgICAgYWRTaGFwZTogJ3NxdWFyZScsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkb2N1bWVudC50aXRsZSA9IHRoaXMucHJvcHMuZGF0YS5uYW1lO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzOiBBZFVuaXRQcm9wcykge1xuICAgIGNvbnN0IHsgY2F0ZWdvcmllcywgYWJvdXQsIGNvbnRhY3QsIHByaW50IH0gPSBuZXh0UHJvcHMuZGF0YTtcbiAgICBjb25zdCB7IGVtYWlsLCBwbGFjZSwgcGhvbmVzIH0gPSBjb250YWN0O1xuXG4gICAgY29uc3Qgc2hvd0luZm9UYWIgPSAhIXBsYWNlLmFkZHJlc3MxIHx8ICEhcGhvbmVzLmxlbmd0aDtcbiAgICBjb25zdCBzaG93QWJvdXRUYWIgPSAhIWFib3V0O1xuICAgIGNvbnN0IHNob3dDb250YWN0VGFiID0gISFlbWFpbDtcbiAgICBjb25zdCBzaG93UHJpbnRUYWIgPSAhIXByaW50LmltYWdlICYmICEhcHJpbnQuYWRMaW5rO1xuXG4gICAgbGV0IGlzQWdlbnQgPSBmYWxzZTtcblxuICAgIGZvciAoY29uc3QgYyBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBpZiAoYyA9PT0gJ3JlYWwtZXN0YXRlJyB8fCBjID09PSAnaW5zdXJhbmNlJykge1xuICAgICAgICBpc0FnZW50ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHRhYkNvdW50ID0gMDtcblxuICAgIGlmIChzaG93SW5mb1RhYikge1xuICAgICAgdGFiQ291bnQrKztcbiAgICB9XG4gICAgaWYgKHNob3dBYm91dFRhYikge1xuICAgICAgdGFiQ291bnQrKztcbiAgICB9XG4gICAgaWYgKHNob3dDb250YWN0VGFiKSB7XG4gICAgICB0YWJDb3VudCsrO1xuICAgIH1cbiAgICBpZiAoc2hvd1ByaW50VGFiKSB7XG4gICAgICB0YWJDb3VudCsrO1xuICAgIH1cblxuICAgIGNvbnN0IGlmcmFtZUhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICBjb25zdCBpZnJhbWVXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBhZFNoYXBlO1xuICAgIGlmIChpZnJhbWVIZWlnaHQgPiBpZnJhbWVXaWR0aCkge1xuICAgICAgYWRTaGFwZSA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIGlmIChpZnJhbWVXaWR0aCA+IGlmcmFtZUhlaWdodCkge1xuICAgICAgYWRTaGFwZSA9ICdob3Jpem9udGFsJztcbiAgICB9IGVsc2UgaWYgKGlmcmFtZUhlaWdodCA9PT0gaWZyYW1lV2lkdGgpIHtcbiAgICAgIGFkU2hhcGUgPSAnc3F1YXJlJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNBZ2VudCxcbiAgICAgIHRhYkNvdW50LFxuICAgICAgc2hvd0luZm9UYWIsXG4gICAgICBzaG93QWJvdXRUYWIsXG4gICAgICBzaG93Q29udGFjdFRhYixcbiAgICAgIHNob3dQcmludFRhYixcbiAgICAgIGFkU2hhcGUsXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVFeHBhbmRVbml0ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXhwYW5kZWQ6ICF0aGlzLnN0YXRlLmV4cGFuZGVkLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wcm9wcy50cmFjayhcbiAgICAgIFRyYWNraW5nS2V5cy5OQVZJR0FUSU9OLkNBVEVHT1JZX05BTUUsXG4gICAgICBUcmFja2luZ0tleXMuTkFWSUdBVElPTi5BQ1RJT05TLkVYUEFORCxcbiAgICAgICcnXG4gICAgKTtcbiAgfTtcblxuICBwdWJsaWMgc2VsZWN0VGFiID0gKHRhYjogVGFiKSA9PiAoKSA9PiB7XG4gICAgc3dpdGNoICh0YWIpIHtcbiAgICAgIGNhc2UgVGFiLkFib3V0OlxuICAgICAgICB0aGlzLnByb3BzLnRyYWNrKFxuICAgICAgICAgIFRyYWNraW5nS2V5cy5OQVZJR0FUSU9OLkNBVEVHT1JZX05BTUUsXG4gICAgICAgICAgVHJhY2tpbmdLZXlzLk5BVklHQVRJT04uQUNUSU9OUy5DSEFOR0VfVklFVyxcbiAgICAgICAgICAnYWJvdXQtdXMnXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBUYWIuUHJpbnQ6XG4gICAgICAgIHRoaXMucHJvcHMudHJhY2soXG4gICAgICAgICAgVHJhY2tpbmdLZXlzLk5BVklHQVRJT04uQ0FURUdPUllfTkFNRSxcbiAgICAgICAgICBUcmFja2luZ0tleXMuTkFWSUdBVElPTi5BQ1RJT05TLkNIQU5HRV9WSUVXLFxuICAgICAgICAgICdwcmludC1hZCdcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkVGFiOiB0YWIsXG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIHRvZ2dsZVNoYXJlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hhcmVNb2RhbEV4cGFuZGVkOiAhdGhpcy5zdGF0ZS5zaGFyZU1vZGFsRXhwYW5kZWQsXG4gICAgfSk7XG4gIH07XG5cbiAgcHVibGljIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGEsIGxheW91dCwgdHJhY2ssIHRyYW5zbGF0ZVN0cmluZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGhlYWRsaW5lcywgbmFtZSwgYWJvdXQsIHByaW50LCBjb250YWN0LCBzb2NpYWwsIGltYWdlcyB9ID0gZGF0YTtcbiAgICBjb25zdCB7XG4gICAgICB0YWJDb3VudCxcbiAgICAgIHNob3dBYm91dFRhYixcbiAgICAgIHNob3dDb250YWN0VGFiLFxuICAgICAgc2hvd0luZm9UYWIsXG4gICAgICBzaG93UHJpbnRUYWIsXG4gICAgICBpc0FnZW50LFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJbWFnaXJvXG4gICAgICAgIGV4cGFuZGVkPXt0aGlzLnN0YXRlLmV4cGFuZGVkfVxuICAgICAgICBzaGFyZU1vZGFsRXhwYW5kZWQ9e3RoaXMuc3RhdGUuc2hhcmVNb2RhbEV4cGFuZGVkfVxuICAgICAgICBzdHJldGNoZWQ9e3RoaXMuc3RhdGUuc3RyZXRjaGVkfVxuICAgICAgICB0YWJDb3VudD17dGFiQ291bnR9XG4gICAgICAgIHRpY2tlckNvdW50PXtoZWFkbGluZXMubGVuZ3RofVxuICAgICAgICBoYXNMb2dvPXshIWltYWdlcy5sb2dvfVxuICAgICAgICBpc0FnZW50PXtpc0FnZW50fVxuICAgICAgICBsYXlvdXQ9e2xheW91dH1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bml0LW91dGVyXCI+XG4gICAgICAgICAgPEhlYWRlciBpbWFnZT17aW1hZ2VzLmxvZ299IG5hbWU9e25hbWV9IC8+XG4gICAgICAgICAgPEJhY2tncm91bmRcbiAgICAgICAgICAgIGFkU2hhcGU9e3RoaXMuc3RhdGUuYWRTaGFwZX1cbiAgICAgICAgICAgIGltYWdlcz17aW1hZ2VzfVxuICAgICAgICAgICAgaXNCaWc9e3dpbmRvdy5pbm5lcldpZHRoID4gNzAwfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPFRpY2tlciBoZWFkbGluZXM9e2hlYWRsaW5lc30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4cGFuZC1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUV4cGFuZFVuaXR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGV2cm9uc1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVuaXQtaW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlRXhwYW5kVW5pdH0+XG4gICAgICAgICAgICA8Q2hldnJvblVwSWNvbiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LW5hdlwiPlxuICAgICAgICAgICAgICB7c2hvd0luZm9UYWIgJiYgKFxuICAgICAgICAgICAgICAgIDxUYWJOYXZcbiAgICAgICAgICAgICAgICAgIHRhYj17VGFiLkluZm99XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNlbGVjdFRhYn1cbiAgICAgICAgICAgICAgICAgIGFjdGl2ZVRhYj17dGhpcy5zdGF0ZS5zZWxlY3RlZFRhYn1cbiAgICAgICAgICAgICAgICAgIGxvY2FsZT17ZGF0YS5sb2NhbGV9XG4gICAgICAgICAgICAgICAgICB0cmFuc2xhdGVTdHJpbmc9e3RyYW5zbGF0ZVN0cmluZ31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7c2hvd0Fib3V0VGFiICYmIChcbiAgICAgICAgICAgICAgICA8VGFiTmF2XG4gICAgICAgICAgICAgICAgICB0YWI9e1RhYi5BYm91dH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0VGFifVxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFifVxuICAgICAgICAgICAgICAgICAgbG9jYWxlPXtkYXRhLmxvY2FsZX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVN0cmluZz17dHJhbnNsYXRlU3RyaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzaG93Q29udGFjdFRhYiAmJiAoXG4gICAgICAgICAgICAgICAgPFRhYk5hdlxuICAgICAgICAgICAgICAgICAgdGFiPXtUYWIuQ29udGFjdH1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2VsZWN0VGFifVxuICAgICAgICAgICAgICAgICAgYWN0aXZlVGFiPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFifVxuICAgICAgICAgICAgICAgICAgbG9jYWxlPXtkYXRhLmxvY2FsZX1cbiAgICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVN0cmluZz17dHJhbnNsYXRlU3RyaW5nfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtzaG93UHJpbnRUYWIgJiYgKFxuICAgICAgICAgICAgICAgIDxUYWJOYXZcbiAgICAgICAgICAgICAgICAgIHRhYj17VGFiLlByaW50fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zZWxlY3RUYWJ9XG4gICAgICAgICAgICAgICAgICBhY3RpdmVUYWI9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUYWJ9XG4gICAgICAgICAgICAgICAgICBsb2NhbGU9e2RhdGEubG9jYWxlfVxuICAgICAgICAgICAgICAgICAgdHJhbnNsYXRlU3RyaW5nPXt0cmFuc2xhdGVTdHJpbmd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhclwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxJbmZvQ29udGVudHNcbiAgICAgICAgICAgICAgY29udGFjdD17Y29udGFjdH1cbiAgICAgICAgICAgICAgc29jaWFsPXtzb2NpYWx9XG4gICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFRhYiA9PT0gVGFiLkluZm99XG4gICAgICAgICAgICAgIHRvZ2dsZVNoYXJlPXt0aGlzLnRvZ2dsZVNoYXJlfVxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgICB0cmFjaz17dHJhY2t9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEFib3V0Q29udGVudCBhY3RpdmU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUYWIgPT09IFRhYi5BYm91dH0gYWJvdXQ9e2Fib3V0fSAvPlxuICAgICAgICAgICAgPENvbnRhY3RDb250ZW50XG4gICAgICAgICAgICAgIGFjdGl2ZT17dGhpcy5zdGF0ZS5zZWxlY3RlZFRhYiA9PT0gVGFiLkNvbnRhY3R9XG4gICAgICAgICAgICAgIGVtYWlsPXtjb250YWN0LmVtYWlsfVxuICAgICAgICAgICAgICB0cmFjaz17dHJhY2t9XG4gICAgICAgICAgICAgIGxvY2FsZT17ZGF0YS5sb2NhbGV9XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZVN0cmluZz17dHJhbnNsYXRlU3RyaW5nfVxuICAgICAgICAgICAgICBjb3VudHJ5PXtkYXRhLmNvbnRhY3QucGxhY2UuY291bnRyeX1cbiAgICAgICAgICAgICAgcGFydG5lckRvbWFpbj17ZGF0YS5wYXJ0bmVyRG9tYWlufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcmludENvbnRlbnQgYWN0aXZlPXt0aGlzLnN0YXRlLnNlbGVjdGVkVGFiID09PSBUYWIuUHJpbnR9IHByaW50PXtwcmludH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0ltYWdpcm8+XG4gICAgKTtcbiAgfVxufVxuIl19