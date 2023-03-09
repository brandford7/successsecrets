import React,{useEffect} from "react";

const AdsterraPopUnder = () => {
  useEffect(() => {
    const adScript = document.createElement("script");
    adScript.src =
      "//wowcalmnessdumb.com/0e/57/b2/0e57b2089d0351ab9222d4b7030e2603.js";
    adScript.async = true;
    document.getElementById("adsterra-popunder").appendChild(adScript);
  }, []);

  return (
    <div id="adsterra-popunder">
      <script
    async
        type="text/javascript"
        src="//wowcalmnessdumb.com/0e/57/b2/0e57b2089d0351ab9222d4b7030e2603.js"
      ></script>
    </div>
  );
};

export default AdsterraPopUnder;
