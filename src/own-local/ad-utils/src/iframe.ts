export function canAccessFrameElement(): boolean {
  try {
    return !!window.frameElement;
  } catch (err) {
    return false;
  }
}

export function inIframe(): boolean {
  try {
    return window.self !== window.top;
  } catch (e) {
    return false;
  }
}
