// import { findByLabelText } from "@testing-library/react";
import React, { useState } from "react";
// import ReactDOM from "react-dom";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #F0F8FF",
      borderRadius: "15px",
      width: "max-content",
      marginBottom: "40px",
    },
    inputs: {
      marginBottom: "5px",
    },
    submitBtn: {
      marginTop: "10px",
      padding: "10px 15px",
      border: "none",
      backgroundColor: "lightseagreen",
      fontSize: "14px",
      borderRadius: "5px",
    },
  },
  userInfo: {
    display: "flex",
  },
  info: {
    margin: "20px 75px 10px",
  },
};

function PhoneBookForm({ data, change, submit }) {
  return (
    <form onSubmit={submit} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userFirstname"
        name="firstName"
        value={data.firstName}
        type="text"
        onChange={change}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userLastname"
        name="lastName"
        value={data.lastName}
        type="text"
        onChange={change}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className="userPhone"
        name="phone"
        value={data.phone}
        type="text"
        onChange={change}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className="submitButton"
        type="submit"
        value="Add User"
      />
    </form>
  );
}

function InformationTable({ userInfo }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <div>
            <th style={style.tableCell}>First name</th>
            <th style={style.tableCell}>Last name</th>
            <th style={style.tableCell}>Phone</th>
          </div>
          {userInfo.map((user) => {
            return (
              <div style={style.userInfo}>
                <p style={style.info}>{user.firstName}</p>
                <p style={style.info}>{user.lastName}</p>
                <p style={style.info}>{user.phone}</p>
              </div>
            );
          })}
        </tr>
      </thead>
    </table>
  );
}

class Application extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      user: [],
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state.user.push({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
    });
    let userState = this.state.user.sort((a, b) => {
      if (a.lastName < b.lastName) return -1;
      else if (a.lastName > b.lastName) return 1;
      return 0;
    });
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      user: userState,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <section>
        <PhoneBookForm
          data={this.state}
          change={this.handleChange}
          submit={this.handleSubmit}
        />
        <InformationTable userInfo={this.state.user} />
      </section>
    );
  }
}

export default Application;
