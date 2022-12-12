import React from "react";
import "./ScreensBanner.scss";
import BannerTitle from "../../components/BannerTitle/BannerTitle";

function ScreensBanner() {
  return (
    <div className="ScreensBannerDisDiv">
      <BannerTitle
        BannerTitle="On all your screens at home and on the go"
        BannerFontSize="fs-32"
        BannerFontWeight="bold"
        BannerColor="BannerTitleWhite"
        BannerMarginBottom="BannerMarginBottom62"
      />{" "}
      <div className="ScreensBannerItems">
        <div className="ScreensBannerItem">
          <div className="ImageDiv">
            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C69E6F76-ED36-4FFC-8D75-FFA3188B0E1E.svg"></img>
          </div>
          <div className="ScreensBannerItemTitle">Available on Windows</div>
        </div>
        <div className="ScreensBannerItem">
          <div className="ImageDiv">
            <img
              className="ImageDiv"
              src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C69E6F76-ED36-4FFC-8D75-FFA3188B0E1E.svg"
            ></img>
          </div>
          <div className="ScreensBannerItemTitle">Available on Windows</div>
        </div>
        <div className="ScreensBannerItem">
          <div className="ImageDiv">
            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C69E6F76-ED36-4FFC-8D75-FFA3188B0E1E.svg"></img>
          </div>
          <div className="ScreensBannerItemTitle">Available on Windows</div>
        </div>
      </div>
    </div>
  );
}

export default ScreensBanner;
