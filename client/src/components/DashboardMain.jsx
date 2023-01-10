import CoinsTable from "../components/CoinsTable";
import Navbar from "./UI/Navbar";

const DashboardMain = () => {
  return (
    <div className="xl:ml-60 p-10 max-xl:pt-0 w-screen">
      <Navbar />

      <div className="flex items-center justify-between flex-wrap max-xl:mt-2">
        <div>Welcome Back, Abed!</div>
        <div className="flex items-center justify-between max-sm:w-full gap-3 max-sm:mt-2">
          <div>
            <input
              type="search"
              id="first_name"
              className="search"
              placeholder="Search"
              autoComplete="off"
              required
            />
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#D0ED6C] dark:peer-focus:ring-[#D0ED6C] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-[#D0ED6C] peer-checked:bg-[#D0ED6C]"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Light Mode
            </span>
          </label>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex gap-8 max-md:flex-wrap">
          <div className="rounded-lg h-64 max-md:w-full w-8/12">
            <div className="h-full overflow-y-scroll relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Product name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Color
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #1 Apple MacBook Pro 17"
                    </th>
                    <td className="px-6 py-4">Sliver</td>
                    <td className="px-6 py-4">Laptop</td>
                    <td className="px-6 py-4">$2999</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #2 Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #3 Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4">edit</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #4 Microsoft Surface Pro
                    </th>
                    <td className="px-6 py-4">White</td>
                    <td className="px-6 py-4">Laptop PC</td>
                    <td class="px-6 py-4">$1999</td>
                    <td className="px-6 py-4">edit</td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      #5 Magic Mouse 2
                    </th>
                    <td class="px-6 py-4">Black</td>
                    <td class="px-6 py-4">Accessories</td>
                    <td class="px-6 py-4">$99</td>
                    <td class="px-6 py-4">edit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex max-md:flex-row flex-col max-md:h-40 h-64 gap-8 max-md:w-full w-4/12">
            <div className="flex items-center justify-between flex-wrap bg-[#D0ED6C] rounded-lg max-md:h-40 h-28 max-md:w-full shadow-md p-5">
              <h1 className="text-xl font-bold">Balance</h1>
              <h1 className="text-2xl">$10000</h1>
            </div>
            <div className="rounded-lg max-md:h-40 h-28 max-md:w-full bg-[#D0ED6C] shadow-md p-5">
              <h1>Balance</h1>
              <span>$10000</span>
            </div>
          </div>
        </div>
      </div>

      <CoinsTable />
    </div>
  );
};

export default DashboardMain;
