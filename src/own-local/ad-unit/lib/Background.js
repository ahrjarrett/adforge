"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

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

var Background =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Background, _React$Component);

  function Background(props) {
    var _this;

    _classCallCheck(this, Background);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Background).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "image", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleImageLoaded", function (e) {
      var w = e.target['width'];
      var h = e.target['height'];
      var imageShape = w > h ? 'fat' : 'tall';

      _this.setState({
        loaded: true,
        height: h,
        width: w,
        imageShape: imageShape
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageError", function () {
      _this.setState({
        loaded: false
      });
    });

    _this.image = new Image();
    _this.image.src = props.images.picture.sm;
    _this.image.onload = _this.handleImageLoaded;
    _this.image.onerror = _this.handleImageError;
    _this.state = {
      loaded: false,
      imageShape: undefined,
      height: undefined,
      width: undefined
    };
    return _this;
  }

  _createClass(Background, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          adShape = _this$props.adShape,
          isBig = _this$props.isBig;
      var _this$state = this.state,
          imageShape = _this$state.imageShape,
          loaded = _this$state.loaded;
      var _this$props$images = this.props.images,
          offsets = _this$props$images.offsets,
          picture = _this$props$images.picture;
      var lg = picture.lg,
          md = picture.md;
      var offset = offsets[adShape];
      var bg = isBig ? lg : md;

      if (loaded) {
        var bgpos = {
          x: imageShape === 'fat' ? 50 + offset : 50,
          y: imageShape === 'tall' ? 50 + offset : 50
        };

        if (adShape === 'horizontal') {
          bgpos.x = 50;
          bgpos.y = 50 + offset;
        } else if (adShape === 'vertical') {
          bgpos.x = 50 + offset;
          bgpos.y = 50;
        }

        return React.createElement("div", {
          className: "background",
          style: {
            backgroundImage: "url(".concat(bg, ")"),
            backgroundPosition: "".concat(bgpos.x, "% ").concat(bgpos.y, "%")
          }
        });
      } else {
        return React.createElement("div", {
          className: "background",
          style: {
            backgroundImage: "url(".concat(bg, ")")
          }
        });
      }
    }
  }]);

  return Background;
}(React.Component);

exports.default = Background;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYWNrZ3JvdW5kLnRzeCJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwicHJvcHMiLCJlIiwidyIsInRhcmdldCIsImgiLCJpbWFnZVNoYXBlIiwic2V0U3RhdGUiLCJsb2FkZWQiLCJoZWlnaHQiLCJ3aWR0aCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJpbWFnZXMiLCJwaWN0dXJlIiwic20iLCJvbmxvYWQiLCJoYW5kbGVJbWFnZUxvYWRlZCIsIm9uZXJyb3IiLCJoYW5kbGVJbWFnZUVycm9yIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJhZFNoYXBlIiwiaXNCaWciLCJvZmZzZXRzIiwibGciLCJtZCIsIm9mZnNldCIsImJnIiwiYmdwb3MiLCJ4IiwieSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlCcUJBLFU7Ozs7O0FBRW5CLHNCQUFZQyxLQUFaLEVBQW9DO0FBQUE7O0FBQUE7O0FBQ2xDLG9GQUFNQSxLQUFOOztBQURrQzs7QUFBQSx3RUFnQlQsVUFBQ0MsQ0FBRCxFQUFjO0FBQ3ZDLFVBQU1DLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVMsT0FBVCxDQUFWO0FBQ0EsVUFBTUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNFLE1BQUYsQ0FBUyxRQUFULENBQVY7QUFFQSxVQUFNRSxVQUFVLEdBQUdILENBQUMsR0FBR0UsQ0FBSixHQUFRLEtBQVIsR0FBZ0IsTUFBbkM7O0FBRUEsWUFBS0UsUUFBTCxDQUFjO0FBQ1pDLFFBQUFBLE1BQU0sRUFBRSxJQURJO0FBRVpDLFFBQUFBLE1BQU0sRUFBRUosQ0FGSTtBQUdaSyxRQUFBQSxLQUFLLEVBQUVQLENBSEs7QUFJWkcsUUFBQUEsVUFBVSxFQUFWQTtBQUpZLE9BQWQ7QUFNRCxLQTVCbUM7O0FBQUEsdUVBOEJWLFlBQU07QUFDOUIsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLFFBQUFBLE1BQU0sRUFBRTtBQUFWLE9BQWQ7QUFDRCxLQWhDbUM7O0FBR2xDLFVBQUtHLEtBQUwsR0FBYSxJQUFJQyxLQUFKLEVBQWI7QUFDQSxVQUFLRCxLQUFMLENBQVdFLEdBQVgsR0FBaUJaLEtBQUssQ0FBQ2EsTUFBTixDQUFhQyxPQUFiLENBQXFCQyxFQUF0QztBQUNBLFVBQUtMLEtBQUwsQ0FBV00sTUFBWCxHQUFvQixNQUFLQyxpQkFBekI7QUFDQSxVQUFLUCxLQUFMLENBQVdRLE9BQVgsR0FBcUIsTUFBS0MsZ0JBQTFCO0FBRUEsVUFBS0MsS0FBTCxHQUFhO0FBQ1hiLE1BQUFBLE1BQU0sRUFBRSxLQURHO0FBRVhGLE1BQUFBLFVBQVUsRUFBRWdCLFNBRkQ7QUFHWGIsTUFBQUEsTUFBTSxFQUFFYSxTQUhHO0FBSVhaLE1BQUFBLEtBQUssRUFBRVk7QUFKSSxLQUFiO0FBUmtDO0FBY25DOzs7OzZCQW9CZTtBQUFBLHdCQUNhLEtBQUtyQixLQURsQjtBQUFBLFVBQ05zQixPQURNLGVBQ05BLE9BRE07QUFBQSxVQUNHQyxLQURILGVBQ0dBLEtBREg7QUFBQSx3QkFFaUIsS0FBS0gsS0FGdEI7QUFBQSxVQUVOZixVQUZNLGVBRU5BLFVBRk07QUFBQSxVQUVNRSxNQUZOLGVBRU1BLE1BRk47QUFBQSwrQkFHZSxLQUFLUCxLQUFMLENBQVdhLE1BSDFCO0FBQUEsVUFHTlcsT0FITSxzQkFHTkEsT0FITTtBQUFBLFVBR0dWLE9BSEgsc0JBR0dBLE9BSEg7QUFBQSxVQUlOVyxFQUpNLEdBSUtYLE9BSkwsQ0FJTlcsRUFKTTtBQUFBLFVBSUZDLEVBSkUsR0FJS1osT0FKTCxDQUlGWSxFQUpFO0FBS2QsVUFBTUMsTUFBTSxHQUFHSCxPQUFPLENBQUNGLE9BQUQsQ0FBdEI7QUFFQSxVQUFNTSxFQUFFLEdBQUdMLEtBQUssR0FBR0UsRUFBSCxHQUFRQyxFQUF4Qjs7QUFFQSxVQUFJbkIsTUFBSixFQUFZO0FBQ1YsWUFBTXNCLEtBQUssR0FBRztBQUNaQyxVQUFBQSxDQUFDLEVBQUV6QixVQUFVLEtBQUssS0FBZixHQUF1QixLQUFLc0IsTUFBNUIsR0FBcUMsRUFENUI7QUFFWkksVUFBQUEsQ0FBQyxFQUFFMUIsVUFBVSxLQUFLLE1BQWYsR0FBd0IsS0FBS3NCLE1BQTdCLEdBQXNDO0FBRjdCLFNBQWQ7O0FBSUEsWUFBSUwsT0FBTyxLQUFLLFlBQWhCLEVBQThCO0FBQzVCTyxVQUFBQSxLQUFLLENBQUNDLENBQU4sR0FBVSxFQUFWO0FBQ0FELFVBQUFBLEtBQUssQ0FBQ0UsQ0FBTixHQUFVLEtBQUtKLE1BQWY7QUFDRCxTQUhELE1BR08sSUFBSUwsT0FBTyxLQUFLLFVBQWhCLEVBQTRCO0FBQ2pDTyxVQUFBQSxLQUFLLENBQUNDLENBQU4sR0FBVSxLQUFLSCxNQUFmO0FBQ0FFLFVBQUFBLEtBQUssQ0FBQ0UsQ0FBTixHQUFVLEVBQVY7QUFDRDs7QUFFRCxlQUNFO0FBQ0UsVUFBQSxTQUFTLEVBQUMsWUFEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQ0xDLFlBQUFBLGVBQWUsZ0JBQVNKLEVBQVQsTUFEVjtBQUVMSyxZQUFBQSxrQkFBa0IsWUFBS0osS0FBSyxDQUFDQyxDQUFYLGVBQWlCRCxLQUFLLENBQUNFLENBQXZCO0FBRmI7QUFGVCxVQURGO0FBU0QsT0F0QkQsTUFzQk87QUFDTCxlQUNFO0FBQ0UsVUFBQSxTQUFTLEVBQUMsWUFEWjtBQUVFLFVBQUEsS0FBSyxFQUFFO0FBQ0xDLFlBQUFBLGVBQWUsZ0JBQVNKLEVBQVQ7QUFEVjtBQUZULFVBREY7QUFRRDtBQUNGOzs7O0VBN0VxQ00sS0FBSyxDQUFDQyxTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICdAb3duLWxvY2FsL2FkLXV0aWxzL2xpYi90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZFByb3BzIHtcbiAgaW1hZ2VzOiBJbWFnZXM7XG4gIGFkU2hhcGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgfCAnc3F1YXJlJztcbiAgaXNCaWc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZFN0YXRlIHtcbiAgbG9hZGVkOiBib29sZWFuO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgaW1hZ2VTaGFwZTogJ3RhbGwnIHwgJ2ZhdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8QmFja2dyb3VuZFByb3BzLCBCYWNrZ3JvdW5kU3RhdGU+IHtcbiAgcHJpdmF0ZSBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcbiAgY29uc3RydWN0b3IocHJvcHM6IEJhY2tncm91bmRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICB0aGlzLmltYWdlLnNyYyA9IHByb3BzLmltYWdlcy5waWN0dXJlLnNtO1xuICAgIHRoaXMuaW1hZ2Uub25sb2FkID0gdGhpcy5oYW5kbGVJbWFnZUxvYWRlZDtcbiAgICB0aGlzLmltYWdlLm9uZXJyb3IgPSB0aGlzLmhhbmRsZUltYWdlRXJyb3I7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgIGltYWdlU2hhcGU6IHVuZGVmaW5lZCxcbiAgICAgIGhlaWdodDogdW5kZWZpbmVkLFxuICAgICAgd2lkdGg6IHVuZGVmaW5lZCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUltYWdlTG9hZGVkID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgdyA9IGUudGFyZ2V0Wyd3aWR0aCddO1xuICAgIGNvbnN0IGggPSBlLnRhcmdldFsnaGVpZ2h0J107XG5cbiAgICBjb25zdCBpbWFnZVNoYXBlID0gdyA+IGggPyAnZmF0JyA6ICd0YWxsJztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgaGVpZ2h0OiBoLFxuICAgICAgd2lkdGg6IHcsXG4gICAgICBpbWFnZVNoYXBlLFxuICAgIH0pO1xuICB9O1xuXG4gIHB1YmxpYyBoYW5kbGVJbWFnZUVycm9yID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkZWQ6IGZhbHNlIH0pO1xuICB9O1xuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhZFNoYXBlLCBpc0JpZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGltYWdlU2hhcGUsIGxvYWRlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9mZnNldHMsIHBpY3R1cmUgfSA9IHRoaXMucHJvcHMuaW1hZ2VzO1xuICAgIGNvbnN0IHsgbGcsIG1kIH0gPSBwaWN0dXJlO1xuICAgIGNvbnN0IG9mZnNldCA9IG9mZnNldHNbYWRTaGFwZV07XG5cbiAgICBjb25zdCBiZyA9IGlzQmlnID8gbGcgOiBtZDtcblxuICAgIGlmIChsb2FkZWQpIHtcbiAgICAgIGNvbnN0IGJncG9zID0ge1xuICAgICAgICB4OiBpbWFnZVNoYXBlID09PSAnZmF0JyA/IDUwICsgb2Zmc2V0IDogNTAsXG4gICAgICAgIHk6IGltYWdlU2hhcGUgPT09ICd0YWxsJyA/IDUwICsgb2Zmc2V0IDogNTAsXG4gICAgICB9O1xuICAgICAgaWYgKGFkU2hhcGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICBiZ3Bvcy54ID0gNTA7XG4gICAgICAgIGJncG9zLnkgPSA1MCArIG9mZnNldDtcbiAgICAgIH0gZWxzZSBpZiAoYWRTaGFwZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICBiZ3Bvcy54ID0gNTAgKyBvZmZzZXQ7XG4gICAgICAgIGJncG9zLnkgPSA1MDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiZ30pYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYCR7Ymdwb3MueH0lICR7Ymdwb3MueX0lYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tncm91bmRcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiZ30pYCxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==