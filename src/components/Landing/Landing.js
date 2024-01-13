import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Location from "../Location/Location";
import Main from "../Main/Main";
import Medical from '../Medical/Medical';
import Services from "../Services/Services";
import Therapist from '../Therapist/Therapist';
import "./landing.css";
import Banner from '../Banner/Banner';
import EstheticServices from '../Services/EstheticService'
import Error404 from "../Error404/Error404";


export default function Landing(props) {
  return (
    <div className="landingPage">
      <Routes>
        <Route path="/" element={<Main />} />

        <Route
          exact
          path="/location"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'} />
              <Banner />
              <Location />
            </>
          }
        />

        <Route
          path="/services"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'} />
              <Banner />
              <Services />
            </>
          }
        />

        <Route
          path="/estheticServices"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'} />
              <Banner />
              <EstheticServices />
            </>
          }
        />

        <Route
          path="/medical"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'} />
              <Banner />
              <Medical />
            </>
          }
        />

        <Route
          path="/therapist"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'} />
              <Banner />
              <Therapist />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'} />
              <Banner />
              <About />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <Header fontColor={'rgb(108, 116, 158)'} />
              <Banner />
              <Error404 />
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}
