import React from 'react';
import './App.css';
import ProgressBar from './components/progress';
import ProgressBar2 from './components/progress2';
import StationCountSlider from './components/StationCountSlider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width: 393, height: 1871, position: 'relative', background: '#CFF9FF'}}>
  <div style={{width: 24, height: 24, left: 92, top: 485, position: 'absolute'}} />
  <div style={{width: 393, height: 57, left: 0, top: 0, position: 'absolute', background: '#2AB4DF'}} />
  <div style={{width: 146, height: 18, left: 124, top: 19, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 15, fontfamily:'sans-serif', fontWeight: '900', wordWrap: 'break-word'}}>Map Filter</div>
  <button style={{borderRadius:50,width: 65, height: 24, left: 315, top: 16, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 15, fontFamily: 'sans-serif', fontWeight: '600', wordWrap: 'break-word'}}>Reset</button>
  <ProgressBar/>
  <ProgressBar2/>
  <div style={{width: 191, height: 20, left: 101, top: 77, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.53)', fontSize: 10, fontfamily:'sans-serif', fontWeight: '600', wordWrap: 'break-word'}}>Charging locations close to you... </div>
  <div style={{width: 191, height: 20, left: 100, top: 205, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.53)', fontSize: 10, fontfamily:'sans-serif', fontWeight: '600', wordWrap: 'break-word'}}>0KW  -  350+KW</div>
  <div style={{width: 44, height: 20, left: 40, top: 270, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.53)', fontSize: 10, fontfamily:'sans-serif', fontWeight: '600', wordWrap: 'break-word'}}>Min:0KW  </div>
  <div style={{width: 64, height: 20, left: 295, top: 270, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.53)', fontSize: 10, fontfamily:'sans-serif', fontWeight: '600', wordWrap: 'break-word'}}>Max:350+KW  </div>
  <div style={{width: 191, height: 20, left: 100, top: 176, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontfamily:'sans-serif', fontWeight: '700', wordWrap: 'break-word'}}>Kilowatt Range</div>
  <div style={{width: 191, height: 20, left: 100, top: 356, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontfamily:'sans-serif', fontWeight: '700', wordWrap: 'break-word'}}>Vehicle & Plugs</div>
  <div style={{width: 120, height: 20, left: 10, top: 630, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontfamily:'sans-serif', fontWeight: '700', wordWrap: 'break-word'}}>Station Count Custom</div>
  <StationCountSlider/>
  <div style={{width: 191, height: 20, left: 100, top: 817, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontfamily:'sans-serif', fontWeight: '700', wordWrap: 'break-word'}}>Amenities</div>
  <div style={{width: 393.01, height: 0, left: 0, top: 152, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  <div style={{width: 393.01, height: 0, left: 0, top: 332.07, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  <div style={{width: 393.01, height: 0, left: 0, top: 615.07, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  <div style={{width: 393, height: 0, left: 0, top: 799.07, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  <div style={{width: 340, height: 0, left: 26, top: 679, position: 'absolute', background: '#2977D3', border: '1px #2977D3 solid'}}></div>
  <div style={{width: 340, height: 0, left: 26, top: 722, position: 'absolute', border: '1px #2977D3 solid'}}></div>
  <div style={{width: 322, height: 185, left: 40, top: 392, position: 'absolute', background: '#ABEBFF', borderRadius: 12}} />
  <div style={{width: 43, height: 37, left: 262, top: 478, position: 'absolute', background: '#ABEBFF'}}>
    <div style={{width: 35.83, height: 30.83, left: 3.58, top: 3.08, position: 'absolute', background: 'rgba(0, 0, 0, 0.53)'}}></div>
  </div>
  <div style={{width: 59, height: 20, left: 62, top: 447, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.53)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Vehicle </div>
  <div style={{width: 183, height: 20, left: 170, top: 414, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>2022 Tesla Model 3 Long Range Auto AWD</div>
  <div style={{width: 79, height: 20, left: 56, top: 549, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 13, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>More Plugs</div>
  <div style={{width: 79, height: 20, left: 253, top: 550, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.53)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>0 selected</div>
  <div style={{width: 79, height: 20, left: 78, top: 519, position: 'absolute', textAlign: 'center', color: '#2977D3', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Type1</div>
  <div style={{width: 79, height: 20, left: 245, top: 519, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.53)', fontSize: 13, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>Type2</div>
  <div style={{width: 322, height: 0, left: 41, top: 474, position: 'absolute', border: '1px #2AB4DF solid'}}></div>
  <div style={{width: 322, height: 0, left: 41, top: 540, position: 'absolute', border: '1px #2AB4DF solid'}}></div>
  <div style={{width: 67, height: 0, left: 202, top: 473, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '1px #2AB4DF solid'}}></div>
  <img style={{width: 96, height: 27, left: 46, top: 420, position: 'absolute'}} src="https://via.placeholder.com/96x27" />
  <div style={{width: 32, height: 34, left: 327, top: 542, position: 'absolute'}}>
    <div style={{width: 32, height: 34, left: 0, top: 0, position: 'absolute'}}>
      <div style={{width: 32, height: 34, left: 0, top: 0, position: 'absolute'}}></div>
      <div style={{width: 17.33, height: 16.98, left: 8, top: 8.50, position: 'absolute', background: 'black'}}></div>
    </div>
  </div>
  <button style={{width: 94, height: 38, left: 26, top: 850, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>Food</button>
  <button style={{width: 94, height: 38, left: 26, top: 911, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>Hotel</button>
  <button style={{width: 94, height: 38, left: 26, top: 970, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>Hiking</button>
  <button style={{width: 94, height: 38, left: 152, top: 970, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>Skiing</button>
  <button style={{width: 94, height: 38, left: 278, top: 970, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>More</button>
  <button style={{width: 94, height: 38, left: 152, top: 911, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>Park</button>
  <button style={{width: 94, height: 38, left: 278, top: 911, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>WIFI</button>
  <button style={{width: 94, height: 38, left: 152, top: 852, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>Restroom </button>
  <button style={{width: 94, height: 38, left: 278, top: 852, position: 'absolute', textAlign: 'center', color: 'white', background: '#2AB4DF', borderRadius: 90,fontSize: 12, fontFamily: 'sans-serif', fontWeight: '800', wordWrap: 'break-word'}}>Shopping</button>
  <img style={{width: 28, height: 23, left: 281, top: 859, position: 'absolute'}} src="https://via.placeholder.com/28x23" />
  <img style={{width: 30, height: 30, left: 35, top: 974, position: 'absolute'}} src="https://via.placeholder.com/30x30" />
  <img style={{width: 33, height: 28, left: 157, top: 976, position: 'absolute'}} src="https://via.placeholder.com/33x28" />
  <div style={{width: 9, height: 9, left: 286, top: 985, position: 'absolute', background: 'white', borderRadius: 9999}} />
  <div style={{width: 9, height: 9, left: 298, top: 985, position: 'absolute', background: 'white', borderRadius: 9999}} />
  <div style={{width: 9, height: 9, left: 310, top: 985, position: 'absolute', background: 'white', borderRadius: 9999}} />
  <div style={{width: 31, height: 29, left: 100, top: 483, position: 'absolute', background: '#2977D3'}}></div>
  <div style={{width: 74, height: 0, left: 389, top: 162, position: 'absolute', transform: 'rotate(90deg)', transformOrigin: '0 0', border: '2px rgba(0, 0, 0, 0.53) solid'}}></div>
  <img style={{width: 34, height: 31, left: 36, top: 855, position: 'absolute'}} src="https://via.placeholder.com/34x31" />
  <img style={{width: 28, height: 23, left: 159, top: 859, position: 'absolute'}} src="https://via.placeholder.com/28x23" />
  <img style={{width: 30, height: 33, left: 36, top: 912, position: 'absolute'}} src="https://via.placeholder.com/30x33" />
  <img style={{width: 34, height: 34, left: 159, top: 912, position: 'absolute'}} src="https://via.placeholder.com/34x34" />
  <img style={{width: 44, height: 30, left: 278, top: 914, position: 'absolute'}} src="https://via.placeholder.com/44x30" />
  <div style={{width: 393, height: 49, left: 0, top: 1822, position: 'absolute', background: '#2AB4DF'}} />
  <div style={{width: 146, height: 18, left: -3, top: 1835, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word'}}>66 Locations </div>
  <div style={{width: 63, height: 24, left: 321, top: 1832, position: 'absolute', background: 'white', borderRadius: 90}} />
  <div style={{width: 65, height: 24, left: 321, top: 1835, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>View</div>
  <div style={{width: 191, height: 20, left: 100, top: 1056, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Additional Filters</div>
  <div style={{width: 191, height: 20, left: 102, top: 1271, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Parking</div>
  <div style={{width: 191, height: 20, left: 102, top: 1449, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Coming Soon</div>
  <div style={{width: 191, height: 20, left: 102, top: 1628, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Networks and Country</div>
  <div style={{width: 350, height: 0, left: 22, top: 1518.06, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  <div style={{width: 128, height: 37, left: 54, top: 1312, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{width: 128, height: 37, left: 213, top: 1370, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 229, top: 1380, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Pull Through </div>
  <div style={{width: 128, height: 37, left: 53, top: 1370, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 61, top: 1380, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Trailer Friendly</div>
  <div style={{width: 128, height: 37, left: 214, top: 1312, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 252, top: 1321, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Pull in</div>
  <div style={{left: 76, top: 1321, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Accessible</div>
  <div style={{width: 125, height: 37, left: 203, top: 1149, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{width: 215, height: 37, left: 90, top: 1097, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 101, top: 1106, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hide Tesla Only Locations</div>
  <div style={{left: 212, top: 1158, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Available Now</div>
  <div style={{width: 188, height: 37, left: 183, top: 1201, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 189, top: 1211, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hide Restricted Access</div>
  <div style={{left: 22, top: 1499, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Include Coming Soon</div>
  <div style={{width: 350, height: 0, left: 23, top: 1712.14, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  <div style={{width: 350, height: 84, left: 23, top: 1669, position: 'absolute', borderRadius: 5, border: '1px rgba(170, 170, 170, 0.67) solid'}} />
  <div style={{left: 33, top: 1682, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Networks</div>
  <div style={{left: 39, top: 1723, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Country</div>
  <div style={{width: 45, height: 25, left: 321, top: 1679, position: 'absolute'}}>
    <div style={{left: 0, top: 3, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>All  </div>
    <div style={{width: 24, height: 25, left: 21, top: 0, position: 'absolute'}}>
      <div style={{width: 6, height: 12.50, left: 9, top: 6.25, position: 'absolute', border: '2px #2AB4DF solid'}}></div>
    </div>
  </div>
  <div style={{width: 152, height: 25, left: 214, top: 1720, position: 'absolute'}}>
    <div style={{left: 0, top: 3, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Current Location</div>
    <div style={{width: 24, height: 25, left: 128, top: 0, position: 'absolute'}}>
      <div style={{width: 6, height: 12.50, left: 9, top: 6.25, position: 'absolute', border: '2px #2AB4DF solid'}}></div>
    </div>
  </div>
  <div style={{width: 191, height: 20, left: 100, top: 1056, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Additional Filters</div>
  <div style={{width: 215, height: 37, left: 90, top: 1097, position: 'absolute'}}>
    <div style={{width: 215, height: 37, left: 0, top: 0, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
    <div style={{left: 11, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hide Tesla Only Locations</div>
  </div>
  <div style={{width: 125, height: 37, left: 203, top: 1149, position: 'absolute'}}>
    <div style={{width: 125, height: 37, left: 0, top: 0, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
    <div style={{left: 9, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Available Now</div>
  </div>
  <div style={{width: 188, height: 37, left: 183, top: 1201, position: 'absolute'}}>
    <div style={{width: 188, height: 37, left: 0, top: 0, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
    <div style={{left: 6, top: 10, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hide Restricted Access</div>
  </div>
  <div style={{width: 191, height: 20, left: 102, top: 1271, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Parking</div>
  <div style={{width: 128, height: 37, left: 54, top: 1312, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 76, top: 1321, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Accessible</div>
  <div style={{width: 128, height: 37, left: 214, top: 1312, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 252, top: 1321, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Pull in</div>
  <div style={{width: 128, height: 37, left: 53, top: 1370, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{width: 128, height: 37, left: 213, top: 1370, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
  <div style={{left: 61, top: 1380, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Trailer Friendly</div>
  <div style={{left: 229, top: 1380, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Pull Through </div>
  <div style={{width: 191, height: 20, left: 102, top: 1449, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Coming Soon</div>
  <div style={{width: 191, height: 20, left: 102, top: 1628, position: 'absolute', textAlign: 'center', color: 'rgba(0, 0, 0, 0.79)', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Networks and Country</div>
  <div style={{width: 350, height: 84, left: 23, top: 1669, position: 'absolute', borderRadius: 5, border: '1px rgba(170, 170, 170, 0.67) solid'}} />
  <div style={{width: 45, height: 25, left: 321, top: 1679, position: 'absolute'}}>
    <div style={{left: 0, top: 3, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>All  </div>
    <div style={{width: 24, height: 25, left: 21, top: 0, position: 'absolute'}}>
      <div style={{width: 6, height: 12.50, left: 9, top: 6.25, position: 'absolute', border: '2px #2AB4DF solid'}}></div>
    </div>
  </div>
  <div style={{left: 33, top: 1682, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Networks</div>
  <div style={{width: 350, height: 0, left: 23, top: 1712.14, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  <div style={{width: 152, height: 25, left: 214, top: 1720, position: 'absolute'}}>
    <div style={{left: 0, top: 3, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Current Location</div>
    <div style={{width: 24, height: 25, left: 128, top: 0, position: 'absolute'}}>
      <div style={{width: 6, height: 12.50, left: 9, top: 6.25, position: 'absolute', border: '2px #2AB4DF solid'}}></div>
    </div>
  </div>
  <div style={{left: 39, top: 1723, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Country</div>
  <div style={{width: 393, height: 49, left: 0, top: 1822, position: 'absolute', background: '#2AB4DF'}} />
  <div style={{width: 63, height: 24, left: 321, top: 1832, position: 'absolute', background: 'white', borderRadius: 90}} />
  <div style={{width: 202, height: 18, left: 12, top: 1839, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Inter', fontWeight: '900', wordWrap: 'break-word'}}>66 Matching Result Found </div>
  <div style={{width: 65, height: 24, left: 321, top: 1835, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 15, fontFamily: 'Inter', fontWeight: '600', wordWrap: 'break-word'}}>View</div>
  <div style={{width: 350, height: 19.06, left: 22, top: 1499, position: 'absolute'}}>
    <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Include Coming Soon</div>
    <div style={{width: 350, height: 0, left: 0, top: 19.06, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  </div>
  <div style={{width: 350, height: 19.06, left: 21, top: 1579, position: 'absolute'}}>
    <div style={{width: 350, height: 0, left: 0, top: 19.06, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
    <div style={{left: 2, top: 0, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hide Coming Soon</div>
    <div style={{left: 2, top: 0, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hide Coming Soon</div>
    <div style={{width: 350, height: 0, left: 0, top: 19.06, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  </div>
  <div style={{width: 350, height: 19.06, left: 22, top: 1539, position: 'absolute'}}>
    <div style={{width: 350, height: 0, left: 0, top: 19.06, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
    <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Show Only Coming Soon</div>
    <div style={{left: 0, top: 0, position: 'absolute', textAlign: 'center', color: '#2AB4DF', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Show Only Coming Soon</div>
    <div style={{width: 350, height: 0, left: 0, top: 19.06, position: 'absolute', border: '1px rgba(0, 0, 0, 0.16) solid'}}></div>
  </div>
  <div style={{width: 146, height: 37, left: 26, top: 1201, position: 'absolute'}}>
    <div style={{width: 146, height: 37, left: 0, top: 0, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
    <div style={{left: 8, top: 9, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hide Dealerships</div>
  </div>
  <div style={{width: 118, height: 37, left: 61, top: 1149, position: 'absolute'}}>
    <div style={{width: 118, height: 37, left: 0, top: 0, position: 'absolute', background: '#2AB4DF', borderRadius: 5}} />
    <div style={{left: 9, top: 10, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 16, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Private Home</div>
  </div>
</div>
        
      </header>
    </div>
  );
}

export default App;
