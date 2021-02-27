import Head from "next/head";

const services = [
  {
    name: "White Car",
    description: "Im not batman with fancy BatMobile",
    image:
      "https://api.фаворит-авто.рф/uploads/33e7ee1ee3ef42e986ced4c437ae86f6-1280.png",
  },
  {
    name: "White Car",
    description: "Im not batman with fancy BatMobile",
    image:
      "https://api.фаворит-авто.рф/uploads/33e7ee1ee3ef42e986ced4c437ae86f6-1280.png",
  },
  {
    name: "White Car",
    description: "Im not batman with fancy BatMobile",
    image:
      "https://api.фаворит-авто.рф/uploads/33e7ee1ee3ef42e986ced4c437ae86f6-1280.png",
  },
  {
    name: "White Car",
    description: "Im not batman with fancy BatMobile",
    image:
      "https://api.фаворит-авто.рф/uploads/33e7ee1ee3ef42e986ced4c437ae86f6-1280.png",
  },
  {
    name: "White Car",
    description: "Im not batman with fancy BatMobile",
    image:
      "https://api.фаворит-авто.рф/uploads/33e7ee1ee3ef42e986ced4c437ae86f6-1280.png",
  },
];

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

const benefits = [
  {
    benefit: "This is random benefits from looping.",
  },
  {
    benefit: "This is random benefits from looping.",
  },
  {
    benefit: "This is random benefits from looping.",
  },
  {
    benefit: "This is random benefits from looping.",
  },
];

const teams = [
  {
    name: "John Doe",
    job: "Used Car Assessment Expert",
    image:
      "https://api.фаворит-авто.рф/uploads/2b2441f07b0d40a3a665c51a9d281687-1280.jpg",
  },
  {
    name: "John Doe",
    job: "Used Car Assessment Expert",
    image:
      "https://api.фаворит-авто.рф/uploads/2b2441f07b0d40a3a665c51a9d281687-1280.jpg",
  },
  {
    name: "John Doe",
    job: "Used Car Assessment Expert",
    image:
      "https://api.фаворит-авто.рф/uploads/2b2441f07b0d40a3a665c51a9d281687-1280.jpg",
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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Favorite Auto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="relative overflow-hidden bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">Workflow</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 62 62"
                          fill="none"
                          className="w-auto h-8 md:h-12"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              id="logo"
                              transform="translate(0.000000, -1.000000)"
                              fill="#facc15"
                            >
                              <path d="M50.6,24.2 C51.4,25.2 49.3,24.9 49.6,25.4 L50.3,26.4 L50.3,31.8 C50.3,31.8 50.3,32.8 50.1,32.8 L47.4,32.8 C47,32.8 47,31.8 46.6,31.8 L41.7,31.8 L40,29.6 C40,29.6 39.6,29.2 36.2,29.2 L33.2,29.2 L33.2,26.7 L34.2,25.3 C34.4,25.1 32.2,25.3 33,24.2 C33.4,23.7 35,24.2 35.3,23.9 L37,21.7 C37,21.7 37.1,21.5 38.8,21.5 L44.4,21.5 C46.4,21.5 46.6,21.7 46.6,21.7 L48.4,23.9 C48.5,24.1 50.2,23.7 50.6,24.2 L50.6,24.2 Z M46,27.9 C48.2,28 49.7,27.7 49.2,26.4 C46.5,26.6 46,26.7 46,27.9 Z M34.2,26.4 C33.7,27.7 35.2,28 37.4,27.9 C37.4,26.7 36.9,26.6 34.2,26.4 Z M45.4,22.2 L38,22.2 C37.7,22.3 35.7,24.8 35.7,24.8 L47.7,24.8 C47.7,24.8 45.7,22.3 45.4,22.2 Z M12.9,32.8 C12.7,32.8 12.7,31.9 12.7,31.8 C12.7,31.1 12.5,27 12.7,26.7 L13.6,25.4 C13.7,25.2 11.6,25.3 12.4,24.2 C12.8,23.8 14.4,24.2 14.7,24 L16.4,21.7 C16.4,21.7 16.4,21.5 18.2,21.5 L23.8,21.5 C25.8,21.5 26,21.7 26,21.7 L28,24 C28.1,24.2 29.8,23.8 30.2,24.2 C31,25.2 29,24.9 29.2,25.4 L29.9,26.4 L29.9,29.2 L26.8,29.2 C23.8,29.2 23.6,29.6 23.6,29.6 L21.9,31.9 L16.6,31.9 C16.2,31.9 16.1,32.9 15.6,32.9 L13,32.9 L12.9,32.8 Z M25.5,28 C27.8,28.2 29.2,27.9 28.8,26.6 C26.1,26.8 25.5,26.9 25.5,28 Z M27.2,24.9 L25,22.3 L17.5,22.3 C17.2,22.3 15.3,24.8 15.3,24.8 L27.3,24.8 L27.2,24.8 L27.2,24.9 Z M16.9,28 C16.9,26.9 16.4,26.8 13.7,26.6 C13.3,27.9 14.7,28.2 16.9,28 L16.9,28 Z M21.7,33.6 L24.2,30.4 C24.2,30.4 24.4,30 27,30 L35.4,30 C38.4,30 38.8,30.4 38.8,30.4 L41.4,33.7 C41.6,34 44.2,33.4 44.8,34.1 C46,35.6 42.8,35.1 43.4,35.9 C44,36.9 44.4,37.2 44.4,37.4 L44.4,45.4 C44.4,45.5 44.4,46.9 44,46.9 L39.9,46.9 C39.4,46.9 39.4,45.5 38.8,45.5 L24.3,45.5 C23.8,45.5 23.7,46.9 22.8,46.9 L19.1,46.9 C18.7,46.9 18.7,45.5 18.7,45.5 C18.7,44.3 18.5,38.2 18.7,37.8 L20.1,35.8 C20.3,35.5 17.1,35.7 18.3,34.1 C18.9,33.4 21.5,34.1 21.7,33.6 L21.7,33.6 Z M38,39.6 C41.4,39.8 43.6,39.4 43,37.4 C38.8,37.7 38,37.9 38,39.6 Z M41.4,35.6 C41.4,35.6 38.2,31.3 37.7,31.1 C33.6,31 29.5,31 25.4,31.1 C23.989145,32.4356759 22.7160827,33.909748 21.6,35.5 L41.4,35.5 L41.4,35.6 Z M25,39.6 C25.1,37.9 24.2,37.6 20.1,37.4 C19.4,39.4 21.7,39.8 25.1,39.6 L25,39.6 Z"></path>
                              <g
                                id="arrows"
                                transform="translate(0.904000, 0.972520)"
                              >
                                <path d="M61.0959997,30.0274799 C61.1509603,40.1170275 56.0627428,49.5396523 47.5959997,55.0274799 C39.192939,60.6210207 28.5822918,61.7418637 19.1959997,58.0274799 L19.1959997,53.0274799 C29.8079694,58.3086727 42.6438088,55.8071194 50.4959997,46.9274799 C58.202051,38.0459695 58.7415255,25.0155842 51.7959997,15.5274799 L51.7959997,20.9274799 L47.2959997,20.9274799 L47.2959997,7.22747988 L61.0959997,7.22747988 L61.0959997,11.9274799 L54.9959997,11.9274799 C58.9959997,17.1274799 61.0959997,23.5274799 61.0959997,30.0274799 Z"></path>
                                <path d="M4.79599966,30.2274799 C4.79599966,35.8274799 6.59599966,40.9274799 9.79599966,45.0274799 L9.79599966,39.6274799 L14.1959997,39.6274799 L14.1959997,53.2274799 L0.295999659,53.2274799 L0.295999659,48.4274799 L6.49599966,48.4274799 C0.162387462,40.4994801 -1.68528621,29.8865764 1.59640823,20.2845815 C4.87810267,10.6825867 12.8349211,3.42058532 22.6959997,1.02747988 C29.2288614,-0.697688759 36.146488,-0.24119563 42.3959997,2.32747988 L42.3959997,7.52747988 C30.0343567,1.39116609 15.0321019,5.89621636 8.09599966,17.8274799 C5.93592245,21.6033172 4.79845514,25.8774368 4.79599966,30.2274799 Z"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </a>
                      <div className="flex items-center -mr-2 md:hidden">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Product
                    </a>

                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Marketplace
                    </a>

                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Company
                    </a>

                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Log in
                    </a>
                  </div>
                </nav>
              </div>

              <div className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden">
                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <span className="sr-only">Close main menu</span>
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <a
                      href="#"
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      Product
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      Features
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      Marketplace
                    </a>

                    <a
                      href="#"
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      Company
                    </a>
                  </div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 font-medium text-center text-indigo-600 bg-gray-50 hover:bg-gray-100"
                  >
                    Log in
                  </a>
                </div>
              </div>

              <main className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Data to enrich your</span>
                    <span className="block text-indigo-600 xl:inline">
                      online business
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                    qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                    occaecat fugiat aliqua.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      </header>

      <main>
        {/* Services */}
        <section className="px-4 mx-auto py-14 lg:pt-12 lg:pb-32 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-text lg:text-4xl">
              Services
            </h2>
          </div>
          {/* service mobile */}
          <div className="block lg:hidden">
            <div className="flex">
              <div className="transition-all rounded bg-cardBg hover:bg-cardBgHover hover:shadow-lg">
                <a href="#" className="inline-block px-3 py-5">
                  <h3 className="text-2xl font-bold text-text">
                    {services[0].name}
                  </h3>
                  <p className="my-2">{services[0].description}</p>
                  <img src={services[0].image} alt="" />
                </a>
              </div>
            </div>
            <div className="flex space-x-5 mt-14">
              <div className="w-4 h-2 bg-brand"></div>
              <div className="w-4 h-2 bg-gray-300"></div>
              <div className="w-4 h-2 bg-gray-300"></div>
              <div className="w-4 h-2 bg-gray-300"></div>
              <div className="w-4 h-2 bg-gray-300"></div>
              <div className="w-4 h-2 bg-gray-300"></div>
              <div className="w-4 h-2 bg-gray-300"></div>
            </div>
          </div>

          {/* service desktop */}
          <div className="hidden grid-cols-3 gap-8 lg:grid">
            {services.map((item, index) => (
              <div
                className="transition-all rounded bg-cardBg hover:bg-cardBgHover hover:shadow-lg"
                key={index}
              >
                <a href="#" className="inline-block p-6">
                  <h3 className="text-2xl font-bold text-text">{item.name}</h3>
                  <p className="my-2 text-text">{item.description}</p>
                  <img src={item.image} alt="" />
                </a>
              </div>
            ))}
            <div className="grid grid-rows-2 gap-8">
              <div className="transition-all rounded bg-cardBg hover:bg-cardBgHover hover:shadow-lg">
                <a href="#" className="inline-block p-6">
                  <h3 className="text-2xl font-bold text-text">
                    Lorem ipsum dolor sit.
                  </h3>
                  <p className="my-2 text-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae, hic.
                  </p>
                </a>
              </div>
              <div className="transition-all rounded bg-cardBg hover:bg-cardBgHover hover:shadow-lg">
                <a href="#" className="inline-block p-6">
                  <h3 className="text-2xl font-bold text-text">
                    Lorem, ipsum dolor.
                  </h3>
                  <p className="my-2 text-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="px-4 mx-auto py-14 lg:pt-4 lg:pb-32 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-text lg:text-4xl">
              Reviews
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex justify-center">
              <a
                href="#"
                className="inline-block w-56 h-56 overflow-hidden rounded-full"
              >
                <img
                  src="https://api.фаворит-авто.рф/uploads/8285a45234ba4486b4841ba9faae0898-1280.jpg"
                  alt=""
                  className="w-full"
                />
              </a>
            </div>
            <div className="flex flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 975 975"
                className="w-7 lg:w-8"
              >
                <path
                  fill="#F0C150"
                  d="M925 57.2H621a50 50 0 0 0-50 50v304a50 50 0 0 0 50 50h145.5c-1.9 79.6-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8a50 50 0 0 0-24.8 67.1l36 76c11.6 24.4 40.3 35.1 65.1 24.4a555.9 555.9 0 0 0 167.7-108.8c55.6-53.7 93.7-114.3 114.3-181.9 20.6-67.6 31-159.8 31-276.8v-239a50 50 0 0 0-50-50zM106 913.5a565.3 565.3 0 0 0 167-108.6c56-53.7 94.3-114.1 115-181.2 20.5-67.1 30.8-159.6 30.8-277.5v-239a50 50 0 0 0-50-50h-304a50 50 0 0 0-50 50v304a50 50 0 0 0 50 50h145.5c-1.9 79.6-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8a50 50 0 0 0-24.8 67.1l36 75.8a50.1 50.1 0 0 0 65.2 24.4z"
                ></path>
              </svg>
              <p className="mt-2 text-sm mb-7 lg:mb-8 md:text-base text-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum officia, error consequuntur soluta eos quod fugit.
                Tenetur illo cumque iure et ea similique dolore praesentium
                quod, reprehenderit neque molestiae at!
              </p>
              <h4 className="mb-2 text-lg font-bold lg:text-xl text-text">
                John Doe
              </h4>
              <h5 className="text-base font-bold text-text">
                Lorem ipsum dolor sit amet.
              </h5>
            </div>
          </div>
          <div className="flex mt-6 space-x-6">
            <div className="w-4 h-2 lg:w-10 bg-brand"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
          </div>
        </section>

        {/* Car arrivals */}
        <section className="px-4 mx-auto py-14 lg:pt-4 lg:pb-32 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              Latest Car Arrivals
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {cars.map((item, index) => (
              <a href="#" key={index}>
                <div className="flex flex-col overflow-hidden transition-all duration-500 rounded bg-cardBg hover:bg-cardBgHover hover:shadow-lg">
                  <div className="flex justify-center h-auto overflow-hidden lg:h-auto md:h-64">
                    <img
                      src={item.image}
                      alt=""
                      className="object-cover w-full transition-all duration-500 transform scale-100 hover:scale-110"
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
                className="inline-block px-10 py-3 text-sm font-bold transition-all border-2 md:py-3 text-text md:text-base md:px-11 bg-brand border-brand hover:bg-transparent"
              >
                Lorem, ipsum dolor.
              </a>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="px-4 mx-auto py-14 lg:pt-4 lg:pb-32 max-w-7xl">
          <div>
            <h2 className="mb-4 text-4xl font-bold text-text">Benefits</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 py-4 lg:grid-cols-2">
            {benefits.map((item, index) => (
              <div className="flex items-center" key={index}>
                <svg
                  className="w-4 mr-5 lg:mr-6 md:w-6 text-brand"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="5 5 10 10"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-text md:text-base">{item.benefit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section className="grid grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2 py-14 lg:pt-4 lg:pb-32 max-w-7xl">
          <div>
            <img
              src="https://api.фаворит-авто.рф/uploads/63307e0d5ddc4fcc8c7946d04651ee86-1280.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-3xl font-bold text-text lg:text-4xl">
              About Company
            </h2>
            <p className="mb-2 text-sm lg:text-base">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              laudantium provident optio iste aperiam unde quasi quia dicta
              dolorum, rem eos non impedit incidunt quibusdam, harum neque,
              eveniet facilis hic!
            </p>
            <div>
              <a
                href="#"
                className="inline-block px-10 py-3 text-sm font-bold transition-all border-2 md:py-4 text-text md:text-base md:px-11 bg-brand border-brand hover:bg-transparent"
              >
                Lorem ipsum dolor sit.
              </a>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="px-4 mx-auto py-14 lg:pt-4 lg:pb-32 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-text lg:text-4xl">
              Our Teams
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {teams.map((person, index) => (
              <div className="bg-cardBg" key={index}>
                <img src={person.image} alt="" />
                <div className="px-4 py-2">
                  <h4 className="text-lg font-bold lg:text-xl text-text">
                    {person.name}
                  </h4>
                  <h5 className="text-sm font-bold lg:text-base text-text">
                    {person.job}
                  </h5>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-6 space-x-6">
            <div className="w-4 h-2 lg:w-10 bg-brand"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
            <div className="w-4 h-2 bg-gray-300 lg:w-10"></div>
          </div>
        </section>

        {/* Question */}
        <section className="px-4 mx-auto lg:pt-4 py-14 lg:pb-32 max-w-7xl">
          <div>
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl text-text">
              Question Answer
            </h2>
          </div>
          <div className="grid gap-8">
            {questions.map((item, index) => (
              <div className="px-6 py-4 rounded bg-cardBg" key={index}>
                <h5 className="text-sm font-bold text-text md:text-base">
                  {item.question}
                </h5>

                {/* When question expand active, remove hidden */}
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
