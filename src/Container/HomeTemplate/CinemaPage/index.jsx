import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  actGetListScheduleByTheaterId,
  actGetListTheatersApi,
} from "../../../redux/action/cinema";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BackNews from "../../../Assets/img/back-news.png";
import MovieByTheater from "../../../Components/MovieByCinema";
import imgTheater from "../../../Assets/img/bhd-star-bitexco-16105952137769.png";
import List from "@material-ui/core/List";

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
    minWidth: "300px",
    justifyContent: 'center'
  },

  tabs: {
    border: `1px solid #eeeeeee0`,
    width: "27%",
    maxWidth: "92px",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
  },
  theaterTabs: {
    width: "73%",
    border: `1px solid #eeeeeee0`,
    borderLeft: "none",
    height: "100%",
    maxHeight: "605px",
    overflowY: "auto",
  },
  textColorInherit: {
    minWidth: "90px",
    height: "90px",
    opacity: "0.5",
  },
}));

export default function CinemaPage() {
  const classes = useStyles();
  const [value, setValue] = React.useState("BHDStar");

  const { schedule, listCinema } = useSelector((state) => state.cinemaReducer);
  const dispatch = useDispatch();
  const [state, setstate] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
    let index = schedule.findIndex((item) => {
      return item.maHeThongRap === newValue;
    });
    if (index !== -1) {
      setstate(schedule[index]);
    }
  };

  useEffect(() => {
    dispatch(actGetListTheatersApi());
    dispatch(actGetListScheduleByTheaterId(""));
  }, []);

  useEffect(() => {
    if (schedule.length > 0) {
      setstate(schedule[0]);
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
          <TabPanel
            className={classes.theaterTabs}
            key={index}
            value={value}
            index={item.maHeThongRap}
          >
            {renderTheaterMobile()}
          </TabPanel>
        );
      });
    }
  }

  function renderTheaterMobile() {
    if (state.lstCumRap && state.lstCumRap.length > 0) {
      return state.lstCumRap.map((item, index) => {
        let tenCumRap = item.tenCumRap.split("-");
        let tenHeThong = tenCumRap[0];
        let tenChiNhanh = tenCumRap[1];

        return (
          <div className="theaterList" key={index}>
            <div
              onClick={() => {
                handleChange(item.maCumRap);
              }}
              className={classes.ListItem}
            >
              <p className="infoTheater">
                <img className="logo-cinema theater" src={imgTheater} />
                <span className="text">
                  <span className="main">{tenHeThong}</span> - {tenChiNhanh}
                  <span className="address">{item.diaChi}</span>
                  <span className='detail'>[Chi tiết]</span>
                </span>
              </p>
            </div>

            <List component="div" disablePadding>
              {item.danhSachPhim.map((movie, index) => (
                <MovieByTheater key={index} movie={movie} />
              ))}
            </List>
          </div>
        );
      });
    }
  }

  return (
    <section className="theater" id="cinema">
      <div className="theater__content row">
        <img src={BackNews} alt="" className="col-12" />

        <div className={classes.root}>
          {renderNavTabs()}
          {renderCumRap()}
        </div>
      </div>
    </section>
  );
}
