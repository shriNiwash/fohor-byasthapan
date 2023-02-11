import Head from "next/head";
import Script from "next/script";
import Navbar from "./component/navbar";

const Index = () =>{
  return(<>
  <Head>
  <title>Fohor management</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"  />
  </Head>
  <Navbar />
  <h1>Hello there</h1>


  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ></Script>
  </>)
}

export default Index;