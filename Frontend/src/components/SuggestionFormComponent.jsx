import React, { useState } from 'react';
import '../styles/SuggestionFormComponent.css';


export const SuggestionFormComponent = () => {
  const initialFormData = {
    hindiNames: [''],
    englishNames: [''],
    picture: '',
    medicalUses: [{ symptom: '', description: '' }],
  };
  const [formData, setFormData] = useState(initialFormData);


  const handleChange = (e, field, index) => {
    const { name, value } = e.target;

    if (field === 'medicalUses') {
      const updatedMedicalUses = [...formData.medicalUses];
      updatedMedicalUses[index][name] = value;

      setFormData({
        ...formData,
        medicalUses: updatedMedicalUses,
      });
    } else if (field === 'hindiNames' || field === 'englishNames') {
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


  const handleAddName = (field) => {
    const updatedNameData = [...formData[field]];
    updatedNameData.push('');
    setFormData({
      ...formData,
      [field]: updatedNameData,
    });
  };


  const handleAddMedicalUse = () => {
    setFormData({
      ...formData,
      medicalUses: [...formData.medicalUses, { symptom: '', description: '' }],
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        hindiNames: formData.hindiNames.filter(name => name.trim() !== ''),
        englishNames: formData.englishNames.filter(name => name.trim() !== ''),
      };

      const response = await fetch('https://final-project-1lrc.onrender.com/treatments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.status === 201) {
        console.log('Treatment created successfully');
        
        setFormData(initialFormData);
      } else {
        console.error('Error creating treatment');
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="hindiName">Hindi Name(s)</label>
          {formData.hindiNames.map((name, index) => (
            <div key={index}>
              <input
                className='input'
                type="text"
                name={`hindiName_${index}`}
                value={name}
                onChange={(e) => handleChange(e, 'hindiNames', index)}
                placeholder="Enter Hindi Name"
              />
              {index === formData.hindiNames.length - 1 && (
                <button
                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                style={{
                  background:
                  "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
               }}
                  type="button"
                  onClick={() => handleAddName('hindiNames')}
                >
                  Add Hindi Name
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="englishName">English Name(s)</label>
          {formData.englishNames.map((name, index) => (
            <div key={index}>
              <input
                className='input'
                type="text"
                name={`englishName_${index}`}
                value={name}
                onChange={(e) => handleChange(e, 'englishNames', index)}
                placeholder="Enter English Name"
              />
              {index === formData.englishNames.length - 1 && (
                <button
                className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                  type="button"
                  style={{
                    background:
                    "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                 }}
                  onClick={() => handleAddName('englishNames')}
                >
                  Add English Name
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="picture">Picture (Link)</label>
          <input
            className='input'
            type="text"
            name="picture"
            value={formData.picture}
            onChange={(e) => handleChange(e, 'picture')}
            placeholder="Enter Picture Link"
          />
        </div>
        <div className="form-group">
          <label>Medical Uses</label>
          {formData.medicalUses.map((use, index) => (
            <div key={index} className="medical-use">
              <input
                className='input'
                type="text"
                name="symptom"
                value={use.symptom}
                onChange={(e) => handleChange(e, 'medicalUses', index)}
                placeholder="Symptom"
              />
              <textarea
                name="description"
                value={use.description}
                onChange={(e) => handleChange(e, 'medicalUses', index)}
                placeholder="Description"
              />
            </div>
          ))}
          <button 
            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
            type="button"
            style={{
              background:
              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
           }} 
            onClick={handleAddMedicalUse}>
            Add Medical Use
          </button>
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
};
