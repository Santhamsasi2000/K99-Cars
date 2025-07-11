import DescriptionLogin from "./DescriptionLogin"
import FormLogin from "./FormLogin"
import NavLogin from "./NavLogin"

const LoginPage = () => {
  return (
    <>
      <NavLogin/>
      <div className="p-3 p-sm-4 p-md-5">
        <FormLogin/>
        <DescriptionLogin/>
      </div>
    </>
  )
}

export default LoginPage
