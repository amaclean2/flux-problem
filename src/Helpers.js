import FluxHelpers from 'flux-sdk-helpers';
import FluxSdk from 'flux-sdk-browser';

const config = {
  url: 'http://localhost:3000',
  fluxUrl: 'https://flux.io',
  flux_client_id: 'd5a46c0b-d2e9-4545-8e8a-11e155ec3272'
};

var sdk = new FluxSdk(config.flux_client_id, { redirectUri: config.url, fluxUrl: config.fluxUrl});
var helpers = new FluxHelpers(sdk);
console.log(helpers);
