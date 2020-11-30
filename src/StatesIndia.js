import React from 'react';

class StatesIndia extends React.Component {

    render(){
        const {indstate} = this.props;
        return(
            <tr>
                <td>{indstate.state}</td>
                <td>{indstate.active}</td>
                <td>{indstate.confirmed}</td>
                <td>{indstate.recovered}</td>
                <td>{indstate.deaths}</td>
            </tr>
        )
    }
}

export default StatesIndia;