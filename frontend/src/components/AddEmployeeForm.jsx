import axios from "axios";
import React, { useState } from "react";

const AddEmployeeForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [designation, setDesignation] = useState("");
  const [gender, setGender] = useState("");
  const [course, setCourse] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please upload an image");
      return;
    }

   

    try {
      const res = await axios.post("api/admin/addEmployee", {
        name,
        email,
        mobNumber:mobile,
        designation,
        gender,
        course,
        image
      }, {
        withCredentials: true,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/40 overflow-hidden">
      <form
        onSubmit={onSubmit}
        className="w-full h-full flex flex-col items-center justify-center gap-4 mt-10 "
      >
        <div className="bg-white w-[700px] flex flex-col items-center justify-center p-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-lg">
              Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-3 py-2 outline-none border border-black rounded-md"
              placeholder="Enter name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 outline-none border border-black rounded-md"
              placeholder="Enter email"
            />
          </div>

          {/* Mobile number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="mobile" className="text-lg">
              Mobile number
            </label>
            <input
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="px-3 py-2 outline-none border border-black rounded-md"
              placeholder="Enter mobile number"
            />
          </div>

          {/* Designation */}
          <div className="flex gap-2">
            <label htmlFor="designation" className="">
              Select Designation
            </label>
            <select
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            >
              <option value=""></option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          {/* Gender */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Select Gender</label>
            <div>
              <label htmlFor="male" className="text-lg">
                Male
                <input
                  type="radio"
                  id="male"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="female" className="text-lg">
                Female
                <input
                  type="radio"
                  id="female"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Course */}
          <div className="flex flex-col gap-2">
            <label className="text-lg">Select Course</label>
            <div>
              <label htmlFor="MCA" className="text-lg">
                MCA
                <input
                  type="radio"
                  id="MCA"
                  value="MCA"
                  checked={course === "MCA"}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </label>
            </div>
            <div>
              <label htmlFor="BCA" className="text-lg">
                BCA
                <input
                  type="radio"
                  id="BCA"
                  value="BCA"
                  checked={course === "BCA"}
                  onChange={(e) => setCourse(e.target.value)}
                />
              </label>
            </div>
          </div>

          {/* Image */}
          <div className="flex flex-col gap-2">
            <label htmlFor="image" className="text-lg">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/png, image/jpeg"
              id="image"
              onChange={handleFileChange}
              className="px-3 py-2 outline-none border border-black rounded-md"
            />
            {error && <span className="text-red-500">{error}</span>}
          </div>

          {/* Submit button */}
          <button
            className="bg-green-500 px-9 py-3 rounded-md hover:scale-95 transition-transform"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployeeForm;
