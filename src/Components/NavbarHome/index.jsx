import React, {  useEffect } from "react";
import { NavLink, Link , useHistory} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { actSetUserLogin } from "../../redux/action/userAction";
import { HashLink } from 'react-router-hash-link';
import SettingsIcon from "@material-ui/icons/Settings";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { toast } from "react-toastify";
import avatar from '../../Assets/img/kirby.jpg'
import session from '../../Assets/img/next-session.png'
import option from '../../Assets/img/menu-options.png'
import noneUser from '../../Assets/img/avatar.png'
import logo from '../../Assets/img/web-logo.png'


export default function NavbarHome() {
  const dispatch = useDispatch()
  let history = useHistory()
  const {user} = useSelector(state => state.userReducer)
  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    dispatch(actSetUserLogin(user))
  }, []);

  function handleOnClick() {
    

    localStorage.removeItem("user");
    dispatch(actSetUserLogin({}))
   
      toast.success("Đã đăng xuất", {
        position: "top-right",
        autoClose: 1500,
      });
      history.push(`/`);
    
  }
  function renderLogin() {

    if (user && user.taiKhoan) {
      return (
        <div className="header__right__content">
          <div className="accountMenu dropdown">
            <a
              className="avatarAccount"
              href="#"
              role="button"
              id="dropdownMenuUser"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={avatar} alt="avatar" />
              <span className="name">{user.hoTen}</span>
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuUser">
              <p className="name">{user.hoTen}</p>
              <Link className="dropdown-item" to="/info-user">
                <SettingsIcon style={{ fontSize: 30 }} />
                <span>Thông tin tài khoản</span>
              </Link>
              <Link className="dropdown-item" to="/" onClick={handleOnClick}>
                <ExitToAppIcon style={{ fontSize: 30 }} />
                <span>Đăng xuất</span>
              </Link>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <div className="header__right__content">
            <NavLink to="./sign-in/" className="login">
              <img src={noneUser} alt="tix.vn" />
              <p>Đăng Nhập</p>
            </NavLink>
            <NavLink to="./sign-up/" className="login">
              <img src={noneUser} alt="tix.vn" />
              <p>Đăng Ký</p>
            </NavLink>
          </div>
        </>
      );
    }
  }

  function renderLoginMobile() {
    if (user && user.taiKhoan) {
      return (
        <>
          <div className="accountMenu dropdown">
            <a
              className="avatarAccount"
              href="#"
              role="button"
              id="dropdownMenuUser"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={avatar} alt="avatar" />
              <span className="name">{user.hoTen}</span>
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuUser">
              <p className="name">{user.hoTen}</p>
              <Link className="dropdown-item" to="/info-user">
                <SettingsIcon style={{ fontSize: 30 }} />
                <span>Thông tin tài khoản</span>
              </Link>
              <Link className="dropdown-item" to="/" onClick={handleOnClick}>
                <ExitToAppIcon style={{ fontSize: 30 }} />
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/sign-in/" className="isLogin">
            <img src={noneUser} alt="tix.vn" />
            <p>Đăng Nhập</p>
          </NavLink>
        </>
      );
    }
  }
  const openSideMenu = () => {
    document.getElementById("sideMenu").style.display = "block";
    document.getElementsByClassName("sideNav")[0].className =
      "sideNav fadeInRight";
  };

  const closeSideMenu = () => {
    document.getElementsByClassName("sideNav")[0].className =
      "sideNav fadeOutRight";

    setTimeout(() => {
      document.getElementById("sideMenu").style.display = "none";
    }, 400);
  };

  return (
    <header className="header fixed-top" id="header">
      <div className="header__content row">
        <div className="header__left col-6 col-md-2 col-lg-2 col-xl-4">
          <Link to="/" className="header__logo">
            <img src={logo} alt="tix.vn" />
          </Link>
        </div>
        <div className="header__center col-12 col-md-6 col-lg-6 col-xl-4">
          <ul className="nav">
            <li className="nav-item">
              <HashLink smooth
                className="nav-link active"
                to='/#homeMovies'
                data-scroll="homeMovies"
              >
                Lịch Chiếu
              </HashLink>
            </li>

            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/#cinema">
                Cụm rạp
              </HashLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">
                Tin Tức
              </Link>
            </li>

            <li className="nav-item">
              <HashLink smooth className="nav-link" to="/">
                Ứng dụng
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="header__right col-6 col-md-4 col-infoUser ">
          {renderLogin()}
        </div>
        <div className="header__right__mobile col-6">
          <button className="btn" id="open-sideMenu" onClick={openSideMenu}>
            <img src={option} alt="tix.vn" />
          </button>
        </div>

        <div id="sideMenu">
          <nav className="sideNav">
            <span href="#" className="login ">
              {renderLoginMobile()}
              <button
                className="close-btn"
                id="close-btn"
                onClick={closeSideMenu}
              >
                <img
                  className="close-btn"
                  src={session}
                  alt="tix.vn"
                />
              </button>
            </span>
            <HashLink smooth className="sideNav__item" to="/list-movie" onClick={closeSideMenu}>
              Lịch Chiếu
            </HashLink>
            <HashLink smooth className="sideNav__item" to="/cum-rap" onClick={closeSideMenu}>
              Cụm rạp
            </HashLink>
            <Link className="sideNav__item" to="#" onClick={closeSideMenu}>
              Tin Tức
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}


