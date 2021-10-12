import React, { useState, useEffect } from "react";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    cursor: 'pointer',
    transition: '0'
  },
}));

export default function MovieByTheater(props) {
  const classes = useStyles();
  let { movie } = props;
  const [open, setOpen] = React.useState(true);
  const [info, setInfo] = useState({});
  const { list } = useSelector((state) => state.listMovieReducer);
  const [date, setDate] = useState([]);
  useEffect(() => {
    let index = list.findIndex((item) => {
      return item.maPhim === movie.maPhim;
    });
    if (index !== -1) {
      setInfo(list[index]);
    }
   
    let _list = movie.lstLichChieuTheoPhim.filter((item) => {
      let newDate = new Date(item.ngayChieuGioChieu);
      return newDate.toLocaleDateString() === "1/1/2019";
    });
    setDate(_list);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  function renderTime() {
    if (date.length > 0) {
      return date.map((item) => {
        let hour = new Date(item.ngayChieuGioChieu).getHours();
        let minute = new Date(item.ngayChieuGioChieu).getMinutes();

        let endTime = new Date(item.ngayChieuGioChieu);
        endTime.setMinutes(minute + 100)
        let endHour = endTime.getHours();
        let endMinute = endTime.getMinutes()
       
        return (
          <Link key={item.maLichChieu} className='btn btn-session' to={`/booking/${item.maLichChieu}`} target='_blank'>
            <span className='start-time'>
            {hour}:{minute + " "}
            </span>
             ~ {endHour}:{endMinute}
          </Link>
        );
      });
    }
  }
  return (
    <div className="movie">
      <div button='true' onClick={handleClick} className={classes.ListItem}>
        <div className="movieInfo">
          <img src={movie.hinhAnh} alt={movie.tenPhim} />
          <div className="detail">
            <p>{movie.tenPhim}</p>
            <span>Đánh giá: {info.danhGia}</span>
          </div>
        </div>
      </div>
      <Collapse className='list-session' in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {renderTime()}
        </List>
      </Collapse>
    </div>
  );
}
