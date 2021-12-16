import React, {Component} from "react";

class FilterString extends Component {
    constructor () {
        super ();

        this.state = {
            haloWeap: ["Battle Rifle", "Assult Rifle", "Magnum", "Energy Sword", "Gravity Hammer"],
            userInput: "",
            filteredHaloWeap: []
        };
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filteredHaloWeap(userInput) {
        let haloWeap = this.state.haloWeap;
        let filteredHaloWeap = [];

        for (let i = 0; i < haloWeap.length; i++) {
            if (haloWeap[i].includes(userInput)) {
                filteredHaloWeap.push(haloWeap[i]);
            }
        }
        this.setState({filteredHaloWeap: filteredHaloWeap});
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Halo Weapons: {JSON.stringify(this.state.haloWeap, null, 10)}</span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }>Filter</button>
                <span className="resultsBox filterStringRB">Filtered Halo Weapons: { JSON.stringify(this.state.filteredHaloWeap, null, 10) }</span>
            </div>
        )
    }
}

export default FilterString;