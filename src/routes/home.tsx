import { auth } from "firebase-app";

export default function Home() {
  const logOut = () => {
    auth.signOut();
  };

  return (
    <h1>
      <button onClick={logOut}>Logout</button>
    </h1>
  );
}
