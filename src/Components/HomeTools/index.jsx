import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actGetListCinemaByMovieIdApi } from "../../redux/action/cinema";

export default function HomeTools() {
  const { list } = useSelector((state) => state.listMovieReducer);
  const { listCinemaByMovie } = useSelector((state) => state.cinemaReducer);
  const dispatch = useDispatch();

  const [state, setstate] = useState({
    maPhim: "",
    tenPhim: "",
    chonPhim: false,
    maRap: "",
    tenRap: "",
    chonRap: false,
    ngayXem: "",
    chonNgay: false,
    maLichChieu: "",
    SuatChieu: {
      maLichChieu: "",
      gioChieu: "",
    },
    gioChieu: "",
    chonSuatChieu: false,
  });

  const handleOnClick = (event) => {
    let { name, value, innerHTML } = event.target;

    switch (name) {
      case "phim":
        if (!state.chonPhim) {
          dispatch(actGetListCinemaByMovieIdApi(value));
          setstate({
            ...state,
            maPhim: value,
            chonPhim: true,
            tenPhim: innerHTML,
          });
        }

        if (state.chonPhim) {
          dispatch(actGetListCinemaByMovieIdApi(value));
          setstate({
            ...state,
            maPhim: value,
            chonPhim: true,
            tenPhim: innerHTML,
            maRap: "",
            tenRap: "",
            chonRap: false,
            ngayXem: "",
            chonNgay: false,
            SuatChieu: {
              maLichChieu: "",
              gioChieu: "",
            },
            chonSuatChieu: false,
          });
        }
        break;

      case "rap":
        if (state.chonPhim && !state.chonRap) {
          setstate({
            ...state,
            tenRap: innerHTML,
            maRap: value,
            chonRap: true,
          });
        }

        if (state.chonPhim && state.chonRap) {
          setstate({
            ...state,
            tenRap: innerHTML,
            maRap: value,
            chonRap: true,
            ngayXem: "",
            chonNgay: false,
            SuatChieu: {
              maLichChieu: "",
              gioChieu: "",
            },
            chonSuatChieu: false,
          });
        }
        break;

      case "ngayChieu":
        if (state.chonRap && !state.chonNgay) {
          setstate({
            ...state,
            ngayXem: value,
            chonNgay: true,
          });
        }

        if (state.chonRap && state.chonNgay) {
          setstate({
            ...state,
            ngayXem: value,
            chonNgay: true,
            SuatChieu: {
              maLichChieu: "",
              gioChieu: "",
            },
            chonSuatChieu: false,
          });
        }
        break;

      case "gioChieu":
        if (state.chonNgay) {
          setstate({
            ...state,
            maLichChieu: value,
            gioChieu: innerHTML,
            chonSuatChieu: true,
          });
        }
        break;

      case "datVe":
        window.open(`/booking/${state.maLichChieu}`, "_blank");
        break;

      default:
        break;
    }
  };

  function renderMovie() {
    return list.map((movie, index) => {
      return (
        <button
          key={index}
          value={movie.maPhim}
          className="dropdown-item"
          name="phim"
          onClick={handleOnClick}
        >
          {movie.tenPhim}
        </button>
      );
    });
  }

  function renderCinema() {
    if (state.chonPhim && listCinemaByMovie.heThongRapChieu) {
      return listCinemaByMovie.heThongRapChieu.map((heThongRapChieu) => {
        return heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          return (
            <button
              key={index}
              value={cumRapChieu.maCumRap}
              className="dropdown-item"
              onClick={handleOnClick}
              name="rap"
            >
              {cumRapChieu.tenCumRap}
            </button>
          );
        });
      });
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim
        </button>
      );
    }
  }

  function renderDate() {
    let mangNgayChieu = [];
    if (state.chonRap && state.chonPhim && listCinemaByMovie.heThongRapChieu) {
      listCinemaByMovie.heThongRapChieu.map((heThongRapChieu) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu) => {
          cumRapChieu.lichChieuPhim.map((lichChieuPhim) => {
            let day = new Date(
              lichChieuPhim.ngayChieuGioChieu
            ).toLocaleDateString();
            const found = mangNgayChieu.find((ngay) => ngay === day);
            if (found) {
            } else {
              mangNgayChieu.push(day);
              return
            }
          });
        });
      });
      return mangNgayChieu.map((ngay, index) => {
        return (
          <button
            key={index}
            value={ngay}
            className="dropdown-item"
            onClick={handleOnClick}
            name="ngayChieu"
          >
            {ngay}
          </button>
        );
      });
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim và rạp
        </button>
      );
    }
  }

  function renderTime() {
    let mangGioChieu = [];
    if (state.chonPhim && state.chonRap && state.chonNgay) {
      listCinemaByMovie.heThongRapChieu.map((heThongRapChieu, index) => {
        heThongRapChieu.cumRapChieu.map((cumRapChieu, index) => {
          if (cumRapChieu.maCumRap === state.maRap) {
            cumRapChieu.lichChieuPhim.map((lichChieuPhim, index) => {
              let day = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleDateString();
              let time = new Date(
                lichChieuPhim.ngayChieuGioChieu
              ).toLocaleTimeString();

              if (state.ngayXem === day) {
                mangGioChieu.push({
                  maLichChieu: lichChieuPhim.maLichChieu,
                  gioChieu: time,
                });
              } else {
              }
            });
          }
        });
      });

      if (mangGioChieu.length > 0) {
        return mangGioChieu.map((item, index) => {
          return (
            <button
              key={index}
              value={item.maLichChieu}
              className="dropdown-item"
              onClick={handleOnClick}
              name="gioChieu"
            >
              {item.gioChieu}
            </button>
          );
        });
      } else {
        return (
          <button value="" className="dropdown-item" name="gioChieu" disabled>
            Không có suất chiếu
          </button>
        );
      }
    } else {
      return (
        <button value="" className="dropdown-item" disabled>
          Vui lòng chọn phim, rạp và ngày xem
        </button>
      );
    }
  }

  return (
    <div className="homeTools">
      <section className="order row d-flex container justify-content-center align-items-center">
        <div className="w30p dropdown widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-display="static"
          >
            {state.tenPhim === "" ? `Phim` : state.tenPhim}
          </button>
          <div className="dropdown-menu listMovie" aria-labelledby>
            {renderMovie()}
          </div>
        </div>
        <div className="dropdown smallBlock widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-display="static"
          >
            {state.tenRap === "" ? `Rạp` : state.tenRap}
          </button>
          <div className="dropdown-menu" aria-labelledby>
            {renderCinema()}
          </div>
        </div>
        <div className="dropdown smallBlock widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-display="static"
          >
            {state.ngayXem === "" ? `Ngày xem` : state.ngayXem}
          </button>
          <div className="dropdown-menu" aria-labelledby>
            {renderDate()}
          </div>
        </div>
        <div className="dropdown smallBlock widthByPercent ">
          <button
            className="rounded-0 selectMenu btn"
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            data-display="static"
          >
            {state.gioChieu === "" ? `Suất chiếu` : state.gioChieu}
          </button>
          <div className="dropdown-menu" aria-labelledby>
            {renderTime()}
          </div>
        </div>
        <div className="smallBlock widthByPercent">
          {state.chonPhim &&
          state.chonRap &&
          state.chonNgay &&
          state.chonSuatChieu ? (
            <button
              className="btn btn-success"
              id="btnBuy"
              type="button"
              name="datVe"
              onClick={handleOnClick}
            >
              Mua vé ngay
            </button>
          ) : (
            <button
              className="btn btn-success"
              id="btnBuy"
              type="button"
              disabled
            >
              Mua vé ngay
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
