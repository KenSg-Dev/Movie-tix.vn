import React, { Component } from "react";
import HomeTools from "../../../Components/HomeTools";
import SliderMovie from "../../../Components/Slider";
import Theaters from "../../../Components/Theaters";
import Carousel from "../Carousel";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <HomeTools />

        <div id="movieList">
          <SliderMovie />
        </div>

        <div className='cinema'>
          <Theaters />
        </div>
      </div>
    );
  }
}
