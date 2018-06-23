const InstrumentConstants = [
    {
        instrumentId: 0,
        instrumentName: 'Guitar',
        instrumentIcon: 'icon-guitar',
        fretSpacing: [
            {
                width: 36.35,
                marker: false,
            },
            {
                width: 34.31,
                marker: false,
            },
            {
                width: 32.39,
                marker: true,
            },
            {
                width: 30.57,
                marker: false,
            },
            {
                width: 28.85,
                marker: true,
            },
            {
                width: 27.23,
                marker: false,
            },
            {
                width: 25.71,
                marker: true,
            },
            {
                width: 24.26,
                marker: false,
            },
            {
                width: 22.90,
                marker: false,
            },
            {
                width: 21.62,
                marker: false,
            },
            {
                width: 20.40,
                marker: false,
            },
            {
                width: 19.26,
                marker: true,
            },
        ],
        neckDimensions: {
            6:{ width: 252, length: 975,},
            7:{ width: 302, length: 975,}, 
            8:{ width: 352, length: 975,},
        },
        tunings: [
            {
                tuningId: 0,
                tuningName: 'Standard',
                stringCount: 6,
                stringNames: ['e','b','g','d','a','e'],
            },
            {
                tuningId: 1,
                tuningName: 'Dropped D',
                stringCount: 6,
                stringNames: ['e','b','g','d','a','d'],
            },
            {
                tuningId: 2,
                tuningName: 'Drop C',
                stringCount: 6,
                stringNames: ['d','a','f','c','g','c'],
            },
            {
                tuningId: 3,
                tuningName: 'Drop B',
                stringCount: 6,
                stringNames: ['c#','g#','e','b','f#','b'],
            },
            {
                tuningId: 4,
                tuningName: 'Double Dropped D',
                stringCount: 6,
                stringNames: ['d','b','g','d','a','d'],
            },
            {
                tuningId: 5,
                tuningName: 'Open C',
                stringCount: 7,
                stringNames: ['e','c','g','c','g','c','g']
            },
            {
                tuningId: 6,
                tuningName: '8 String Standard',
                stringCount: 8,
                stringNames: ['e','b','g','a','e','d','a','e']
            },
        ]
    },
    {
        instrumentId: 1,
        instrumentName: 'Bass Guitar', 
        instrumentIcon: 'icon-bass-guitar',
        fretSpacing: [
            {
                width: 36.35,
                marker: false,
            },
            {
                width: 34.31,
                marker: false,
            },
            {
                width: 32.39,
                marker: true,
            },
            {
                width: 30.57,
                marker: false,
            },
            {
                width: 28.85,
                marker: true,
            },
            {
                width: 27.23,
                marker: false,
            },
            {
                width: 25.71,
                marker: true,
            },
            {
                width: 24.26,
                marker: false,
            },
            {
                width: 22.90,
                marker: false,
            },
            {
                width: 21.62,
                marker: false,
            },
            {
                width: 20.40,
                marker: false,
            },
            {
                width: 19.26,
                marker: true,
            },
        ],
        neckDimensions: {
            4: { width: 170, length: 975 },
            5: { width: 202, length: 975 },
            6: { width: 252, length: 975 },
        },
        tunings: [
            {
                tuningId: 0,
                tuningName: 'Standard',
                stringCount: 4,
                stringNames: ['g','d','a','e'],
            },
            {
                tuningId: 1,
                tuningName: 'Drop D',
                stringCount: 4,
                stringNames: ['g','d','a','d'],
            },
            {
                tuningId: 2,
                tuningName: 'Drop C',
                stringCount: 4,
                stringNames: ['f','c','g','c'],
            },
            {
                tuningId: 3,
                tuningName: '5 String Standard',
                stringCount: 5,
                stringNames: ['g','d','a','e','b'],
            },
            {
                tuningId: 4,
                tuningName: '5 String Tenor',
                stringCount: 5,
                stringNames: ['c','g','d','a','e'],
            },
            {
                tuningId: 5,
                tuningName: '6 String',
                stringCount: 6,
                stringNames: ['b','e','a','d','g','c'],
            },
        ],
    },
    {
        instrumentId: 2,
        instrumentName: 'Mandolin',
        instrumentIcon: 'icon-mandolin',
        fretSpacing: [
            {
                width: 31.69,
                marker: false
            },
            {
                width: 29.591,
                marker: false
            },
            {
                width: 27.94,
                marker: true
            },
            {
                width: 26.3906,
                marker: false
            },
            {
                width: 24.892,
                marker: true
            },
            {
                width: 23.3934,
                marker: false
            },
            {
                width: 22.1742,
                marker: true
            },
            {
                width: 20.9296,
                marker: false
            },
            {
                width: 19.7612,
                marker: false
            },
            {
                width: 18.6436,
                marker: false
            },
            {
                width: 17.6022,
                marker: false
            },
            {
                width: 16.6116,
                marker: true
            }
        ],
        neckDimensions: {
            4: { width: 170, length: 840 },
        },
        tunings: [
            {
                tuningId: 0, 
                tuningName: 'Standard',
                stringCount: 4,
                stringNames: ['e','a','d','g'],
            },
        ],
    },
    {
        instrumentId: 3,
        instrumentName: 'Ukulele',
        instrumentIcon: 'icon-ukulele',
        fretSpacing: [
            {
                width: 31.69,
                marker: false
            },
            {
                width: 29.591,
                marker: false
            },
            {
                width: 27.94,
                marker: true
            },
            {
                width: 26.3906,
                marker: false
            },
            {
                width: 24.892,
                marker: true
            },
            {
                width: 23.3934,
                marker: false
            },
            {
                width: 22.1742,
                marker: true
            },
            {
                width: 20.9296,
                marker: false
            },
            {
                width: 19.7612,
                marker: false
            },
            {
                width: 18.6436,
                marker: false
            },
            {
                width: 17.6022,
                marker: false
            },
            {
                width: 16.6116,
                marker: true
            },
        ],
        neckDimensions: {
            4: { wwidth: 170, length: 840 },
        },
        tunings: [
            {
                tuningId: 0,
                tuningName: 'Concert',
                stirngCount: 4,
                stringNames: ['a','e','c','g'],
            },
            {
                tuningId: 1,
                tuningName: 'Baritone',
                stringCount: 4,
                stringNames: ['e','b','g','d']
            },
        ],
    }
]

export {
  InstrumentConstants
};
 
// getInstrumentList

// getInstruentByInstrumentId
// getInstrumentByInstrumentName
// getInstrumentIdByInstrumentName
// getInsturmentNameByInstrumentId

/*--Tunings--*/
// getAllTuningsByInstrumentId
// getTuningByInstrumentIdAndTuningId
// getStringCountByInstrumentIdAndTuningId

/*--Sizing--*/
// getDimensionsByInstrumentIdAndStringCount
// getFretSpacingByInstrumentId