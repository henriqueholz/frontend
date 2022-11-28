import { Container, HeaderText, GridRow, HeaderDiv } from "../styles/pages/home";
import GalleryImages from "../components/galleryImages";

export default function Home() {
  return (
    <Container>
      <HeaderDiv>
        <HeaderText>Frontend Challenge</HeaderText>
      </HeaderDiv>
      <GridRow>
        <GalleryImages/>
      </GridRow>
    </Container>
  )
}
