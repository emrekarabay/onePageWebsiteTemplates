import React from "react";
import "./BlogModule.scss";
import ButtonHomePage from "../../components/Buttons/ButtonHomePage/ButtonHomePage";
import { BsFillCircleFill } from "react-icons/bs";

function BlogModule() {
  return (
    <div className="blogModuleDisDiv">
      <a
        className="leftArrow-blog d-none d-lg-block"
        data-bs-target="#carouselBlog"
        data-bs-slide="prev"
      >
        <img
          className=""
          src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5AF00BE2-757C-4803-AE77-91EB8D57927B.svg"
        ></img>
        <span className="visually-hidden">Previous</span>
      </a>
      <div id="carouselBlog" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner">
          <div className="carousel-item itemsBlog active  ">
            <div>
              <img
                className="blog-image"
                src="https://images.unsplash.com/photo-1636751364472-12bfad09b451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhdHNhcHB8ZW58MHx8MHx8&w=1000&q=80"
              ></img>
            </div>
            <div className="BlogModuleRight">
              <div className="blogModuleDate">GAMING - AUGUST 11, 2020 </div>
              <div className="blogModuleTitle">
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </div>
              <div className="blogModuleParagaraf">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
              <ButtonHomePage
                buttonTitle="READ MORE"
                buttonType="transparent"
                buttonWitdh="width-185"
              />
            </div>
          </div>
          <div className="carousel-item  itemsBlog">
            <div>
              <img
                className="blog-image"
                src="https://images.unsplash.com/photo-1636751364472-12bfad09b451?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhdHNhcHB8ZW58MHx8MHx8&w=1000&q=80"
              ></img>
            </div>
            <div className="BlogModuleRight">
              <div className="blogModuleDate">GAMING - AUGUST 11, 2020 </div>
              <div className="blogModuleTitle">
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </div>
              <div className="blogModuleParagaraf">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
              <ButtonHomePage
                buttonTitle="READ MORE"
                buttonType="transparent"
                buttonWitdh="width-185"
              />
            </div>
          </div>
          <div className="carousel-item itemsBlog">
            <div>
              <img
                className="blog-image"
                src="data:image/jpeg;base64,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"
              ></img>
            </div>
            <div className="BlogModuleRight">
              <div className="blogModuleDate">GAMING - AUGUST 11, 2020 </div>
              <div className="blogModuleTitle">
                Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
              </div>
              <div className="blogModuleParagaraf">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
              <ButtonHomePage
                buttonTitle="READ MORE"
                buttonType="transparent"
                buttonWitdh="width-185"
              />
            </div>
          </div>
        </div>
        <div className="d-lg-none blog-circle">
          <a
            data-bs-target="#carouselBlog"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <BsFillCircleFill />
          </a>
          <a
            data-bs-target="#carouselBlog"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <BsFillCircleFill />
          </a>
          <a
            data-bs-target="#carouselBlog"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <BsFillCircleFill />
          </a>
        </div>
      </div>
      <a
        className="rightArrow-blog d-none d-lg-block"
        data-bs-target="#carouselBlog"
        data-bs-slide="next"
      >
        <img
          className=""
          src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/7BF74048-3476-465B-BBD9-9FA664EE2D8F.svg"
        ></img>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
}

export default BlogModule;
