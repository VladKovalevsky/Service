import React, { Component } from 'react';
import './sass/footer.scss';
import { EmailForm } from "./Form";

class Footer extends Component {

  render() {

    return (
      <div className='footer'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2'>
              <div className='footer-title'>product</div>
              <div className='footer-descr'>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Cost & Governance</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Security & Complaince</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Product N</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Pricing & plans</a></div>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='footer-title'>learn</div>
              <div className='footer-descr'>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Articles</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Register a demo</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Webinars</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>FAQs</a></div>
              </div>
            </div>
            <div className='col-md-2'>
              <div className='footer-title'>company</div>
              <div className='footer-descr'>
                <div className='footer-link-wrap'><a href='' className='footer-link'>About</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Careers</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Partners</a></div>
                <div className='footer-link-wrap'><a href='' className='footer-link'>Contact</a></div>
              </div>
            </div>
            <div className='col-sm-6 col-md-6'>
              <EmailForm />
              <div className='footer-social'>
                <a href=''><i className="fa fa-facebook" aria-hidden="true"></i></a>
                <a href=''><i className="fa fa-twitter" aria-hidden="true"></i></a>
                <a href=''><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                <a href=''><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                <a href=''><i className="fa fa-behance" aria-hidden="true"></i></a>
                <a href=''><i className="fa fa-instagram" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
