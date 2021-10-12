import React from "react";
import { Route } from "react-router-dom";
import Footer from "../../Components/Footer";
import NavbarHome from '../../Components/NavbarHome';


function HomeLayout(props){
    return (
        <div >
            <NavbarHome/>
            
            {props.children}
            <Footer/>
            
        </div>
    )
}
export default function HomeTemplate({Component, ...props}) {
  
  return (
    <Route
      {...props}
      render={(propsComponent) => (
          <HomeLayout>
              <Component {...propsComponent}/>
          </HomeLayout>
      )}
      
    />
 
  );
}
