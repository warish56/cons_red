import Image from "next/image";
import { AboutInfo } from "./constants";
import {
  Container,
  ImageContainer,
  Content,
  ContentTitle,
  CoontentDescription,
} from "./style";

type AboutPageImageProps = {
  src: string;
  alt: string;
};

type AboutContentProps = {
  title: string;
  description: string;
  imageProps?: AboutPageImageProps;
};

const AboutPageImage = ({ src, alt }: AboutPageImageProps) => {
  return (
    <ImageContainer>
      <Image src={src} layout="fill" alt={alt} />
    </ImageContainer>
  );
};

const AboutContent = ({
  title,
  description,
  imageProps,
}: AboutContentProps) => {
  return (
    <Content>
      {imageProps && <AboutPageImage {...imageProps} />}
      <ContentTitle>{title}</ContentTitle>
      <CoontentDescription>{description}</CoontentDescription>
    </Content>
  );
};

const AboutPage = () => {
  return (
    <Container>
      <h1>About Us</h1>
      <AboutContent
        imageProps={{
          src: "/assets/about_us_hero.jpg",
          alt: "office work",
        }}
        title={AboutInfo.hero.title}
        description={AboutInfo.hero.description}
      />
    </Container>
  );
};

export default AboutPage;
