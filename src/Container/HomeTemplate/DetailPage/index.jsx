import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { actGetInfoMovieApi } from "../../../redux/action/movie";
import { actGetListScheduleByTheaterId } from "../../../redux/action/cinema";
import { useSelector, useDispatch } from "react-redux";
import { HashLink } from "react-router-hash-link";
import star from "../../../Assets/img/star1.png";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TheatersByMovie from "../../../Components/TheatersByMovie";
import Loader from "../../../Components/Loader";
import avatar from "../../../Assets/img/avatar.png";
import StarIcon from "@material-ui/icons/Star";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(() => ({
  root: {
    width: "auto",
    maxWidth: 900,
    margin: "auto",
  },
}));

function DetailPage() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  let location = useParams();
  const [movie, setMovie] = useState({});
  const dispatch = useDispatch();
  const { infoMovie, loading } = useSelector((state) => state.movieReducer);
  const { schedule } = useSelector((state) => state.cinemaReducer);

  useEffect(() => {
    dispatch(actGetInfoMovieApi(location.id));
    if (schedule.length === 0) {
      dispatch(actGetListScheduleByTheaterId(""));
    }
  }, []);

  useEffect(() => {
    setMovie(infoMovie);
  }, [infoMovie]);

  function date() {
    let date = new Date(movie.ngayKhoiChieu);
    let _date = date.toLocaleDateString();
    return _date;
  }
  let className = "c100 p" + (movie.danhGia / 10) * 100 + " green";

  const renderStar = () => {
    let ratingStar = [];
    if (movie.danhGia) {
      let i = 0;
      for (i; i < Number(movie.danhGia) / 2; i++) {
        ratingStar.push(
          <img key={i} src={star} alt="star" className="smallStar" />
        );
      }
    }
    return ratingStar;
  };

  function renderInfoMovie() {
    return (
      <div className="backgroundMain">
        <div className="styleBlur">
          <img
            className="img-background "
            src={movie.hinhAnh}
            alt={movie.biDanh}
          />
        </div>

        <div
          className="styleGradient"
          style={{
            background:
              "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
          }}
        />

        <div className="detailMainInfo row">
          <div className="posterMovie col-lg-3 col-md-4 col-12">
            <div
              className="posterMovie__img"
              style={{
                backgroundImage: `url(${movie.hinhAnh})`,
              }}
            >
              <button
                className="btn trailer"
                data-toggle="modal"
                data-target="#movieTrailer"
              >
                <img src="../img/play-video.png" alt="tix" />
              </button>
            </div>
          </div>
          <div className="infoMain col-md-4 col-lg-5 col-12">
            <div className="infoMain__time">
              <span>{date()}</span>
            </div>
            <div className="infoMain__name">
              <span>{movie.tenPhim}</span>
            </div>
            {movie.lichChieu && movie.lichChieu.length > 0 ? (
              <span>{movie.lichChieu[0].thoiLuong} phút</span>
            ) : (
              <></>
            )}

            <br />
            <HashLink to="#buyTicket" onClick={() => {
              setValue(0)
            }}>
              <button className="btn buyTicket">Mua vé</button>
            </HashLink>
          </div>

          <div className="col-lg-2 col-md-4 col-12 circleStar">
            <div className={className}>
              <span>{movie.danhGia}</span>
              <div className="slice">
                <div className="bar"></div>
                <div className="fill"></div>
              </div>
            </div>
            <div className="starMain">{renderStar()}</div>
          </div>
        </div>
      </div>
    );
  }

  function homeNewsMain() {
    return (
      <div className="homeNewsMain">
        <div className="detailMain row">
          <div className="col-sm-6 left">
            <div className="row rowLeftInfo">
              <p className="col-6 title">Tên phim</p>
              <p className="col-6">{movie.tenPhim}</p>
            </div>
            <div className="row rowLeftInfo">
              <p className="col-6 title">Ngày công chiếu</p>
              <p className="col-6">{date()}</p>
            </div>

            <div className="row rowLeftInfo">
              <p className="col-6 title">Đánh giá</p>
              <p className="col-6">{movie.danhGia}</p>
            </div>
          </div>
          <div className="col-sm-6 right">
            <div className="row rowLeftInfo">
              <p className="title">Nội dung</p>
            </div>

            <div className="row rowLeftInfo">
              <p>{movie.moTa}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function renderDetailMovie() {
    return (
      <div className="contentMain" id='buyTicket'>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Lịch chiếu" {...a11yProps(0)} />
              <Tab label="Thông tin" {...a11yProps(1)} />
              <Tab label="Đánh giá" {...a11yProps(2)} />
            </Tabs>
          </AppBar>

          <TabPanel value={value} index={0}>
            <TheatersByMovie />
          </TabPanel>
          <TabPanel value={value} index={1}>
            {homeNewsMain()}
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="comment">
              <img className="avatar" src={avatar} alt="" />

              <div className="text">
                <span className="commentRating">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </span>
                <br />
                <span>Phim hay. Bối cảnh chân thực, xúc động</span>
              </div>
            </div>
          </TabPanel>
        </div>
      </div>
    );
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="detail-movie">
          <div
            className="modal fade"
            id="movieTrailer"
            tabIndex={-1}
            aria-labelledby="modalVideo"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-body" id="modalVideo">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <img src="../img/close.png" />
                  </button>
                  <iframe
                    width="100%"
                    height="85%"
                    src={movie.trailer}
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            </div>
          </div>

          {renderInfoMovie()}
          {renderDetailMovie()}
        </div>
      )}
    </>
  );
}

export default DetailPage;
