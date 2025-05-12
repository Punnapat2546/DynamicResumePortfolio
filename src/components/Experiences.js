import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useState } from "react";

export const Experiences = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const workExperiences = [
    {
      title: "Machine Leaning Intern",
      company: "Raina Robotech Co., Ltd.",
      duration: "Jun 2024 - Dec 2024",
      details: [
        "Developed and implemented the Planter Vision Module, which includes two main components: Lettuce Seedling Germination and Growth Tracking System for monitoring seedling growth in seedling trays and Lettuce Seedling Planting Tray Inspection System for evaluating planting trays after seedling transplantation using an automated transplanting machine.",
        "Developed image processing techniques from scratch using NumPy and Scikit-Learn, without relying on external libraries such as OpenCV or other image processing tools.",
        "Presented the company's information and products to visitors at Farm Expo 2024.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Institute of Field Robotics",
      duration: "Aug 2023 - Dec 2024",
      details: [
        "Assisted in teaching Electronics Circuit, Digital Electronics, and Microcontroller Interface classes for first- and second-year undergraduates.",
        "Provided guidance on analog/digital circuits, including design, troubleshooting, and debugging, and supported students in STM32 Nucleo microcontroller use, C programming, code debugging, and configuration.",
        "Designed and graded exams and assignments to assess student understanding of electronic components and their practical application.",
      ],
    },
    {
      title: "Teaching Assistant",
      company: "Institute of Field Robotics",
      duration: "Jan 2023 - May 2023",
      details: [
        "Assisted in Basic Mechanics class for first-year undergraduates in the topics of Statics and Dynamics.",
        "Provided support by answering questions during class and office hours.",
        "Delivered class summaries and taught problem-solving techniques.",
      ],
    },
  ];

  const researchExperiences = [
    {
      title:
        "The 2nd International Conference on Innovation for Resilient Agriculture (IRA2025)",
      company: "Chiang Mai University, Chiang Mai, Thailand",
      duration: "Feb 2025",
      details: [
        "Research paper: Unsupervised Online Learning for Lettuce Seedling Germination Visual Detection System.",
        "Delivered an oral presentation on the Lettuce Seedling Germination and Growth Tracking System, part of the Planter Vision Module project",
        "Presented the system's working principles, showcased experimental results, and discussed real-world applications.",
      ],
    },
  ];

  return (
    <section className="experience" id="experiences">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="experience-bx">
                    <h2>Experiences</h2>
                    <Tab.Container
                      id="experiences-tabs"
                      defaultActiveKey="first"
                    >
                      <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                      >
                        <Nav.Item>
                          <Nav.Link eventKey="first">Work</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Research</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content
                        id="slideInUp"
                        className={
                          isVisible
                            ? "animate__animated animate__slideInUp"
                            : ""
                        }
                      >
                        <Tab.Pane eventKey="first">
                          <Row>
                            {workExperiences.map((exp, index) => (
                              <Col key={index} md={12} className="mb-4">
                                <div
                                  className="experience-block"
                                  onClick={() => handleShow(exp)}
                                >
                                  <div className="experience-info">
                                    <div className="title-company">
                                      <h5>{exp.title}</h5>
                                      <h6>{exp.company}</h6>
                                    </div>
                                    <div className="duration">
                                      <span>{exp.duration}</span>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <Row>
                            {researchExperiences.map((exp, index) => (
                              <Col key={index} md={12} className="mb-4">
                                <div
                                  className="experience-block"
                                  onClick={() => handleShow(exp)}
                                >
                                  <div className="experience-info">
                                    <div className="title-company">
                                      <h5>{exp.title}</h5>
                                      <h6>{exp.company}</h6>
                                    </div>
                                    <div className="duration">
                                      <span>{exp.duration}</span>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            ))}
                          </Row>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Modal for Experience Details */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Company: {modalContent.company}</h6>
          <h6>Duration: {modalContent.duration}</h6>
          <ul>
            {modalContent.details &&
              modalContent.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            className="back-button"
          >
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
