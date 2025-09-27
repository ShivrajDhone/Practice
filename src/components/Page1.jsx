import React from "react";

const Page1 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow rounded-4 p-4" style={{ width: "100%", maxWidth: "450px" }}>
        <h3 className="text-center mb-4 fw-bold">Registration Form</h3>

        <form>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter password" required />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label htmlFor="confirm" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirm" placeholder="Confirm password" required />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select className="form-select" required>
              <option value="">Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Terms & Conditions */}
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label htmlFor="terms" className="form-check-label">
              I agree to the terms & conditions
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page1;
