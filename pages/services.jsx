function Services() {
  return (
    <div>
      <main>
        <section className="px-4 py-2 mx-auto lg:py-2 max-w-7xl">
          {/* top section */}
          <div className="grid max-w-3xl gap-6 md:gap-8">
            <h1 className="text-4xl font-bold md:text-5xl text-text">
              Car Buyback
            </h1>
            <h3 className="text-xl font-bold text-text md:text-2xl">
              Lorem ipsum dolor sit amet.
            </h3>
            <form className="grid grid-cols-1 gap-2 lg:grid-cols-4 md:gap-4">
              <select className="block w-full rounded shadow-sm border-brand focus:border-brand focus:ring focus:ring-brand focus:ring-opacity-50">
                <option disabled selected>
                  Brand
                </option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
              </select>
              <select className="block w-full rounded shadow-sm border-brand focus:border-brand focus:ring focus:ring-brand focus:ring-opacity-50">
                <option disabled selected>
                  Model
                </option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
              </select>
              <select className="block w-full rounded shadow-sm border-brand focus:border-brand focus:ring focus:ring-brand focus:ring-opacity-50">
                <option disabled selected>
                  Other
                </option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
                <option>Lorem, ipsum.</option>
              </select>
              <div className="col-span-1 mt-4 lg:col-span-4 md:mt-2 lg:mt-4">
                <a
                  href="#"
                  className="inline-block w-full px-10 py-3 text-sm font-bold text-center transition-all border-2 md:w-auto md:py-3 text-text md:text-base md:px-11 bg-brand border-brand hover:bg-transparent"
                >
                  Submit Now
                </a>
              </div>
            </form>
            <div>
              <img
                src="https://api.фаворит-авто.рф/uploads/33e7ee1ee3ef42e986ced4c437ae86f6-1280.png"
                alt=""
              />
            </div>
          </div>

          {/* bottom section / text section */}
          <div className="max-w-3xl py-16 space-y-2">
            {/* When active */}
            {/* <div className="relative h-auto"> */}
            <div className="relative h-auto overflow-hidden">
              {/* When active */}
              {/* <div className="hidden"> */}
              <div className="absolute inset-0 hidden bg-gradient-to-t from-white"></div>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                sit nostrum blanditiis officiis voluptatibus aspernatur, odio
                saepe esse vel expedita corrupti odit consectetur impedit veniam
                soluta illo ad quas delectus.
              </p>
              <h3 className="text-2xl font-bold">Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reiciendis repudiandae aspernatur recusandae labore sit, earum
                sint tempore quod mollitia dolorem odio. Similique porro
                blanditiis natus, minima soluta reprehenderit ad?
              </p>
              <h3 className="text-2xl font-bold">Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
                deleniti, molestiae fuga fugiat perspiciatis eius eligendi unde
                ipsum iste architecto expedita, asperiores molestias iure sequi
                soluta, adipisci est praesentium officiis.
              </p>
              <h3 className="text-2xl font-bold">Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
                fugiat ut voluptates, temporibus quam eius pariatur quia
                laudantium repellat, nesciunt in itaque deserunt praesentium
                molestiae velit optio numquam non beatae!
                <ul className="list-disc list-inside">
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ul>
              </p>
              <h3 className="text-2xl font-bold">Lorem, ipsum dolor.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                ab itaque nobis repellat praesentium error delectus sapiente.
                Iure fugiat voluptatum dicta odio, sit tempora reiciendis,
                consectetur, voluptate laborum quia iusto.
              </p>
            </div>

            {/* button */}
            <a
              href="#"
              className="inline-block px-10 py-3 text-sm font-bold transition-all border-2 md:py-3 text-text md:text-base md:px-11 bg-brand border-brand hover:bg-transparent"
            >
              Lorem ipsum dolor sit.
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-cardBg">
        <div className="grid grid-cols-1 gap-4 px-4 pb-12 mx-auto md:gap-8 pt-7 md:grid-cols-2 lg:pt-8 lg:pb-2 lg:grid-cols-5 max-w-7xl">
          {/* Dropdown and social media icon */}
          <div>
            <div className="flex items-center justify-between px-4 py-3 mb-4 border rounded border-brand">
              <p className="text-sm text-text md:text-base">Lorem, ipsum.</p>
              <svg
                className="w-5 md:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex space-x-5 text-text">
              <a href="#">
                <svg
                  className="w-6 transition-all opacity-70 hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="w-6 transition-all opacity-70 hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="w-6 transition-all opacity-70 hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="w-6 transition-all opacity-70 hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#">
                <svg
                  className="w-6 transition-all opacity-70 hover:opacity-100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Second */}
          <div className="text-text">
            {/* Parent will repeat */}
            <div>
              <h5 className="text-sm font-bold md:text-base">Address</h5>
              <ul className="my-2 text-xs md:my-4 md:text-sm">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>

            <div className="text-text">
              <h5 className="text-sm font-bold md:text-base">Company</h5>
              <ul className="my-2 text-xs md:my-4 md:text-sm">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div className="text-text">
            <div>
              <h5 className="text-sm font-bold md:text-base">Services</h5>
              <ul className="my-2 text-xs md:my-4 md:text-sm">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>

          <div className="text-text">
            <div>
              <h5 className="text-sm font-bold md:text-base">Documents</h5>
              <ul className="my-2 text-xs md:my-4 md:text-sm">
                <li>Lorem, ipsum dolor.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="px-4 py-6 mx-auto max-w-7xl">
          <p className="mb-4 text-sm md:mb-8 md:text-base">
            &copy; Lorem ipsum dolor sit.
          </p>
          <p className="text-xs opacity-75 md:text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            labore tenetur. Voluptatem nostrum itaque facere?
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Services;
