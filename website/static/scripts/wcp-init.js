import React, { useEffect, useState } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

function CookieBanner() {
  const [siteConsent, setSiteConsent] = useState(null);

  function onConsentChanged(categoryPreferences) {
    console.log("onConsentChanged", categoryPreferences);        
  }

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      // As soon as the site loads in the browser, register a global event listener
      window.WcpConsent && WcpConsent.init("en-US", "cookie-banner", function (err, _siteConsent) {
          if (!err) {
              setSiteConsent(_siteConsent);  //set siteConsent to the current consent          
          } else {
              console.log("Error initializing WcpConsent: "+ err);
          }
      }, onConsentChanged, WcpConsent.themes.light);
    }
  }, []);

  return (
    <div id="cookie-banner">
      <p>This site uses cookies. By continuing to browse the site, you are agreeing to our use of cookies.</p>
      <button onClick={() => siteConsent?.updateConsent(true)}>Accept</button>
      <button onClick={() => siteConsent?.updateConsent(false)}>Decline</button>
    </div>
  );
}

export default CookieBanner;
