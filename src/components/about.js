import React, { Component } from 'react';
import './sass/about.scss';
import Swiper from 'swiper';

class About extends Component {
  componentDidMount() {
    const swiperbanner = new Swiper(this.refs.banner, {
      loop: true,
      navigation: {
        nextEl: '.btn-slider--next',
        prevEl: '.btn-slider--prev',
      },
    });
  }

  render() {

    return (
      <div>
        <div className='main home'>
          <main className='container-fluid'>
            <div className='row cover-main'>
              <div className='col-xs col-md-12'>
                <div className='swiper-container' ref='banner'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='banner-container'>
                        <h1 className='banner-title'>the best services</h1>
                        <div className='banner-descr'>We probide the best services in the world <span className='hidden-xs'>We provide the best services in the world We providethe best services in the world</span></div>
                      </div>
                      <a href='' className='banner-button'><span>hire us</span></a>
                    </div>
                  </div>
                </div>
                <div className='banner-control'>
                  <div className='btn btn-slider btn-slider--prev'></div>
                  <div className='btn btn-slider btn-slider--next'></div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div className='about-us'>
          <div className='d-flex about-us__container'>
            <div className='col-sm-6 col-md-6 hidden-xs'>
              <div className='about__img'></div>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-6'>
              <div className='row indent'>
                <div className='about_title'>a little about us</div>
                <div className='about-us__descr'>We are a company based in india with the motto "Digitalally Designed India". We are a company based in india with the motto "Digitalally Designed India". We a company based in india with the motto "Digitalally Designed India".<br/><br/><br/>We are a company based in india with the motto "Digitalally Designed India". We are a company based in india with the motto "Digitalally Designed India". We are a company based in india with the motto "Digitalally Designed India". We are a company based in india with the motto "Digitalally Designed India".</div>
                <a href='' className='about__button'><span>read more details</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
