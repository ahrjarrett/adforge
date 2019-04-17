"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canAccessFrameElement = canAccessFrameElement;
exports.inIframe = inIframe;

function canAccessFrameElement() {
  try {
    return !!window.frameElement;
  } catch (err) {
    return false;
  }
}

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return false;
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pZnJhbWUudHMiXSwibmFtZXMiOlsiY2FuQWNjZXNzRnJhbWVFbGVtZW50Iiwid2luZG93IiwiZnJhbWVFbGVtZW50IiwiZXJyIiwiaW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxTQUFTQSxxQkFBVCxHQUEwQztBQUMvQyxNQUFJO0FBQ0YsV0FBTyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsWUFBaEI7QUFDRCxHQUZELENBRUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1osV0FBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFTSxTQUFTQyxRQUFULEdBQTZCO0FBQ2xDLE1BQUk7QUFDRixXQUFPSCxNQUFNLENBQUNJLElBQVAsS0FBZ0JKLE1BQU0sQ0FBQ0ssR0FBOUI7QUFDRCxHQUZELENBRUUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1YsV0FBTyxLQUFQO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjYW5BY2Nlc3NGcmFtZUVsZW1lbnQoKTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhd2luZG93LmZyYW1lRWxlbWVudDtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbklmcmFtZSgpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==