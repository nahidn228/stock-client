import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddStock = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.date.value;
    const trade_code = form.trade_code.value;
    const high = parseFloat(form.high.value);
    const low = parseFloat(form.low.value);
    const open = parseFloat(form.open.value);
    const close = parseFloat(form.close.value);
    const volume = parseInt(form.volume.value, 10);

    const data = { date, trade_code, high, low, open, close, volume };
    console.log(data);

    if (isNaN(high) || isNaN(low) || isNaN(open) || isNaN(close)) {
      alert(
        "Please enter valid numeric values for high, low, open, and close."
      );
      return;
    }

    if (high < low) {
      alert(
        `Please enter a valid value. Two nearest values are ${high} and ${low}`
      );
      return;
    }

    try {
      axios
        .post(`${import.meta.env.VITE_API_URL}/stock`, data)
        .then((response) => {
          navigate("/stock");
          Swal.fire({
            title: "Added!",
            text: "Added Successfully",
            icon: "success",
          });
          console.log(" Successfully Added:", response.data);
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error.message}`,
      });
      console.log("Error:--->", error.message);
    }
  };

  return (
    <div className="w-11/12 mx-auto flex flex-col items-center justify-center my-10">
      <h2 className="text-3xl font-bold text-blue-900 text-center font-serif my-6">
        Add New Stock
      </h2>

      <div className="card bg-white w-full max-w-2xl rounded-xl shadow-lg border border-blue-900">
        <div className="card-body p-6">
          <form onSubmit={handleSubmit} className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring focus:ring-blue-300 transition"
                />
              </div>
              {/* Trade Code */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Trade Code
                </label>
                <input
                  type="text"
                  name="trade_code"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring focus:ring-blue-300 transition"
                  placeholder="Trade Code"
                />
              </div>
              {/* High */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  High
                </label>
                <input
                  type="number"
                  name="high"
                  step="0.01"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring focus:ring-blue-300 transition"
                  placeholder="High"
                />
              </div>
              {/* Low */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Low
                </label>
                <input
                  type="number"
                  name="low"
                  step="0.01"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring focus:ring-blue-300 transition"
                  placeholder="Low"
                />
              </div>
              {/* Open */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Open
                </label>
                <input
                  type="number"
                  name="open"
                  step="0.01"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring focus:ring-blue-300 transition"
                  placeholder="Open"
                />
              </div>
              {/* Close */}
              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Close
                </label>
                <input
                  type="number"
                  name="close"
                  step="0.01"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring focus:ring-blue-300 transition"
                  placeholder="Close"
                />
              </div>
              {/* Volume */}
              <div className="col-span-2">
                <label className="text-sm font-semibold text-gray-700">
                  Volume
                </label>
                <input
                  type="text"
                  name="volume"
                  className="input w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-900 focus:ring focus:ring-blue-300 transition"
                  placeholder="Volume"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
