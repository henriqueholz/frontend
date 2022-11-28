import { Container, HeaderText, GridRow, Header } from "../styles/pages/home";
import GalleryImages from "../components/galleryImages";

export default function Home() {
  return (
    <Container>
      <Header>
        <HeaderText>Frontend Challenge</HeaderText>
      </Header>
      <GridRow>
        <GalleryImages/>
      </GridRow>
    </Container>
  )
}
