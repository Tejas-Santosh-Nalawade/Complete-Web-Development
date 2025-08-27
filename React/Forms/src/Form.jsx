import { useState } from "react";

export default function form() {
  //   let [fullName, setFullName] = useState("");
  //   let [userName, setUserName] = useState("");
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: ""
  });
  //   let handleNameChange = (event) => {
  //     console.log(event.target.value);
  //     setFullName(event.target.value);
  //   };

  //   let handleUserName = (event) => {
  //     console.log(event.target.value);
  //     setUserName(event.target.value);
  //   };

  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newvalue = event.target.value;

    setFormData((currData) => {
      //   currData[fieldName] = newvalue;
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name: </label>
      <input
        placeholder="Enter Your Full Name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        // onChange={handleNameChange}
        id="fullName"
        name="fullName"
      />
      <br /> <br />
      <label htmlFor="userName">User Name: </label>
      <input
        placeholder="Enter User Name"
        type="text"
        value={formData.userName}
        onChange={handleInputChange}
        // onChange={handleUserName}
        id="userName"
        name="userName"
      />
      <br /> <br />
      <label htmlFor="password">Password: </label>
      <input
        placeholder="Enter Password"
        type="text"
        value={formData.password}
        onChange={handleInputChange}
        // onChange={handleNameChange}
        id="password"
        name="password"
      />
      <br /> <br />
      <button>Submit</button>
    </form>
  );
}
