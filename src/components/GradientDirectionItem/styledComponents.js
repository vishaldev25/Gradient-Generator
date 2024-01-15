import styled from 'styled-components'

export const List = styled.li`
  list-style-type: none;
  margin-right: 20px;
`
export const DirButton = styled.button`
  color: black;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  border-width: 0px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
