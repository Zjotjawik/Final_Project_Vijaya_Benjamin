import React, { useState } from 'react';
import '../styles/SuggestionFormComponent.css';

export const SuggestionFormComponent = () => {
  const [formData, setFormData] = useState({
    hindiName: [''], 
    englishName: [''],
    picture: '',
    medicalUses: [{ symptom: '', description: '' }],
  });

  const handleChange = (e, field, index) => {
    const { name, value } = e.target;
    const updatedFormData = [...formData.medicalUses];
  
    if (field === 'medicalUses') {
      updatedFormData[index][name] = value;
    } else if (field === 'hindiName' || field === 'englishName') {
      const nameIndex = field === 'hindiName' ? 0 : 1;
      const updatedNameData = [...formData[field]];
      updatedNameData[index] = value;
      setFormData({
        ...formData,
        [field]: updatedNameData,
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const handleAddMedicalUse = () => {
    setFormData({
      ...formData,
      medicalUses: [...formData.medicalUses, { symptom: '', description: '' }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="container">
        <h2>Suggest a Treatment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hindiName">Hindi Name(s)</label>
            {formData.hindiName.map((name, index) => (
              <input
                type="text"
                name="hindiName"
                value={name}
                onChange={(e) => handleChange(e, index)}
                key={index}
                placeholder="Enter Hindi Name"
              />
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="englishName">English Name(s)</label>
            {formData.englishName.map((name, index) => (
              <input
                type="text"
                name="englishName"
                value={name}
                onChange={(e) => handleChange(e, index)}
                key={index}
                placeholder="Enter English Name"
              />
            ))}
          </div>
          <div className="form-group">
            <label htmlFor="picture">Picture (Link)</label>
            <input
              type="text"
              name="picture"
              value={formData.picture}
              onChange={handleChange}
              placeholder="Enter Picture Link"
            />
          </div>
          <div className="form-group">
            <label>Medical Uses</label>
            {formData.medicalUses.map((use, index) => (
              <div key={index} className="medical-use">
                <input
                  type="text"
                  name="symptom"
                  value={use.symptom}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Symptom"
                />
                <textarea
                  name="description"
                  value={use.description}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Description"
                />
              </div>
            ))}
            <button type="button" onClick={handleAddMedicalUse}>
              Add Medical Use
            </button>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};
