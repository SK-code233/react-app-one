import React from 'react';
import './App.css';
import './component/head.jsx'
import './component/para.jsx'
import './component/image.jsx'

function App() {
  return (
    <div>
      <div className="container">
        <div className="row mainBox">
          <div className="col-md-3 imgBox" >
            {<Image />}
            
            <img src="../img.jpeg"  className="imag" />
          </div>
          <div className="col-md-7" >
            <div className="row" >
              <h1> Heading </h1>
            </div>
            <div className="row" >
              <h3>
                <p>Jcajiccc acmcn jnmcc jnacic anasccic cancacaci 
                  alcancw cacn acjcc cjacc cc cc jcacac cccic wacac 
                  accc cwijc ickm jc a aicjkc cc wc</p>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}
