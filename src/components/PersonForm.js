import React, { useState } from 'react';

const PersonForm = ({ onPersonAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    alter: '',
    stadt: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPersonAdd(formData);
    setFormData({ name: '', alter: '', stadt: '' }); // Form zurücksetzen
  };

  return (
    <div className="person-form">
      <h3>Neue Person hinzufügen (Props & State)</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="number"
            name="alter"
            value={formData.alter}
            onChange={handleChange}
            placeholder="Alter"
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="stadt"
            value={formData.stadt}
            onChange={handleChange}
            placeholder="Stadt"
            required
          />
        </div>
        <button type="submit">Person hinzufügen</button>
      </form>
    </div>
  );
};

export default PersonForm;
