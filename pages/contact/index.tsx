import { Icon } from "@components/Icon";
import { LinkIcon } from "@components/LinkIcon";
import Image from "next/image";
import {
  Container,
  ImageContainer,
  ContentSection,
  InfoSection,
  MapSection,
  IconSection,
  Row,
} from "./style";

type ContactPageImageProps = {
  src: string;
  alt: string;
};

type IconDataProps = {
  icon: string;
  desc: string;
};

const ContactPageImage = ({ src, alt }: ContactPageImageProps) => {
  return (
    <ImageContainer>
      <Image src={src} layout="fill" alt={alt} />
    </ImageContainer>
  );
};

const IconData = ({ icon, desc }: IconDataProps) => {
  return (
    <IconSection>
      <Icon name={icon} />
      <span>{desc}</span>
    </IconSection>
  );
};
const ContactPage = () => {
  return (
    <Container>
      <h1>Contact Us</h1>
      <ContactPageImage
        src="/assets/contact_us_hero.jpg"
        alt="user dialing phone"
      />

      <ContentSection>
        <InfoSection>
          <IconData
            icon="fa-sharp fa-solid fa-location-dot"
            desc="Avinguda de les Drassanes 6, 15th Floor 08001 Barcelona"
          />
          <IconData icon="fa-solid fa-phone" desc="+91 1234567890" />
          <IconData icon="fa-solid fa-envelope" desc="abcd@gmail.com" />

          <Row>
            <LinkIcon
              iconProps={{
                name: "fa-brands fa-facebook",
              }}
              linkProps={{
                href: "https://www.facebook.com",
              }}
            />
            <LinkIcon
              iconProps={{
                name: "fa-brands fa-whatsapp",
              }}
              linkProps={{
                href: "https://www.facebook.com",
              }}
            />

            <LinkIcon
              iconProps={{
                name: "fa-brands fa-instagram",
              }}
              linkProps={{
                href: "https://www.instagram.com",
              }}
            />
          </Row>
        </InfoSection>
        <MapSection></MapSection>
      </ContentSection>
    </Container>
  );
};

export default ContactPage;
