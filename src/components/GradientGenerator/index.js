import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  App,
  Heading,
  Direction,
  DirectionButton,
  Unordered,
  Button,
  ColorParaHolder,
  ColorPara,
  InputAndColor,
  Input,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
    text1: false,
    color1: '#8ae323',
    color2: '#014f7b',
    direction: gradientDirectionsList[0].value,
  }

  clickDirection = id => {
    const updated = gradientDirectionsList.filter(
      each => each.directionId === id,
    )
    const [onlyValue] = updated.map(each => ({
      value: each.value,
    }))
    this.setState({direction: onlyValue.value})
  }

  inputColor1 = event => {
    this.setState({inputColor1: event.target.value, text1: true})
  }

  inputColor2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  generateButton = () => {
    const {inputColor1, inputColor2} = this.state
    this.setState({
      color1: inputColor1,
      color2: inputColor2,
    })
  }

  render() {
    const {inputColor1, inputColor2, text1, color1, color2, direction} =
      this.state

    return (
      <App
        color1={color1}
        color2={color2}
        dir={direction}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Direction>Choose Direction</Direction>
        <DirectionButton>
          <Unordered>
            {gradientDirectionsList.map(each => (
              <GradientDirectionItem
                key={each.directionId}
                directionList={each}
                clickDirection={this.clickDirection}
                isActive={direction === each.value}
              />
            ))}
          </Unordered>
        </DirectionButton>
        <Direction>Pick the Colors</Direction>
        <ColorParaHolder>
          <InputAndColor>
            <ColorPara>{text1 ? inputColor1 : '#8ae323'}</ColorPara>
            <Input
              type="color"
              onChange={this.inputColor1}
              value={inputColor1}
            />
          </InputAndColor>
          <InputAndColor>
            <ColorPara>{text1 ? inputColor2 : '#014f7b'}</ColorPara>
            <Input
              type="color"
              onChange={this.inputColor2}
              value={inputColor2}
            />
          </InputAndColor>
        </ColorParaHolder>
        <Button onClick={this.generateButton}>Generate</Button>
      </App>
    )
  }
}

export default GradientGenerator
