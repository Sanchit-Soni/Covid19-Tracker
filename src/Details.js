import React from "react";
import axios from "axios";
import Summary from "./Summary";
import Countries from "./Countries";
import India from "./India";
import Newindia from "./Newindia";
import StatesIndia from "./StatesIndia";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

class Details extends React.Component {
  state = {
    countries: [],
    global: [],
    currentDate: null,
    loading: true,
    search: "",
    // indstate : []
  };

  async componentDidMount() {
    const res = await axios.get("https://api.covid19api.com/summary");

    // const res = await  axios.get("https://disease.sh/v3/covid-19/countries");
    // debugger;
    console.log(res);
    //   const sad = await  axios.get("https://api.covid19india.org/data.json");
    //   console.log(sad);
    //this.setState({ countries: res.data.Country});
    this.setState({ countries: res.data.Countries });
    this.setState({ global: res.data.Global });
    this.setState({ currentDate: res.data.Date });
    this.setState({ loading: false });
    //   this.setState({ indstate: sad.data.statewise});
  }

  onChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    let filteredCountries = this.state.countries;
    const { search } = this.state;
    const filteredC = filteredCountries.filter((country) => {
      return country.Country.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });

    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <Router>
        <div>
          <a href="#" className="top-btn indiastats child">
            TOP
          </a>

          <Route path="/" exact>
            <Summary
              summary={this.state.global}
              currentDate={this.state.currentDate}
            />
            <input
              placeholder="Search Country"
              onChange={this.onChange}
              className="search-bar"
            ></input>

            <table className="world-table">
              <thead>
                <tr>
                  <th className="table-row">Country</th>
                  <th className="table-row">New Confirmed Cases</th>
                  <th className="table-row">Total Confirmed </th>
                  <th className="table-row">Total Recovered</th>
                  <th className="table-row">Total Deaths</th>
                </tr>
              </thead>
              <tbody>
                {filteredC.map((country) => (
                  <Countries countries={country} key={country.Country} />
                ))}
              </tbody>
            </table>
          </Route>
          <Route path="/India" component={Newindia} />

          {/* <India data={this.state.countries[76]} /> */}
        </div>
      </Router>
    );
  }
}

export default Details;
