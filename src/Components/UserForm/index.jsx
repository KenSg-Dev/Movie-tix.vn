import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextField from "@material-ui/core/TextField";


export default function UserForm(props) {
  const [state, setstate] = useState({});
  const { user } = props;

  useEffect(() => {
    setstate(user);
  }, [user]);

  return (
    <div className="userForm">
      <Formik
        initialValues={state}
        validationSchema={yup.object().shape({
          taiKhoan: yup.string().required("Tài khoản không được để trống!"),
          email: yup.string()
            .email("Không đúng định dạng email")
            .required("Email không được để trống"),
          hoTen: yup.string().required("Họ tên không được để trống!"),
          soDt: yup.string().required("Số điện thoại không được để trống!"),
        })}
        onSubmit={(value) => {
          props.loginUser(value, props.history, props.bookingId);
        }}
      >
        {({ values, errors, touched, handleBlur, handleChange }) => (
          <Form noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Tên đăng nhập"
              variant="outlined"
              className="userForm__input"
              name="taiKhoan"
              value={values.taiKhoan || ""}
              autoFocus
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.taiKhoan && touched.taiKhoan}
              helperText={
                errors.taiKhoan && touched.taiKhoan ? errors.taiKhoan : null
              }
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
              helperText={errors.hoTen && touched.hoTen ? errors.hoTen : null}
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
              helperText={errors.email && touched.email ? errors.email : null}
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
              helperText={errors.soDt && touched.soDt ? errors.soDt : null}
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
              label="Loại người dùng"
              variant="outlined"
              name="maLoaiNguoiDung"
              value={values.maLoaiNguoiDung}
              className="userForm__input"
              onChange={handleChange}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}
