const form = document.getElementById('form')
// Form 
const cardNumber = document.getElementById('card-number');
const fullName = document.getElementById('full-name');
const mm = document.getElementById('mm');
const yy = document.getElementById('yy');
const cvv = document.getElementById('cvv');
let inputs = document.querySelectorAll('input')
const cardNumberInput = document.getElementById('card-number-input');
const fullNameInput = document.getElementById('full-name-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('yy-input');
const cvcInput = document.getElementById('cvc-input');
// Error Messages
const cardDanger = document.getElementById('card-danger')
const nameDanger = document.getElementById('name-danger')
const expDanger = document.getElementById('exp-danger')
//Animations
const frontCard = document.getElementById('front-card')
const validate = document.getElementById('validate')
const thankYou = document.getElementById('thank-you')

const logo = document.querySelector('.logo')
logo.hidden = true

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


//Handle card number
cardNumberInput.addEventListener('input', (e) => {
    if(cardNumberInput.value === '') {
        cardNumberInput.style.outlineColor = 'red'
        cardDanger.textContent = "Cannot be empty"
    } 
    else if(cardNumberInput.value.length < '19') {
        cardNumberInput.style.outlineColor = 'red'
        cardDanger.textContent = "Must be a valid card"
    }
     else if(!cardNumberInput.value.includes(' ')) {
        cardNumberInput.style.outlineColor = 'red'
        cardDanger.textContent = "Must be in valid format"
    }else {
        cardNumberInput.style.outlineColor = 'green'
        cardDanger.textContent = ""
    }
    checkCardType(cardNumberInput.value )
    cardNumber.textContent = cardNumberInput.value || '0000 0000 0000 0000'
})

//Handle name
fullNameInput.addEventListener('input', (e) => {
    if(fullNameInput.value === '') {
        fullNameInput.style.outlineColor = 'red'
        nameDanger.textContent = "Cannot be empty"
    } else {
        fullNameInput.style.outlineColor = 'green'
        nameDanger.textContent = ""
    }
    fullName.textContent = e.target.value.toUpperCase() || 'JANE APPLESEED'
})

//Handle mm

monthInput.addEventListener('input', (e) => {
    if(monthInput.value === '') {
        monthInput.style.outlineColor = 'red'
        expDanger.textContent = "Cannot be empty"
    } 
    else if(monthInput.value > 12) {
        monthInput.style.outlineColor = 'red'
        expDanger.textContent = "Must be a valid month"
    } 
    else {
            
            monthInput.style.outlineColor = 'green'
            expDanger.textContent = ""
        }
    mm.textContent = e.target.value.toUpperCase() || 'MM'
})

//Handle yy

yearInput.addEventListener('input', (e) => {
    if(yearInput.value === '') {
        yearInput.style.outlineColor = 'red'
        expDanger.textContent = "Cannot be empty"
    } 
    else if(yearInput.value < 23) {
        yearInput.style.outlineColor = 'red'
        expDanger.textContent = "Must be a past the expiration year"
    }  
    else {
        yearInput.style.outlineColor = 'green'
        expDanger.textContent = ""
        }
    yy.textContent = e.target.value.toUpperCase() || 'YY'
})

//Handle cvc
cvcInput.addEventListener('input', (e) => {
    if(cvcInput.value === '') {
        cvcInput.style.outlineColor = 'red'
        expDanger.textContent = "Cannot be empty"
    } 
    else if (cvcInput.value.length < 2) {
        cvcInput.style.outlineColor = 'red'
        expDanger.textContent = "Not a valid cvc"
    } 
    else {
        cvcInput.style.outlineColor = 'green'
        expDanger.textContent = ""
    }
    cvv.textContent = e.target.value.toUpperCase() || '000'
})

//Handle submit

form.addEventListener('submit', (e) => {
    e.preventDefault();
   for (let index = 0; index < inputs.length; index++) {
    if(inputs[index].value === '') {
       return document.getElementById('submit-danger').textContent = 'Please fill out required entries'
     } 
     if (cardDanger.textContent !== '' || nameDanger.textContent !== '' || expDanger.textContent !== '') {
       return  document.getElementById('submit-danger').textContent = 'Something went wrong'
     }
    else {
        document.getElementById('submit-danger').textContent = ''
        playSound()
        setTimeout(() => {
            form.style.display = 'none'
            thankYou.style.display = 'flex'
            validate.style.visibility = 'visible'
            validate.style.animation = 'circleGreen .5s ease-in'
            frontCard.style.animation = 'cardTurn .5s ease-in-out'
            thankYou.style.animation = 'slideInLeft 1s ease-in'
        }, 1000);
        
   }
}
})

function playSound() {
    const audio = new Audio('sounds/ding-sound-effect_2.mp3');
audio.play();
}

