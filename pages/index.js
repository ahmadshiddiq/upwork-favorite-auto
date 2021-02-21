import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
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
        <section className="grid grid-cols-3 mx-auto max-w-7xl">
          <div>
            <h3>Lorem, ipsum.</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <img
              src="https://api.фаворит-авто.рф/uploads/33e7ee1ee3ef42e986ced4c437ae86f6-1280.png"
              alt=""
            />
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
}
