import { useEffect, useState } from "react";

const DisplayData = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const retrievedData = JSON.parse(localStorage.getItem("productData"));

    if (retrievedData) {
      const dataArray = Object.entries(retrievedData).map(([key, value]) => ({
        key,
        value,
      }));
      setTableData(dataArray);
    }
  }, []);

  return (
    <div>
      {tableData.length > 0 ? (
        <table className="w-[100%] bg-red-500 justify-center">
          <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-white ">
                Product name
              </th>
              <th scope="col" className="px-6 py-3 text-white ">
                Color
              </th>
              <th scope="col" className="px-6 py-3 text-white ">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-white">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <th key={item.id} className="text-center">
                <td className="px-6 py-4 text-[20px] text-gray-900 flex  justify-center dark:text-black">
                  {item.value}
                </td>
              </th>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default DisplayData;
