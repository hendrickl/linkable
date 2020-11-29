import React from "react";

const InvestForm = () => {
  return (
    <form>
      <div className="mb-2">
        <input
          type="number"
          className="form-control"
          placeholder="Donation (ETH)"
          aria-label="Donation"
        />
      </div>
      <button type="submit" className="btn btn-outline-secondary mb-2">
        Validez
      </button>
    </form>
  );
};

export default InvestForm;
