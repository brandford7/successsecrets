/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect } from "react";

const AdsterraSocialBar = () => {
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.src =
      "//wowcalmnessdumb.com/2e/25/22/2e252234bfdeb8c535c64cf478156cd9.js";
    adScript.async = true;
    document.getElementById("adsterra-socialbar").appendChild(adScript);
  }, []);

  return (
    <div id="adsterra-socialbar">
      <script
      async
        type="text/javascript"
        src="//wowcalmnessdumb.com/2e/25/22/2e252234bfdeb8c535c64cf478156cd9.js"
      ></script>
    </div>
  );
};

export default AdsterraSocialBar;
