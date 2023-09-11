import "./Projects.css";

import plant from "../../Assets/images/plant1.png";
export const Projects = () => {
  return (
    <div
      id="projects"
      width="fit-content"
      margin="auto"
      border="1px solid red"
    >
      <h2 className="hh">PROJECTS</h2>

      {/* Pharmeasy*/}

      <div className="projects_container">
        {/* plantshop */}

        <div className="project">
          <img className="imgp" src={plant} alt="abc" />
          <h4 style={{ marginTop: "20px" }}>Cozytrip</h4>
          <p>
            PlantShop is E-Commerce website for buying indoor and outdoor plants{" "}
          </p>

          <h3>Tech Stack:</h3>
          <h5>
            React JS| Redux | Node JS | Express JS | Mongo DB |HTML |
            React-Bootstrap | JS |JWT token| Mongoose
          </h5>
          <div
            style={{ display: "flex", width: "fit-content", margin: "auto" }}
          >
            <a
              href="https://frotend-shvaniawsthi001-gmailcom.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn--outline onbt">
                See this Live
              </button>
            </a>

            <a
              href="https://github.com/shiivaniiawasthii/MERN-Ecommerce"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button" className="btn btn--outline">
                View Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
