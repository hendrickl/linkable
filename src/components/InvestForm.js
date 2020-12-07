import React from "react";

const InvestForm = () => {
  return (
    <form>
      <div className="form-check mb-4">
        <p>Projet :</p>
        <p>Porteur du projet :</p>
        <p>Montant : ETH</p>
        <input
          className="form-check-input"
          type="radio"
          name="RadioForFund"
          id="radioFund"
        />
        <label className="form-check-label" htmlFor="radioFund">
          Autorisez le déblocage des fonds
        </label>
      </div>
      <button type="submit" className="btn btn-outline-secondary mb-2">
        Validez
      </button>
    </form>
  );
};

export default InvestForm;
