import React, {Component} from "react";

class FilterObject extends Component {
    constructor () {
        super ();

        this.state = {
            family: [
                {
                    name: "Sam",
                    age: 18,
                    eyeColor: "Brown"
                },
                {
                    name: "Juan",
                    age: 28,
                    hairColor: "Black"
                },
                {
                    name: "Monica",
                    age: 22
                }
            ],

            userInput: "",
            filteredFamily: []
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    filteredFamily(prop) {
        let family = this.state.family;
        let filteredFamily = [];

        for (let i = 0; i < family.length; i++) {
            if (family[i].hasOwnProperty(prop)) {
                filteredFamily.push(family[i])
            }
        }
        this.setState({filteredFamily: filteredFamily});
    }

    render () {
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: { JSON.stringify(this.state.family, null, 10) } </span>
                <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
                <button className="confirmationButton" onClick={ () => this.filteredFamily(this.state.userInput) }> Filter </button>
                <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredFamily, null, 10) }</span>
            </div>
        )
    }
}

export default FilterObject;