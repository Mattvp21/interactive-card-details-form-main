function checkCardType(value) {
    if (value[0] == 4) {
        logo.setAttribute('src', '/images/visa.gif')
        logo.hidden = false
        cardNumberInput.style.background = 'url(../images/visa.gif)'
        cardNumberInput.style.backgroundRepeat = 'no-repeat'
        cardNumberInput.style.backgroundPosition = '95%'
    } else if (value[0] == 5) {
        logo.setAttribute('src', '/images/mastercard.gif')
        logo.hidden = false
        cardNumberInput.style.background = 'url(../images/mastercard.gif)'
        cardNumberInput.style.backgroundRepeat = 'no-repeat'
        cardNumberInput.style.backgroundPosition = '95%'
    } else if (value[0] == 6) {
        logo.setAttribute('src', '/images/discover.gif')
        logo.hidden = false
        cardNumberInput.style.background = 'url(../images/discover.gif)'
        cardNumberInput.style.backgroundRepeat = 'no-repeat'
        cardNumberInput.style.backgroundPosition = '95%'
    } else {
        logo.hidden = true
        cardNumberInput.style.background = 'none'
        return;
    }
}

module.exports = {
    checkCardType
}