exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*.e2e-spec.ts'],
    capabilities: {
      browserName: 'chrome'
    },
    onPrepare: () => {
      browser.manage().window().maximize(); // Maximize the browser before executing the tests
    }
  };