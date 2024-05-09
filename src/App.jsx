import React, { useState } from 'react';
import useFormState from './useFormState'; 
import './App.css';

function MyForm() {
  const { values, handleChange, resetForm } = useFormState({
    username: '',
    password: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(values);
    console.log('Form submitted:', values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder='Enter Name'
          value={values.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder='Enter Password'
          value={values.password}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Username: {submittedData.username}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default MyForm;
