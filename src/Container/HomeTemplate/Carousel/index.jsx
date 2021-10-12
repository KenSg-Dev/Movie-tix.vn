import React from "react";
import carousel5 from '../../../Assets/img/carousel05.png'
import carousel1 from '../../../Assets/img/carousel01.jpg'
import carousel2 from '../../../Assets/img/carousel02.jpg'
import carousel3 from '../../../Assets/img/carousel03.jpg'
import carousel4 from '../../../Assets/img/carousel04.jpg'
import play from '../../../Assets/img/play-video.png'
import close from '../../../Assets/img/close.png'


export default function Carousel() {
  return (
    <section
      id="carousel"
      className="carousel slide"
      data-ride="carousel"
      data-interval={5000}
    >
      <ol className="carousel-indicators">
        <li data-target="#carousel" className="active" data-slide-to={0} />
        <li data-target="#carousel" data-slide-to={1} />
        <li data-target="#carousel" data-slide-to={2} />
        <li data-target="#carousel" data-slide-to={3} />
        <li data-target="#carousel" data-slide-to={4} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={carousel5}
            className="d-block w-100"
            alt="tix3"
          />
          <button
            className="btn trailer"
            data-toggle="modal"
            data-target="#videoModal05"
          >
            <img src={play} className='play' alt = 'tix' />
          </button>
        </div>
        <div className="carousel-item">
          <img src={carousel2} className="d-block w-100" alt="tix" />
          <button
            className="btn trailer"
            data-toggle="modal"
            data-target="#videoModal02"
          >
            <img src={play} className='play' alt ='tix' />
          </button>
        </div>
        <div className="carousel-item">
          <img
            src={carousel3}
            className="d-block w-100"
            alt="tix2"
          />
          <button
            className="btn trailer"
            data-toggle="modal"
            data-target="#videoModal03"
          >
            <img src={play} className='play' alt ='tix'/>
          </button>
        </div>
        <div className="carousel-item">
          <img
            src={carousel4}
            className="d-block w-100"
            alt="tix3"
          />
          <button
            className="btn trailer"
            data-toggle="modal"
            data-target="#videoModal04"
          >
            <img src={play} className='play' alt ='tix'/>
          </button>
        </div>
        <div className="carousel-item ">
          <img
            src={carousel1}
            className="d-block w-100"
            alt="tix4"
          />
          <button
            className="btn trailer"
            data-toggle="modal"
            data-target="#videoModal01"
          >
            <img src={play} className='play' alt ='tix'/>
          </button>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>

      <div>
        <div
          className="modal fade"
          id="videoModal05"
          tabIndex={-1}
          aria-labelledby="modalVideo"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body" id="modalVideo">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={close} />
                </button>
                <iframe
                  width="100%"
                  height="85%"
                  src="https://www.youtube.com/embed/FMb0QPgAzBs"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="videoModal02"
          tabIndex={-1}
          aria-labelledby="modalVideo"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body" id="modalVideo">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={close} />
                </button>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/T36HGZagV5w"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="videoModal03"
          tabIndex={-1}
          aria-labelledby="modalVideo"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body" id="modalVideo">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={close} />
                </button>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/iCw-LfLw_Zk"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="videoModal04"
          tabIndex={-1}
          aria-labelledby="modalVideo"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body" id="modalVideo">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={close} />
                </button>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/kJcfrHDTSEQ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="videoModal01"
          tabIndex={-1}
          aria-labelledby="modalVideo"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-body" id="modalVideo">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <img src={close} />
                </button>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/-8k8McNDf5M"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
