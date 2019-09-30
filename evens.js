
module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        // page: {
        //     selector: '(//body)',
        //     locateStrategy: 'xpath'
        // },
        input: {
            selector: '[name="evenOddInput"]'
        },
        splitButton: {
            selector: '[name="evenOddButton"]'
        },
        oddOutput: {
            selector: '[name="oddResults"]'
        },
        evenOutput: {
            selector: '[name="evenResults"]'
        },
        inputFilterObject: {
            selector: '[name="objectFilterInput"]'
        },
        filterButtonObject: {
            selector: '[name="objectFilterButton"]'
        },
        filterResultObject: {
            selector: '[name="objectFilterResults"]'
        },
        nameFilterInput: {
            selector: '[id="nameFilterInput"]'
        },
        nameFilterButton: {
            selector: '[id="nameFilterButton"]'
        },
        nameFilterResults: {
            selector: '[name="nameFilterResults"]'
        }

    },
    var: blankSpace = " ",
    var: splitInput = {
            blank: blankSpace,
            zero: "0",
            smallOdd: "1",
            smallEven: "2",
            negativeOdd: "-3",
            negativeEven: "-4",
            largeOdd: "1234567891234567",
            largeEven: "1234567891234566",
            singleDigits: "1,2,3,4,5,6,7,8,9",
            singleDigitsAndZero: "1,2,3,4,5,6,7,8,9,0",
            allEven: "10,100,1000,10000000000",
            allOdd: "1,3,5,7,9",
            mix: "1,2,333,-88,12345,787878787,90909090909090,-1,0"
        },
    var: output = {
            blank: splitInput.blank,
            zero: splitInput.zero,
            smallOdd: splitInput.smallOdd,
            smallEven: splitInput.smallEven,
            negativeOdd: splitInput.negativeOdd,
            negativeEven: splitInput.negativeEven,
            largeOdd: splitInput.largeOdd,
            largeEven: splitInput.largeEven,
            oddSingleDigits: "1,3,5,7,9",
            evenSingleDigits: "2,4,6,8",
            evenSingleDigitsAndZero: "2,4,6,8,0",
            allEven: splitInput.allEven,
            allOdd: splitInput.allOdd,
            oddMixResults: "1,333,12345,787878787,-1",
            evenMixResults: "2,-88,90909090909090,0"
        },
    var: filterObject = {
            name: "name",
            title: "title",
            age: "age",
            hair: "hairColor"
        },
    var: filterOutput = {
            name: '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" }, { "name": "Carly Armstrong", "title": "CEO" } ]',
            title: '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Carly Armstrong", "title": "CEO" } ]',
            age: '[ { "name": "Jimmy Joe", "title": "Hack0r", "age": 12 }, { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]',
            hair: '[ { "name": "Jeremy Schrader", "age": 24, "hairColor": "brown" } ]'
    },
    var: filterString = {
            nameB: 'B',
            nameJ: 'J',
            nameM: 'M',
            nameT: 'T'
    },
    var: outputString = {
            name: 'Blake'
    }
}