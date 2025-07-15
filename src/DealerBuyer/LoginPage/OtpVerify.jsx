import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OtpVerify = () => {
  const [otpInput, setOtpInput] = useState(["", "", "", ""]);
  const [seconds, setSeconds] = useState(30);
  const navigate = useNavigate();

  const mobile = sessionStorage.getItem("mobile");
  const realOtp = sessionStorage.getItem("otp");

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otpInput];
    newOtp[index] = value;
    setOtpInput(newOtp);

    // Auto focus next
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otpInput.join("");
    if (enteredOtp === realOtp) {
      alert("✅ OTP Verified!");
      sessionStorage.clear();
      navigate("/");
    } else {
      alert("❌ Incorrect OTP");
    }
  };

  const handleResend = () => {
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    sessionStorage.setItem("otp", newOtp);
    console.log("Resent OTP:", newOtp);
    setSeconds(30);
  };

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <section className="p-3 p-sm-4 p-md-5 d-flex flex-column align-items-center w-100">
       <h2 className="bold-900 text-center mb-4">OTP Verification</h2>
      <div className="card p-4">
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

        <button className="btn btn-primary mb-3" onClick={handleVerify}>
            Verify OTP
        </button>

        <div>
            {seconds > 0 ? (
            <span>Resend OTP in {seconds}s</span>
            ) : (
            <button className="btn btn-link" onClick={handleResend}>
                Resend OTP
            </button>
            )}
        </div>
      </div>
    </section>
  );
};

export default OtpVerify;

