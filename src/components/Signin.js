import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

import GoogleButton from "react-google-button";

const style = {
  wrapper: `flex justify-center`,
};

const googleSignin = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

function Signin() {
  return (
    <div className={style.wrapper}>
      <GoogleButton onClick={googleSignin} />
    </div>
  );
}

export default Signin;
