import React from "react";
import ProjectForm from "./ProjectForm.js";
import InvestForm from "./InvestForm.js";
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
                <ProjectForm />
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 align-self-center">
            <div>
              <img
                src={MainProjetImg}
                alt="three and money"
                className="img-fluid mx-auto d-block mb-3 mt-2"
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
                className="img-fluid mx-auto d-block mt-3"
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
                    <InvestForm />
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
