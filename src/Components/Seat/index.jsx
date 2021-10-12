import React, { useState } from "react";
import WeekendIcon from "@material-ui/icons/Weekend";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";
import {
  actChooseSeat,
  actUnClickSeat,
} from "../../Container/HomeTemplate/BookingPage/modules/actions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";


export default function Seat(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { seat, name, index } = props;
  const [state, setstate] = useState(false);
  const dispatch = useDispatch();
  const { ticketRoom } = useSelector((state) => state.bookingReducer);

  function renderSeat() {
    let className = state ? "click" : "";
    if (seat.loaiGhe === "Vip" && !seat.daDat) {
      return (
        <WeekendIcon style={{ fontSize: 30 }} className={`vip ${className}`} />
      );
    } else if (seat.loaiGhe === "Thuong" && !seat.daDat) {
      return (
        <WeekendIcon
          style={{ fontSize: 30 }}
          className={`normal ${className}`}
        />
      );
    } else {
      return <WeekendIcon style={{ fontSize: 30 }} color="disabled" />;
    }
  }

  function renderDialog() {
    return (
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          disableBackdropClick
          disableEscapeKeyDown
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ghế đã có người đặt.
              <Button
                onClick={() => {
                  handleClose();
                  window.location.reload();
                }}
                color="secondary"
                autoFocus
              >
                Đặt vé lại
              </Button>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
  return (
    <button
      className="btn"
      disabled={seat.daDat}
      onClick={() => {
        if (!state) {
          dispatch(
            actChooseSeat({
              tenGhe: name + seat.tenGhe,
              maGhe: seat.maGhe,
              giaVe: seat.giaVe,
            })
          );

          Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${ticketRoom.thongTinPhim.maLichChieu}`,
            method: "GET",
          })
            .then((result) => {
              let re = result.data.danhSachGhe;
              let isBooking = re[index].taiKhoanNguoiDat;
              if (isBooking) {
                handleClickOpen();
              }
              return result;
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          dispatch(actUnClickSeat(seat.maGhe));
        }
        setstate(!state);
      }}
    >
      {renderSeat()}
      {renderDialog()}
    </button>
  );
}
