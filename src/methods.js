import { InstrumentConstants } from './constants/instrumentConstants';
import { Notes } from './constants/notes';

/**
 *
 * @param {number} instrumentId
 * @param {number} tuningId
 */
export function getStringCountByInstrumentIdAndTuningId(
  instrumentId,
  tuningId,
) {
  const instrument = InstrumentConstants.find(
    inst => inst.instrumentId === instrumentId,
  );
  const tuning = instrument.tunings.find(
    tune => tune.tuningId === tuningId,
  );
  return tuning.stringCount;
}

/**
 *
 * @param {number} instrumentId
 * @param {number} tuningId
 */
export function getStringNamesByInstrumentIdAndTuningId(
  instrumentId,
  tuningId,
) {
  const instrument = InstrumentConstants.find(
    inst => inst.instrumentId === instrumentId,
  );
  const tuning = instrument.tunings.find(
    tune => tune.tuningId === tuningId,
  );

  return tuning.stringNames;
}

/**
 *
 * @param {*} instrumentId
 * @param {*} tuningId
 * @param {*} stringNumber
 */
export function getStringNameByInstrumentIdTuningIdAndStringNumber(
  instrumentId,
  tuningId,
  stringNumber,
) {
  const instrument = InstrumentConstants.find(
    inst => inst.instrumentId === instrumentId,
  );
  const tuning = instrument.tunings.find(
    tune => tune.tuningId === tuningId,
  );
  return tuning.stringNames[stringNumber];
}

/**
 *
 * @param {number} min
 * @param {number} max
 */
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 *
 * @param {number} num
 */
export function getNoteByNumber(num) {
  return Notes[num];
}

/**
 *
 * @param {object} errorArray
 * @param {number} instrumentId
 * @param {number} tuningId
 */
export function getChartDataByErrorArray(errorArray, instrumentId, tuningId) {
  // find the number of strings on the instrument

  const stringCount = getStringCountByInstrumentIdAndTuningId(instrumentId, tuningId);
  function getCount(num) {
    return errorArray.filter(error => error.string === num).length;
  }
  const er = [];
  for (let i = 1; i <= stringCount; i += 1) {
    er.push(
      {
        name: getStringNameByInstrumentIdTuningIdAndStringNumber(instrumentId, tuningId, i),
        count: getCount(i),
      },
    );
  }

  return er.reverse();
}

/**
 *
 */
export function getInstrumentList() {
  return InstrumentConstants;
}

/**
 *
 * @param {number} instrumentId
 */
export function getInstrumentByInstrumentId(instrumentId) {
  return InstrumentConstants.find(
    instrument => instrument.instrumentId === instrumentId,
  );
}

/**
 *
 * @param {number} instrumentId
 */
export function getInstrumentNameByInstrumentId(instrumentId) {
  const instrument = InstrumentConstants.find(
    inst => inst.instrumentId === instrumentId,
  );
  return instrument.instrumentName;
}

/**
 *
 * @param {number} instrumentId
 * @param {number} tuningId
 */
export function getTuningByInstrumentIdAndTuningId(instrumentId, tuningId) {
  const instrument = InstrumentConstants.find(
    inst => inst.instrumentId === instrumentId,
  );
  return instrument.tunings.find(tuning => tuning.tuningId === tuningId);
}

/**
 *
 * @param {number} instrumentId
 * @param {number} tuningId
 */
export function getTuningNameByInstrumentIdAndTuningId(instrumentId, tuningId) {
  const instrument = InstrumentConstants.find(
    inst => inst.instrumentId === instrumentId,
  );
  const tuning = instrument.tunings.find(
    tune => tune.tuningId === tuningId,
  );
  return tuning.tuningName;
}

/**
 *
 * @param {number} instrumentId
 * @param {number} tuningId
 * @param {number} stringNumber
 * @param {string} noteName
 */
export function getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(
  instrumentId,
  tuningId,
  stringNumber,
  noteName,
) {
  const instrument = InstrumentConstants.find(
    inst => inst.instrumentId === instrumentId,
  );
  const tuning = instrument.tunings.find(
    tune => tune.tuningId === tuningId,
  );
  const stringName = tuning.stringNames[stringNumber + 1].toUpperCase();
  const stringNameIndex = Notes.indexOf(stringName);
  const noteNameNameIndex = Notes.indexOf(noteName);

  return noteNameNameIndex - stringNameIndex < 1
    ? noteNameNameIndex - stringNameIndex + 12
    : noteNameNameIndex - stringNameIndex;
}

/**
 *
 * @param {number} instrumentId
 * @param {number} tuningId
 * @param {number} stringNumber
 * @param {number} fretNumber
 */
export function getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(
  instrumentId,
  tuningId,
  stringNumber,
  fretNumber,
) {
  const tuning = getTuningByInstrumentIdAndTuningId(instrumentId, tuningId);
  const stringName = tuning.stringNames[stringNumber + 1].toUpperCase();

  // Where the string name falls in the chromatic scale
  const stringNameIndex = Notes.indexOf(stringName);
  const newNoteIndex = (stringNameIndex + fretNumber) > 11
    ? stringNameIndex + fretNumber - 12
    : stringNameIndex + fretNumber;
  const newNoteName = Notes[newNoteIndex];

  return newNoteName;
}
