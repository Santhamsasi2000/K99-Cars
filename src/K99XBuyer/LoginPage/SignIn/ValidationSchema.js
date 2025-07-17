const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  panCard: Yup.string()
    .required("PAN card is required")
    .matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN format"),
  state: Yup.string().required("Please select a state"),
  mobileNo: Yup.string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Enter valid 10-digit Indian mobile number"),
  acceptTerms: Yup.bool().oneOf([true], "You must accept the terms"),
});
