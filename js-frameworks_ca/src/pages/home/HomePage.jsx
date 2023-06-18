import Head from "../../components/layout/Head";
import MainHeading from "../../components/layout/headings/MainHeading";
import GetList from "./functions/GetList";

export default function HomePage() {
  return (
    <>
      <Head title="Home" />

      <div className="container">
        <MainHeading title="Home" />
        <GetList />
      </div>
    </>
  );
}
