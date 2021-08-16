import styled, {keyframes} from 'styled-components'
import img from '../../assets/cell.png'

const style = (type, prop) => {
  switch (type) {
    case 'hidden':
      return (prop === 'fil' ? 'brightness(90%)' : 'hue-rotate(35deg)');

    case 'flag':
      return (prop === 'fil' ? 'brightness(60%) hue-rotate(320deg)' : 'brightness(70%) hue-rotate(50deg)');

    case 'mine':
      return (prop === 'fil' ? 'brightness(75%) hue-rotate(340deg)' : 'unset');

    case 'empty':
      return (prop === 'vHFil' ? 'brightness(60%) sepia(0%) invert(0%) hue-rotate(490deg)' :
        'brightness(10%) sepia(80%) invert(10%) hue-rotate(90deg)');

    case 'number':
      return (prop === 'fil' || prop === 'vFil' ? 'brightness(55%) sepia(50%) hue-rotate(360deg)' :
        prop === 'hFil' ? 'brightness(55%) sepia(50%) hue-rotate(390deg)' :
          'brightness(60%) sepia(0%) hue-rotate(630deg)');
  }
}

// const animDirec = (random, mine) => {
//   if (!mine) {return 'none'}
//   const n = Math.floor(random * 4);
//   return (n < 1.3 ? 'normal' :
//     n < 2.6 ? 'reverse' :
//       n < 3.3 ? 'alternate' :
//         'alternate-reverse');
// }

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

export const CellContainer = styled.div`
  height: 64px;
  width: 64px;
  margin-left: ${props => props.evenRow ? '0' : '29px'};
  cursor: pointer;
  background-image: url(${img});
  background-size: 64px 64px;
  color: ${props => props.number === 1 ? '#0044ff' : props.number === 2 ? '#009900' : props.number === 3 ? 'red' : '#ff0055'};
  filter: ${props => style(props.type, 'fil')};
  transform: ${props => props.type === 'hidden' ? 'scale(-1, 1)' : 'scale(1, 1)'};
  transition: ${props => props.type === 'mine' || props.victory ? 'ease-in-out 1.5s' : 'ease-in 0.4s'};
  animation-name: ${props => props.victory && props.type === 'mine' ? (props.random ? skew : turn) : 'none'};
  animation-timing-function: ${props => props.random ? 'ease-in-out' : 'ease'};
  animation-duration: ${props => props.evenCol ? '4s' : '4.5s'};
  animation-iteration-count: infinite;
  animation-direction: ${props => props.evenCol ? 'normal' : 'reverse'};
  :hover {
    filter: ${props => style(props.type, props.victory ? 'vHFil' : 'hFil')};
    transition: ${props => props.type === 'mine' || props.victory ? 'ease-in 0.5s' : 'ease-in 0.3s'};
    transform: ${props => props.type === 'hidden' ? 'scale(-1.05, 1.05)' : props.victory ? 'scale(1.1) rotate(720deg)' : 'scale(1.05)'};
  }
  > div {
    transition: 0s;
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
