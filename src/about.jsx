import Aos from "aos";
import "aos/dist/aos.css";
import "./css/about.css";

import { Suspense, lazy } from "react";

const HTMLlink = lazy(() => import("./components/htmllink.jsx"));
const CSSlink = lazy(() => import("./components/csslink.jsx"));
const JSlink = lazy(() => import("./components/jslink.jsx"));
const ReactLink = lazy(() => import("./components/reactlink.jsx"));
const GitLink = lazy(() => import("./components/gitlink.jsx"));

export default function About() {
  const Loading = () => {
    return (
      <div className="loading-center">
        <div className="loading"></div>
      </div>
    );
  };
  return (
    <div className="cont">
      <div className="about-container" data-aos="zoom-in" id="about">
        <h1 data-aos="zoom-out">Sobre mi</h1>
        <p className="p-about" data-aos="zoom-out">
          Mi nombre es Federico, tengo 28 años y actualmente vivo en Cordoba,
          Argentina.
        </p>
        <p className="p-about" data-aos="zoom-out">
          Actualmente ocupo mi tiempo en el desarrollo de sitios web del lado
          Frontend. No obstante, tambien poseo conocimientos en Backend con la
          finalidad de poder entender conceptos necesarios para el front.
        </p>
        <p className="p-about" data-aos="zoom-out">
          Mi proposito en el desarrollo es seguir conociendo nuevas teconologias
          y mejorar todos los días para poder brindar el mejor de los servicios.
        </p>
      </div>

      <div
        className="skills-container"
        data-aos="zoom-in"
        data-aos-anchor-placement="right-top"
      >
        <h2 data-aos="zoom-out">Skills</h2>
        <div className="list-skills" data-aos="zoom-out">
          <Suspense fallback={Loading()}>
            <HTMLlink />
          </Suspense>

          <Suspense fallback={Loading()}>
            <CSSlink/>
          </Suspense>

          <Suspense fallback={Loading()}>
            <JSlink/>
          </Suspense>

          <Suspense fallback={Loading()}>
            <ReactLink/>
          </Suspense>

          <Suspense fallback={Loading()}>
            <GitLink/>
          </Suspense>
        </div>
      </div>
    </div>
  );
}
