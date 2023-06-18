import Head from "../../components/layout/Head";
import LoginForm from "./functions/LoginForm";
import MainHeading from "../../components/layout/headings/MainHeading";

export default function LogInPage() {
  return (
    <>
      <Head title="Log in" />

      <div className="container">
        <MainHeading title="Log in" />

        <LoginForm />
      </div>
    </>
  );
}
