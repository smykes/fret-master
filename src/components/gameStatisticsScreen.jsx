import React, { Component } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend
} from "recharts";
import {
  getInstrumentNameByInstrumentId,
  getTuningNameByInstrumentIdAndTuningId,
  getChartDataByErrorArray,
} from "../methods.js";
import "../css/statistics-screen.css";
class GameStatisticsScreen extends Component {
  render() {
    const errorCount = this.props.errors.length;
    console.log(this.props.errors);
    const instrumentName = getInstrumentNameByInstrumentId(
      parseInt(this.props.instrumentId, 10)
    );
    const tuningName = getTuningNameByInstrumentIdAndTuningId(
      this.props.instrumentId,
      this.props.tuningId
    );
    const data = getChartDataByErrorArray(this.props.errors, this.props.instrumentId, this.props.tuningId);
    const percentage = Math.floor((errorCount / this.props.questionCount) * 100);
    return (
      <section className="statistics-screen">
        <h1>Fret Master</h1>
        Statistics
        <div>{instrumentName} - {tuningName}</div>
        <div>Percentage Correct: {percentage}% </div>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Bar dataKey="count" fill="#fff" />
        </BarChart>
      </section>
    );
  }
}

export default GameStatisticsScreen;
