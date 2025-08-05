import DescriptionLogin from "./DescriptionLogin"
import NavLogin from "../NavLogin"
import "./SignInDealer.css"
import SignInTabs from "./SignInTabs"
import FooterBuyer from "../../FooterBuyer/FooterBuyer"

const SignInDealer = () => {
  return (
    <>
      <NavLogin/>
      <div className="p-3 p-sm-4 p-md-5 tintorange-bg">
        <SignInTabs/>
      </div>
      <FooterBuyer/>
    </>
  )
}

export default SignInDealer
