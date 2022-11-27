import { HomeContainer, Container } from "../styles/pages/home";
import Image from "next/image"
import { useCallback, useEffect, useState } from "react";
import BasicDetails from "../components/galleryImages";

export default function Home() {
  const [list, setList] = useState<number[]>([])
  
  useEffect(() => {
    setTimeout(() => {
      setList([1, 2, 3])
    }, 2000)
  }, [])


  return (
    <Container>
      <BasicDetails/>
    </Container>
  )
}
