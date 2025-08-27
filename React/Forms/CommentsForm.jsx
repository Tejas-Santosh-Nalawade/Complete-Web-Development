import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <>
      <div>
        <h4>Give a Comments!</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            placeholder="User Name"
            onChange={handleInputChange}
            type="text"
            value={formData.username}
            id="username"
            name="username"
          />
          <br />
          <br />
          <label htmlFor="remarks">Remarks</label>
          <textarea
            value={formData.remarks}
            onChange={handleInputChange}
            placeholder="add few Remarks"
            id="remarks"
            name="remarks"
          >
            {" "}
          </textarea>
          <br /> <br />
          <label htmlFor="rating">Rating</label>
          <input
            placeholder="Rating"
            onChange={handleInputChange}
            value={formData.rating}
            type="number"
            min={1}
            max={5}
            id="rating"
            name="rating"
          />
          <br /> <br />
          <button>Add Comment</button>
        </form>
      </div>
    </>
  );
}
