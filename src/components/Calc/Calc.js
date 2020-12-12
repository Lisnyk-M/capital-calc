import React from 'react';
import styles from '../PhoneBook/PhoneBook.module.css';
import stylesTable from './Calc.module.css'

const Calc = ({
    onHandleSubmit,
    onCapitalChange,
    onPercentChange,
    onYearChange,
    capital,
    percent,
    year,
    data
}) => {

    return (
        <>
            <form className={styles.inputContact} onSubmit={onHandleSubmit}>
                <label className={styles.label}>Capital</label>
                <input
                    className={styles.input}
                    type="text"
                    value={capital}
                    onChange={onCapitalChange}
                >
                </input>

                <label className={styles.label}>Percent</label>
                <input
                    className={styles.input}
                    type="phone"
                    value={percent}
                    onChange={onPercentChange}>
                </input>

                <label className={styles.label}>Year</label>
                <input
                    className={styles.input}
                    type="phone"
                    value={year}
                    onChange={onYearChange}>
                </input>

                {/* <button type="submit" className={styles.buttonAddContact}>Add contact</button>                */}
            </form>

            {/* <table cellspacing="1" border="1" cellpadding="5" width="300">
                <tr>
                    <th>Year</th>
                    <th>Capital</th>
                </tr>
                {data.map(el => <tr><td>{el.year}</td><td>{el.capital}</td></tr>)}
            </table> */}


            <table className={stylesTable['transaction-history']} cellSpacing="1" border="1" cellPadding="5" width="300">
                <thead className={stylesTable.thead}>
                    <tr className={stylesTable.row}>
                        <th className={stylesTable.head}>Year</th>
                        <th className={stylesTable.head}>Capital</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map(item => (
                        <tr className={stylesTable.row} key={item.year}>
                            <td className={stylesTable.data}>{item.year}</td>
                            <td className={stylesTable.data}>{item.capital}</td>
                        </tr>
                    ))}
                </tbody>        
            </table>
        </>
    )
}

export default Calc;