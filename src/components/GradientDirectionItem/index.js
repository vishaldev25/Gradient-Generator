import {List, DirButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionList, clickDirection, isActive} = props
  const {directionId, displayText} = directionList

  const onClickDirection = () => {
    clickDirection(directionId)
  }
  return (
    <List>
      <DirButton onClick={onClickDirection} isActive={isActive}>
        {displayText}
      </DirButton>
    </List>
  )
}

export default GradientDirectionItem
