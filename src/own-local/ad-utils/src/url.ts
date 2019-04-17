import { canAccessFrameElement } from './iframe';

function getCurrentLocation(): string {
  const currentURL =
    (canAccessFrameElement() && window.frameElement.getAttribute('data-base-path')) ||
    document.location.href;

  return currentURL;
}

export function getHost(url: string): string {
  const urlParts = url.split('/');
  return urlParts[0] + '//' + urlParts[2];
}

export function getCurrentHost(): string {
  const currentURL = getCurrentLocation();
  return getHost(currentURL);
}

export function getBackendDomainWithProtocol(): string {
  return process.env.DEFAULT_BACKEND || getCurrentHost();
}

export function getBackendDomain(): string {
  return getBackendDomainWithProtocol().replace(/http(s?):\/\//, '');
}

export function getParameters(): object {
  const currentURL = getCurrentLocation();
  const hashes = currentURL.slice(currentURL.indexOf('?') + 1).split('&');
  const params = {};
  hashes.map(hash => {
    const [key, val] = hash.split('=');
    params[key] = decodeURIComponent(val);
  });

  return params;
}
