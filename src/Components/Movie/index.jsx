import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import star from '../../Assets/img/star1.png'

export default function MovieItem(props) {
  let { item } = props;
  const renderStar = () => {
    let ratingStar = [];
    if (item.danhGia) {
      let i = 0;
      for (i; i < Number(item.danhGia)/2; i++) {
        ratingStar.push(
          <img key={i} src={star} alt="star" className="smallStar" />
        );
      }
    }
    return ratingStar;
  };
  return (
    <div className="movie-item ">
      <div className="movie__content">
        <Link className="movie__main" to={`/detail-movie/${item.maPhim}`}>
          <div className="img-movie" style={{
                backgroundImage: `url(${item.hinhAnh})`
              }}>
       
            <div className="hoverInfo showHover"></div>
            <div className="rating__star">
              <p className="point">{item.danhGia}</p>
              <p className="star">{renderStar()}</p>
            </div>
          </div>

          <div className="info">
            <div className="nameMovie hide">
              <h6>{item.tenPhim}</h6>
            </div>

            <div className="showHover">
              <Button className="buyTicket ">Mua vé</Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
