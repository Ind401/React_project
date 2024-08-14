
import './employeelist.css';
import React, { useState } from 'react';



const employees =[
  { id: 1, name: 'hukum', email: 'hukum@example.com', mobile: '1234567890', designation: 'HR', gender: 'Male', course: 'MCA', create: '13-Feb-21', action: <a href='/edit'>'Edit'</a> },
  { id: 2, name: 'manish', email: 'manish@example.com', mobile: '9876543210', designation: 'Sales', gender: 'Female', course: 'BCA', create: '12-Feb-21', action: <a href='/edit'>'Edit'</a> },
  { id: 2, name: 'yash', email: 'yash@example.com', mobile: '9876543210', designation: 'Manager', gender: 'male', course: 'BSC', create: '11-Feb-21', action: <a href='/edit'>'Edit'</a> },
  { id: 2, name: 'abhishek', email: 'abhishek@example.com', mobile: '9876543210', designation: 'HR', gender: 'male', course: 'MCA', create: '13-Feb-21', action: <a href='/edit'>'Edit'</a> },
 ];

function EmployeeList() {
  return (
   
    <div>
      <h2>Employee List</h2>
      <table>
        <thead >
          <tr>
          <th>Image</th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile No</th>
            <th>Designation</th>
            <th>Gender</th>
            <th>Course</th>
            <th>Create</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
                <td><img src={employee.image} alt={employee.name} width="50" height="50" /></td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.mobile}</td>
              <td>{employee.designation}</td>
              <td>{employee.gender}</td>
              <td>{employee.course}</td>
              <td>{employee.create}</td>
              <td>{employee.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <a href="/info"><button className='add' type="add">ADD</button></a>
    </div>
  );
}

export default EmployeeList;
