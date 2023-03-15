import styled from 'styled-components'

export const Main = styled.main`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

@media screen and (min-width: 992px) {
  width: 95vw;
}
`
export const Container = styled.div`
  width: 90vw;
  margin: 5rem auto;
  background: #fff;
  border-radius: 0.25rem;
  padding: 2.5rem 2rem;
  max-width: 920px;
  display: grid;
  gap: 1rem 2rem;

  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: 250px 1fr;
  }

  h3 {
    line-height: 1.2;
    font-weight: 500;
  }
`
export const SectionInfo = styled.section`

`
// export const Container = styled.div`
  
// `
