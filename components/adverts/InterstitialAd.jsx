import React, { useEffect } from "react";

const PropellerInterstitial = () => {
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.src = "//ophoacit.com/1?z=5785741";
    adScript.async = true;
    document.getElementById("propeller-interstitial").appendChild(adScript);
  }, []);

  return (
    <div id="propeller-interstitial">
      <script
        async="async"
        data-cfasync="false"
        src="//ophoacit.com/1?z=5785741"
      ></script>
      <div id="container-aa9a1ddaac86dddb1551a5896b3513cc"></div>
    </div>
  );
};

export default PropellerInterstitial;
