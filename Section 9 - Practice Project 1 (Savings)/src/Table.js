import React from "react";
import style from "./Table.module.css";

const Table = (props) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <table className={style.result}>
      {!props.allData.length > 0 ? (
        <p style={{ textAlign: "center" }}>No investment calculated yet</p>
      ) : (
        <>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {props.allData.map((data) => (
              <tr key={data.year}>
                <td>{data.year}</td>
                <td>{formatter.format(data.savingsEndOfYear)}</td>
                <td>{formatter.format(data.yearlyInterest)}</td>
                <td>
                  {formatter.format(
                    data.savingsEndOfYear -
                      props.initalInvestment -
                      data.yearlyContribution * data.year
                  )}
                </td>
                <td>
                  {formatter.format(
                    props.initalInvestment + data.yearlyContribution * data.year
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </>
      )}
    </table>
  );
};

export default Table;
