import React from "react";
import Head from "../../components/layout/Head";
import DisplayListDetail from "./functions/GetListDetail";

export default function DetailPage() {
  return (
    <>
      <Head title="Details" />

      <div className="container">
        <DisplayListDetail />
      </div>
    </>
  );
}
