import React from "react";
import MainImg from "../lareised-leneseur.jpg";

const MainPage = () => {
  return (
    <>
      <div className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand ml-4">Linkable</span>
        </div>
      </div>

      <div className="container">
        <div className="row vh-100">
          <div className="col-12 col-sm-6 col-lg-5">
            <div className="card border-0">
              <div className="card-body pl-0">
                <h3 className="card-tile">
                  Donnez à votre projet la chance de pouvoir être financé.
                </h3>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
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
                      id="floatingTextarea2"
                      style={{ height: "100px" }}
                    ></textarea>
                  </div>
                  <div className="row">
                    <div className="col-12 col-sm-6 mb-2">
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Montant (KABLE)"
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
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-5 align-self-center">
            <div>
              <img src={MainImg} alt="hands" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
