var evenPage
module.exports = {
    beforeEach: browser => {
        evenPage = browser.page.evens()
        evenPage.navigate()
    },
    // 'Check even and odd splitter, blank split': browser => {
    //     evenPage
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', null)
    //         .verify.containsText('@oddOutput', blankSpace)
    // },
    // 'Check even and odd splitter, blank split (see comment)': browser => {
    //     evenPage
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', blankSpace)
    //         .verify.containsText('@oddOutput', blankSpace)
    // },
    // //Same as first test, but expected even output is variable blankSpace
    // //All expected blank outputs to be variable splitInput.blank for remainder of test
    // 'Check even and odd splitter, blank space input': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.blank)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.blank)
    //         .verify.containsText('@oddOutput', output.blank)
    // },    
    // 'Check even and odd splitter, input of zero': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.zero)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', 0)
    //         .verify.containsText('@oddOutput', output.blank)
    // },
    // 'Check even and odd splitter, input of zero (see comment)': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.zero)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.zero)
    //         .verify.containsText('@oddOutput', output.blank)
    // },
    // //Same as test with expected output of number 0, but expected output is now variable splitInput.zero
    // //All expected outputs that aren't blank will be equal to inputted variable for remainder of Evens and Odds Test
    // 'Check even and odd splitter, small odd number': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.smallOdd)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.blank)
    //         .verify.containsText('@oddOutput', output.smallOdd)
    // },
    // 'Check even and odd splitter, small even number': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.smallEven)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.smallEven)
    //         .verify.containsText('@oddOutput', output.blank)
    // },
    // 'Check even and odd splitter, negative odd number': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.negativeOdd)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.blank)
    //         .verify.containsText('@oddOutput', output.negativeOdd)
    // },
    // 'Check even and odd splitter, negative even number': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.negativeEven)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.negativeEven)
    //         .verify.containsText('@oddOutput', output.blank)
    // },
    // 'Check even and odd splitter, large odd number (less than 17 digits)': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.largeOdd)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.blank)
    //         .verify.containsText('@oddOutput', output.largeOdd)
    // },
    // 'Check even and odd splitter, large even number (less than 17 digits)': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.largeEven)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.largeEven)
    //         .verify.containsText('@oddOutput', output.blank)
    // },
    // 'Check even and odd splitter, multiple single digit numbers': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.singleDigits)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.evenSingleDigits)
    //         .verify.containsText('@oddOutput', output.oddSingleDigits)
    // },
    // 'Check even and odd splitter, multiple single digit numbers and zero': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.singleDigitsAndZero)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.evenSingleDigitsAndZero)
    //         .verify.containsText('@oddOutput', output.oddSingleDigits)
    // },
    // 'Check even and odd splitter, all evens': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.allEven)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.allEven)
    //         .verify.containsText('@oddOutput', output.blank)
    // },
    // 'Check even and odd splitter, all odds': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.allOdd)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.blank)
    //         .verify.containsText('@oddOutput', output.allOdd)
    // },
    // 'Check even and odd splitter, mix': browser => {
    //     evenPage
    //         .setValue('@input', splitInput.mix)
    //         .click('@splitButton')
    //         .verify.containsText('@evenOutput', output.evenMixResults)
    //         .verify.containsText('@oddOutput', output.oddMixResults)
    // },
    'Check Object Filter, name filter': browser => {
       evenPage
            .setValue('@inputFilterObject', filterObject.name)
            .click('@filterButtonObject')
            .verify.containsText('@filterResultObject', filterOutput.name)
    },
    'Check Object Filter, title filter': browser => {
        evenPage
             .setValue('@inputFilterObject', filterObject.title)
             .click('@filterButtonObject')
             .verify.containsText('@filterResultObject', filterOutput.title)
    },
    'Check Object Filter, age filter': browser => {
        evenPage
             .setValue('@inputFilterObject', filterObject.age)
             .click('@filterButtonObject')
             .verify.containsText('@filterResultObject', filterOutput.age)
    },
    'Check Object Filter, hair color filter': browser => {
        evenPage
             .setValue('@inputFilterObject', filterObject.hair)
             .click('@filterButtonObject')
             .verify.containsText('@filterResultObject', filterOutput.hair)
    },
    'Check String Filter, starts with B': browser => {
        evenPage
            .setValue('@nameFilterInput', filterString.nameB)
            .click('@nameFilterButton')
            .verify.containsText('@nameFilterResults', outputString.name)
    }

 }