import {
  Container,
  Fade,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { NavbarAdmin } from "../../components/admin/NavbarAdmin";
import { DatosLanding } from "./DatosLanding";
import { DatosWeb } from "./DatosWeb";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useState } from "react";

export const DatosClientePage = () => {
  const [index, setIndex] = useState(0);
  const handleTabsChange = (index: number) => {
    setIndex(index);
  };

  return (
    <>
      <NavbarAdmin />
      <Container maxWidth="8xl" py={10}>
        <Tabs onChange={handleTabsChange} colorScheme="telegram">
          <TabList>
            <Tab>Datos Web</Tab>
            <Tab>Datos Landing</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <LazyLoadComponent>
                <Fade in={index === 0} style={{ transitionDuration: "1s" }}>
                  <DatosLanding />
                </Fade>
              </LazyLoadComponent>
            </TabPanel>
            <TabPanel>
              <LazyLoadComponent>
                <Fade in={index === 1} style={{ transitionDuration: "1s" }}>
                  <DatosWeb />
                </Fade>
              </LazyLoadComponent>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};
