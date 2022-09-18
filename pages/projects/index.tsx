import { InferGetStaticPropsType } from "next";
import Image, { ImageProps } from "next/image";
import { useMemo } from "react";
import {
  Container,
  ProjectCardContainer,
  ProjectImageConatiner,
  Title,
  Description,
  Content,
} from "./style";

type ProjectCardProps = {
  imageProps: ImageProps;
  title: string;
  description: string;
};

interface IProject {
  id: string;
  src: string;
  title: string;
  desc: string;
}

const descriptionText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

const projectsData: IProject[] = [
  {
    id: "1",
    src: "/assets/building_1.webp",
    title: "Project 1",
    desc: descriptionText,
  },

  {
    id: "2",
    src: "/assets/building_2.webp",
    title: "Project 2",
    desc: descriptionText,
  },

  {
    id: "3",
    src: "/assets/building_3.webp",
    title: "Project 3",
    desc: descriptionText,
  },

  {
    id: "4",
    src: "/assets/building_4.webp",
    title: "Project 4",
    desc: descriptionText,
  },

  {
    id: "5",
    src: "/assets/building_5.webp",
    title: "Project 5",
    desc: descriptionText,
  },
  {
    id: "6",
    src: "/assets/building_6.webp",
    title: "Project 6",
    desc: descriptionText,
  },

  {
    id: "7",
    src: "/assets/building_7.jpg",
    title: "Project 7",
    desc: descriptionText,
  },

  {
    id: "8",
    src: "/assets/building_1.webp",
    title: "Project 8",
    desc: descriptionText,
  },
  {
    id: "9",
    src: "/assets/building_2.webp",
    title: "Project 9",
    desc: descriptionText,
  },

  {
    id: "10",
    src: "/assets/building_3.webp",
    title: "Project 10",
    desc: descriptionText,
  },
];

const ProjectCard = ({ imageProps, title, description }: ProjectCardProps) => {
  return (
    <ProjectCardContainer className="p_card">
      <ProjectImageConatiner>
        <Image {...imageProps} layout="fill" />
      </ProjectImageConatiner>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </ProjectCardContainer>
  );
};

const ProjectsPage = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const list = useMemo(() => {
    return projects.map(({ src, title, desc, id }) => {
      return (
        <ProjectCard
          key={id}
          imageProps={{
            src,
            alt: "Building construction",
          }}
          title={title}
          description={desc}
        />
      );
    });
  }, [projects]);
  return (
    <Container>
      <h1>Projects </h1>
      <Content>{list}</Content>
    </Container>
  );
};

export async function getStaticProps() {
  return {
    props: {
      projects: projectsData,
    },
  };
}

ProjectsPage.attributes = {
  fullwidthContent: true,
};
export default ProjectsPage;
