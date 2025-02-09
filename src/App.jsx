import { BrowserRouter } from "react-router-dom";

import {
  //   About,
  //   Contact,
  //   Experience,
  //   Feedbacks,
  //   Hero,
  Navbar,
  //   Tech,
  //   Works,
  //   StarsCanvas,
} from "./components";

import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import AllRoutes from "./routes/AllRoutes";
import { CacheProvider } from "@emotion/react";

import createCache from "@emotion/cache";

const myCache = createCache({ key: "mantine", prepend: false });

const App = () => {
  return (
    <>
      <CacheProvider value={myCache}>
        <MantineProvider>
          <BrowserRouter>
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <AllRoutes />
              </div>
            </div>
            {/* <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />

            <Hero />
          </div>

          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div> */}
          </BrowserRouter>
        </MantineProvider>
      </CacheProvider>
    </>
  );
};

export default App;
