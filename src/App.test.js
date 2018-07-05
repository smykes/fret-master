import {
  getInstrumentNameByInstrumentId,
  getStringCountByInstrumentIdAndTuningId,
  getInstrumentByInstrumentId,
  getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName,
  getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber,
  getTuningByInstrumentIdAndTuningId,
  getInstrumentList,
  getTuningNameByInstrumentIdAndTuningId,
  getRandomNumber,
  getStringNameByInstrumentIdTuningIdAndStringNumber,
  getNoteByNumber,
  getStringNamesByInstrumentIdAndTuningId
} from './methods.js';

// STRING RELATED
it('getStringNameByInstrumentIdTuningIdAndStringNumber', () => {
  expect(getStringNameByInstrumentIdTuningIdAndStringNumber(0, 0, 1)).toEqual('e');
  expect(getStringNameByInstrumentIdTuningIdAndStringNumber(0, 0, 2)).toEqual('b');
  expect(getStringNameByInstrumentIdTuningIdAndStringNumber(0, 0, 3)).toEqual('g');
  expect(getStringNameByInstrumentIdTuningIdAndStringNumber(0, 0, 4)).toEqual('d');
  expect(getStringNameByInstrumentIdTuningIdAndStringNumber(0, 0, 5)).toEqual('a');
  expect(getStringNameByInstrumentIdTuningIdAndStringNumber(0, 0, 6)).toEqual('e');
});

it('getStringNamesByInstrumentIdAndTuningId', () => {
  expect(getStringNamesByInstrumentIdAndTuningId(0,0)).toEqual({"1": "e", "2": "b", "3": "g", "4": "d", "5": "a", "6": "e"});
})

it('getStringCountByInstrumentIdAndTuningId', () => {
  expect(getStringCountByInstrumentIdAndTuningId(0,0)).toEqual(6);
  expect(getStringCountByInstrumentIdAndTuningId(0,5)).toEqual(7);
  expect(getStringCountByInstrumentIdAndTuningId(0,6)).toEqual(8);
  expect(getStringCountByInstrumentIdAndTuningId(1,0)).toEqual(4);
  expect(getStringCountByInstrumentIdAndTuningId(1,4)).toEqual(5);
  // expect(getStringCountByInstrumentIdAndTuningId(5,0)).toEqual(3);
});


it('getRandomNumber', () => {
  expect(getRandomNumber(1,12)).toBeGreaterThan(0);
  expect(getRandomNumber(1,12)).toBeLessThan(13);
});

it('getNoteByNumber', () => {
  expect(getNoteByNumber(0)).toEqual('C');
  expect(getNoteByNumber(1)).toEqual('C#/Db');
  expect(getNoteByNumber(11)).toEqual('B');
});

it('getInstrumentList', () => {
  expect(getInstrumentList()).toBeDefined();
  expect(getInstrumentList()).toHaveLength(3);
});

it('getInstrumentByInstrumentId', () => {
  expect(getInstrumentByInstrumentId(0)).toBeDefined();
});

it('getTuningNameByInstrumentIdAndTuningId', () => {
  expect(getTuningNameByInstrumentIdAndTuningId(0,0)).toEqual('Standard');
  // expect(getTuningNameByInstrumentIdAndTuningId(0,1)).toEqual('Dropped D');
});

it('getInsturmentNameByInstrumentId', () => {
  expect(getInstrumentNameByInstrumentId(0)).toEqual('Guitar');
  expect(getInstrumentNameByInstrumentId(1)).toEqual('Bass Guitar');
  // expect(getInsturmentNameByInstrumentId(2)).toEqual('Mandolin');
  // expect(getInsturmentNameByInstrumentId(3)).toEqual('Ukulele');
  // expect(getInsturmentNameByInstrumentId(4)).toEqual('Charango');
  // expect(getInsturmentNameByInstrumentId(5)).toEqual('Baglamas');
});



it('getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName', () => {
  console.log('1');
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'E')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'F')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'F#/Gb')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'G')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'G#/Ab')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'A')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'A#/Bb')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'B')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'C')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'C#/Db')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'D')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'D#/Eb')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,5,'E')).toEqual(12);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'E')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'F')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'F#/Gb')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'G')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'G#/Ab')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'A')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'A#/Bb')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'B')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'C')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'C#/Db')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'D')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'D#/Eb')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,4,'E')).toEqual(7);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'E')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'F')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'F#/Gb')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'G')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'G#/Ab')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'A')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'A#/Bb')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'B')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'C')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'C#/Db')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'D')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'D#/Eb')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,3,'E')).toEqual(2);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'E')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'F')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'F#/Gb')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'G')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'G#/Ab')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'A')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'A#/Bb')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'B')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'C')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'C#/Db')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'D')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'D#/Eb')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,2,'E')).toEqual(9);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'E')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'F')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'F#/Gb')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'G')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'G#/Ab')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'A')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'A#/Bb')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'B')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'C')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'C#/Db')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'D')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'D#/Eb')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,1,'E')).toEqual(5);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'E')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'F')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'F#/Gb')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'G')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'G#/Ab')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'A')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'A#/Bb')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'B')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'C')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'C#/Db')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'D')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'D#/Eb')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(0,0,0,'E')).toEqual(12);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'E')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'F')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'F#/Gb')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'G')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'G#/Ab')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'A')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'A#/Bb')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'B')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'C')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'C#/Db')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'D')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'D#/Eb')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,3,'E')).toEqual(12);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'E')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'F')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'F#/Gb')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'G')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'G#/Ab')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'A')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'A#/Bb')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'B')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'C')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'C#/Db')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'D')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'D#/Eb')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,2,'E')).toEqual(7);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'E')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'F')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'F#/Gb')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'G')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'G#/Ab')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'A')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'A#/Bb')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'B')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'C')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'C#/Db')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'D')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'D#/Eb')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,1,'E')).toEqual(2);

  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'E')).toEqual(9);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'F')).toEqual(10);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'F#/Gb')).toEqual(11);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'G')).toEqual(12);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'G#/Ab')).toEqual(1);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'A')).toEqual(2);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'A#/Bb')).toEqual(3);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'B')).toEqual(4);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'C')).toEqual(5);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'C#/Db')).toEqual(6);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'D')).toEqual(7);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'D#/Eb')).toEqual(8);
  expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(1,0,0,'E')).toEqual(9);

//   expect(getFretNumberByInstrumentIdTuningIdStringNumberAndNoteName(5,0,0,'E')).toEqual(7);
});

it('getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber', () => {
  // Guitar, Six String, Standard Tuning, Sixth String
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,1)).toEqual('F');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,2)).toEqual('F#/Gb');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,3)).toEqual('G');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,4)).toEqual('G#/Ab');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,5)).toEqual('A');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,6)).toEqual('A#/Bb');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,7)).toEqual('B');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,8)).toEqual('C');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,9)).toEqual('C#/Db');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,10)).toEqual('D');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,11)).toEqual('D#/Eb');
  expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,5,12)).toEqual('E');
  
  // // Guitar, Six String, Standard Tuning, Fifth String
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,4,1)).toEqual('A#/Bb');
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,4,2)).toEqual('B');

  // // Guitar, Six String, Standard Tuning, Fourth String
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,3,1)).toEqual('D#/Eb');
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(0,0,3,2)).toEqual('E');

  // // Bass, 4 String, Standard Tuning, First String
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(1,0,0,1)).toEqual('G#/Ab');
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(1,0,0,2)).toEqual('A');

  // // Bass, 4 String, Standard Tunung, Second String
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(1,0,1,1)).toEqual('D#/Eb');
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(1,0,1,2)).toEqual('E');
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(1,0,1,3)).toEqual('F');

  // // Bass, 4 String, Standard Tunung, Third String
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(1,0,2,1)).toEqual('A#/Bb');

  // // Bass, 4 String, Standard Tunung, FOurth String
  // expect(getNoteNameByInstrumentIdTuningIdStringNumberAndFretNumber(1,0,3,1)).toEqual('F');

});