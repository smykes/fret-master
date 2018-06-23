import {InstrumentConstants} from './constants/instrumentConstants.js';

export function getInstrumentByInstrumentId(id) {
    return InstrumentConstants.find( instrument => instrument.instrumentId === id);
}

export function getInsturmentNameByInstrumentId(id) {
  const instrument = InstrumentConstants.find( instrument => instrument.instrumentId === id);
  return instrument.instrumentName;
}

export function getTuningByInstrumentIdAndTuningId(instrumentId, tuningId) {
  const instrument = InstrumentConstants.find( instrument => instrument.instrumentId === instrumentId);
  return instrument.tunings.find( tuning => tuning.tuningId === tuningId);
}

export function getTuningNameByInstrumentIdAndTuningId(instrumentId, tuningId) {
  const instrument = InstrumentConstants.find( instrument => instrument.instrumentId === instrumentId);
  const tuning = instrument.tunings.find(tuning => tuning.tuningId === tuningId);
  return tuning.tuningName;
}