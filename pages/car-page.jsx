const cars = [
  {
    name: "Volkswagen Polo 1",
    year: "1998",
    price: "79 000",
    image:
      "https://api.фаворит-авто.рф/uploads/f67b92aac0a6451880cbb42cb2b3cf28-1280.JPG",
  },
  {
    name: "Volkswagen Polo 1",
    year: "1998",
    price: "79 000",
    image:
      "https://api.фаворит-авто.рф/uploads/f67b92aac0a6451880cbb42cb2b3cf28-1280.JPG",
  },
  {
    name: "Volkswagen Polo 1",
    year: "1998",
    price: "79 000",
    image:
      "https://api.фаворит-авто.рф/uploads/f67b92aac0a6451880cbb42cb2b3cf28-1280.JPG",
  },
];

const questions = [
  {
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium provident optio iste aperiam unde quasi quia dicta dolorum, rem eos non impedit incidunt quibusdam, harum neque, eveniet facilis hic!",
  },
  {
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium provident optio iste aperiam unde quasi quia dicta dolorum, rem eos non impedit incidunt quibusdam, harum neque, eveniet facilis hic!",
  },
  {
    question: "Lorem ipsum dolor sit",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium provident optio iste aperiam unde quasi quia dicta dolorum, rem eos non impedit incidunt quibusdam, harum neque, eveniet facilis hic!",
  },
];

function About() {
  return (
    <div>
      <main>
        {/* Title on normal, not scrolled yet */}
        <section className="grid grid-rows-2 gap-2 px-4 py-2 mx-auto grid-cols-car-page-mobile lg:gap-x-4 lg:grid-cols-car-page lg:py-2 max-w-7xl">
          <div className="flex items-center col-start-3 lg:row-start-1 lg:row-end-2 lg:col-span-full">
            <svg
              className="w-3 mr-1 lg:w-4 md:mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-xs md:text-sm lg:text-base">Back to home</p>
          </div>
          <div className="col-span-2 row-start-1 lg:row-start-2 lg:col-span-1">
            <h1 className="text-sm font-bold md:text-base lg:text-4xl text-text">
              Volkswagen Polo I
            </h1>
          </div>
          <div>
            <p className="text-sm md:text-base lg:text-4xl text-text">1998</p>
          </div>
          <div className="">
            <p className="text-sm opacity-50 md:text-base lg:text-4xl text-text">
              79 000 ₽
            </p>
          </div>
          <div>
            <a href="#" className="flex items-center">
              <svg
                className="w-4 mr-1 lg:mr-2 lg:w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-xs font-bold md:text-sm">Buy Now</p>
            </a>
          </div>
        </section>

        <section className="px-4 mx-auto py-14 md:py-10 lg:pt-10 lg:pb-4 max-w-7xl">
          {/* Mobile mode */}
          <div className="block md:hidden">
            <img
              src="https://api.фаворит-авто.рф/uploads/f67b92aac0a6451880cbb42cb2b3cf28-1280.JPG"
              alt=""
            />
          </div>

          {/* Tab & Desktop mode */}
          <div className="hidden grid-cols-2 gap-12 md:grid">
            <div>
              <img
                src="https://api.фаворит-авто.рф/uploads/f67b92aac0a6451880cbb42cb2b3cf28-1280.JPG"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://api.фаворит-авто.рф/uploads/f67b92aac0a6451880cbb42cb2b3cf28-1280.JPG"
                alt=""
              />
            </div>
          </div>

          <div className="flex space-x-6 mt-9">
            <div className="w-4 h-2 md:w-6 lg:w-10 bg-brand"></div>
            <div className="w-4 h-2 bg-gray-300 md:w-6 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 md:w-6 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 md:w-6 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 md:w-6 lg:w-10"></div>
          </div>
        </section>

        <section className="px-4 mx-auto py-14 lg:py-12 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              Characteristics
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-1 lg:gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
            <div>
              <b className="mr-4">Lorem</b>
              <span>Ipsum</span>
            </div>
          </div>
        </section>

        <hr />

        <section className="px-4 mx-auto py-14 lg:py-12 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              Equipment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
            <p>Lorem, ipsum.</p>
          </div>
        </section>

        <hr />

        <section className="px-4 mx-auto py-14 lg:py-12 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              Information
            </h2>
          </div>
          <div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
              repellat. Pariatur omnis eum cumque aut minima, sed temporibus.
              Voluptates temporibus, dolores nihil nemo excepturi porro
              repudiandae numquam quia odit quod?
            </p>
          </div>
        </section>

        <section className="px-4 mx-auto py-14 lg:py-12 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              Buy This Car
            </h2>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              perspiciatis porro magnam modi, sed soluta.
            </p>
            <div class="max-w-md">
              <div class="grid grid-cols-1">
                <label class="block">
                  <input
                    type="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand focus:ring focus:ring-brand focus:ring-opacity-50 my-2"
                    placeholder=""
                  />
                  {/* <span class="text-brand">Full name</span> */}
                </label>
                <div class="block">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="rounded border-gray-300 text-brand shadow-sm focus:border-brand focus:ring focus:ring-brand focus:ring-opacity-50"
                    />
                    <span class="ml-2">Lorem ipsum dolor sit amet.</span>
                  </label>
                </div>
                <div class="block">
                  <label class="inline-flex items-center">
                    <input
                      type="checkbox"
                      class="rounded border-gray-300 text-brand shadow-sm focus:border-brand focus:ring focus:ring-brand focus:ring-opacity-50"
                    />
                    <span class="ml-2">
                      Lorem ipsum dolor sit amet consectetur.
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 mx-auto py-14 lg:py-12 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              Question Answer
            </h2>
          </div>
          <div className="grid gap-7 lg:gap-8">
            {questions.map((item, index) => (
              <div className="px-6 py-4 rounded bg-cardBg" key={index}>
                <h5 className="text-sm font-bold text-text md:text-base">
                  {item.question}
                </h5>
                <p className="hidden mt-4 text-sm text-text md:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
            <div>
              <a
                href="#"
                className="inline-block px-10 py-3 text-sm font-bold transition-all border-2 md:py-4 text-text md:text-base md:px-11 bg-brand border-brand hover:bg-transparent"
              >
                Lorem, ipsum dolor.
              </a>
            </div>
          </div>
        </section>

        <section className="px-4 mx-auto py-14 lg:py-12 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              You may also like
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {cars.map((item, index) => (
              <a href="#" key={index}>
                <div className="flex flex-col overflow-hidden transition-all rounded bg-cardBg hover:bg-cardBgHover hover:shadow-lg">
                  <div className="flex justify-center h-auto overflow-hidden lg:h-auto md:h-64">
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover w-full transition-all transform scale-100 hover:scale-110"
                    />
                  </div>
                  <div className="px-4 py-2">
                    <p className="text-text">
                      <b>{item.name}</b> <span>{item.year}</span>
                    </p>
                    <p className="opacity-50 text-text">{item.price} ₽</p>
                  </div>
                </div>
              </a>
            ))}
            <div>
              <h3 className="text-2xl font-bold text-text">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="py-3 text-sm text-text md:text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Praesentium at, dolorem modi odio voluptatibus in?
              </p>
              <a
                href="#"
                className="inline-block px-10 py-3 text-sm font-bold transition-all border-2 md:py-4 text-text md:text-base md:px-11 bg-brand border-brand hover:bg-transparent"
              >
                Lorem, ipsum dolor.
              </a>
            </div>
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

export default About;
