(function () {
  const isLocal =
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1';

  window.BASE_URL = isLocal
    ? 'http://localhost:5000'
    : 'http://187.127.146.178:5000';
})();
