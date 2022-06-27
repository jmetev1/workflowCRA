import React from 'react';
import { SelectField } from 'evergreen-ui';

import { useState } from 'react';

export function Notes() {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const { patients } = window;

  return (
    <>
      <SelectField onChange={(thing) => {
        setSelectedPatient(window.patients.filter(patient => patient.lastName === thing.target.value)[0])
      }}
        label='Choose Patient'>
        {[{ _id: 0, firstName: 'Choose', lastName: 'Patient' }, ...patients].map(
          ({ firstName, lastName }) => {
            const fullName = firstName + ' ' + lastName
            return (<option key={fullName} value={lastName} children={fullName} />
            )
          }
        )}
      </SelectField>
      {selectedPatient &&
        <div>
          <h1>Name:{selectedPatient.firstName + ' ' + selectedPatient.lastName}</h1>
          <p>{selectedPatient.email}</p>
        </div>
      }
    </>
  );
}
