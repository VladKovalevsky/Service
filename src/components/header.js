import React, { Component } from 'react';
import './sass/header.scss';
import Headroom from 'headroom.js';
import Modal from './modal.js';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {showStore: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      showStore: !prevState.showStore
    }));
    document.body.classList.toggle('modal-overflow');
  }

  componentDidMount() {
    const headroom = new Headroom(this.refs.header, {
      offset : 63,
      classes: {
        notTop : 'headroom--not-top'
        }
    });
      headroom.init();
  }

  render() {
    const { transitionName } = this.props;

    return (
      <header className='header' ref='header'>
        <div className='container-fluid'>
          <div className='row middle-xs'>
            <div className='col-xs col-md-2 middle-xs d-flex'><a href=''><h2 className='header-logo'>lo<span>go</span></h2></a></div>
            <nav className='col-xs col-md-8 header-nav end-lg d-flex middle-xs hidden-xs'>
              <a href=''>home</a>
              <a href=''>about</a>
              <a href=''>services</a>
              <a href=''>portfolio</a>
              <a href=''>shop</a>
              <a href=''>contact</a>
              <a href=''>pages</a>
            </nav>
            <div className='header-hamburger-wrap visible-xs' onClick={this.handleClick}></div>
            <div className='header-social col-md-2 hidden-xs'>
              <a href='' className='header-social__img'><i className="fa fa-facebook" aria-hidden="true"></i></a>
              <a href='' className='header-social__img'><i className="fa fa-twitter" aria-hidden="true"></i></a>
              <a href='' className='header-social__img'><i className="fa fa-google-plus" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>

        <Modal isOpen={this.state.showStore}
          transitionName="modal-anim">
          <div className='header-mob'>
            <div className='header-mob__container'>
              <div className='header-mob__top'>
                <a href=''><h2 className='header-logo__mob'>lo<span>go</span></h2></a>
                <div className='header-mob__close' onClick={this.handleClick}></div>
              </div>
              <nav className='header-mob__nav'>
                <a href='' className='header-mob__link'>home</a>
                <a href='' className='header-mob__link'>about</a>
                <a href='' className='header-mob__link'>services</a>
                <a href='' className='header-mob__link'>portfolio</a>
                <a href='' className='header-mob__link'>shop</a>
                <a href='' className='header-mob__link'>contact</a>
                <a href='' className='header-mob__link'>pages</a>
              </nav>
            </div>
          </div>
        </Modal>

      </header>
    );
  }
}

export default Header;
