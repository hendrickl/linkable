import React from "react";

const ProjetForm = () => {
  return (
    <form>
      <div className="mb-2">
        <label htmlFor="projet" className="form-label">
          Nom de votre projet
        </label>
        <input
          type="text"
          className="form-control"
          id="nomprojet"
          placeholder="Nom de votre projet"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="porteur" className="form-label">
          Porteur du projet
        </label>
        <input
          type="text"
          className="form-control"
          id="identite"
          placeholder="Nom et prénom"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          placeholder="Présentez votre initiative en quelques mots"
          id="descriptiontextarea"
          style={{ height: "100px" }}
        ></textarea>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Montant (ETH)"
            aria-label="Montant"
          />
        </div>
        <div className="col-12 col-sm-6 mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Pays"
            aria-label="Pays"
          />
        </div>
      </div>
      <button type="submit" className="btn btn-outline-secondary mb-2">
        Validez
      </button>
    </form>
  );
};

export default ProjetForm;
