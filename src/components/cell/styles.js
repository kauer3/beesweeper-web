import styled, {keyframes} from 'styled-components'
import img from '../../assets/cell.png'

const style = (type, prop) => {
  switch (type) {
    case 'hidden':
      return (prop === 'fil' ? 'brightness(100%)' : 'hue-rotate(35deg)');

    case 'flag':
      return (prop === 'fil' ? 'brightness(60%) hue-rotate(320deg)' : 'brightness(70%) hue-rotate(50deg)');

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

const turn = keyframes`
  0% {
    transform: scale(1, 1);
    filter: brightness(55%) hue-rotate(0deg);
  }
  25% { 
    transform: scale(1, -1);
    filter: brightness(75%) hue-rotate(90deg);
  }
  50% { 
    transform: scale(-1, -1);
    filter: brightness(100%) hue-rotate(180deg);
  }
  75% {
    transform: scale(-1, 1);
    filter: brightness(75%) hue-rotate(270deg);
  }
  100% { 
    transform: scale(1, 1);
    filter: brightness(55%) hue-rotate(360deg);
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

export const CellContainer = styled.div`
  height: 66px;
  width: 66px;
  // margin-${props => props.evenRow ? 'left' : 'none'}: 30px;
  margin-left: ${props => props.evenRow ? '0' : '30px'};
  // margin-right: ${props => props.evenRow ? '15px' : '0'};
  cursor: pointer;
  background-image: url(${img});
  background-size: 66px 66px;
  perspective: 1000px;
  color: ${props => props.number === 1 ? '#0044ff' : props.number === 2 ? '#009900' : props.number === 3 ? 'red' : '#ff0055'};
  filter: ${props => style(props.type, props.victory ? 'vFil' : 'fil')};
  transform: ${props => props.type === 'hidden' ? 'scale(-1, 1)' : props.victory ? 'scale(1, 1) rotate(-1080deg)' : 'scale(1, 1)'};
  transition: ${props => props.type === 'mine' || props.victory ? 'ease-in-out 2s' : 'ease-in 0.4s'};
  animation-name: ${props => props.type === 'mine' ? (props.victory ? (props.random ? skew : turn) : rotate) : 'none'};
  animation-timing-function: ${props => props.victory ? (props.random ? 'ease-in-out' : 'ease') : 'linear'};
  animation-duration: ${props => props.evenCol ? '4s' : '3.5s'};
  animation-iteration-count: infinite;
  animation-direction: ${props => props.evenCol ? 'normal' : 'reverse'};
  :hover {
    transition: ${props => props.type === 'mine' || props.victory ? 'ease-out 2s' : 'ease-in 0.3s'};
    filter: ${props => style(props.type, props.victory ? 'vHFil' : 'hFil')};
    transform: ${props => props.type === 'hidden' ? 'scale(-1.05, 1.05)' : props.victory ? 'scale(1.1) rotate(720deg)' : 'scale(1.05)'};
  }
  > div {
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
