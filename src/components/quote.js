import React, { Component } from 'react';
import './sass/quote.scss';
import IMask from 'imask';
import { UserForm } from "./Form";

class Quote extends Component {

  componentDidMount() {
    const phoneMask = new IMask(
      document.getElementById('phone-mask'), {
        mask: '+{380}(00)000-00-00'
    });
  }

  render() {

    return (
      <div className='quote'>
        <div className='container'>
          <div className='row'>
            <div className='col-xs-12 col-md-5'>
              <div>
                <div className='quote__container'>
                  <div className='pretitle'>Any Queries | Get a quote</div>
                  <div className='title'>If you have any questions or queries regarding our service or pricing don't worry<br/><br/>Our experts will call you.</div>
                </div>
              </div>
            </div>
            <div className='col-xs-12 col-md-7'>
              <div>
                <div className='quote__container'>
                  <UserForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quote;
