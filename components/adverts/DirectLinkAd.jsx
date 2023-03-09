import { useEffect, useState } from "react";

function AdsterraDirectLink() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://your-direct-link-url.com";

    script.onload = () => {
      setLoaded(true);
    };

    document.head.appendChild(script);
  }, []);

  return (
    <>
      {loaded && (
        <div>
          https://wowcalmnessdumb.com/c8n36fyamy?key=7979b77a01f13d93568aba0097c7599e
        </div>
      )}
    </>
  );
}

export default AdsterraDirectLink;
