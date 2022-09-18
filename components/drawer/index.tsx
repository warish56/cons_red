import React from "react";
import Link from "next/link";
import { Container, Contents } from "./style";

export const DrawerComponent = () => {
  return (
    <Container>
      <Contents>
        <Link href="/projects">Projects</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </Contents>
    </Container>
  );
};
