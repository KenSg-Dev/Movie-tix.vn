import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actGetListScheduleByTheaterId,
  actGetListTheatersApi,
} from "../../redux/action/cinema";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BackNews from "../../Assets/img/back-news.png";
import MovieByTheater from "../MovieByCinema";
import imgTheater from "../../Assets/img/bhd-star-bitexco-16105952137769.png";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    minWidth: "92px",
  },

  tabs: {
    border: `1px solid #eeeeeee0`,
    width: "100%",
    maxWidth: "92px",

    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  textColorInherit: {
    minWidth: "90px",
    height: "90px",
    opacity: "0.5",
  },
  theaterTabs: {

    border: `1px solid #eeeeeee0`,
    borderLeft: "none",
    height: "100%",
    maxHeight: "605px",
    overflowY: "auto",
  },
  movieTabs: {
    width: "65%",
    border: `1px solid #eeeeeee0`,
    borderLeft: "none",
    height: "605px",
    maxHeight: "605px",

    overflowY: "auto",
  },
  infoTheater: {
    padding: "20px",
    textTransform: "none",
    fontSize: "14px",
    color: "#000",
    opacity: 0.5,
    fontFamily: "SF Text Regular",
    textAlign: "left",
  },
}));

export default function Theaters() {
  
  const classes = useStyles();
  const [value, setValue] = React.useState("BHDStar");
  const [theater, setTheater] = React.useState("bhd-star-cineplex-pham-hung");

  const { schedule, listCinema } = useSelector((state) => state.cinemaReducer);
  const dispatch = useDispatch();
  const [state, setstate] = useState({});
  const [movie, setMovie] = useState([]);


  const handleChange = (event, newValue) => {
    setValue(newValue);
    let index = schedule.findIndex((item) => {
      return item.maHeThongRap === newValue;
    });
    if (index !== -1) {
      setstate(schedule[index]);
      setTheater(schedule[index].lstCumRap[0].maCumRap);
      setMovie(schedule[index].lstCumRap[0].danhSachPhim);
    }
  };

  const handleChangeTheater = (event, newValue) => {
    setTheater(newValue);
    let index = state.lstCumRap.findIndex((item) => {
      return item.maCumRap === newValue;
    });
    if (index !== -1) {
      setMovie(state.lstCumRap[index].danhSachPhim);
    }
  };

  useEffect(() => {
    dispatch(actGetListTheatersApi());
    dispatch(actGetListScheduleByTheaterId(""));
  }, []);

  useEffect(() => {
    if (schedule.length > 0) {
      setstate(schedule[0]);
      setMovie(schedule[0].lstCumRap[0].danhSachPhim);
    }
  }, [schedule]);

  function renderNavTabs() {
    if (listCinema.length > 0) {
      return (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {listCinema.map((item, index) => (
            <Tab
              className={classes.textColorInherit}
              key={index}
              value={item.maHeThongRap}
              label=""
              icon={<img className="logo-cinema" src={item.logo} />}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      );
    }
  }

  function renderCumRap() {
    if (listCinema.length > 0) {
      return listCinema.map((item, index) => {
        return (
          <TabPanel className={classes.theaterTabs} key={index} value={value} index={item.maHeThongRap}>
            {renderTheaters()}
        
          </TabPanel>
        );
      });
    }
  }
  function renderTheaters() {
    if (state.lstCumRap && state.lstCumRap.length > 0) {
      return (
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={theater}
          onChange={handleChangeTheater}
          aria-label="Vertical tabs example"
          className={classes.theaterTabs}
        >
          {state.lstCumRap.map((item, index) => {
            let tenCumRap = item.tenCumRap.split("-");
            let tenHeThong = tenCumRap[0];
            let tenChiNhanh = tenCumRap[1];
            return (
              <Tab
                className={classes.infoTheater}
                key={index}
                value={item.maCumRap}
                label={
                  <React.Fragment>
                    <p className="infoTheater">
                      <img className="logo-cinema theater" src={imgTheater} />
                      <span className="text">
                        <span className="main">{tenHeThong}</span> -{" "}
                        {tenChiNhanh}
                        <span className="address">{item.diaChi}</span>
                        <span className='detail'>[Chi tiết]</span>
                      </span>
                    </p>
                  </React.Fragment>
                }
                {...a11yProps(index)}
              />
            );
          })}
        </Tabs>
      );
    }
  }

  

  function renderListMovie() {
    if (movie.length > 0) {
      return movie.map((item, index) => (
        <MovieByTheater key={index} movie={item} />
      ));
    }
  }

  function renderDanhSachCumRap() {
    if (state.lstCumRap && state.lstCumRap.length > 0) {
      return state.lstCumRap.map((item, index) => (
        <TabPanel
          className={classes.movieTabs}
          value={theater}
          index={item.maCumRap}
          key={index}
        >
          {renderListMovie()}
        </TabPanel>
      ));
    }
  }
  return (
    <section className="theater" id="cinema">
      <div className="theater__content row">
        <img src={BackNews} alt="" className="col-12" />

        <div className={classes.root}>
          {renderNavTabs()}
          {renderCumRap()}
          {renderDanhSachCumRap()}
        </div>
      </div>
    </section>
  );
}
