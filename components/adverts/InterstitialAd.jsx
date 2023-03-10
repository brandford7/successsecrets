import React, { useEffect } from "react";

const PropellerInterstitial = () => {
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.src = "https://atshroomisha.com/pfe/current/tag.min.js?z=5785768";
    adScript.async = true;
    document.getElementById("propeller-interstitial").appendChild(adScript);
  }, []);

  return (
    <div id="propeller-interstitial">
      <script
        src="https://atshroomisha.com/pfe/current/tag.min.js?z=5785768"
        data-cfasync="false"
        async
      ></script>
      <div id="container-aa9a1ddaac86dddb1551a5896b3513cc"></div>
    </div>
  );
};

export default PropellerInterstitial;
