import React, { useState } from "react";

export default function FormVanilla() {
  // start with capital letters: Not a component (name starts with lowercase)
  const [state, setState] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('handleSubmit', state);
  };

  return (
    <div className="FormVanilla">
      <form onSubmit={handleSubmit}>
        <h2>Vanilla ReactJS forms</h2>
        <div className="form-control">
          <label>Email</label>

          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
