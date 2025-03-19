import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateStock = () => {
  let { id } = useParams();
  const [stock, setStock] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/stock/${id}`)
      .then((res) => setStock(res.data));
  }, []);

  // const { data: stock = [], refetch } = useQuery({
  //   queryKey: ["stock"],
  //   queryFn: async () => {
  //     const res = await axios.get(
  //       `${import.meta.env.VITE_API_URL}/stock/${id}`
  //     );

  //     return res.data;
  //   },
  // });

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

    const newData = { date, trade_code, high, low, open, close, volume };
    console.log(newData);

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
        .put(`${import.meta.env.VITE_API_URL}/stockData/${id}`, newData)
        .then((response) => {
          navigate("/stock");
          Swal.fire({
            title: "Updated!",
            text: "Update Successfully",
            icon: "success",
          });
          console.log("Update Successful:", response.data);
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
    <div className="w-11/12 mx-auto flex flex-col items-center justify-center mb-10">
      <h2 className="text-2xl text-center font-semibold my-10 text-blue-900">
        Update Stock: {stock?.trade_code}
      </h2>
      <div className="card bg-base-100 w-full max-w-2xl shrink-0 shadow-md border border-blue-900">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="font-medium text-blue-900">Date</label>
                <input
                  defaultValue={stock?.date}
                  name="date"
                  type="date"
                  className="input w-full border border-blue-900 focus:ring-blue-900"
                  placeholder="Date"
                />
              </div>
              {/* Trade Code */}
              <div>
                <label className="font-medium text-blue-900">Trade Code</label>
                <input
                  type="text"
                  name="trade_code"
                  className="input w-full border border-blue-900 focus:ring-blue-900"
                  placeholder="Trade Code"
                  defaultValue={stock?.trade_code}
                />
              </div>
              {/* High */}
              <div>
                <label className="font-medium text-blue-900">High</label>
                <input
                  type="number"
                  name="high"
                  step="0.01"
                  className="input w-full border border-blue-900 focus:ring-blue-900"
                  placeholder="High"
                  defaultValue={stock?.high}
                />
              </div>
              {/* Low */}
              <div>
                <label className="font-medium text-blue-900">Low</label>
                <input
                  defaultValue={stock?.low}
                  name="low"
                  step="0.01"
                  type="number"
                  className="input w-full border border-blue-900 focus:ring-blue-900"
                  placeholder="Low"
                />
              </div>
              {/* Open */}
              <div>
                <label className="font-medium text-blue-900">Open</label>
                <input
                  type="number"
                  name="open"
                  step="0.01"
                  defaultValue={stock?.open}
                  className="input w-full border border-blue-900 focus:ring-blue-900"
                  placeholder="Open"
                />
              </div>
              {/* Close */}
              <div>
                <label className="font-medium text-blue-900">Close</label>
                <input
                  type="number"
                  name="close"
                  step="0.01"
                  defaultValue={stock?.close}
                  className="input w-full border border-blue-900 focus:ring-blue-900"
                  placeholder="Close"
                />
              </div>
              {/* Volume */}
              <div className="col-span-2">
                <label className="font-medium text-blue-900">Volume</label>
                <input
                  type="text"
                  name="volume"
                  step="0.01"
                  defaultValue={stock?.volume}
                  className="input w-full border border-blue-900 focus:ring-blue-900"
                  placeholder="Volume"
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn bg-blue-900 text-white hover:bg-blue-800 mt-4 w-full"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
