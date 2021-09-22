import styled, {keyframes} from 'styled-components'
import img from '../../assets/cell.png'

const style = (type, prop) => {
  switch (type) {
    case 'hidden':
      return (prop === 'fil' ? 'brightness(100%)' : 'hue-rotate(35deg)');

    case 'flag':
      return (prop === 'fil' ? 'brightness(60%) hue-rotate(320deg)' : 'brightness(70%) hue-rotate(50deg)');

    case 'missFlag':
      return (prop === 'fil' ? 'invert(100%) hue-rotate(320deg)' : 'hue-rotate(190deg)');

    case 'mine':
      return (prop === 'fil' ? 'brightness(75%) hue-rotate(340deg)' : 'unset');

    case 'empty':
      return (prop === 'vHFil' ? 'brightness(60%) sepia(0%) invert(0%) hue-rotate(490deg)' :
        prop === 'vFil' ? 'brightness(10%) sepia(80%) invert(10%) hue-rotate(90deg)' :
          'brightness(10%) sepia(80%) invert(10%) hue-rotate(-270deg)');

    case 'number':
      return (prop === 'fil' ? 'brightness(50%) sepia(50%)' :
        prop === 'vFil' ? 'brightness(50%) sepia(50%) hue-rotate(360deg)' :
          prop === 'hFil' ? 'brightness(55%) sepia(50%) hue-rotate(390deg)' :
            'brightness(60%) sepia(0%) hue-rotate(630deg)');
  }
}

const flag = keyframes`
  0% {
    transform: scale(1, 1) skew(2deg, 3deg);
    filter: hue-rotate(320deg);
  }
  25% { 
    transform: scale(0.8, 1) skew(-2deg, 5deg);
    filter: hue-rotate(250deg);
  }
  50% { 
    transform: scale(1, 1) skew(5deg, 0deg);
    filter: hue-rotate(150deg);
  }
  75% {
    transform: scale(1.1, 1) skew(0deg, -3deg);
    filter: hue-rotate(190deg);
  }
  100% { 
    transform: scale(1, 1) skew(2deg, 3deg);
    filter: hue-rotate(320deg);
  }
`

const skew = keyframes`
  0% { 
    transform: scale(0.9) skew(2deg, 3deg);
    filter: brightness(55%) hue-rotate(360deg);
  }
  25% { 
    transform: scale(1) skew(7deg, 5deg);
    filter: brightness(75%) hue-rotate(270deg);
  }
  50% { 
    transform: scale(1.1) skew(0deg, 2deg);
    filter: brightness(100%) hue-rotate(180deg);
  }
  75% { 
    transform: scale(1) skew(-5deg, -5deg);
    filter: brightness(75%) hue-rotate(90deg);
  }
  100% { 
    transform: scale(0.9) skew(2deg, 3deg);
    filter: brightness(55%) hue-rotate(0deg);
  }
`

const rotate = keyframes`
  0% { 
    transform: rotate(0deg) scale(1);
    filter: brightness(100%) saturate(100%) hue-rotate(0deg);
  }
  25% { 
    transform: rotate(90deg) scale(0.9);
    filter: brightness(100%) saturate(150%) hue-rotate(-70deg);
  }
  50% { 
    transform: rotate(180deg) scale(1.05);
    filter: brightness(100%) saturate(200%) hue-rotate(0deg);
  }
  75% { 
    transform: rotate(270deg) scale(0.9);
    filter: brightness(100%) saturate(150%) hue-rotate(-70deg);
  }
  100% { 
    transform: rotate(360deg) scale(1);
    filter: brightness(100%) saturate(100%) hue-rotate(0deg);
  }
`

const slideEven = keyframes`
  0% { 
    transform: translate(-100vw) scale(0) rotate(360deg);
  }
  100% { 
    transform: translate(0) scale(1) rotate(0deg);
  }
`

const slideOdd = keyframes`
  0% { 
    transform: translate(100vw) scale(0) rotate(-360deg);
  }
  100% { 
    transform: translate(0) scale(1) rotate(0deg);
  }
`

export const CellContainer = styled.div`
  height: 66px;
  width: 66px;
  z-index: ${props => props.type === 'mine' && !props.victory ? '1' : '0'};
  // margin-${props => props.evenRow ? 'left' : 'none'}: 30px;
  margin-left: ${props => props.evenRow ? '-5px' : '25px'};
  // margin-right: ${props => props.evenRow ? '15px' : '0'};
  cursor: pointer;
  background-image: ${props => props.type === 'missFlag' || (props.type === 'mine' && !props.victory) ? 'none' : `url(${img})`};
  background-size: 66px 66px;
  perspective: 1000px;
  color: ${props => props.number === 1 ? '#0044ff' : props.number === 2 ? '#009900' : props.number === 3 ? 'red' : '#ff0055'};
  filter: ${props => style(props.type, props.victory ? 'vFil' : 'fil')};
  transform: ${props => props.type === 'hidden' ? 'translate(0) scale(-1, 1)' : props.victory ? 'scale(1, 1) rotate(-1080deg)' : 'scale(1, 1)'};
  transition: ${props => props.type === 'mine' || props.victory ? 'ease-in-out 2s' : `ease-out ${props.type === 'hidden' ? '1.5' : '0.4'}s`};
  animation-name: ${props => props.slide ? (props.evenRow ? slideEven : slideOdd) : props.type === 'mine' ? (props.victory ? skew : rotate) : 'none'};
  animation-timing-function: ${props => props.victory ? 'linear' : 'ease-out'};
  animation-delay: ${props => props.victory ? '1.8' : props.row*0.1}s;
  animation-duration: ${props => props.slide ? '1s' : props.evenCol ? '4s' : '3.5s'};
  animation-iteration-count:  ${props => props.slide ? '1' : 'infinite'};
  animation-direction: ${props => props.slide || props.evenCol ? 'normal' : 'alternate'};
  :hover {
    transition: ${props => props.type === 'mine' || props.victory ? 'ease-out 2s' : 'ease-in 0.3s'};
    filter: ${props => style(props.type, props.victory ? 'vHFil' : 'hFil')};
    transform: ${props => props.type === 'hidden' ? 'scale(-1.05, 1.05)' : props.victory ? 'scale(1.1) rotate(720deg)' : 'scale(1.05)'};
  }
  > div {
    animation-name: ${props => props.type === 'missFlag' ? flag : 'none'};
    animation-timing-function: ease;
    animation-duration: 4.5s;
    animation-iteration-count: infinite;
    animation-direction: ${props => props.evenCol ? 'normal' : 'alternate'};
    // transition: step 0.4s;
    transition-delay: 0.15s;
    text-align: center;
    font-family: cursive; 
    font-weight: bold;
    font-size: 30px;
    transform: ${props => props.type === 'hidden' ? 'scale(0)' : 'scale(1)'};
    padding-top: 10px;
    filter: unset;
  }
`
