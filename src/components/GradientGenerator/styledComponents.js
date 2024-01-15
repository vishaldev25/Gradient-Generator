import styled from 'styled-components'

export const App = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient( 
    to ${props => props.dir}, 
    ${props => props.color1}, 
    ${props => props.color2}
  );
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
`
export const Direction = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 600;
  color: #ffffff79;
`
export const DirectionButton = styled.div`
  display: flex;
  flex-direction: column;
`
export const Unordered = styled.ul`
  list-style-type: none;
  display: flex;
`
export const ListValues = styled.li`
  color: black;
`
export const Button = styled.button`
  background-color: #00c9b7;
  color: #1e293b;
  border-radius: 8px;
  border-width: 0;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
`
export const ColorParaHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const InputAndColor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`

export const Input = styled.input`
  width: 80px;
  height: 40px;
  border-width: 0px;
  outline: none;
  background-color: transparent;
`

export const ColorPara = styled.p`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Roboto';
  margin-right: 30px;
  color: #ffffff;
`
