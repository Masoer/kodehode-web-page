import { AboutInfo, AboutTitle, AboutTitleH2 } from "./aboutPage/AboutText";
import {
  Column,
  Container,
  Image,
  ImagePhone,
  MainContentDiv,
  NewSection,
  PaddingDiv,
  PSTyle,
} from "./aboutPage/StyledAbout";
import WomanPC from "../pages/aboutPage/img/WomanPC.png";

const AboutPage = () => {
  return (
    <>
      <PaddingDiv>
        <Container>
          <NewSection>
            <Column>
              <Image src={WomanPC} alt="Woman on a PC" />
              <Container>
                <MainContentDiv>
                  <AboutTitle />
                  <AboutTitleH2 />
                  <ImagePhone src={WomanPC} alt="Woman on a PC" />
                  <PSTyle>
                    <AboutInfo />
                  </PSTyle>
                </MainContentDiv>
              </Container>
            </Column>
          </NewSection>
        </Container>
      </PaddingDiv>
    </>
  );
};

export default AboutPage;
