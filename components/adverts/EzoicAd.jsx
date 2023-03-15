import React, { useEffect } from "react";

const EzoicAd = () => {
  useEffect(() => {
    ezstandalone.define(102);
    if (!ezstandalone.enabled) {
      ezstandalone.enable();
      ezstandalone.display();
    } else {
      ezstandalone.refresh();
    }
  }, []);

  return <div id="ezoic-pub-ad-placeholder-102"> </div>;
};

export default EzoicAd;
