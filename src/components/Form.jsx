import React, { useState } from 'react';
import styles from './btn.module.css'; 

function MyForm({ onFormSubmit, inputValues, setInputValues }) {
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const isFormValid = name && surname && email;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid) {
      onFormSubmit(inputValues);
    }
  };

  return (
    <div>
      <h2 style={{fontSize: 40, textAlign: "center"}}>Formulario</h2>
      <form onSubmit={handleSubmit}  className={styles.formStyle}>
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            name="name"
            value={inputValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputSurname" className="form-label">Apellido:</label>
          <input
            type="text"
            className="form-control"
            id="inputSurname"
            name="surname"
            value={inputValues.surname}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputemail" className="form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            id="inputemail"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
          />
        </div>
        
      </form>
    </div>
  );
}

export default MyForm;