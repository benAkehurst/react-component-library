# Input

The input component takes a config object that informs the component what input fied it needs to render at runtime.
The story code is very important because it hold the methods that the component needs to run the validation code and handle the input changing.

When using the component, you need to copy this code into your class or component code:

```javascript
function checkValidity(value, rules) {
  let isValid = true;
  if (!rules) {
    return true;
  }
  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }
  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }
  return isValid;
}

function inputChangedHandler(event, inputIdentifier) {
  const updatedOrderFrom = { ...inputConfig };
  const updatedFormElement = { ...updatedOrderFrom[inputIdentifier] };
  updatedFormElement.value = event.target.value;
  updatedFormElement.valid = checkValidity(
    updatedFormElement.value,
    updatedFormElement.validatation
  );
  updatedFormElement.touched = true;
  updatedOrderFrom[inputIdentifier] = updatedFormElement;
  let formIsValid = true;
  for (let inputIdentifier in updatedOrderFrom) {
    formIsValid = updatedOrderFrom[inputIdentifier].valid && formIsValid;
  }
}
```

## Config Object (Normal)

```javascript
let inputConfig = {
  elementType: 'input',
  elementConfig: {
    type: 'text',
    name: 'Name',
    placeholder: 'Name',
  },
  value: '',
  validatation: {
    required: true,
  },
  valid: false,
  touched: false,
};
```

## Config Object (Select/Options)

```javascript
let inputConfig = {
  elementType: 'select',
  elementConfig: {
    options: [
      { value: '1', displayValue: '1' },
      { value: '2', displayValue: '2' },
    ],
  },
  value: '',
  validatation: {
    required: true,
  },
  valid: false,
  touched: false,
};
```

## Element Type

- input - anything like text, email, password etc...
- text-area - makes a text area
- select - renders a select list
