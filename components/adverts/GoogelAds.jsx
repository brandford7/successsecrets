import { useEffect } from "react";

const GoogleAds = ({...props}) => {
 const { currentPath } = props;

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [currentPath]);

  return (
    <div key={currentPath} >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3825617756167561"
        data-ad-slot="1626852337"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default GoogleAds;


