import React from "react";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import * as yup from "yup";
import { Formik, Form } from "formik";
import {actSignUpApi} from '../../../redux/action/userAction'
import {connect} from 'react-redux'
import logo from '../../../Assets/img/11.png'


function SignUp(props) {

  const signupUserSchemaRegister = yup.object().shape({
    taiKhoan: yup.string().required("Tài khoản không được để trống!"),
    matKhau: yup
      .string()
      .required("Mật khẩu không được để trống!")
      .matches(/^[a-zA-Z0-9]{6,10}$/, "Mật Khẩu phải từ 6 đến 10 ký tự"),
    hoTen: yup.string().required("Họ tên không được để trống!"),
    email: yup
      .string()
      .required("Email không được để trống!")
      .email("Email không hợp lệ!"),
    soDt: yup
      .string()
      .required("Số điện thoại không được để trống!")
      .matches(
        /((09|03|07|08|05)+([0-9]{8})\b)/g,
        "Số điện thoại không hợp lệ "
      ),
  });

  return (
    <section className="signUp">
      <div className="signUp__content">
        <button className="btn close">
          <Link to="/">X</Link>
        </button>
        <Link to="/">
          <img src={logo} alt="tix" />
        </Link>

        <p>
          Đăng ký để được nhiều ưu đãi, mua vé
          <br />
          và bảo mật thông tin!
        </p>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDt: "",
            maNhom: "GP02",
            maLoaiNguoiDung: "KhachHang",
          }}
          validationSchema={signupUserSchemaRegister}
          onSubmit={(value) => {
            props.signUp(value, props.history)
          }}
        >
          {({ errors, handleChange, touched , handleBlur}) => (
            <Form >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.taiKhoan && touched.taiKhoan}
                    helperText={
                      errors.taiKhoan && touched.taiKhoan
                        ? errors.taiKhoan
                        : null
                    }
                    autoComplete="fname"
                    name="taiKhoan"
                    variant="outlined"
                    fullWidth
                    id="taiKhoanR"
                    label="Tài khoản"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                  onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.hoTen && touched.hoTen}
                    helperText={
                      errors.hoTen && touched.hoTen ? errors.hoTen : null
                    }
                    variant="outlined"
                    fullWidth
                    id="hoTen"
                    label="Tên"
                    name="hoTen"
                    autoComplete="lname"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                  onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.email && touched.email}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                  onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.soDt && touched.soDt}
                    helperText={
                      errors.soDt && touched.soDt ? errors.soDt : null
                    }
                    variant="outlined"
                    fullWidth
                    type="tel"
                    id="soDt"
                    label="Số điện thoại"
                    name="soDt"
                    autoComplete="lname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                  onBlur={handleBlur}
                    onChange={handleChange}
                    error={errors.matKhau && touched.matKhau}
                    helperText={
                      errors.matKhau && touched.matKhau ? errors.matKhau : null
                    }
                    variant="outlined"
                    fullWidth
                    name="matKhau"
                    label="Mật Khẩu"
                    type="password"
                    id="matKhauR"
                    autoComplete="current-password"
                  />
                </Grid>
              </Grid>
              <div className="btn-submit">
                <Link to="/sign-in">Đã có tài khoản?</Link>
                <Button type='submit' variant="contained" color="primary" >
                  Đăng ký
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    signUp: (user, history) => {
      dispatch(actSignUpApi(user, history))
    }
  }
}
export default connect(null, mapDispatchToProps)(SignUp)
