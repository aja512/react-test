import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class MedicalBills extends Component {
  state = {
    patientName: "",
    patientAddress: "",
    hospitalName: "",
    dateOfService: "",
    billAmount: "",
    billImage: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      patientName: this.state.patientName,
      patientAddress: this.state.patientAddress,
      hospitalName: this.state.hospitalName,
      dateOfService: this.state.dateOfService,
      billAmount: this.state.billAmount,
      billImage: this.state.billImage,
    };

    axios
      .post("/api/medical-bills", data)
      .then((response) => {
        this.setState({
          patientName: "",
          patientAddress: "",
          hospitalName: "",
          dateOfService: "",
          billAmount: "",
          billImage: "",
        });

        alert("Medical bill uploaded successfully!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error uploading medical bill!");
      });
  };

  render() {
    return (
      <div>
        <h1>Medical Bills</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Patient Name</label>
            <input
              type="text"
              name="patientName"
              value={this.state.patientName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Patient Address</label>
            <input
              type="text"
              name="patientAddress"
              value={this.state.patientAddress}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Hospital Name</label>
            <input
              type="text"
              name="hospitalName"
              value={this.state.hospitalName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Date of Service</label>
            <input
              type="date"
              name="dateOfService"
              value={this.state.dateOfService}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Bill Amount</label>
            <input
              type="number"
              name="billAmount"
              value={this.state.billAmount}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Bill Image</label>
            <input
              type="file"
              name="billImage"
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Upload</button>
        </form>

        <h2>Summary</h2>

        <div>
          <p>Patient Name: {this.state.patientName}</p>
          <p>Patient Address: {this.state.patientAddress}</p>
          <p>Hospital Name: {this.state.hospitalName}</p>
          <p>Date of Service: {this.state.dateOfService}</p>
          <p>Bill Amount: {this.state.billAmount}</p>
          <p>Bill Image: {this.state.billImage}</p>
        </div>
      </div>
    );
  }
}

export default MedicalBills;
