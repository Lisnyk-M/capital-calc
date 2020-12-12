import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calc from './Calc';

class CalcContainer extends Component {

    state = {
        percent: 3,
        year: 10,
        capital: 1000,
    }

    percentPerYear = (percent, year, strCapital = 0) => {
        const koef = Number(percent) / 100;
        let tableData = [];
        let tmp = {};
        let capital = Number(strCapital);

        for (let y = 1; y < Number(year) + 1; y++) {
            capital = capital + koef * capital;
            // console.log('year: ', y, ' capital: ', capital.toFixed(2));
            tmp = { year: y, capital: capital.toFixed(2) }

            tableData.push(tmp);
            // console.log(tableData);
        }
        return tableData;
    }

    handleSubmit = e => {
        e.preventDefault();
        // this.setState(capital: )
    }

    percentChange = e => {
        this.setState({ percent: e.target.value });
    }

    yearChange = e => {
        this.setState({ year: e.target.value });
    }

    capitalChange = e => {
        this.setState({ capital: e.target.value });
    }



    render() {
        const { percent, year, capital } = this.state;
        const data = this.percentPerYear(percent, year, capital);

        const calcProps = {
            data,
            ...this.state,
            onHandleSubmit: this.handleSubmit,
            onCapitalChange: this.capitalChange,
            onPercentChange: this.percentChange,
            onYearChange: this.yearChange
        }

        return (
            <Calc {...calcProps} />
        )
    }
}

const mapStateToProps = state => ({
    percent: this.state.percent,
    year: this.state.year,
    capital: this.state.capital
})

const mapDispatchToProps = {
    // onHandleSubmit: this.handleSubmit,
    // onCapitalChange: this.capitalChange,
    // onPercentChange: this.percentChange,
    // onYearChange: this.yearChange
}

export default connect(null, null)(CalcContainer);
// percentPerYear(3, 10, 1000);
