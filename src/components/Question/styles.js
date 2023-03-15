import styled from 'styled-components'

export const Question = styled.article`
  padding: 1rem 1.5rem;
  border: 2px solid #eae6eb;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  h4 {
    text-transform: none;
    line-height: 1.5;
    margin: 0 0;
  }

  p {
    color: hsl(209, 34%, 30%);
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
`
export const Button = styled.button`
  background: transparent;
  border-color: transparent;
  width: 2rem;
  height: 2rem;
  background: #eae6eb;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #b4345c;
  cursor: pointer;
  margin-left: 1rem;
  align-self: center;
  min-width: 2rem;
`
export const Container = styled.div`

`
// export const Container = styled.div`
  
// `
