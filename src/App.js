import React, { Component } from 'react';
import './components/sass/globals.scss';
import './components/sass/utilities.scss';
import './components/sass/modals.scss'
import 'flexboxgrid';
import '../node_modules/swiper/dist/css/swiper.css';
import Header from './components/header.js';
import About from './components/about.js';
import SwiperWall from './components/swiper wall.js';
import Quote from './components/quote.js';
import Footer from './components/footer.js';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <SwiperWall />
        <Quote />
        <Footer />
      </div>
    );
  }
}

export default App;
