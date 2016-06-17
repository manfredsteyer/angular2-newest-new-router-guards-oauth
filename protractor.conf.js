require('ts-node/register');

exports.config = { 
  directConnect: true, 

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['e2e/**/*.e2e.ts'], 

  jasmineNodeOpts: {
    showColors: true, 
    defaultTimeoutInterval: 30000
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },
  
  useAllAngular2AppRoots: true
};
