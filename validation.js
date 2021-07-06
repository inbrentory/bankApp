export default function validate(value) {
  let errors = {};

  if (!value.name) {
    errors.name = 'Name required';
  }
  // } else if (!/^[A-Za-z]+/.test(value.name.trim())) {
  // errors.name = 'Enter a valid name';
  // }

  if (!value.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(value.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!value.password) {
    errors.password = 'Password is required';
  } else if (value.password.length < 1) {
    errors.password = 'Password needs to be 1 characters or more';
  }

  // if (!value.password2) {
  //   errors.password2 = 'Password is required';
  // } else if (value.password2 !== value.password) {
  //   errors.password2 = 'Passwords do not match';
  // }

  if (!value.amount) {
    errors.amount = 'Initiate your account balance';
  }if (value.amount <= 99.99) {
    errors.amount = 'Initiate balance has to be greater than 100';
  }

  return errors;
}
