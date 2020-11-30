import React from "react";
import './App.css';

// import Countries from 'countries';

class India extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        
        <div className="IndiaData">
            <div className="inc NewConfirmed">
          <h1>NEW CONFIRMED</h1>
          <h2>{data.NewConfirmed}</h2>
          </div>
          <div className="inc TotalConfirmed">
          <h1>TOTAL CONFIRMED</h1>
          <h2> {data.TotalConfirmed}</h2>
          </div>
          <div className="inc TotalRecovered">
          <h1>TOTAL RECOVERED</h1>
          <h2> {data.TotalRecovered}</h2>
          </div>
          <div className="inc TotalDeaths">
          <h1>TOTAL DEATHS</h1>
          <h2> {data.TotalDeaths}</h2>
          </div>
        </div>
        <a href="#" className="indiastats">Go To Top</a>
      </div>
    );
  }
}
export default India;
