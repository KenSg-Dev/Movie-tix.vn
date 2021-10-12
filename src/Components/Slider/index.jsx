import React, { useEffect } from "react";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { actGetListMovieApi } from "../../Container/HomeTemplate/ListMoviePage/module/action";
import { Link } from "react-router-dom";
import MovieItem from "../Movie";
import Loader from "../Loader";

const settings = {
  infinite: true,
  slidesToShow: 4,
  speed: 500,
  slidesToScroll: 4,
  rows: 2,
  adaptiveHeight: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: true,
        arrows: false,
      },
    },
  ],
};

function SliderMovie(props) {
  const { list, loading } = useSelector((state) => state.listMovieReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetListMovieApi());
  }, []);

  function renderSlider() {
    if (list.length > 0) {
      return list.map((item, index) => {
        return (
          <div className="slider-item" key={index}>
            <MovieItem item={item} />
          </div>
        );
      });
    }
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="movie-slick" id="homeMovies">
          <Link to="/list-movie" className="btn btn-all">
            Xem tất cả
          </Link>
          <Slider {...settings}>{renderSlider()}</Slider>
        </div>
      )}
    </>
  );
}

export default SliderMovie;
