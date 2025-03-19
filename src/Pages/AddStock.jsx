import React from "react";

const AddStock = () => {
  return (
    <div>
      <div className="w-11-12 mx-auto flex flex-col items-center justify-center my-10">
        <h2 className="text-2xl text-center font-serif mt-10">Add New Stock</h2>
        <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset grid grid-cols-2 gap-6">
              {/* Date */}
              <div>
                <label className="fieldset-label">Date</label>
                <input
                  type="date"
                  className="input w-full"
                  placeholder="Date"
                />
              </div>
              {/* Trade Code */}
              <div>
                <label className="fieldset-label">Trade Code</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Trade Code"
                />
              </div>
              {/* high */}
              <div>
                <label className="fieldset-label">High</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="High"
                />
              </div>
              {/* low */}
              <div>
                <label className="fieldset-label">Low</label>
                <input
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
                  className="input w-full"
                  placeholder="Open"
                />
              </div>
              {/* close */}
              <div>
                <label className="fieldset-label">Close</label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="Close"
                />
              </div>
              {/* volume */}
              <div>
                <label className="fieldset-label">Volume</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Volume"
                />
              </div>
            </fieldset>
            <button className="btn btn-neutral mt-4">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStock;
