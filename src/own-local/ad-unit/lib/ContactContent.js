"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _trackingKeys = _interopRequireDefault(require("@own-local/ad-utils/lib/trackingKeys"));

var _url = require("@own-local/ad-utils/lib/url");

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

var ENABLE_FORM_FOR_COUNTRIES = ['US'];

var getFormValue = function getFormValue(form, field) {
  var element = form.elements.namedItem(field);

  if (element instanceof HTMLInputElement) {
    return element.value;
  }

  if (element instanceof HTMLTextAreaElement) {
    return element.value;
  }

  return '';
};

var ContactContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactContent, _React$Component);

  function ContactContent(props) {
    var _this;

    _classCallCheck(this, ContactContent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContactContent).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSubmit", function (event) {
      event.preventDefault();

      if (_this.state.sendingEmail) {
        return;
      }

      _this.props.track(_trackingKeys.default.CONTACT.CATEGORY_NAME, _trackingKeys.default.CONTACT.ACTIONS.SUBMIT, event);

      _this.setState({
        sendingEmail: true,
        emailSentFailed: false,
        emailSentSuccessfully: false
      });

      var payload = {
        name: getFormValue(event.currentTarget, 'name'),
        email: getFormValue(event.currentTarget, 'email'),
        toEmail: _this.props.email,
        subject: _this.props.translateString('email_subject', _this.props.locale, 'New email from your ad on {partnerDomain}', {
          partnerDomain: (0, _url.getHost)(_this.props.partnerDomain)
        }),
        message: getFormValue(event.currentTarget, 'message'),
        isContactFormRequest: true
      };

      _this.submit(payload);
    });

    _defineProperty(_assertThisInitialized(_this), "submit", function (payload) {
      // var formStage = App.env === 'production' ? 'api' : 'api_staging';
      var formStage = 'api_staging';
      var formEndpoint = "https://platform.ownlocal.com/".concat(formStage, "/mailer/email");
      fetch(formEndpoint, {
        method: 'post',
        body: JSON.stringify(payload)
      }).then(function (response) {
        if (response.ok) {
          _this.setState({
            sendingEmail: false,
            emailSentFailed: false,
            emailSentSuccessfully: true
          });
        } else {
          _this.setState({
            sendingEmail: false,
            emailSentSuccessfully: false,
            emailSentFailed: true
          });
        }
      }).catch(function () {
        _this.setState({
          sendingEmail: false,
          emailSentSuccessfully: false,
          emailSentFailed: true
        });
      });
    });

    _this.state = {
      sendingEmail: false,
      emailSentSuccessfully: false,
      emailSentFailed: false
    };
    return _this;
  }

  _createClass(ContactContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          locale = _this$props.locale,
          translateString = _this$props.translateString,
          email = _this$props.email,
          country = _this$props.country;
      var _this$state = this.state,
          sendingEmail = _this$state.sendingEmail,
          emailSentSuccessfully = _this$state.emailSentSuccessfully,
          emailSentFailed = _this$state.emailSentFailed;
      var contents;

      if (ENABLE_FORM_FOR_COUNTRIES.indexOf(country) < 0) {
        contents = React.createElement("a", {
          href: "mailto:".concat(email)
        }, translateString('contact_by_email', locale, 'Send an email to this business'));
      } else if (emailSentSuccessfully) {
        contents = React.createElement("span", {
          className: "success"
        }, translateString('email_sent', locale, 'Email sent'));
      } else {
        contents = React.createElement("form", {
          onSubmit: this.handleSubmit
        }, React.createElement("div", {
          className: "input"
        }, React.createElement("input", {
          type: "text",
          name: "name",
          placeholder: translateString('name', locale, 'Name'),
          required: true
        })), React.createElement("div", {
          className: "input"
        }, React.createElement("input", {
          type: "email",
          name: "email",
          placeholder: translateString('email', locale, 'Email'),
          required: true
        })), React.createElement("div", {
          className: "input"
        }, React.createElement("textarea", {
          name: "message",
          placeholder: translateString('your_message', locale, 'Your Message'),
          required: true
        })), React.createElement("div", {
          className: "submit"
        }, React.createElement("input", {
          type: "submit",
          disabled: sendingEmail,
          value: translateString('send', locale, 'Send')
        })), React.createElement("div", {
          className: "error"
        }, emailSentFailed ? translateString('error', locale, 'Error') : ''));
      }

      return React.createElement("div", {
        className: "content-wrapper contact ".concat(active && 'content-active')
      }, contents);
    }
  }]);

  return ContactContent;
}(React.Component);

exports.default = ContactContent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Db250YWN0Q29udGVudC50c3giXSwibmFtZXMiOlsiRU5BQkxFX0ZPUk1fRk9SX0NPVU5UUklFUyIsImdldEZvcm1WYWx1ZSIsImZvcm0iLCJmaWVsZCIsImVsZW1lbnQiLCJlbGVtZW50cyIsIm5hbWVkSXRlbSIsIkhUTUxJbnB1dEVsZW1lbnQiLCJ2YWx1ZSIsIkhUTUxUZXh0QXJlYUVsZW1lbnQiLCJDb250YWN0Q29udGVudCIsInByb3BzIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwic2VuZGluZ0VtYWlsIiwidHJhY2siLCJUcmFja2luZ0tleXMiLCJDT05UQUNUIiwiQ0FURUdPUllfTkFNRSIsIkFDVElPTlMiLCJTVUJNSVQiLCJzZXRTdGF0ZSIsImVtYWlsU2VudEZhaWxlZCIsImVtYWlsU2VudFN1Y2Nlc3NmdWxseSIsInBheWxvYWQiLCJuYW1lIiwiY3VycmVudFRhcmdldCIsImVtYWlsIiwidG9FbWFpbCIsInN1YmplY3QiLCJ0cmFuc2xhdGVTdHJpbmciLCJsb2NhbGUiLCJwYXJ0bmVyRG9tYWluIiwibWVzc2FnZSIsImlzQ29udGFjdEZvcm1SZXF1ZXN0Iiwic3VibWl0IiwiZm9ybVN0YWdlIiwiQXBwIiwiZW52IiwiZm9ybUVuZHBvaW50IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiY2F0Y2giLCJhY3RpdmUiLCJjb3VudHJ5IiwiY29udGVudHMiLCJpbmRleE9mIiwiaGFuZGxlU3VibWl0IiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkEsSUFBTUEseUJBQXlCLEdBQUcsQ0FBQyxJQUFELENBQWxDOztBQUVBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBd0JDLEtBQXhCLEVBQWtEO0FBQ3JF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QURGO0FBR0Q7Ozs7RUF6SXlDRyxLQUFLLENBQUNDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBUcmFja2luZ0tleXMgZnJvbSAnQG93bi1sb2NhbC9hZC11dGlscy9saWIvdHJhY2tpbmdLZXlzJztcbmltcG9ydCB7IFRyYWNrRnVuY3Rpb24sIFRyYW5zbGF0ZUZ1bmN0aW9uIH0gZnJvbSAnQG93bi1sb2NhbC9hZC11dGlscy9saWIvdHlwZXMnO1xuaW1wb3J0IHsgZ2V0SG9zdCB9IGZyb20gJ0Bvd24tbG9jYWwvYWQtdXRpbHMvbGliL3VybCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udGFjdENvbnRlbnRQcm9wcyB7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbiAgZW1haWw6IHN0cmluZztcbiAgdHJhY2s6IFRyYWNrRnVuY3Rpb247XG4gIGxvY2FsZTogc3RyaW5nO1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuICBwYXJ0bmVyRG9tYWluOiBzdHJpbmc7XG4gIHRyYW5zbGF0ZVN0cmluZzogVHJhbnNsYXRlRnVuY3Rpb247XG59XG5cbmludGVyZmFjZSBDb250YWN0Q29udGVudFN0YXRlIHtcbiAgc2VuZGluZ0VtYWlsOiBib29sZWFuO1xuICBlbWFpbFNlbnRTdWNjZXNzZnVsbHk6IGJvb2xlYW47XG4gIGVtYWlsU2VudEZhaWxlZDogYm9vbGVhbjtcbn1cblxuY29uc3QgRU5BQkxFX0ZPUk1fRk9SX0NPVU5UUklFUyA9IFsnVVMnXTtcblxuY29uc3QgZ2V0Rm9ybVZhbHVlID0gKGZvcm06IEhUTUxGb3JtRWxlbWVudCwgZmllbGQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSBmb3JtLmVsZW1lbnRzLm5hbWVkSXRlbShmaWVsZCk7XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICB9XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50LnZhbHVlO1xuICB9XG4gIHJldHVybiAnJztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3RDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBDb250YWN0Q29udGVudFByb3BzLFxuICBDb250YWN0Q29udGVudFN0YXRlXG4+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IENvbnRhY3RDb250ZW50UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VuZGluZ0VtYWlsOiBmYWxzZSxcbiAgICAgIGVtYWlsU2VudFN1Y2Nlc3NmdWxseTogZmFsc2UsXG4gICAgICBlbWFpbFNlbnRGYWlsZWQ6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlU3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5zZW5kaW5nRW1haWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLnRyYWNrKFxuICAgICAgVHJhY2tpbmdLZXlzLkNPTlRBQ1QuQ0FURUdPUllfTkFNRSxcbiAgICAgIFRyYWNraW5nS2V5cy5DT05UQUNULkFDVElPTlMuU1VCTUlULFxuICAgICAgZXZlbnRcbiAgICApO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbmRpbmdFbWFpbDogdHJ1ZSwgZW1haWxTZW50RmFpbGVkOiBmYWxzZSwgZW1haWxTZW50U3VjY2Vzc2Z1bGx5OiBmYWxzZSB9KTtcblxuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBuYW1lOiBnZXRGb3JtVmFsdWUoZXZlbnQuY3VycmVudFRhcmdldCwgJ25hbWUnKSxcbiAgICAgIGVtYWlsOiBnZXRGb3JtVmFsdWUoZXZlbnQuY3VycmVudFRhcmdldCwgJ2VtYWlsJyksXG4gICAgICB0b0VtYWlsOiB0aGlzLnByb3BzLmVtYWlsLFxuICAgICAgc3ViamVjdDogdGhpcy5wcm9wcy50cmFuc2xhdGVTdHJpbmcoXG4gICAgICAgICdlbWFpbF9zdWJqZWN0JyxcbiAgICAgICAgdGhpcy5wcm9wcy5sb2NhbGUsXG4gICAgICAgICdOZXcgZW1haWwgZnJvbSB5b3VyIGFkIG9uIHtwYXJ0bmVyRG9tYWlufScsXG4gICAgICAgIHsgcGFydG5lckRvbWFpbjogZ2V0SG9zdCh0aGlzLnByb3BzLnBhcnRuZXJEb21haW4pIH1cbiAgICAgICksXG4gICAgICBtZXNzYWdlOiBnZXRGb3JtVmFsdWUoZXZlbnQuY3VycmVudFRhcmdldCwgJ21lc3NhZ2UnKSxcbiAgICAgIGlzQ29udGFjdEZvcm1SZXF1ZXN0OiB0cnVlLFxuICAgIH07XG5cbiAgICB0aGlzLnN1Ym1pdChwYXlsb2FkKTtcbiAgfTtcblxuICBwdWJsaWMgc3VibWl0ID0gKHBheWxvYWQ6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICB0b0VtYWlsOiBzdHJpbmc7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICB9KTogYW55ID0+IHtcbiAgICBjb25zdCBmb3JtU3RhZ2UgPSBBcHAuZW52ID09PSAncHJvZHVjdGlvbicgPyAnYXBpJyA6ICdhcGlfc3RhZ2luZyc7XG4gICAgY29uc3QgZm9ybUVuZHBvaW50ID0gYGh0dHBzOi8vcGxhdGZvcm0ub3dubG9jYWwuY29tLyR7Zm9ybVN0YWdlfS9tYWlsZXIvZW1haWxgO1xuXG4gICAgZmV0Y2goZm9ybUVuZHBvaW50LCB7XG4gICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpLFxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VuZGluZ0VtYWlsOiBmYWxzZSxcbiAgICAgICAgICAgIGVtYWlsU2VudEZhaWxlZDogZmFsc2UsXG4gICAgICAgICAgICBlbWFpbFNlbnRTdWNjZXNzZnVsbHk6IHRydWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZW5kaW5nRW1haWw6IGZhbHNlLFxuICAgICAgICAgICAgZW1haWxTZW50U3VjY2Vzc2Z1bGx5OiBmYWxzZSxcbiAgICAgICAgICAgIGVtYWlsU2VudEZhaWxlZDogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZW5kaW5nRW1haWw6IGZhbHNlLCBlbWFpbFNlbnRTdWNjZXNzZnVsbHk6IGZhbHNlLCBlbWFpbFNlbnRGYWlsZWQ6IHRydWUgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWN0aXZlLCBsb2NhbGUsIHRyYW5zbGF0ZVN0cmluZywgZW1haWwsIGNvdW50cnkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZW5kaW5nRW1haWwsIGVtYWlsU2VudFN1Y2Nlc3NmdWxseSwgZW1haWxTZW50RmFpbGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBjb250ZW50cztcblxuICAgIGlmIChFTkFCTEVfRk9STV9GT1JfQ09VTlRSSUVTLmluZGV4T2YoY291bnRyeSkgPCAwKSB7XG4gICAgICBjb250ZW50cyA9IChcbiAgICAgICAgPGEgaHJlZj17YG1haWx0bzoke2VtYWlsfWB9PlxuICAgICAgICAgIHt0cmFuc2xhdGVTdHJpbmcoJ2NvbnRhY3RfYnlfZW1haWwnLCBsb2NhbGUsICdTZW5kIGFuIGVtYWlsIHRvIHRoaXMgYnVzaW5lc3MnKX1cbiAgICAgICAgPC9hPlxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGVtYWlsU2VudFN1Y2Nlc3NmdWxseSkge1xuICAgICAgY29udGVudHMgPSAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIj57dHJhbnNsYXRlU3RyaW5nKCdlbWFpbF9zZW50JywgbG9jYWxlLCAnRW1haWwgc2VudCcpfTwvc3Bhbj5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnRzID0gKFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZVN0cmluZygnbmFtZScsIGxvY2FsZSwgJ05hbWUnKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0cmFuc2xhdGVTdHJpbmcoJ2VtYWlsJywgbG9jYWxlLCAnRW1haWwnKX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RyYW5zbGF0ZVN0cmluZygneW91cl9tZXNzYWdlJywgbG9jYWxlLCAnWW91ciBNZXNzYWdlJyl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0XCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzZW5kaW5nRW1haWx9XG4gICAgICAgICAgICAgIHZhbHVlPXt0cmFuc2xhdGVTdHJpbmcoJ3NlbmQnLCBsb2NhbGUsICdTZW5kJyl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cbiAgICAgICAgICAgIHtlbWFpbFNlbnRGYWlsZWQgPyB0cmFuc2xhdGVTdHJpbmcoJ2Vycm9yJywgbG9jYWxlLCAnRXJyb3InKSA6ICcnfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbnRlbnQtd3JhcHBlciBjb250YWN0ICR7YWN0aXZlICYmICdjb250ZW50LWFjdGl2ZSd9YH0+e2NvbnRlbnRzfTwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==