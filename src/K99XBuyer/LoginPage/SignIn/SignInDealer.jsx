import DescriptionLogin from "./DescriptionLogin"
import NavLogin from "../NavLogin"
import "../LoginPage.css"
import SignInTabs from "./SignInTabs"
import FooterBuyer from "../../FooterBuyer"

const SignInDealer = () => {
  return (
    <>
      <NavLogin/>
      <SignInTabs/>
      <DescriptionLogin/>
      <FooterBuyer/>
    </>
  )
}

export default SignInDealer
