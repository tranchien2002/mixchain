import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class ListInvoices extends Component {
  constructor() {
    super();
    this.state = {
      invoices: null,
      loading: false,
      pages: 0,
      page: 0
    };
  }

  componentDidMount(){
    axios.get('')
    .then(response => {
      const invoices = response.data;
      this.setState({ invoices });
    });
  }

  render() {
    return (
      <div className="ListInvoices">
        <ReactTable/>
      </div>
    );
  }
}

export default ListInvoices;
