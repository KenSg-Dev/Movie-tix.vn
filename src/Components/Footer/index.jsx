import React from 'react';
import lotte from "../../Assets/img/lotte-cinema.png"
import cinestar  from "../../Assets/img/cinestar.png"
import cgv from '../../Assets/img/cgv.png'
import bhd from '../../Assets/img/bhd.png'
import galaxy from '../../Assets/img/galaxycine.png'
import mega from '../../Assets/img/megags.png'
import facebook from  "../../Assets/img/facebook-logo.png"
import zalo from "../../Assets/img/zalo-logo.png"
import zion from "../../Assets/img/zion-logo.jpg"
import bt from "../../Assets/img/bt.jpg"
import payoo from "../../Assets/img/payoo.jpg"
import vcb from '../../Assets/img/VCB.png'
import agribank from "../../Assets/img/AGRIBANK.png"
import viettin from '../../Assets/img/VIETTINBANK.png'
import dongda from "../../Assets/img/dongdacinema.png"
import touch from "../../Assets/img/TOUCH.png"
import cinemax from "../../Assets/img/cnx.jpg"
import startLight from "../../Assets/img/STARLIGHT.png"
import dcine from "../../Assets/img/dcine.png"
import zalopay from "../../Assets/img/zalopay_icon.png"
import ivb from "../../Assets/img/IVB.png"
import laban from '../../Assets/img/laban.png';
import go123 from '../../Assets/img/123go.png'
import ios from "../../Assets/img/apple-logo.png"
import android from "../../Assets/img/android-logo.png"

export default function Footer() {
    return (
        <footer className="footer" name="footer">
            <div className="col-xs-12 block" id="footer">
              <div className="mainMaxWidth container">
                <div className="row">
                  <div className="col-lg-4 col-12">
                    <p className="title hideOnMobile">TIX</p>
                    <div className="row ml-0">
                      <div className="col-lg-6 col-12 noPaddingLeft fontSizeP hideOnMobile">
                        <a href="/">FAQ</a>
                        <a href="/">Brand Guidelines</a>
                      </div>
                      <div className="col-lg-6 col-12 noPaddingLeft fontSizeP">
                        <a href="/">Thỏa thuận sử dụng</a>
                        <a href="/">Chính sách bảo mật</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12 hideOnMobile">
                    <p className="title">ĐỐI TÁC</p>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        href="https://www.cgv.vn/"
                        title="CGV"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="iconConnect"
                          src={cgv}
                          style={{ backgroundColor: "#fff" }}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://bhdstar.vn"
                        title="BHD"
                      >
                        <img
                          className="iconConnect"
                          src={bhd}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://galaxycine.vn"
                        title="Galaxy"
                      >
                        <img
                          className="iconConnect"
                          src={galaxy}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://cinestar.com.vn"
                        title="Cinestar"
                      >
                        <img
                          className="iconConnect"
                          src={cinestar}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://lottecinemavn.com"
                        title="Lotte Cinema"
                      >
                        <img
                          className="iconConnect"
                          src={lotte}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.megagscinemas.vn"
                        title="MegaGS"
                      >
                        <img
                          className="iconConnect"
                          src={mega}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.betacineplex.vn/"
                        title="Beta"
                      >
                        <img
                          className="iconConnect"
                          src={bt}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://ddcinema.vn"
                        title="DDC"
                      >
                        <img
                          className="iconConnect"
                          src={dongda}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://touchcinema.com/"
                        title="Touch Cinema"
                      >
                        <img
                          className="iconConnect"
                          src={touch}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://cinemaxvn.com/"
                        title="Cinemax"
                      >
                        <img
                          className="iconConnect"
                          src={cinemax}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://starlight.vn/"
                        title="Starlight"
                      >
                        <img
                          className="iconConnect"
                          src={startLight}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.dcine.vn/"
                        title="Dcine"
                      >
                        <img
                          className="iconConnect"
                          src={dcine}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://zalopay.vn/"
                        title="ZaloPay"
                      >
                        <img
                          className="iconConnect"
                          src={zalopay}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.payoo.vn/"
                        title="Payoo"
                      >
                        <img
                          className="iconConnect"
                          src={payoo}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.vietcombank.com.vn/"
                        title="Vietcombank"
                      >
                        <img
                          className="iconConnect"
                          src={vcb}
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="row col-sm-12 col-xs-12 linePartner">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://www.agribank.com.vn/"
                        title="Agribank"
                      >
                        <img
                          className="iconConnect"
                          src={agribank}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.vietinbank.vn/"
                        title="Vietinbank"
                      >
                        <img
                          className="iconConnect"
                          src={viettin}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.indovinabank.com.vn/"
                        title="IVB"
                      >
                        <img
                          className="iconConnect"
                          src={ivb}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://123go.vn"
                        title="123Go"
                      >
                        <img
                          className="iconConnect"
                          src={go123}
                          alt=""
                        />
                      </a>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://laban.vn"
                        title="La Bàn"
                      >
                        <img
                          className="iconConnect"
                          src={laban}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 col-12">
                    <div className="row">
                      <div className="col-6 hideOnMobile textCenter">
                        <p className="title">MOBILE APP</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197"
                          title="Apple App"
                        >
                          <img
                            className="iconApp"
                            src={ios}
                            alt=""
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
                          title="Android App"
                        >
                          <img
                            className="iconApp"
                            src={android}
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-12 col-lg-6 textCenter">
                        <p className="title hideOnMobile">SOCIAL</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.facebook.com/tix.vn/"
                          title="Facebook social"
                        >
                          <img
                            className="iconApp"
                            src={facebook}
                            alt=""
                          />
                        </a>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://zalo.me/tixdatve"
                          title="Zalo social"
                        >
                          <img
                            className="iconApp"
                            src={zalo}
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="hrFooter" />
                <div className="row">
                  <div className="col-12 col-md-1 col-lg-3 imgFooter">
                    <img
                      className="vngIcon"
                      src={zion}
                      style={{ borderRadius: 8 }}
                      alt=""
                    />
                  </div>
                  <div className="col-12 col-md-9  col-lg-6 infoFooter">
                    <span>TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</span>
                    <span>
                      Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7,
                      Tp. Hồ Chí Minh, Việt Nam.
                    </span>
                    <span>
                      Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                      <br />
                      đăng ký thay đổi lần&nbsp;thứ&nbsp;30,
                      ngày&nbsp;22&nbsp;tháng&nbsp;01&nbsp;năm&nbsp;2020 do
                      Sở&nbsp;kế&nbsp;hoạch&nbsp;và&nbsp;đầu&nbsp;tư Thành phố
                      Hồ Chí Minh cấp.
                    </span>
                    <span>
                      Số Điện Thoại (Hotline): 1900&nbsp;545&nbsp;436
                      <br />
                      Email:{" "}
                      <a
                        href="mailto:support@tix.vn"
                        style={{ color: "#FB4226" }}
                      >
                        support@tix.vn
                      </a>
                    </span>
                  </div>
                  <div className="col-12 col-md-2 col-lg-3 imgFooter">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://online.gov.vn/Home/WebDetails/62782"
                    >
                      <img
                        className="imgBoCo"
                        alt="Bộ Công Thương"
                        title="true"
                        src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
    )
}
