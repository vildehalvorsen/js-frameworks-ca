import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Head from "../../components/layout/Head";
import MainHeading from "../../components/layout/headings/MainHeading";

export default function AdminPage() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    window.location.href = "/";
  }

  return (
    <>
      <Head title="Admin" />

      <div className="container">
        <MainHeading title="Admin" />
      </div>
    </>
  );
}
