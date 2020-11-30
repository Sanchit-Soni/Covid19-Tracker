import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import StatesIndia from './StatesIndia';
import India from './India';
// import Details from './Details';
// import Countries from 'countries';

class Newindia extends React.Component {
    state = {
        indstate:[],
        search:""
    }

    async componentDidMount(){

        const sad = await  axios.get("https://api.covid19india.org/data.json");
      console.log(sad);
      this.setState({ indstate: sad.data.statewise});
    }
    
    onChange = e => {
      this.setState({
          search : e.target.value
      });
  }


  render() {
    // const { data } = this.props;
    // const {indstate} = this.props;
    const {indstate}= this.state;
    const {search} = this.state;

    let filteredStates = this.state.indstate;
    const filteredS= filteredStates.filter( State =>{
      return State.state.toLowerCase().indexOf( search.toLowerCase() ) !== -1
  })


    return (
      <div>
       


        <h1 className="head">Cases in INDIA</h1>
        <Link to='/'>
          <h3 className="indiastats">Go Back</h3>
        </Link>
        {/* <div className='row'>
            <div className="ind1">
                <h1>XYZ</h1>
                <h2></h2>
            </div>
        </div> */}
        <br />
        <input placeholder="Search State" onChange={this.onChange} className="search-bar"></input>

        <table className="ind-table">
                    <thead >
                        <tr>
                            <th className="table-row">States</th>
                            <th className="table-row"> Active Cases</th>
                            <th className="table-row">Total Confirmed </th>
                            <th className="table-row">Total Recovered</th>
                            <th className="table-row">Total Deaths</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredS.map(states => (
                            <StatesIndia indstate = {states} key={states.state} />
                        ))}
                    </tbody>
                </table>
               


      </div>
    );
  }
}
export default Newindia;
