import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  height: '68px',
  backGroundColor: 'yellow',
  img: {
    marginTop: '-90px',
    marginLeft: '25rem',
    position: 'relative'
  }, 
})