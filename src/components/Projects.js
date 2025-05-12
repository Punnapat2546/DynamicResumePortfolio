import React, { useState } from 'react'; // import useState from React
import { Modal, Button } from 'react-bootstrap'; // import Modal and Button from react-bootstrap
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import project1_img from "../assets/img/project1.jpg";
import project2_img from "../assets/img/project2.png";
import project3_img from "../assets/img/project3.jpg";
import project4_img from "../assets/img/project4.png";
import project5_img from "../assets/img/project5.jpg";
import project6_img from "../assets/img/project6.png";
import project7_img from "../assets/img/project7.jpg";

export const Projects = () => {
  // กำหนดข้อมูลโปรเจ็กต์ในรูปแบบของ array
  const projects = [
    {
      title: "Planter Vision Module - Lettuce Seedling Visual Detection System",
      img: project1_img,
      duration: "Jun 2024 - Dec 2024",
      details: [
        "Lettuce Seedling Germination and Growth Tracking System",
        "Learned seedling data using a Probabilistic Model with Multivariate Gaussian Distribution in the YCbCr color space and Spatial Domain, using Gaussian Mixture Models.",
        "Performed Image Segmentation by calculating the probability of each pixel being a seedling using Bayes' Theorem, with position and color data from previous days as Prior Information.",
        "Update of the confidence level for each pixel containing a seedling using Bayesian Inference.",
        "The system is robust against varying lighting conditions",
        "Lettuce Seedling Planting Tray Inspection System",
        "Used the seedling color data from the seedling growth tracking system as Prior Information for image segmentation.",
        "Performed Image Segmentation on planting tray images by calculating the probability of each pixel being a seedling using Bayes' Theorem, with color data from the Gaussian Mixture Model.",
        "Applied DBSCAN for clustering the seedling data in the Spatial Domain.",
        "Used the results to separate planting trays that are ready for planting from those that require further adjustments.",
      ],
    },
    {
      title: "Diabetes Prediction with Machine Learning",
      img: project2_img,
      duration: "Nov 2023 - Dec 2023",
      details: [
        "Built a machine learning model to predict diabetes using data from the BRFSS dataset, starting with defining the problem and setting assumptions about factors that may influence diabetes risk.",
        "Worked on exploratory data analysis (EDA) to understand feature distributions, detect outliers, and check for missing values, then cleaned the data by removing duplicates, dropping irrelevant features, handling outliers, and filling in missing data.",
        "Selected important features using visual correlation analysis and basic statistical methods, followed by data preprocessing such as encoding and scaling to prepare for modeling.",
        "Trained and compared Random Forest models with and without class balancing to improve performance on imbalanced data, then analyzed and evaluated the results.",
        "Used Pandas, NumPy, Seaborn, and Matplotlib for data processing and visualization.",
      ],
    },
    {
      title: "Remote-Controlled Cat Toy Car",
      img: project3_img,
      duration: "Nov 2023 - Dec 2023",
      details: [
        "Microcontroller Developer",
        "Developed the Remote-Controlled Cat Toy Car using STM32 NUCLEO-L010RB to control all functions of the toy.",
        "Implemented Sleep Mode to save power by putting the car into sleep when not in use, with communication to the car before entering and waking it up when the remote is activated.",
        "Integrated RTC (Real-Time Clock) to track the current time, set alarms, and adjust the time. Enabled wake-up functionality to attract the cat based on a set schedule.",
        "Controlled the toy via Bluetooth Low Energy (BLE) with two-way communication using UART, without using external libraries.",
        "Designed the power supply system and used DMA-based ADC to monitor the voltage of the Li-ion battery for accurate battery status.",
      ],
    },
    {
      title: "Thai Election Data Analysis",
      img: project4_img,
      duration: "Sep 2023 - Oct 2023",
      details: [
        "Analyzed the relationship between party color properties and election outcomes in southern Thailand",
        "Explored and visualized patterns in voting data across different constituencies",
        "Found interesting correlations between blue color intensity in party logos and voter behavior",
        "Applied data preprocessing to handle mixed data types and normalize numerical features",
        "Compared performance of different models (Logistic Regression, Decision Tree) with various feature combinations",
        "Used data visualization to identify and communicate key insights from the analysis",
        "Evaluated results with appropriate metrics to validate findings and model effectiveness",
      ],
    },
    {
      title: "Single-DOF Prismatic Joint Robot",
      img: project5_img,
      duration: "Jan 2023 - May 2023",
      details: [
        "Team Leader and Software Team",
        "Led the team in planning, managing, and reviewing the entire project, including the work of the mechanics, electronics, and software departments.",
        "Led the software team to develop firmware for the overall operation of the robot and control the motion of the end-effector using the STM32 NUCLEO-F411RE.",
        "Developed a Quintic Polynomial Trajectory Generator, considering maximum velocity and acceleration limits.",
        "Implemented PID control for accurate position control on a prismatic joint, ensuring movement accuracy within the allowed error range.",
        "Designed the belt and pulley system for motion transmission and performed strength calculations on the mechanical components.",
      ],
    },
    {
      title: "Bicycle Parking",
      img: project6_img,
      duration: "Aug 2022 - Dec 2022",
      details: [
        "Microcontroller Developer",
        "Investigated issues with bicycle usage by collecting data on problems and needs from users.",
        "Analyzed feedback and created solutions based on user insights, then tested and improved them.",
        "Developed a prototype as a proof of concept by programming the bicycle parking system's functions and controlling hardware components using the NodeMCU ESP32.",
      ],
    },
    {
      title: "Squash ball Launcher",
      img: project7_img,
      duration: "Jan 2022 - May 2022",
      details: [
        "Physics Lead",
        "Planned and supported the work of the mechanical, electrical, and software teams.",
        "Performed physics calculations for the trajectory of the squash ball and spring compression in the launch mechanism.",
        "Designed the spring compression and release mechanisms and assessed the strength of mechanical components.",
        "Debugged Python code for simulating the motion of a squash ball.",
      ],
    },
  ];

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShow = (content) => {
    setModalContent(content);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="project" id="projects">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="project-bx wow zoomIn">
              <h2>Projects</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme project-slider">
                {projects.map((project, index) => (
                  <div key={index} className="item">
                    <div className="project-item" onClick={() => handleShow(project)}>
                      <img src={project.img} alt={project.title} className="project-img" />
                      <h5>{project.title}</h5>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Project Details */}
<Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Duration: {modalContent.duration}</h6>
          <ul>
            {modalContent.details &&
              modalContent.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} className="back-button">
            Back
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
