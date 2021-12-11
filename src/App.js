import React from 'react';
import './App.css';
import Head from './component/head.jsx'
import Para from './component/para.jsx'
import Image from './component/image.jsx';

function App() {
  return (
    <div>
      <div className="container">
        <div className="row mainBox">
          <div className="col-md-3 imgBox" >
            {<Image />}
            
            {/* <img src="../img.jpeg"  className="imag" /> */}
          </div>
          <div className="col-md-7" >
            <div className="row headBox" >
              <h1> {<Head />} </h1>
            </div>
            <div className="row paraBox" >
              <h4>
                {<Para/>}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

