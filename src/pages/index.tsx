import { HomeContainer, Container } from "../styles/pages/home";
import Image from "next/image"
import { useCallback, useEffect, useState } from "react";
import BasicDetails from "../components/galleryImages";

export default function Home() {
  return (
    <Container>
      <BasicDetails/>
    </Container>
  )
}
