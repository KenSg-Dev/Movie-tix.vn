import React, { useState, useEffect } from "react";
import cover from "../../../Assets/img/cover.jpg";
import avt from "../../../Assets/img/lisa.jpg";
import { useSelector, useDispatch } from "react-redux";
import {
  actGetInfoUser,
  actEditUserApi,
} from "../../../redux/action/userAction";

import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";


import { Formik, Form } from "formik";
import * as yup from "yup";

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    textAlign: "center",
    width: "100%",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,

  },
  tabs: {
    justifyContent: "center",
  },
  tabPabel: {
    margin: "15px auto",
  },
  text: {
    fontFamily: "SF Medium",
    fontSize: "16px",
    textTransform: "none",
  },
  table: {
    minWidth: "600px",
  },
}));

export default function UserPage() {
  const classes = useStyles();
  const { infoUser, isRequest, isSuccess, thongTinDatVe } = useSelector(
    (state) => state.userReducer
  );
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(0);
  const [openModalInfo, setOpenModalInfo] = React.useState(false);
  const [userEdit, setUserEdit] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickOpenModalInfo = () => {
    setOpenModalInfo(true);
  };

  const handleCloseModalInfo = () => {
    setOpenModalInfo(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    let getUser = localStorage.getItem("user");
    let _user = JSON.parse(getUser);
    dispatch(actGetInfoUser({ taiKhoan: _user.taiKhoan }));

  }, []);

  useEffect(() => {
    
    setUserEdit({
      taiKhoan: infoUser.taiKhoan,
      matKhau: infoUser.matKhau,
      email: infoUser.email,
      soDt: infoUser.soDT,
      maNhom: infoUser.maNhom,
      hoTen: infoUser.hoTen,
      maLoaiNguoiDung: "KhachHang",
    });
  }, [infoUser]);

  useEffect(() => {
    if (isSuccess) {
      setOpenModalInfo(false);
    }
  }, [isSuccess]);

  function renderInfoUser() {
    if (infoUser && thongTinDatVe) {
      return (
        <Grid container spacing={3} className="textInfo">
          <Grid item xs={12} sm={3}>
            Họ tên:{" "}
          </Grid>
          <Grid item xs={12} sm={9}>
            {infoUser.hoTen}
          </Grid>

          <Grid item xs={12} sm={3}>
            Email:
          </Grid>
          <Grid item xs={12} sm={9}>
            {infoUser.email}
          </Grid>

          <Grid item xs={12} sm={3}>
            Số điện thoại:
          </Grid>
          <Grid item xs={12} sm={9}>
            {infoUser.soDT}
          </Grid>

          <Grid item xs={12} sm={3}>
            Tài khoản:
          </Grid>
          <Grid item xs={12} sm={9}>
            {infoUser.taiKhoan}
          </Grid>

          <Grid item xs={12} sm={3}>
            Lượt đặt vé:
          </Grid>
          <Grid item xs={12} sm={9}>
            {thongTinDatVe.length}
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleClickOpenModalInfo}
            >
              Sửa
            </Button>
          </Grid>
        </Grid>
      );
    }
  }

  function renderDialogEditUser() {
    return (
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={openModalInfo}
        onClose={handleCloseModalInfo}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Chỉnh sửa thông tin cá nhân
        </DialogTitle>
        <DialogContent>
          <div className="userForm">
            <Formik
              initialValues={userEdit}
              validationSchema={yup.object().shape({
                taiKhoan: yup
                  .string()
                  .required("Tài khoản không được để trống!"),
                email: yup
                  .string()
                  .email("Không đúng định dạng email")
                  .required("Email không được để trống"),
                hoTen: yup.string().required("Họ tên không được để trống!"),
                soDt: yup
                  .string()
                  .required("Số điện thoại không được để trống!"),
              })}
              onSubmit={(value) => {
                console.log(value);
                dispatch(actEditUserApi(value));
              }}
            >
              {({ values, errors, touched, handleBlur, handleChange }) => (
                <Form autoComplete="off">
                  <TextField
                    id="outlined-basic"
                    label="Tên đăng nhập"
                    variant="outlined"
                    className="userForm__input"
                    name="taiKhoan"
                    value={values.taiKhoan}
                    disabled
                  />
                  <TextField
                    id="outlined-basic"
                    label="Họ tên"
                    variant="outlined"
                    name="hoTen"
                    value={values.hoTen}
                    className="userForm__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.hoTen && touched.hoTen}
                    helperText={
                      errors.hoTen && touched.hoTen ? errors.hoTen : null
                    }
                  />

                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={values.email}
                    className="userForm__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />

                  <TextField
                    id="outlined-basic"
                    label="Số điện thoại"
                    variant="outlined"
                    name="soDt"
                    value={values.soDt}
                    className="userForm__input"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.soDt && touched.soDt}
                    helperText={
                      errors.soDt && touched.soDt ? errors.soDt : null
                    }
                  />

                  <TextField
                    disabled
                    id="outlined-basic"
                    label="Mã nhóm"
                    variant="outlined"
                    name="maNhom"
                    value={values.maNhom}
                    className="userForm__input"
                    onChange={handleChange}
                  />

                  <TextField
                    disabled
                    id="outlined-basic"
                    label="Mã loại người dùng"
                    variant="outlined"
                    name="maLoaiNguoiDung"
                    value={values.maLoaiNguoiDung}
                    className="userForm__input"
                    onChange={handleChange}
                  />

                  <DialogActions>
                    <Button onClick={handleCloseModalInfo} color="secondary">
                      Hủy bỏ
                    </Button>
                    <Button type="submit" color="primary">
                      Sửa
                    </Button>
                  </DialogActions>
                </Form>
              )}
            </Formik>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  function renderTable() {
    if (thongTinDatVe) {
      return (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Tên phim</TableCell>
                <TableCell>Hệ thống rạp</TableCell>
                <TableCell>Cụm rạp</TableCell>
                <TableCell>Số ghế</TableCell>
                <TableCell>Giá vé</TableCell>
                <TableCell>Ngày đặt</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? thongTinDatVe.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : thongTinDatVe
              ).map((item, index) => {
                let date = new Date(item.ngayDat);
                let day = date.toLocaleDateString();
                let time = date.toLocaleTimeString();
                return (
                  <TableRow key={item.maVe}>
                    <TableCell style={{ width: "50px" }}>{index + 1}</TableCell>
                    <TableCell>{item.tenPhim}</TableCell>
                    <TableCell>{item.danhSachGhe[0].tenHeThongRap}</TableCell>
                    <TableCell>{item.danhSachGhe[0].tenCumRap}</TableCell>
                    <TableCell>{item.danhSachGhe.length}</TableCell>
                    <TableCell>{item.giaVe}</TableCell>
                    <TableCell>
                      {day} - {time}
                    </TableCell>
                  </TableRow>
                );
              })}

             
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={3}
                  count={thongTinDatVe.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { "aria-label": "rows per page" },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      );
    }
  }

  return (
    <div className="user">
      <div
        className="cover"
        style={{
          backgroundImage: `url(${cover})`,
        }}
      >
        <img className="avatar" src={avt} alt="p" />
      </div>

      <h5 className="name">{infoUser.hoTen}</h5>

      <div className="mainInfo">
        <div className={classes.root}>
          <Tabs
            className={classes.tabs}
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab
              className={classes.text}
              label="Thông tin cá nhân"
              {...a11yProps(0)}
            />
            <Tab
              className={classes.text}
              label="Lịch sử đặt vé"
              {...a11yProps(1)}
            />
            
          </Tabs>
          <TabPanel className={classes.tabPabel} value={value} index={0}>
            {renderInfoUser()}
          </TabPanel>
          <TabPanel className={classes.tabPabel} value={value} index={1}>
            {renderTable()}
          </TabPanel>
          
        </div>
      </div>

      {renderDialogEditUser()}
    </div>
  );
}
