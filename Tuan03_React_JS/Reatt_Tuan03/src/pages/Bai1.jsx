import React, { useState } from 'react';

const UserForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,    
      [name]: value   
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dữ liệu đã submit:', formData);
    alert(`Chào ${formData.name}, form đã được gửi!`);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px' }}>
      <h2>Thông tin người dùng</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>Name: </label>
          <input
            type="text"
            name="name"         
            value={formData.name} 
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
      <div style={{ marginTop: '20px', background: '#f4f4f4', padding: '10px' }}>
        <strong>Current State:</strong>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default UserForm;