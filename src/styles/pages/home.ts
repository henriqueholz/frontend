import { styled } from '..'

export const Container = styled('div', {
  maxWidth: '1200px',
  margin: 'auto'
})

export const GridRow = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 350px))',
  gridGap: '15px 15px',
  justifyContent: 'center',
  alignItems: 'baseline',
  padding: '10px',
  lineHeight: '1',
  fontSize: '20px',
  marginBottom: '0',
  filter: 'contrast(0.7)',
  transition: 'filter 0.5s ease',
  cursor: 'pointer',
  textAlign: 'center',
  fontFamily: 'sans-serif',
  flexDirection: 'column-reverse',
})

export const GridImage = styled('div', {
  transition: 'filter 0.5s ease',
  cursor: 'pointer',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',
  img: {
    paddingTop: '5px'
  }, 
  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '1rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)'
  }
})

export const Header = styled('div', {
  display: 'block',
  justifyContent: 'center',
  height: '40px',
  backgroundColor: 'rgba(41,87,108,255)',
  borderRadius: 8,
})

export const HeaderText = styled('p', {
  textAlign: 'center',
  display: 'block',
  justifyContent: 'center',
  fontSize: '30px',

})

export const DropdownLabel = styled('p', {
  textAlign: 'center',
  display: 'block',
  justifyContent: 'center',
  fontSize: '20px',
  margin: '10px',
})