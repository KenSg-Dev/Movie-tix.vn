import React from "react";
import MovieItem from "../../../Components/Movie";
import { useState, useEffect } from "react";
import {connect} from 'react-redux';
import { css } from "@emotion/core";
import {actGetListMovieApi} from './module/action'
import Loader from "../../../Components/Loader";



function ListMoviePage(props) {
  const [state, setstate] = useState();
  const [key, setkey] = useState('')
  
  useEffect(() => {
  
    props.getListMovie();
    
  }, [])

  useEffect(() => {
    setstate(props.listMovie)
  }, [props.listMovie])
  

  const renderListMovie = () => {
      if(props.loading){
        return (
            <Loader/>

        )
      }
     
      if(state){
        let list = state.filter((item) => {
          return item.tenPhim.toLowerCase().indexOf(key.toLowerCase()) !== -1;
        })
        if(list.length>0){
          return list.map((item) => {
            return (
              <div className="col-12 col-md-4 col-lg-3" key={item.maPhim}>
                  <MovieItem  item={item}/>
              </div>
            )
            
            
        })
        }
        else{
          return <h2 className='noti'>Không có phim cần tìm</h2>
        }
                }
  }
  return (
    <div className="listmovie">
      <div className="listmovie_nav">
        <h4 className="nowShowing">Đang chiếu</h4>
        <input type="text" placeholder="search" value={key||''} onChange={(event) => {setkey(event.target.value)}}/>
      </div>
      <div className="movie-list row">
        {renderListMovie()}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListMovie: () => {
            dispatch(actGetListMovieApi())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        listMovie: state.listMovieReducer.list,
        loading: state.listMovieReducer.loading,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListMoviePage)