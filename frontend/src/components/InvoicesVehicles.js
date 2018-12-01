import React, { Component } from 'react';
import ListInvoices from './ListInvoices';
import ListVehicles from './ListVehicles';

class InvoicesVehicles extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="InvoicesVehicles">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="active"><a data-toggle="tab" href="#invoices">Invoices</a></li>
            <li><a data-toggle="tab" href="#vehicles">Vehicles</a></li>
          </ul>

          <div className="tab-content">
            <div id="invoices" className="tab-pane fade in active">
            </div>
            <div id="vehicles" className="tab-pane fade">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InvoicesVehicles;
