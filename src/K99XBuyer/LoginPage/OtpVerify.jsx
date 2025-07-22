import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import NavLogin from "./NavLogin";
import FooterBuyer from "../FooterBuyer/FooterBuyer";

const OtpVerify = () => {
  const [otpInput, setOtpInput] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(30);
  const navigate = useNavigate();

  const handleResend = () => {
    setSeconds(30);
    setOtpInput(["", "", "", ""]);
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  // Handle each digit change
  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return; // only digits

    const newOtp = [...otpInput];
    newOtp[index] = value;
    setOtpInput(newOtp);

    // Move to next input
    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) next.focus();
    }
  };

  const formik = useFormik({
    initialValues: { otp: "" },
    onSubmit: () => {
      const fullOtp = otpInput.join("");
      if (fullOtp.length < 4 || otpInput.includes("")) {
        alert("Please enter all 4 digits of the OTP");
        return;
      }

      // You can add API verification here
      console.log("OTP Entered:", fullOtp);
      navigate("/update-details"); // replace with your actual path
    },
  });

  return (
    <>
     <NavLogin/>
     <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
      <h2 className="bold-900 text-center mb-4">OTP Verification</h2>

      <form className="card p-4" onSubmit={formik.handleSubmit}>
        <p className="mb-0">OTP sent to 6369499234</p>

        <div className="d-flex gap-3 my-4">
          {otpInput.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              type="text"
              maxLength="1"
              className="form-control text-center"
              style={{ width: "50px", fontSize: "24px" }}
              value={digit}
              onChange={(e) => handleChange(e.target.value, i)}
            />
          ))}
        </div>

        <button type="submit" className="btn btn-primary mb-3">
          Verify OTP
        </button>

        <div>
          {seconds > 0 ? (
            <span>Resend OTP in {seconds}s</span>
          ) : (
            <button className="btn btn-link p-0" onClick={handleResend}>
              Resend OTP
            </button>
          )}
        </div>
      </form>
     </section>
     <FooterBuyer/>
    </>
  );
};

export default OtpVerify;
