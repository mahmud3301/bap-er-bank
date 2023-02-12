//  step 1: add click event handelar with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // // step 2: get the Account Number inside the account number field
    // // always remember to use value to get text from an input field
    const accountNumField = document.getElementById('account-field');
    const account = accountNumField.value;
    // // step: 3 : get pass
    // // 3.a: set id on the html element
    // // 3.b: get the element
    // // 3.c: get value from element
    const passField = document.getElementById('pass-field');
    const pass = passField.value;

    // console.log(account, pass)

    if(account === '13189' && pass === 'm1HmU:'){
        window.location.href = 'bank.html';
    } else{
        alert('You cannot go')
    }
})