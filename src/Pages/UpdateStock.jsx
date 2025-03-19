import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateStock = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const { data: stock = [], refetch } = useQuery({
    queryKey: ["stock"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/stock/${id}`
      );

      return res.data;
    },
  });

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
          refetch();
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
    <div className="w-11-12 mx-auto flex flex-col items-center justify-center my-10">
      <h2 className="text-2xl text-center font-semibold mt-10">
        {" "}
        Trade Code: {stock?.trade_code}
      </h2>
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSubmit} className="fieldset ">
            <div className="grid grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="fieldset-label">Date</label>
                <input
                  defaultValue={stock?.date}
                  name="date"
                  type="date"
                  className="input w-full"
                  placeholder="Date"
                />
              </div>
              {/* Trade Code */}
              <div>
                <label className="fieldset-label">Trade Code</label>
                <input
                  type="text"
                  name="trade_code"
                  className="input w-full"
                  placeholder="Trade Code"
                  defaultValue={stock?.trade_code}
                />
              </div>
              {/* high */}
              <div>
                <label className="fieldset-label">High</label>
                <input
                  type="number"
                  name="high"
                  step="0.01"
                  className="input w-full"
                  placeholder="High"
                  defaultValue={stock?.high}
                />
              </div>
              {/* low */}
              <div>
                <label className="fieldset-label">Low</label>
                <input
                  defaultValue={stock?.low}
                  name="low"
                  step="0.01"
                  type="number"
                  className="input w-full"
                  placeholder="Low"
                />
              </div>
              {/* open */}
              <div>
                <label className="fieldset-label">Open</label>
                <input
                  type="number"
                  name="open"
                  step="0.01"
                  defaultValue={stock?.open}
                  className="input w-full"
                  placeholder="Open"
                />
              </div>
              {/* close */}
              <div>
                <label className="fieldset-label">Close</label>
                <input
                  type="number"
                  name="close"
                  step="0.01"
                  defaultValue={stock?.close}
                  className="input w-full"
                  placeholder="Close"
                />
              </div>
              {/* volume */}
              <div>
                <label className="fieldset-label">Volume</label>
                <input
                  type="text"
                  name="volume"
                  step="0.01"
                  defaultValue={stock?.volume}
                  className="input w-full"
                  placeholder="Volume"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
