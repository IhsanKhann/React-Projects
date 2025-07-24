import React, { useState } from 'react';

function MultiInputForm() {
    // Beginner code: will code seperate states for all the different input fields.
    // Good Approach. A single object for all.
    const [form,setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        age: '',
        gender: '',
        country: '',
    })

    //Remember the keys of the objects/attributes must match the names of an input field. This help us later in changing.

    const handleChange = (e) => {
        let name = e.target.name 
        let value = e.target.value 

        setForm((prev) => ({
            ...prev,
           [name]:value,
        }))
    }

     // if not this e.target.name. We would have then wrote things like.
            // firstName: e.target.value,
            // lastName: e.target.value,
            // email: e.target.value,
            // password: e.target.value,
            // age: e.target.value,
            // gender: e.target.value,
            // country: e.target.value,

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form) 
    }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Profile Form</h2>

      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          placeholder="John"
          required
          minLength={2}
          onChange={handleChange}
        />
      </label><br/><br/>

      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={form.lastName}
          placeholder="Doe"
          required
          onChange={handleChange}
        />
      </label><br/><br/>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={form.email}
          placeholder="john@example.com"
          onChange={handleChange}
          required
        />
      </label><br/><br/>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="••••••••"
          required
          minLength={6}
          onChange={handleChange}
        />
      </label><br/><br/>

      <label>
        Age:
        <input
          type="number"
          name="age"
          value={form.age}
          placeholder="18"
          required
          min="1"
          onChange={handleChange}
        />
      </label><br/><br/>

      <label>
        Gender:
        <select name="gender" onChange={handleChange} value={form.gender} required>
          <option value="">-- Select Gender --</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label><br/><br/>

      <label>
        Country:
        <input
          type="text"
          name="country"
          value={form.country}
          placeholder="Pakistan"
          onChange={handleChange}
          required
        />
      </label><br/><br/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default MultiInputForm;
