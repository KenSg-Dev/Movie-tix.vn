import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import imgTheater from "../../Assets/img/bhd-star-bitexco-16105952137769.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  ListItem: {
    padding: "20px",
    cursor: "pointer",
    transition: "0",
  },
}));

export default function TheaterItem(props) {
  const classes = useStyles();
  const { theater } = props;

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  let tenCumRap = theater.tenCumRap.split("-");
  let tenHeThong = tenCumRap[0];
  let tenChiNhanh = tenCumRap[1];


  function renderTime() {
    if (theater.danhSachPhim.length > 0) {
      return theater.danhSachPhim.map((item) => {
       
          
          let _list = item.lstLichChieuTheoPhim.filter((item) => {
            let newDate = new Date(item.ngayChieuGioChieu);
            return newDate.toLocaleDateString() === "1/1/2019";
          });

          if(_list.length>0){
            return _list.map((movie) => {
              let hour = new Date(movie.ngayChieuGioChieu).getHours();
              let minute = new Date(movie.ngayChieuGioChieu).getMinutes();
      
              let endTime = new Date(movie.ngayChieuGioChieu);
              endTime.setMinutes(minute + 100)
              let endHour = endTime.getHours();
              let endMinute = endTime.getMinutes()
             
              return (
                <Link key={movie.maLichChieu} className='btn btn-session' to={`/booking/${movie.maLichChieu}`} target='_blank'>
                  <span className='start-time'>
                  {hour}:{minute + " "}
                  </span>
                   ~ {endHour}:{endMinute}
                </Link>
              );
            });
          }
          else{
            return <p className='noti'>Không có suất chiếu</p>
          }
         
        
        
      });
    }
  }

  return (
    <div className="theaterItem">
      <div button="true" onClick={handleClick} className={classes.ListItem}>
        <div className="theaterItem__info">
          <img className="logo-cinema" src={imgTheater} />

          <p className="address">
            <span className="main">{tenHeThong}</span> - {tenChiNhanh}
            <br />
            <span>{theater.diaChi}</span>
          </p>
        </div>
      </div>
      <Collapse className="list-session" in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {renderTime()}
        </List>
      </Collapse>
    </div>
  );
}
