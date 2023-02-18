import { auth } from "../firebase";

const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`,
};

const Logout = () => {
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      Logout
    </button>
  );
};

export default Logout;
