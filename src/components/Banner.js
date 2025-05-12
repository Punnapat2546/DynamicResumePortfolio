import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/front_img.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Punnapat Getgaew", "Robotics Engineer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const openResume = () => {
    window.open('https://drive.google.com/file/d/1uCHN64gix7c3TxhkiM0UpNwKTh_aepT2/view?usp=drive_link', '_blank');
  };

  const openTranscript = () => {
    window.open('https://drive.google.com/file/d/1AaDVoUoHLyWfuA52NjKbSuvE74gGn5FV/view?usp=drive_link', '_blank');
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h1>{`I'm `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Punnapat Getgaew", "Data Scientist", "Robotics Engineer" ]'><span className="wrap">{text}</span></span></h1>
                <p>Fourth-year engineering student, graduating this May, passionate about data analysis for business insights and machine learning applications. Completed a 6-month Machine Learning Engineer internship, working on a project related to Statistical Modeling. Experience in Exploratory Data Analysis, Data Visualization, and Database Management. Fast learner with excellent problem-solving skills and committed to continuous growth. Currently seeking opportunities to apply technical skills in turning data into insights that support business decisions and growth.</p>
                <button onClick={openResume}>Resume <ArrowRightCircle size={25} /></button>
                <button onClick={openTranscript}>Transcript <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
