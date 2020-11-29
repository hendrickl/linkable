import React from "react";
import MainProjetImg from "../micheile-henderson.png";
import MainInvImg from "../jena-jacobs.png";

const MainPage = () => {
  return (
    <>
      <div className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand ml-4">Linkable</span>
        </div>
      </div>

      <div className="container">
        <div className="row min-vh-100 border-bottom">
          <div className="col-12 col-sm-6">
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
                  <button
                    type="submit"
                    className="btn btn-outline-secondary mb-2"
                  >
                    Validez
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 align-self-center">
            <div>
              <img
                src={MainProjetImg}
                alt="three and money"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
        </div>

        <div className="row min-vh-100">
          <div className="col-12 col-sm-6 align-self-center">
            <div>
              <img
                src={MainInvImg}
                alt="holding hands"
                className="img-fluid mx-auto d-block"
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 align-self-center">
            <div className="card border-0">
              <div className="card-body pl-0">
                <h3 className="card-tile">
                  Accompagnez un projet en le finançant en quelques clics.
                </h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12 ">
                <div className="card ">
                  <div className="card-body">
                    <form>
                      <div className="mb-2">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Donation (ETH)"
                          aria-label="Donation"
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-outline-secondary mb-2"
                      >
                        Validez
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
