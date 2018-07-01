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
                stringNames: {
                    1: 'e',
                    2: 'b',
                    3: 'g',
                    4: 'd',
                    5: 'a',
                    6: 'e'
                }
            },
        
            {
                tuningId: 1,
                tuningName: 'Dropped D',
                stringCount: 6,
                stringNames: {                    
                    1: 'e',
                    2: 'b',
                    3: 'g',
                    4: 'd',
                    5: 'a',
                    6: 'd',
                },
            },{
                tuningId: 2,
                tuningName: 'Drop C',
                stringCount: 6,
                stringNames: {                    
                    1: 'd',
                    2: 'a',
                    3: 'f',
                    4: 'c',
                    5: 'g',
                    6: 'c',
                },
            },
            {
                tuningId: 4,
                tuningName: 'Double Dropped D',
                stringCount: 6,
                stringNames: {1:'d',2:'b',3:'g',4:'d',5:'a',6:'d'},
            },
            {
                tuningId: 5,
                tuningName: 'Open C',
                stringCount: 7,
                stringNames: {1:'e',2:'c',3:'g',4:'c',5:'g',6:'c',7:'g'}
            },
            {
                tuningId: 6,
                tuningName: '8 String Standard (Charlie Hunter Tuning)',
                stringCount: 8,
                stringNames: {1: 'e',2: 'b',3: 'g',4: 'a',5: 'e',6: 'd',7: 'a',8: 'e'}
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
                stringNames: {1:'g',2:'d',3:'a',4:'e'},
            },
            {
                tuningId: 1,
                tuningName: 'Drop D',
                stringCount: 4,
                stringNames: {1:'g',2:'d',3:'a',4:'d'},
            },
            {
                tuningId: 2,
                tuningName: 'Drop C',
                stringCount: 4,
                stringNames: {1:'f',2:'c',3:'g',4:'c'},
            },
            {
                tuningId: 3,
                tuningName: '5 String Standard',
                stringCount: 5,
                stringNames: {1:'g',2:'d',3:'a',4:'e',5:'b'},
            },
            {
                tuningId: 4,
                tuningName: '5 String Tenor',
                stringCount: 5,
                stringNames: {1: 'c',2: 'g',3: 'd',4: 'a',5: 'e'},
            },
            {
                tuningId: 5,
                tuningName: '6 String',
                stringCount: 6,
                stringNames: {1: 'b',2: 'e',3: 'a',4: 'd',5: 'g',6: 'c'},
            },
        ],
    },
];
   
    // {
    //     instrumentId: 3,
    //     instrumentName: 'Ukulele',
    //     instrumentIcon: 'icon-ukulele',
    //     fretSpacing: [
    //         {
    //             width: 31.69,
    //             marker: false
    //         },
    //         {
    //             width: 29.591,
    //             marker: false
    //         },
    //         {
    //             width: 27.94,
    //             marker: true
    //         },
    //         {
    //             width: 26.3906,
    //             marker: false
    //         },
    //         {
    //             width: 24.892,
    //             marker: true
    //         },
    //         {
    //             width: 23.3934,
    //             marker: false
    //         },
    //         {
    //             width: 22.1742,
    //             marker: true
    //         },
    //         {
    //             width: 20.9296,
    //             marker: false
    //         },
    //         {
    //             width: 19.7612,
    //             marker: false
    //         },
    //         {
    //             width: 18.6436,
    //             marker: false
    //         },
    //         {
    //             width: 17.6022,
    //             marker: false
    //         },
    //         {
    //             width: 16.6116,
    //             marker: true
    //         },
    //     ],
    //     neckDimensions: {
    //         4: { wwidth: 170, length: 840 },
    //     },
    //     tunings: [
    //         {
    //             tuningId: 0,
    //             tuningName: 'Concert',
    //             stirngCount: 4,
    //             stringNames: ['a','e','c','g'],
    //         },
    //         {
    //             tuningId: 1,
    //             tuningName: 'Baritone',
    //             stringCount: 4,
    //             stringNames: ['e','b','g','d']
    //         },
    //     ],
    // },
    // {
    //     instrumentId: 4,
    //     instrumentName: 'Charango',
    //     instrumentIcon: 'icon-charango',
    //     fretSpacing: [
    //         {
    //             width: 31.69,
    //             marker: false
    //         },
    //         {
    //             width: 29.591,
    //             marker: false
    //         },
    //         {
    //             width: 27.94,
    //             marker: true
    //         },
    //         {
    //             width: 26.3906,
    //             marker: false
    //         },
    //         {
    //             width: 24.892,
    //             marker: true
    //         },
    //         {
    //             width: 23.3934,
    //             marker: false
    //         },
    //         {
    //             width: 22.1742,
    //             marker: true
    //         },
    //         {
    //             width: 20.9296,
    //             marker: false
    //         },
    //         {
    //             width: 19.7612,
    //             marker: false
    //         },
    //         {
    //             width: 18.6436,
    //             marker: false
    //         },
    //         {
    //             width: 17.6022,
    //             marker: false
    //         },
    //         {
    //             width: 16.6116,
    //             marker: true
    //         },
    //     ],
    //     neckDimensions: {
    //         4: { wwidth: 170, length: 840 },
    //     },
    //     tunings: [
    //         {
    //             tuningId: 0,
    //             tuningName: 'Standard',
    //             stringCount: 5,
    //             stringNames: ['e','a','e','c','g'],
    //         },
    //     ],
    // },
    // {
    //     instrumentId: 5,
    //     instrumentName: 'Baglamas',
    //     instrumentIcon: 'icon-baglamas',
    //     fretSpacing: [
    //         {
    //             width: 31.69,
    //             marker: false
    //         },
    //         {
    //             width: 29.591,
    //             marker: false
    //         },
    //         {
    //             width: 27.94,
    //             marker: true
    //         },
    //         {
    //             width: 26.3906,
    //             marker: false
    //         },
    //         {
    //             width: 24.892,
    //             marker: true
    //         },
    //         {
    //             width: 23.3934,
    //             marker: false
    //         },
    //         {
    //             width: 22.1742,
    //             marker: true
    //         },
    //         {
    //             width: 20.9296,
    //             marker: false
    //         },
    //         {
    //             width: 19.7612,
    //             marker: false
    //         },
    //         {
    //             width: 18.6436,
    //             marker: false
    //         },
    //         {
    //             width: 17.6022,
    //             marker: false
    //         },
    //         {
    //             width: 16.6116,
    //             marker: true
    //         },
    //     ],
    //     neckDimensions: {
    //         3: { wwidth: 170, length: 840 },
    //     },
    //     tunings: [
    //         {
    //             tuningId: 0,
    //             tuningName: 'Standard',
    //             stringCount: 3,
    //             stringNames: ['a','d','g'],
    //         },
    //     ],
    // }


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