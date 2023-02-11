import Image from "next/image";
import Head from "next/head";
import Navbar from "./component/navbar";
const Contact = () => {
  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <title>Romario - Contact</title>
      </Head>
      <Navbar />
      <div className="container">
        <div className="heading">
          <span id="contact">contact</span>
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <form action="">
          <div className="contacr-one mt-5">
            <div className="row">
              <div className="col-4">
                <input type="text" placeholder="Name"  className="form-input" required/>
              </div>
              <div className="col-4">
                <input type="text" placeholder="Email Address"className="form-input" required/>
              </div>
              <div className="col-4">
                <input type="name" placeholder="Subject" className="form-input" required/>
              </div>
              <div className="col-12 mt-3" id="text">
                <textarea
                  name="message"
                  placeholder="Message"
                  id="text"required
                ></textarea>
              </div>
              <div className="col-12 mt-5">
                <div className="input-field text-center mt-30">
                  <button className="button-send" type="submit">
                    SEND MESSAGE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
 
    </>
  );
};

export default Contact;
