import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

const StockData = () => {
  const [stock, setStock] = useState([]);

  const { data: stocks = [], refetch } = useQuery({
    queryKey: ["stocks"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/stocks`);

      return res.data;
    },
  });

  // fetch("stock_market_data.json")
  //   .then((res) => res.json())
  //   .then((data) => setStock(data));
  console.log(stocks);
  return (
    <div>
      <h1 className="font-extrabold text-4xl mb-10">
        Stock Data: {stocks?.length}
      </h1>
      {/* Table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Trade_Code</th>
              <th>High</th>
              <th>Low</th>
              <th>Open</th>
              <th>Close</th>
              <th>Volume</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {stocks?.slice(0, 20).map((data, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{data?.date}</td>
                <td>{data?.trade_code}</td>
                <td>{data?.high}</td>
                <td>{data?.low}</td>
                <td>{data?.open}</td>
                <td>{data?.close}</td>
                <td>{data?.volume}</td>
                <td>Edit</td>
                <td>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockData;
