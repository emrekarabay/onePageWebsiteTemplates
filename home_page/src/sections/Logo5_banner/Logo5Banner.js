import React from "react";
import Logo5BannerComponent from "../../components/Logo5BannerComponent/Logo5BannerComponent";
import "./Logo5Banner.scss";
import BannerTitle from "../../components/BannerTitle/BannerTitle";

function Logo5Banner() {
  return (
    <div className="Logo5Banner container-fluid">
      <BannerTitle
        BannerTitle="Lorem ipsum dolor sit amet consectetur adipiscing"
        BannerFontSize="fs-28"
        BannerFontWeight="normal"
        BannerColor="BannerTitleWhite"
        BannerMarginBottom="BannerMarginBottom34"
      />
      <div className="Logo5BannerRow justify-content-center align-items-center gap-3">
        <Logo5BannerComponent
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7614B09F-1509-4DB2-AEA4-CC0E4DC7EA83.png"
          Logo5BannerDNone=""
        />
        <Logo5BannerComponent
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/6BEF4BE2-F633-4C6F-B4EE-08517F548B3E.png"
          Logo5BannerDNone=""
        />
        <Logo5BannerComponent
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7614B09F-1509-4DB2-AEA4-CC0E4DC7EA83.png"
          Logo5BannerDNone="d-none d-lg-flex"
        />
        <Logo5BannerComponent
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/6BEF4BE2-F633-4C6F-B4EE-08517F548B3E.png"
          Logo5BannerDNone="d-none d-lg-flex"
        />
        <Logo5BannerComponent
          Logo5BannerLogo="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7614B09F-1509-4DB2-AEA4-CC0E4DC7EA83.png"
          Logo5BannerDNone="d-none d-lg-flex"
        />
      </div>
    </div>
  );
}

export default Logo5Banner;
