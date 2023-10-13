import {
  CreditCardIcon,
  LifebuoyIcon,
  PresentationChartBarIcon,
  ChevronRightIcon,
  KeyIcon,
  Square3Stack3DIcon,
  UsersIcon,
  ArrowDownIcon,
  ArrowUpIcon,
  CurrencyDollarIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import Chart from 'react-apexcharts';
import ReactApexChart from 'react-apexcharts';
function App() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };
  const PIEseries = [65];

  const [series] = useState([
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 41, 50, 91, 24, 87],
    },
  ]);
  return (
    <div className="antialiased bg-gray-100 ">
      <aside
        className={
          isOpen
            ? 'fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full bg-indigo-900 border-r border-gray-200 md:translate-x-0  '
            : 'fixed top-0 left-0 z-40 w-64 h-screen transition-transform bg-indigo-900 border-r border-gray-200  translate-x-0  '
        }
        aria-label="Sidenav"
        id="drawer-navigation"
      >
        <div className="overflow-y-auto  px-3 h-full bg-indigo-900 ">
          <div className=" md:block lg:block hidden">
            <a href="/" className="flex items-center text-gray-50 justify-start p-5">
              <Cog6ToothIcon className="w-6 h-6 mr-2  transition duration-75 group-hover:text-gray-900 " />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">Dashboard</span>
            </a>{' '}
          </div>
          <button
            onClick={toggleDrawer}
            data-drawer-target="drawer-navigation"
            data-drawer-toggle="drawer-navigation"
            aria-controls="drawer-navigation"
            className="p-2 m-2 text-gray-50 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100 "
          >
            <svg
              aria-hidden={true}
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              aria-hidden={true}
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Toggle sidebar</span>
          </button>
          <form action="#" method="GET" className="md:hidden mt-10 mb-2">
            <label htmlFor="sidebar-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-50 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                name="search"
                id="sidebar-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2     "
                placeholder="Search"
              />
            </div>
          </form>
          <ul className="space-y-2">
            <li>
              <button className="flex items-center bg-indigo-700/50  p-2 text-base font-medium text-gray-50 rounded-lg  hover:bg-gray-100  group  hover:text-black w-full">
                <KeyIcon className="w-6 h-6 text-gray-50 transition duration-75  group-hover:text-gray-900  border rounded-md p-1" />
                <span className="ml-3">Dashboard</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-50 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-black "
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <Square3Stack3DIcon className="w-6 h-6 text-gray-50 transition duration-75  group-hover:text-gray-900  border rounded-md p-1" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Product</span>
                <ChevronRightIcon className="w-6 h-6 p-1 " />
              </button>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-50 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-black "
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <UsersIcon className="w-6 h-6 border rounded-md text-gray-50 transition duration-75 p-1 group-hover:text-gray-900 " />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Customers</span>
                <ChevronRightIcon className="w-6 h-6 p-1 " />
              </button>
            </li>{' '}
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-50 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-black "
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <CreditCardIcon className="w-6 h-6 text-gray-50 transition duration-75  group-hover:text-gray-900  border rounded-md p-1" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Income</span>
                <ChevronRightIcon className="w-6 h-6 p-1 " />
              </button>
            </li>{' '}
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-50 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-black "
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <PresentationChartBarIcon className="w-6 h-6 text-gray-50 transition duration-75  group-hover:text-gray-900  border rounded-md p-1" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Promotion</span>
                <ChevronRightIcon className="w-6 h-6 p-1 " />
              </button>
            </li>{' '}
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-medium text-gray-50 rounded-lg transition duration-75 group hover:bg-gray-100 hover:text-black "
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <LifebuoyIcon className="w-6 h-6 text-gray-50 transition duration-75  group-hover:text-gray-900  border rounded-md p-1" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Help</span>
                <ChevronRightIcon className="w-6 h-6 p-1 " />
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex   z-20">
          <div className="bg-white/10 px-3 p-2 rounded-md">
            <button
              id="dropdownAvatarNameButton"
              data-dropdown-toggle="dropdownAvatarName"
              className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
              type="button"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 mr-2 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="user photo"
              />
              Bonnie Green
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>
      <main className="md:p-5 p-2 md:ml-64 h-full ">
        <nav className="bg-gray-100 mb-2 md:mb-10 px-4 ">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex justify-start items-center">
              <button
                onClick={toggleDrawer}
                data-drawer-target="drawer-navigation"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100  focus:ring-2 focus:ring-gray-100 "
              >
                <svg
                  aria-hidden={true}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-hidden={true}
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
              <a href="/" className="flex items-center md:hidden  lg:hidden justify-between mr-4">
                <Cog6ToothIcon className="w-6 h-6 mr-2 text-gray-900 transition duration-75  group-hover:text-gray-900 " />
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Dashboard</span>
              </a>
              <div className="hidden items-center md:flex lg:flex justify-between mr-4">
                <span className="self-center text-2xl font-semibold whitespace-nowrap ">Hello Admin 👋</span>
              </div>
            </div>
            <div className="flex items-center lg:order-2">
              <form action="#" method="GET" className="hidden md:block md:pl-2">
                <label htmlFor="topbar-search" className="sr-only">
                  Search
                </label>
                <div className="relative  md:w-96">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="email"
                    id="topbar-search"
                    className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500   block w-full pl-10 p-2.5   "
                    placeholder="Search"
                  />
                </div>
              </form>
              <button
                type="button"
                data-drawer-toggle="drawer-navigation"
                aria-controls="drawer-navigation"
                className="p-2 mr-1 text-gray-500 rounded-lg md:hidden hover:text-gray-900 hover:bg-gray-100    focus:ring-4 focus:ring-gray-300 "
              >
                <span className="sr-only">Toggle search</span>
                <svg
                  aria-hidden={true}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-10 mb-2 h-full md:mb-10">
          <div className="border bg-white rounded-lg justify-around items-center flex flex-row border-gray-50 sm:w-72 md:w-full w-full  h-32 md:h-40">
            <div className="bg-green-500/20 flex justify-center items-center rounded-full h-20 w-20  ">
              <CurrencyDollarIcon className="w-12 h-12 text-green-500 inline" stroke="2" />
            </div>
            <div className=" flex flex-col justify-center col-span-1 row-span-1 items-left  h-28 w-32 ">
              <p className="text-xs text-gray-500">Earning</p>
              <p className="text-xl text-black font-bold">$198k</p>
              <p className="inline text-xs font-semibold text-black">
                <span className="text-green-500 font-bold inline mr-0.5">
                  <ArrowUpIcon className="w-3 h-3 inline" stroke="2" />
                  37.8%
                </span>
                this month
              </p>
            </div>
          </div>
          <div className="border bg-white rounded-lg justify-around items-center flex flex-row border-gray-50 sm:w-72 md:w-full w-full  h-32 md:h-40">
            <div className="bg-purple-500/20 flex justify-center items-center rounded-full h-20 w-20  ">
              <ShoppingCartIcon className="w-12 h-12 text-purple-500 inline" stroke="2" />
            </div>
            <div className=" flex flex-col justify-center items-left  h-28 w-32 ">
              <p className="text-xs text-gray-500">Orders</p>
              <p className="text-xl text-black font-bold">$2.4k</p>
              <p className="inline text-xs font-semibold text-black">
                <span className="text-red-500 font-bold inline mr-0.5">
                  <ArrowDownIcon className="w-3 h-3 inline" stroke="2" />
                  2%
                </span>
                this month
              </p>
            </div>
          </div>
          <div className="border bg-white rounded-lg justify-around items-center flex flex-row border-gray-50 sm:w-72 md:w-full w-full  h-32 md:h-40">
            <div className="bg-cyan-500/20 flex justify-center items-center rounded-full h-20 w-20  ">
              <CreditCardIcon className="w-12 h-12 text-cyan-500 inline" stroke="2" />
            </div>
            <div className=" flex flex-col justify-center items-left  h-28 w-32 ">
              <p className="text-xs text-gray-500">Balance</p>
              <p className="text-xl text-black font-bold">$2.4k</p>
              <p className="inline text-xs font-semibold text-black">
                <span className="text-red-500 font-bold inline mr-0.5">
                  <ArrowDownIcon className="w-3 h-3 inline" stroke="2" />
                  2%
                </span>
                this month
              </p>
            </div>
          </div>
          <div className="border bg-white rounded-lg justify-around items-center flex flex-row border-gray-50 sm:w-72 md:w-full w-full  h-32 md:h-40">
            <div className="bg-rose-500/20 flex justify-center items-center rounded-full h-20 w-20  ">
              <ShoppingBagIcon className="w-12 h-12 text-rose-500 inline" stroke="2" />
            </div>
            <div className=" flex flex-col justify-center items-left  h-28 w-32 ">
              <p className="text-xs text-gray-500">Total Sales</p>
              <p className="text-xl text-black font-bold">$89k</p>
              <p className="inline text-xs font-semibold text-black">
                <span className="text-green-500 font-bold inline mr-0.5">
                  <ArrowUpIcon className="w-3 h-3 inline" stroke="2" />
                  11%
                </span>
                this month
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-10 mb-10 ">
          <div className="border bg-white rounded-lg border-gray-50 col-span-1 md:col-span-2 lg:col-span-2 sm:col-span-1  ">
            <Chart
              options={{
                chart: {
                  id: 'basic-bar',
                  type: 'bar',
                  toolbar: {
                    show: false,
                  },
                },
                plotOptions: {
                  bar: {
                    borderRadius: 13,
                    dataLabels: {
                      position: 'none',
                    },
                    horizontal: false,
                  },
                },
                xaxis: {
                  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                  labels: {
                    show: true,
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
                grid: {
                  show: true,
                  borderColor: '#fff',
                  strokeDashArray: 0,
                  position: 'back',
                  xaxis: {
                    lines: {
                      show: false,
                    },
                  },
                  yaxis: {
                    lines: {
                      show: false,
                    },
                  },
                  row: {
                    colors: undefined,
                    opacity: 0.5,
                  },
                  column: {
                    colors: undefined,
                    opacity: 0.5,
                  },
                  padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                  },
                },
                yaxis: {
                  show: true,

                  labels: {
                    show: false,
                  },
                  axisBorder: {
                    show: false,
                  },
                  axisTicks: {
                    show: false,
                  },
                },
              }}
              series={series}
              type="bar"
              height={280}
            />
          </div>
          <div className="border bg-white rounded-lg border-gray-50 col-span-1  ">
            <ReactApexChart
              options={{
                chart: {
                  height: 350,
                  type: 'radialBar',
                  toolbar: {
                    show: false,
                  },
                },
                plotOptions: {
                  radialBar: {
                    startAngle: 0,
                    endAngle: 360,
                    track: {
                      startAngle: 0,
                      endAngle: 0,
                      strokeWidth: '67%',
                      margin: 0,
                    },
                    dataLabels: {
                      show: true,
                      name: {
                        offsetY: 20,
                        show: true,
                        color: '#000',
                        fontSize: '10px',
                      },
                      value: {
                        formatter: (VAL) => {
                          return VAL + `% `;
                        },
                        offsetY: -10,
                        color: '#000',
                        fontSize: '30px',
                        show: true,
                      },
                    },
                  },
                },
                fill: {
                  type: 'gradient',
                  gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: ['#b47eee'],
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100],
                  },
                },
                legend: {
                  show: false,
                  fontWeight: 500,
                  offsetY: -24,
                  itemMargin: {
                    horizontal: 10,
                    vertical: 0,
                  },
                },
                labels: ['Total New Cutomers'],
              }}
              series={PIEseries}
              type="radialBar"
              height={280}
            />
          </div>
        </div>
        <div className="border bg-white rounded-lg border-gray-50  h-96 mb-4">
          <div className="relative overflow-x-auto">
            <div className="relative bg-white">
              <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                <div className="w-full">
                  <h5 className="mr-3 font-bold ">Product Sell</h5>
                </div>
                <div className="flex flex-row justify-center   ">
                  <div className="w-60 p-5">
                    <form className="flex items-center">
                      <label htmlFor="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative  md:w-96">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg
                            className="w-5 h-5 text-gray-500 "
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            ></path>
                          </svg>
                        </div>
                        <input
                          type="text"
                          name="email"
                          id="topbar-search"
                          className="bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500   block w-full pl-10 p-2.5   "
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-row w-40">
                    <div className="flex items-center w-full space-x-3 md:w-auto">
                      <button
                        id="filterDropdownButton"
                        data-dropdown-toggle="filterDropdown"
                        className="flex items-center flex-row justify-center   px-4 py-2 text-sm font-medium text-gray-500 bg-white rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                        type="button"
                      >
                        Last 30 days
                        <svg
                          className="-mr-1 ml-1.5 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clip-rule="evenodd"
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 capitalize bg-gray-50  ">
                <tr>
                  <th scope="col" className="px-6 py-3 w-full ">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-2 py-3 w-60">
                    Total Sales
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th scope="row" className="px-6 flex py-4 font-medium text-gray-900  ">
                    <div className="h-10 w-20 rounded-2xl bg-gray-300">
                      <img
                        className="h-10 w-20 rounded-lg"
                        src="https://images.unsplash.com/photo-1682686581221-c126206d12f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        alt="image description"
                      />
                    </div>
                    <div className="ml-2 p-1">
                      <h6> Abstract 3d</h6>
                      <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipiscina elit</p>
                    </div>
                  </th>
                  <td className="px-2 py-4  w-28  ">32 in stocks</td>
                  <td className="px-6 py-4 ">$29.99</td>
                  <td className="px-6 py-4 ">20</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th scope="row" className="px-6 flex py-4 font-medium text-gray-900 ">
                    <div className="h-10 w-20 rounded-2xl bg-gray-300">
                      <img
                        className="h-10 w-20 rounded-lg"
                        src="https://images.unsplash.com/photo-1682686581221-c126206d12f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                        alt="image description"
                      />
                    </div>
                    <div className="ml-2 p-1">
                      <h6> Abstract 3d</h6>
                      <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipiscina elit</p>
                    </div>
                  </th>
                  <td className="px-2 py-4  w-28  ">32 in stocks</td>
                  <td className="px-6 py-4 ">$19.99</td>
                  <td className="px-6 py-4 ">20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
