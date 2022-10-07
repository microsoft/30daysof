// Using Client Modules
// https://docusaurus.io/docs/advanced/client#client-modules
// For this to work, we need 
// <div id="cookie-banner"></div> to exist in body of page
// TODO: Swizzle docusaurus to add the id in

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function onConsentChanged(categoryPreferences) {
    console.log("onConsentChanged", categoryPreferences);        
}

if (ExecutionEnvironment.canUseDOM) {
  // As soon as the site loads in the browser, register a global event listener
    window.WcpConsent && WcpConsent.init("en-US", "cookie-banner", function (err, _siteConsent) {
        if (!err) {
            siteConsent = _siteConsent;  //siteConsent is used to get the current consent          
        } else {
            console.log("Error initializing WcpConsent: "+ err);
        }
    }, onConsentChanged, WcpConsent.themes.light);
}
