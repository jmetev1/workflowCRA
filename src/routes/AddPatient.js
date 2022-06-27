import { Button } from 'evergreen-ui';
import React from 'react';
import random from '../random-name';
import { MyTextInputField, } from '../Fields';

export default function AddPatient() {
  const fName = random.first()
  const lName = random.last()
  const em = `${fName.toLowerCase()}.${lName.toLowerCase()}@gmail.com`
  const [firstName, setFirstName] = React.useState(fName);
  const [lastName, setLastName] = React.useState(lName);
  const [email, setEmail] = React.useState(em);

  const submit = () => {
    const patient = { firstName, lastName, email };
    console.log({ ...patient });
    window.patients.push(patient);
  }
  return <>
    <MyTextInputField
      required
      value={firstName}
      id="firstName"
      label="First Name"
      onChange={({ target }) => setFirstName(target.value)}
    />
    <MyTextInputField
      required
      value={lastName}
      id="lastName"
      label="Last Name"
      onChange={({ target }) => setLastName(target.value)}
    />
    <MyTextInputField
      required
      value={email}
      id="email"
      label="Email Address"
      onChange={({ target }) => setEmail(target.value)}
    />
    <Button onClick={submit} appearance="primary">
      Submit
    </Button>
  </>
}


