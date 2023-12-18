function Order() {
  const data = [
    {
      id: 1,
      productName: "Apple MacBook Pro 17",
      color: "Silver",
      category: "Laptop",
      price: "$2999",
    },
    {
      id: 2,
      productName: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999",
    },
    {
      id: 3,
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
    {
      id: 3,
      productName: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99",
    },
  ];

  return (
    <div>
      <div className=" w-[calc(100%-16rem)] h-[100%] absolute top-[90px] bg-trabsarent ml-[255px] gap-4 flex flex-col">
        <h1 className="text-xl font-bold">Total Order</h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 text-white">
                  SR. NO.
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                  Color
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-white">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={item.id}
                  className={`${
                    index % 2 === 0
                      ? "bg-white border-b text-black text-[20px] dark:border-gray-700"
                      : "bg-gray-100 border-b text-black text-[20px] dark:border-gray-700"
                  }`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4  text-[20px] text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {index + 1}
                  </th>
                  <td className="px-6 py-4 ">{item.productName}</td>
                  <td className="px-6 py-4 ">{item.color}</td>
                  <td className="px-6 py-4 ">{item.category}</td>
                  <td className="px-6 py-4 ">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
