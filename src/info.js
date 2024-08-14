import React, { useState } from 'react';
import './info.css';

function Info() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: [],
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        courses: checked
          ? [...prevData.courses, value]
          : prevData.courses.filter((course) => course !== value),
      }));
    } else if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        image: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className='input'onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Mobile No:</label>
        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
      </div>
      <div>
        <label>Designation:</label>
        <select name="designation" value={formData.designation} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" name="gender" value="Male" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
      </div>
      <div>
        <label>Courses:</label>
        <input type="checkbox" name="courses" value="React" checked={formData.courses.includes('React')} onChange={handleChange} /> React
        <input type="checkbox" name="courses" value="Node" checked={formData.courses.includes('Node')} onChange={handleChange} /> Node
        <input type="checkbox" name="courses" value="Python" checked={formData.courses.includes('Python')} onChange={handleChange} /> Python
      </div>
      <div>
        <label>Upload Image:</label>
        <input type="file" name="image" onChange={handleChange} />
      </div>
      <button className='label' type="submit">Submit</button>
    </form>
  );
}

export default Info;
