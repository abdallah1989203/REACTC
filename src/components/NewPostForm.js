import React, { useState } from 'react';

const NewPostForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: ''
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
    onSubmit({
      ...formData,
      id: Date.now(),
      date: new Date().toISOString()
    });
    setFormData({ title: '', content: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="new-post-form">
      <h3>Neuer Blog-Beitrag</h3>
      
      <div className="form-group">
        <label htmlFor="title">Titel:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content">Inhalt:</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Veröffentlichen</button>
    </form>
  );
};

export default NewPostForm;
