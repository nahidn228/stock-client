import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const StockData = () => {
  const [page, setPage] = useState(1);
  const limit = 20;
  const { data: stocks = { data: [], totalPages: 1 } } = useQuery({
    queryKey: ["stocks", page],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/stocks?page=${page}&limit=${limit}`
      );

      return res.data;
    },
    keepPreviousData: true,
  });

  // fetch("stock_market_data.json")
  //   .then((res) => res.json())
  //   .then((data) => setStock(data));
  console.log(stocks);
  return (
    <div>
      <h1 className="font-extrabold text-4xl mb-10">
        Stock Data: {stocks?.data?.length}
      </h1>
      {/* Table  */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
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
            {stocks?.data?.map((stock, idx) => (
              <tr key={idx}>
                <td>{stock?.date}</td>
                <td>{stock?.trade_code}</td>
                <td>{stock?.high}</td>
                <td>{stock?.low}</td>
                <td>{stock?.open}</td>
                <td>{stock?.close}</td>
                <td>{stock?.volume}</td>
                <td>
                  <Link
                    to={`/updateStock/${stock?._id}`}
                    className="btn rounded-2xl  "
                  >
                    Edit
                  </Link>
                </td>
                <td>
                  <button className="btn rounded-2xl  ">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center my-5">
          <button
            className="btn rounded-2xl mx-2 font-bold"
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            Prev
          </button>
          <span className="font-semibold text-sm">
            Page {page} of {stocks?.totalPages || 1}
          </span>
          <button
            className="btn rounded-2xl mx-2 font-bold"
            disabled={page >= (stocks?.totalPages || 1)}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StockData;
