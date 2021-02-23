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

function Cars() {
  return (
    <div>
      <main>
        <section className="px-4 py-2 mx-auto lg:py-2 max-w-7xl">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl text-text">
              Cars for sale
            </h1>
            <span>
              We have <b className="text-2xl md:text-3xl text-text">110</b> Cars
            </span>
          </div>
        </section>

        <section className="px-4 py-4 mx-auto max-w-7xl">
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
          </div>
        </section>

        <section className="flex px-4 pt-4 pb-20 mx-auto space-x-2 max-w-7xl">
          <a
            className="px-4 py-2 text-sm border border-gray-900 md:text-base"
            href="#"
          >
            1
          </a>
          <a
            className="px-4 py-2 text-sm border border-gray-900 md:text-base"
            href="#"
          >
            2
          </a>
          <a
            className="px-4 py-2 text-sm border border-gray-900 md:text-base"
            href="#"
          >
            3
          </a>
          <a
            className="px-4 py-2 text-sm border border-gray-900 md:text-base"
            href="#"
          >
            4
          </a>
          <a
            className="px-4 py-2 text-sm border border-gray-900 md:text-base"
            href="#"
          >
            5
          </a>
          <a
            className="px-4 py-2 text-sm border border-gray-900 md:text-base"
            href="#"
          >
            6
          </a>
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

export default Cars;
