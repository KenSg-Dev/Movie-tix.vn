import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  actGetListTheatersApi,
  actGetListScheduleByTheaterId,
} from "../../redux/action/cinema";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import BackNews from "../../Assets/img/back-news.png";
import MovieByTheater from "../MovieByCinema";
import imgTheater from "../../Assets/img/bhd-star-bitexco-16105952137769.png";
import { Link } from "react-router-dom";
import TheaterItem from "../TheaterItem";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-prevent-tabpanel-${index}`}
      aria-labelledby={`scrollable-prevent-tab-${index}`}
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
    id: `scrollable-prevent-tab-${index}`,
    "aria-controls": `scrollable-prevent-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    borderRadius: "5px",
  },

  tabs: {
    border: `1px solid #eeeeeee0`,
    width: "28%",
    borderTopLeftRadius: "5px",
    borderBottomLeftRadius: "5px",
    maxHeight: "650px",
    height: "650px",
  },
  textColorInherit: {
  
    opacity: "0.5",
    float: "left",
    textAlign: "left",
    fontSize: "15px",
    fontFamily: "SF Medium",
    padding: "20px",
  },
  tabPanel: {
    maxHeight: "650px",
    overflowY: "auto",
    width: "72%",
  },
}));

export default function TheatersByMovie() {
  const classes = useStyles();
  const [value, setValue] = React.useState("BHDStar");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { listCinema, schedule } = useSelector((state) => state.cinemaReducer);
  const { infoMovie } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listCinema.length === 0) {
      dispatch(actGetListTheatersApi());
    }
    if (schedule.length === 0) {
      dispatch(actGetListScheduleByTheaterId());
    }
  }, []);

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
              label={item.tenHeThongRap}
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
            key={index}
            value={value}
            index={item.maHeThongRap}
            className={classes.tabPanel}
          >
            {renderListMovie()}
          </TabPanel>
        );
      });
    }
  }



  function renderListMovie() {
    if (schedule.length > 0) {
      let index = schedule.findIndex((item) => {
        return item.maHeThongRap === value;
      });
      if (index !== -1) {

        let number = schedule[index].lstCumRap.findIndex((item) => {
          let _list = item.danhSachPhim.filter((movie) => {
            return movie.maPhim === infoMovie.maPhim;
          });
          return _list.length > 0 
        });

        if(number!==-1){
          return schedule[index].lstCumRap.map((item) => {
            let _list = item.danhSachPhim.filter((movie) => {
              return movie.maPhim === infoMovie.maPhim;
            });
  
            if (_list.length > 0) {
              return _list.map((index) => (
                <TheaterItem key={index} theater={item} />
              ));
            }
          });
        }
        else{
          return <p className='noti'>Không có suất chiếu</p>
        }
      }
    }
  }

  return (
    <div className="theaterByMovie">
      <div className={classes.root}>
        {renderNavTabs()}
        {renderCumRap()}
      </div>
    </div>
  );
}
