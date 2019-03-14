import React, { Component } from 'react';
import './sass/swiper wall.scss';
import Swiper from 'swiper';
import webimg from './sass/media/img/Web_Development.png';
import abobe from './sass/media/img/2000px-Adobe_Systems_Logo_002.svg.png';
import hcl from './sass/media/img/guideline_based1.png';
import infosys from './sass/media/img/infosys-logo-PNG.png';
import invision from './sass/media/img/invision.png';
import cisco from './sass/media/img/cisco-logo.png';
import be from './sass/media/img/behance-2.png';
import canva from './sass/media/img/Canva-Logo.png';
import insta from './sass/media/img/49803d8eb5ea235a5860ac942caece70_download-png-download-eps-instagram-logo-clipart-png_1024-1024.png';
import model1 from './sass/media/img/Model-1.png';
import model2 from './sass/media/img/redhead_girl_glasses_61333_by_cobra69pl-d5s0291.png';
import model3 from './sass/media/img/13588755_798764966889716_858010646_o.png';

class SwiperWall extends Component {

  componentDidMount() {
    const swiper = new Swiper(this.refs.slider, {
      slidesPerView: 3,
      loop: true,
      navigation: {
        nextEl: '.services-control__btn-slider--next',
        prevEl: '.services-control__btn-slider--prev',
      },
    });

    const swiperxs = new Swiper(this.refs.sliderxs, {
      loop: false,
      navigation: {
        nextEl: '.services-control__btn-slider--next',
        prevEl: '.services-control__btn-slider--prev',
      },
    });

    const swiperfeedback = new Swiper(this.refs.feedback, {
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: true,
      pagination: {
        el: '.pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.feedback_control--next',
        prevEl: '.feedback_control--prev',
      },
    });

    const swiperfeedbackxs = new Swiper(this.refs.feedbackxs, {
      loop: true,
      pagination: {
        el: '.paginationxs',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.feedback_control--next',
        prevEl: '.feedback_control--prev',
      },
    });

    const swiperclients = new Swiper(this.refs.clients, {
      slidesPerView: 4,
      loop: true,
      navigation: {
        nextEl: '.btn-button-next',
        prevEl: '.btn-button-prev',
      },
    });

    const swiperclientsxs = new Swiper(this.refs.clientsxs, {
      slidesPerView: 2,
      loop: true,
      navigation: {
        nextEl: '.btn-button--next',
        prevEl: '.btn-button--prev',
      },
    });
  }

  render() {

    return (
      <div>
        <div className='headline'>
          <div className='container'>
            <div className='row center-xs'>
              <span className='underscore underscore--prev'></span>
              <h1 className='headline__title'>our services</h1>
              <span className='underscore underscore--next'></span>
            </div>
          </div>
        </div>
        <div className='services'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm col-md-12 hidden-xs'>
                <div className='swiper-container' ref='slider'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xs visible-xs'>
                <div className='swiper-container' ref='sliderxs'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                    <div className='swiper-slide'>
                      <div className='services-cart center-xs'>
                        <div className='services-cart__top'>
                          <img src={webimg} className='img-responsive'/>
                        </div>
                        <div className='services-cart__title'>web developmet</div>
                        <div className='services-cart__descr'>We provide the best world class web developmet service We provide the best world class web developmet service</div>
                        <a href='' className='services-cart__footer'><span>more details</span></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='services-control d-flex'>
            <div className='btn services-control__btn-slider services-control__btn-slider--prev'></div>
            <div className='btn services-control__btn-slider services-control__btn-slider--next'></div>
          </div>
        </div>
        <div className='headline'>
          <div className='container'>
            <div className='row center-xs'>
              <span className='underscore underscore--prev'></span>
              <h1 className='headline-secondary__title'>feedback</h1>
              <span className='underscore underscore--next'></span>
            </div>
          </div>
        </div>
        <div className='feedback'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-3 center-xs hidden-xs'>
                <div className='feedback-container'>
                  <div className='feedback__descr'>It was always a pleasure doing bussiness with them. I love the quality of work</div><br/>
                  <div className='feedback-control'>
                    <div className='btn feedback_control feedback_control--prev'></div>
                    <div className='btn feedback_control feedback_control--next'></div>
                  </div>
                  <div className='pagination feedback-pagination'></div>
                </div>
              </div>
              <div className='col-sm-11 col-sm-offset-1 col-md-8 hidden-xs'>
                <div className='swiper-container' ref='feedback'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-xs-6 center-xs visible-xs'>
                <div className='feedback-container'>
                  <div className='feedback__descr'>It was always a pleasure doing bussiness with them. I love the quality of work</div><br/>
                  <div className='feedback-control'>
                    <div className='btn feedback_control feedback_control--prev'></div>
                    <div className='btn feedback_control feedback_control--next'></div>
                  </div>
                  <div className='paginationxs'></div>
                </div>
              </div>
              <div className='col-xs-6 visible-xs'>
                <div className='swiper-container' ref='feedbackxs'>
                  <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model1} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model2} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                    <div className='swiper-slide'>
                      <a href=''>
                        <div className='feedback__img'>
                          <img src={model3} alt=''/>
                        </div>
                        <div className='feedback-cart'>
                          <div className='feedback-item__number'>01</div>
                          <div className='feedback-item__descr'>Imran Khan<br/>CEO, Vesso</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='headline headline--secondary'>
          <div className='container'>
            <div className='row center-xs'>
              <span className='underscore-secondary underscore-secondary--clients underscore-secondary--prev'></span>
              <h1 className='headline-secondary__title headline-secondary__title--clients'>clients</h1>
              <span className='underscore-secondary underscore-secondary--clients underscore-secondary--next'></span>
            </div>
          </div>
        </div>
        <div className='clients'>
          <div className='clients-container'>
            <div className='col-md-12 hidden-xs'>
              <div className='swiper-container' ref='clients'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={abobe}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={cisco}/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={hcl}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={be}/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={infosys}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={canva}/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={invision}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={insta}/>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className='clients-control'>
                <div className='btn btn-button btn-button-prev'></div>
                <div className='btn btn-button btn-button-next'></div>
              </div>
            </div>
            <div className='col-xs-12 visible-xs'>
              <div className='swiper-container' ref='clientsxs'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={abobe}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={cisco}/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={hcl}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={be}/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={canva}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={insta}/>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className='swiper-slide'>
                    <div className='contact'>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={infosys}/>
                        </div>
                      </a>
                      <a href=''>
                        <div className='contact-item'>
                          <img src={invision}/>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='clients-control d-flex visible-xs'>
              <div className='btn btn-button btn-button--prev'></div>
              <div className='btn btn-button btn-button--next'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SwiperWall;
