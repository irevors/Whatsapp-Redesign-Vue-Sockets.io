const helmet = require('helmet');

// allowed urls
const trusted = [
  "'self'",
  'https://*.wistia.com',
  '*.wistia.com',
  'https://cdn.jsdelivr.net',
  'https://*.cloudflare.com',
  '*.cloudflare.com',
];

if (process.env.NODE_ENV !== 'production') {
  trusted.push('http://localhost:*', 'ws://localhost:*');
}

const helmetDefaults = () => {
  return helmet();
};

const csp = () => {
  return helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: [
        "'strict-dynamic'",
        "'unsafe-inline'",
        'https://www.googletagmanager.com',
        '*.googletagmanager.com',
        'https://unpkg.com',
        'https://cdn.jsdelivr.net',
        // 'maps.googleapis.com',
        (req, res) => `'nonce-${res.locals.cspNonce}'`,
      ].concat(trusted),
      styleSrc: ["'unsafe-inline'", 'data:'].concat(trusted),
      frameSrc: ['www.google.com'].concat(trusted),
      objectSrc: ["'none'"],
      connectSrc: [
        "'self'",
        'https://apis.google.com',
        '*.wistia.com/',
        'https://*.wistia.com/',
        'http://pipedream.wistia.com/',
        'https://*.litix.io',
      ],
      fontSrc: [
        // '*.cloudflare.com',
        // 'https://*.cloudflare.com',
        '*.googleapis.com',
        '*.gstatic.com',
        'data:',
      ].concat(trusted),
      imgSrc: ['www.googletagmanager.com', 'data:'].concat(trusted),
      baseUri: ["'self'"],
      mediaSrc: ['blob:'].concat(trusted),
      workerSrc: ['blob:'],
    },
    // set to true if you only want to report errors
    reportOnly: false,
    // set to true if you want to force buggy CSP in Safari 5
    safari5: false,
  });
};

module.exports = {
  csp,
  helmetDefaults,
};
