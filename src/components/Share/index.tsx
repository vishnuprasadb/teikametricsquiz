import React from "react";

import twitterIcon from "../../assets/tweet-icon.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";

const Share = (props: { value: string }) => {
  return (
    <React.Fragment>
      <a
        target="_blank"
        href={`https://twitter.com/intent/tweet?text=${props.value}`}
      >
        <img style={{ height: "2rem" }} src={twitterIcon} />
      </a>
      &nbsp;
      <a
        target="_blank"
        href={`https://api.whatsapp.com/send?text=${props.value}`}
      >
        <img style={{ height: "2rem" }} src={whatsappIcon} />
      </a>
    </React.Fragment>
  );
};

export default Share;
