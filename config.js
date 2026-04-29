const isLocalhost =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

const BASE_URL = isLocalhost
  ? 'http://localhost:5000'
  : 'http://187.127.146.178:5000';

window.BASE_URL = BASE_URL;
