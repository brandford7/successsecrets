import React, { useEffect } from "react";

const AdsterraNative = () => {
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.src =
      "//wowcalmnessdumb.com/aa9a1ddaac86dddb1551a5896b3513cc/invoke.js";
    adScript.async = true;
    document.getElementById("adsterra-nativeads").appendChild(adScript);
  }, []);

  return (
    <div id="adsterra-nativeads">
      <script
        async="async"
        data-cfasync="false"
        src="//wowcalmnessdumb.com/aa9a1ddaac86dddb1551a5896b3513cc/invoke.js"
      ></script>
      <div id="container-aa9a1ddaac86dddb1551a5896b3513cc"></div>
    </div>
  );
};

export default AdsterraNative;
