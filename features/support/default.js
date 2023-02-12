const { request, settings } = require('pactum');
const { Before } = require('@cucumber/cucumber');

Before(() => {
  request.setBaseUrl('https://reqres.in');  // This is a site that is designed to test real API endpoints
  settings.setReporterAutoRun(false);
});