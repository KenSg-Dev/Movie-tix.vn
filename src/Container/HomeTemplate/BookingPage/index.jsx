import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { actGetListOfSeatApi, actBookingTicketApi } from "./modules/actions";
import { actLoginBeforeBooking } from "../../../redux/action/userAction";
import { useHistory } from "react-router";
import avatar from "../../../Assets/img/kirby.jpg";
import error from "../../../Assets/img/exclamation.png";
import screen from "../../../Assets/img/screen.png";
import Seat from "../../../Components/Seat";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Loader from "../../../Components/Loader";
import WeekendIcon from "@material-ui/icons/Weekend";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BookingPage() {
  let location = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const [open, setOpen] = React.useState(false);
  const [openTimeOut, setOpenTimeOut] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
    history.push("/");
  };

  const { ticketRoom, loadingSeat, listSeat, isBooking } = useSelector(
    (state) => state.bookingReducer
  );

  const [state, setState] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(actGetListOfSeatApi(location.id));
      let _user = JSON.parse(localStorage.getItem("user"));
      setUser(_user);
    } else {
      dispatch(actLoginBeforeBooking(location.id));
      history.push("/sign-in");
    }
  }, []);

  useEffect(() => {
    if (ticketRoom.danhSachGhe && ticketRoom.danhSachGhe.length > 0) {
      setState(ticketRoom.danhSachGhe);
    }
  }, [ticketRoom]);

  useEffect(() => {
    if (isBooking) {
      setOpen(true);
    }
  }, [isBooking]);

  function totalCash() {
    let total = 0;
    if (listSeat.length > 0) {
      listSeat.map((item) => {
        total += item.giaVe;
      });
    }
    let _total = new Intl.NumberFormat("de-DE").format(total);
    return _total;
  }

  function renderNameSeat() {
    if (listSeat.length > 0) {
      return listSeat.map((item, index) => {
        if (index === 0) {
          return item.tenGhe;
        } else {
          return ", " + item.tenGhe;
        }
      });
    }
  }

  const initialMinute = 5;
  const initialSeconds = 0 ;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  function renderRightBooking() {
    if (ticketRoom.thongTinPhim) {
      return (
        <div className="rightBooking">
          <div className="content">
            <div className="total">
              <p className="cost">{totalCash()} đ</p>
            </div>
            <div className="infoMovie">
              <p className="name">{ticketRoom.thongTinPhim.tenPhim}</p>
              <p>{ticketRoom.thongTinPhim.tenCumRap}</p>
              <p>
                {ticketRoom.thongTinPhim.ngayChieu} -{" "}
                {ticketRoom.thongTinPhim.gioChieu} -{" "}
                {ticketRoom.thongTinPhim.tenRap}
              </p>
            </div>

            <div className="seat ">
              <span className="info ">Ghế {renderNameSeat()}</span>

              <span className="totalSeat ">{totalCash()} đ</span>
            </div>
            <div className="infoUser ">
              <label htmlFor="">Email</label>
              <br />
              <span>{user.email}</span>
            </div>

            <div className="infoUser">
              <label htmlFor="">Số điện thoại</label>
              <br />
              <span>{user.soDT}</span>
            </div>
            <div className="cash">
              <span>Hình thức thanh toán</span>

              <li>Tiền mặt</li>
            </div>
          </div>
          <div className="notice">
            <img src={error} alt="" />
            <span> Vé đã mua không thể đổi hoặc hoàn tiền</span>
            <br />
            <span>
              Mã vé sẽ được gửi qua tin nhắn ZMS (tin nhắn Zalo) và Email đã
              nhập.
            </span>
          </div>
          {listSeat.length === 0 ? (
            <button className="btn buyTicket" disabled>
              Đặt vé
            </button>
          ) : (
            <button
              className="btn buyTicket"
              onClick={() => {
                setTimeout(() => {
                  dispatch(
                    actBookingTicketApi(
                      {
                        maLichChieu: location.id,
                        danhSachVe: listSeat,
                        taiKhoanNguoiDung: user.taiKhoan,
                      },
                      user.accessToken
                    )
                  );
                }, 500);
              }}
            >
              Đặt vé
            </button>
          )}
        </div>
      );
    }
  }

  function renderBackGround() {
    if (ticketRoom.thongTinPhim) {
      return (
        <div
          className="left bg"
          style={{ backgroundImage: `url(${ticketRoom.thongTinPhim.hinhAnh})` }}
        ></div>
      );
    }
  }

  function renderSeat(item, name) {
    return item.map((seat, index) => {
      return <Seat key={index} seat={seat} name={name} index={index} />;
    });
  }

  function renderListSeat() {
    let list = [];
    for (let i = 0; i < state.length; i += 16) {
      let seat = state.slice(i, i + 16);
      list.push(seat);
    }

    return list.map((item, index) => {
      let nameListSeat = String.fromCharCode(65 + Number(index));
      return (
        <div className="row listSeat" key={index}>
          <span className="name">{nameListSeat}</span>
          <div>{renderSeat(item, nameListSeat)}</div>
        </div>
      );
    });
  }

  function renderSeatCheckout() {
    if (ticketRoom.thongTinPhim) {
      let tenCumRap = ticketRoom.thongTinPhim.tenCumRap.split("-");
      let tenHeThong = tenCumRap[0];
      let tenChiNhanh = tenCumRap[1];

      return (
        <div className="seatCheckout">
          <div className="topContent row">
            <div className="leftTitle">
              <h4>
                <span>{tenHeThong}</span>-{tenChiNhanh}
              </h4>

              <p>
                {ticketRoom.thongTinPhim.ngayChieu} -{" "}
                {ticketRoom.thongTinPhim.gioChieu} -{" "}
                {ticketRoom.thongTinPhim.tenRap}
              </p>
            </div>

            <div className="rightTitle">
              <p>Thời gian giữ ghế</p>
              <h4>
                <span >{minutes}</span>:<span>{seconds < 10 ?  `0${seconds}` : seconds}</span>
              </h4>
            </div>
          </div>

          <div className="mainContent">
            <img className="img-fluid w-100" src={screen} alt="" />
            {renderListSeat()}

            <div className="seatDetail">
              <div className="seatType normal">
                <WeekendIcon />
                <p>Ghế thường</p>
              </div>

              <div className="seatType vip">
                <WeekendIcon />
                <p>Ghế vip</p>
              </div>

              <div className="seatType click">
                <WeekendIcon />
                <p>Ghế đang chọn</p>
              </div>

              <div className="seatType">
                <WeekendIcon />
                <p>Ghế đã có người chọn</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  function renderDialog() {
    if (ticketRoom.thongTinPhim) {
      return (
        <div>
          <Dialog
            disableBackdropClick
            disableEscapeKeyDown
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle id="alert-dialog-slide-title">
              {"Đặt vé thành công"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Bạn đã đặt vé thành công.
                <br />
                Tên phim: {ticketRoom.thongTinPhim.tenPhim}
                <br />
                Tên cụm rạp: {ticketRoom.thongTinPhim.tenCumRap}
                <br />
                Thời gian: {ticketRoom.thongTinPhim.ngayChieu} -{" "}
                {ticketRoom.thongTinPhim.gioChieu} -{" "}
                {ticketRoom.thongTinPhim.tenRap}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  function renderDialogTimeOut() {
    return (
      <Dialog
        className="time-out"
        disableBackdropClick
        disableEscapeKeyDown
        open={openTimeOut}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => {
          setOpenTimeOut(false);
        }}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Đã hết thời gian giữ ghế. Vui lòng thực hiện đơn hàng trong thời hạn
            5 phút.{" "}
            <span
              className="text-danger"
              onClick={() => {
                window.location.reload();
              }}
            >
              Đặt vé lại
            </span>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <>
      {loadingSeat ? (
        <>
          <Loader />
        </>
      ) : (
        <div className="booking row">
          <div className="leftBooking">
            <div className="leftBooking__top">
              <h3>Chọn ghế và thanh toán</h3>

              <div className="account">
                <img src={avatar} alt="avatar" />
                <span className="name">{user.hoTen}</span>
              </div>
            </div>

            <div className="leftBooking__main">
              {renderBackGround()}
              {renderSeatCheckout()}
            </div>
          </div>

          {renderRightBooking()}

          {renderDialog()}
          {renderDialogTimeOut()}
        </div>
      )}
    </>
  );
}
