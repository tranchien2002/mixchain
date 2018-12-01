import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import 'react-table/react-table.css'

class ListVehicles extends Component {
  constructor() {
    super();
    this.state = {
      vehicles: null
    };
  }

  componentDidMount(){
    axios.get('')
    .then(response => {
      const vehicles = response.data;
      this.setState({ vehicles });
    });
  }

  render() {
    return (
      <div className="ListVehicles">

      </div>
    );
  }
}

export default ListVehicles;
