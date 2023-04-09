import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// This function will be called whenever the user changes their cookie consent preferences
function onConsentChanged(categoryPreferences) {
    console.log("Cookie consent preferences have changed:", categoryPreferences);        
}

// Check if we are running in the browser, not in Node.js
if (ExecutionEnvironment.canUseDOM) {
    // Initialize WcpConsent with the appropriate options
    window.WcpConsent && WcpConsent.init(
        "en-US", // language
        "cookie-banner", // ID of the cookie banner element
        function (err, siteConsent) {
            if (!err) {
                // If initialization was successful, use siteConsent to get the current consent preferences
                console.log("Site consent preferences:", siteConsent);
            } else {
                console.log("Error initializing WcpConsent: "+ err);
            }
        },
        onConsentChanged, // callback function for when consent preferences change
        WcpConsent.themes.light // theme to use for the cookie banner
    );
}
