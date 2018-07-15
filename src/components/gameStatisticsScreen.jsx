import React from 'react';
import PropTypes from 'prop-types';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import {
  getInstrumentNameByInstrumentId,
  getTuningNameByInstrumentIdAndTuningId,
  getChartDataByErrorArray,
} from '../methods';
import '../css/statistics-screen.css';

const GameStatisticsScreen = (props) => {
  const {
    errors,
    instrumentId,
    tuningId,
    questionCount,
  } = props;

  const errorCount = errors.length;
  const instrumentName = getInstrumentNameByInstrumentId(
    parseInt(instrumentId, 10),
  );
  const tuningName = getTuningNameByInstrumentIdAndTuningId(
    instrumentId,
    tuningId,
  );
  const data = getChartDataByErrorArray(errors, instrumentId, tuningId);
  const percentage = ((questionCount - errorCount) / (questionCount) * 100);
  return (
    <section className="statistics-screen">
      <h1>
        Fret Master
      </h1>
      Statistics
      <div>
        {instrumentName}
          -
        {tuningName}
      </div>
      <div>
        Percentage Correct:
        {percentage}
        %
      </div>
      <div>
        {questionCount}
        -
        {errorCount}
      </div>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={
          {
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }
        }
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="count" fill="#fff" />
      </BarChart>
    </section>
  );
};

GameStatisticsScreen.propTypes = {
  errors: PropTypes.string.isRequired,
  tuningId: PropTypes.number.isRequired,
  instrumentId: PropTypes.number.isRequired,
  questionCount: PropTypes.number.isRequired,
};

export default GameStatisticsScreen;
