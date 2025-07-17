import DescriptionLogin from "./DescriptionLogin"
import NavLogin from "../NavLogin"
import "../LoginPage.css"
import SignInTabs from "./SignInTabs"

const SignInDealer = () => {
  return (
    <>
      <NavLogin/>
      <SignInTabs/>
      <DescriptionLogin/>
    </>
  )
}

export default SignInDealer
