import "react-multi-carousel/lib/styles.css";
import SK from "../assets/img/sk.png";
import FIBO from "../assets/img/FIBO.jpg";

export const Educations = () => {
  return (
    <section className="education" id="educations">
      <div className="container">
            <div className="education-bx">
              <h2>Educations</h2>
              <div className="row">
                <div className="col-md-6 text-center">
                  <div className="item">
                    <img
                      src={SK}
                      alt="Image"
                      className="rounded-circle"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="mt-3">
                      High School, Mathematics-Science Program
                      <br />
                      Suankularb Wittayalai School
                      <br />
                      GPAX 3.91
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 text-center">
                  <div className="item">
                    <img
                      src={FIBO}
                      alt="Image"
                      className="rounded-circle"
                      style={{
                        width: "200px",
                        height: "200px",
                        objectFit: "cover",
                      }}
                    />
                    <h5 className="mt-3">
                      Bachelor of Engineering in Robotics and Automation
                      <br />
                      Institute of Field Robotics
                      <br />
                      King Mongkut's University of Technology Thonburi
                      <br />
                      Overall GPAX 3.91, Major GPAX 4.00
                    </h5>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};
