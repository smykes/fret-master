import { InstrumentConstants } from "./constants/instrumentConstants.js";
import { Notes } from "./constants/notes.js";

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
    instrument => instrument.instrumentId === instrumentId
  );
}

/**
 *
 * @param {number} instrumentId
 */
export function getInsturmentNameByInstrumentId(instrumentId) {
  const instrument = InstrumentConstants.find(
    instrument => instrument.instrumentId === instrumentId
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
    instrument => instrument.instrumentId === instrumentId
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
    instrument => instrument.instrumentId === instrumentId
  );
  const tuning = instrument.tunings.find(
    tuning => tuning.tuningId === tuningId
  );
  return tuning.tuningName;
}

/**
 *
 * @param {number} instrumentId
 * @param {number} tuningId
 */
export function getStringCountByInstrumentIdAndTuningId(
  instrumentId,
  tuningId
) {
  const instrument = InstrumentConstants.find(
    instrument => instrument.instrumentId === instrumentId
  );
  const tuning = instrument.tunings.find(
    tuning => tuning.tuningId === tuningId
  );
  return tuning.stringCount;
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
  noteName
) {
  const instrument = InstrumentConstants.find(
    instrument => instrument.instrumentId === instrumentId
  );
  const tuning = instrument.tunings.find(
    tuning => tuning.tuningId === tuningId
  );
  const stringName = tuning.stringNames[stringNumber].toUpperCase();
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
  fretNumber
) {
  const tuning = getTuningByInstrumentIdAndTuningId(instrumentId, tuningId);
  const stringName = tuning.stringNames[stringNumber].toUpperCase();

  // Where the string name falls in the chromatic scale
  const stringNameIndex = Notes.indexOf(stringName);
  const newNoteIndex =
    stringNameIndex + fretNumber > 11
      ? stringNameIndex + fretNumber - 12
      : stringNameIndex + fretNumber;
  const newNoteName = Notes[newNoteIndex];

  return newNoteName;
}
