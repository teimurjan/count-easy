const requiredRule = message => ({required: true, message});

export const fieldRequiredRules = field => ({
  rules: [
    requiredRule(`Please input ${field}`)
  ]
});

export const emailValidationRules = (isRegistration = false) => ( {
  rules: [
    requiredRule('Please input your email'),
    isRegistration && {type: 'email', message: 'Please enter a valid email address'}
  ]
});

export const passwordValidationRules = (isRegistration = false) => ({
  rules: [
    requiredRule('Please input your password'),
    isRegistration && {pattern: '[A-Za-z0-9@#$%^&+=]{8,}', message: 'Password should contains at least 8 characters including numbers, upper and lower case letters'}
  ]
});
