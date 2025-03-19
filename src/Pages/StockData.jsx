import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Swal from "sweetalert2";

const StockData = () => {
  const [page, setPage] = useState(1);
  const limit = 20;
  const { data: stocks = { data: [], totalPages: 1 }, refetch } = useQuery({
    queryKey: ["stocks", page],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/stocks?page=${page}&limit=${limit}`
      );
      return res.data;
    },
    keepPreviousData: true,
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${import.meta.env.VITE_API_URL}/stockData/${id}`)
          .then(() => {
            refetch();
            Swal.fire("Deleted!", "Stock data has been deleted.", "success");
          });
      }
    });
  };

  return (
    <div className="mx-auto max-w-screen-xl  rounded py-10">
      <h3 className="text-2xl font-bold text-center mb-6">
        📊 Stock Market Overview
      </h3>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-5">
        {/* Line Chart */}
        <div className="p-5 bg-blue-900 rounded-lg shadow-md text-white">
          <h4 className="text-center font-semibold mb-2">
            📈 Closing Price Trends
          </h4>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={stocks?.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#666" />
              <XAxis dataKey="date" stroke="#fff" />
              <YAxis dataKey="close" stroke="#fff" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="close"
                stroke="#facc15"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="p-5 bg-blue-900 text-white rounded-lg shadow-md">
          <h4 className="text-center font-semibold mb-2">📊 Trading Volume</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={stocks?.data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#666" />
              <XAxis dataKey="trade_code" stroke="#fff" />
              <YAxis dataKey="volume" stroke="#fff" />
              <Tooltip />
              <Bar dataKey="volume" fill="#3b82f6" barSize={40} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto  p-5 rounded-lg shadow-md">
        <table className="w-full text-sm text-gray-900 min-h-screen">
          <thead className="bg-blue-900 text-white uppercase text-sm">
            <tr>
              <th className="py-3 px-4">📅 Date</th>
              <th className="py-3 px-4">📌 Trade Code</th>
              <th className="py-3 px-4">📈 High</th>
              <th className="py-3 px-4">📉 Low</th>
              <th className="py-3 px-4">🔓 Open</th>
              <th className="py-3 px-4">🔐 Close</th>
              <th className="py-3 px-4">📦 Volume</th>
              <th className="py-3 px-4">✏️ Edit</th>
              <th className="py-3 px-4">🗑️ Delete</th>
            </tr>
          </thead>
          <tbody>
            {stocks?.data?.map((stock, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-600 hover:bg-blue-100"
              >
                <td className="py-2 px-4">{stock?.date}</td>
                <td className="py-2 px-4">{stock?.trade_code}</td>
                <td className="py-2 px-4">{stock?.high}</td>
                <td className="py-2 px-4">{stock?.low}</td>
                <td className="py-2 px-4">{stock?.open}</td>
                <td className="py-2 px-4">{stock?.close}</td>
                <td className="py-2 px-4">{stock?.volume}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/updateStock/${stock?._id}`}
                    className="p-2 rounded-md bg-green-500 hover:bg-green-700 transition"
                  >
                    ✏️
                  </Link>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(stock?._id)}
                    className="p-2 rounded-md bg-red-500 hover:bg-red-700 transition"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          className="px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-600 disabled:opacity-50 text-white"
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          ⬅️ Prev
        </button>
        <span className="font-semibold">
          Page {page} of {stocks?.totalPages || 1}
        </span>
        <button
          className="px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-600 disabled:opacity-50 text-white"
          disabled={page >= (stocks?.totalPages || 1)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
};

export default StockData;
