import Footer from "../FooterSection/Footer";

import "./Contact.css";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col gap-10 bg-[#0F172A] md:ml-72 py-5 text-white contact-section"
    >
      <div className="flex flex-col justify-center p-3 grow">
        <h1 className="self-center font-bold text-4xl md:text-6xl">Contact</h1>
        <p className="mt-10 text-center">
          If you would like to discuss further, please contact me.
        </p>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2">
            <div className="flex flex-col self-center md:m-20 mt-5 p-5 py-10 border rounded">
              <img
                src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1718092069/Portfolio-Website/accept-call-icon_kfjb56.svg"
                alt="call"
                className="self-center h-[50px] md:h-[80px]"
              />
              <p className="mt-5 text-xl text-center">
                <span className="font-semibold">Phone</span> <br />
                <a href="tel:+918148526264" className="hover:underline">
                  +91 8675748207
                </a>
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex flex-col self-center md:m-20 mt-5 px-5 py-10 border rounded">
              <img
                src="https://res.cloudinary.com/drdl4pdnx/image/upload/v1718092069/Portfolio-Website/gmail-icon_odbyt0.svg"
                alt="email"
                className="self-center h-[50px] md:h-[80px]"
              />
              <p className="mt-5 text-xl text-center">
                <span className="font-semibold">Email</span> <br />
                <a
                  href="mailto:manideveloper.designer@gmail.com"
                  className="hover:underline"
                >
                  manibct1817@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
