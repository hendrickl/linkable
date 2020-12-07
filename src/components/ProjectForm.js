import React from "react";

const ProjectForm = () => {
  return (
    <form className="mr-2">
      <div className="mb-2">
        <label htmlFor="nameProject" className="form-label">
          Nom de votre projet
        </label>
        <input
          type="text"
          className="form-control"
          id="nameProject"
          placeholder="Nom de votre projet"
        />
      </div>
      <div className="mb-2">
        <label htmlFor="idtCreator" className="form-label">
          Porteur du projet
        </label>
        <input
          type="text"
          className="form-control"
          id="idtCreator"
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
          id="description"
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
        Envoyez
      </button>
    </form>
  );
};

export default ProjectForm;
