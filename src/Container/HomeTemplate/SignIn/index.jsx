import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { actLoginUserApi } from "../../../redux/action/userAction";
import { Formik, Form } from "formik";
import * as yup from "yup";
import logo from '../../../Assets/img/11.png'

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "90%",
    },
  },
}));

function SignIn(props) {
  const classes = useStyles();

  const signinUserSchemaLogin = yup.object().shape({
    taiKhoan: yup.string().required("Tài khoản không được để trống!"),
    matKhau: yup
      .string()
      .required("Mật khẩu không được để trống!")
      .matches(/^[a-zA-Z0-9]{6,10}$/, "Mật Khẩu phải từ 6 đến 10 ký tự"),
  });

  return (
    <section className="signIn">
      <div className="signIn__content">
        <button className="btn close">
          <Link to="/">X</Link>
        </button>
        <Link to="/">
          <img src={logo} alt="tix" />
        </Link>

        <p>
          Đăng nhập để được nhiều ưu đãi, mua vé
          <br />
          và bảo mật thông tin!
        </p>

        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
          }}
          validationSchema={signinUserSchemaLogin}
          onSubmit={(value) => {
            props.loginUser(value, props.history, props.bookingId);
          }}
        >
          {({ errors, touched, handleBlur, handleChange }) => (
            <Form className={classes.root} noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Tên đăng nhập"
                variant="outlined"
                className="signIn__input"
                name="taiKhoan"
                autoFocus
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.taiKhoan && touched.taiKhoan}
                helperText={
                  errors.taiKhoan && touched.taiKhoan ? errors.taiKhoan : null
                }
              />
              <TextField
                id="matKhau"
                label="Mật khẩu"
                variant="outlined"
                name="matKhau"
                type="password"
                autoComplete="current-password"
                className="signIn__input"
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.matKhau && touched.matKhau}
                helperText={
                  errors.matKhau && touched.matKhau ? errors.matKhau : null
                }
              />

              <div className="btn-submit">
                <Link to="/sign-up">Đăng ký</Link>
                <Button
                  variant="contained"
                  color="primary"
                  id="btnSubmit"
                  type="submit"
                >
                  Đăng Nhập
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
const mapStateToProps = state => {
    return {
      bookingId: state.userReducer.maLichChieu
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (user, history, id) => {
      dispatch(actLoginUserApi(user, history, id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
