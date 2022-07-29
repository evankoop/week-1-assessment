let password = 'codecode11'
let regex = /\d/ 
let newRegEx = /[a-zA-z]/
let doesItHaveNumber = regex.test(password)
let doesItHaveLetter = newRegEx.test(password)

if (password.length >= 10 && password.length <= 20 && doesItHaveNumber === true && doesItHaveLetter === true) {
    console.log('Password Success')
}
else {
    console.log('Password Failure')
}