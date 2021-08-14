import styled, {keyframes} from 'styled-components'
import img from '../../assets/cell.png'

const random = Math.random();
const duration = random * 3 + 2;
const animation = Math.random() > 0.5;

const animDirec = (mine) => {
  if (!mine) {return 'none'}
  const n = Math.floor(Math.random() * 4);
  return (n < 1.3 ? 'normal' :
    n < 2.6 ? 'reverse' :
      n < 3.3 ? 'alternate' :
        'alternate-reverse');
}


const turn = keyframes`
  0% {
    transform: scale(1, 1) skew(0deg, 0deg);
    filter: brightness(55%) hue-rotate(0deg);
  }
  25% { 
    transform: scale(1, -1) skew(3deg, 4deg);
    filter: brightness(75%) hue-rotate(90deg);
  }
  50% { 
    transform: scale(-1, -1) skew(6deg, 3deg);
    filter: brightness(100%) hue-rotate(180deg);
  }
  75% {
    transform: scale(-1, 1) skew(3deg, 1.5deg);
    filter: brightness(75%) hue-rotate(270deg);
  }
  100% { 
    transform: scale(1, 1) skew(0deg, 0deg);
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
  height: 100px;
  width: 100px;
  margin-left: -9px;
  margin-bottom: -20px;
  cursor: pointer;
  background-image: url(${img});
  background-size: 100px 100px;
  color: ${props => props.number === 1 ? '#0044ff' : props.number === 2 ? '#009900' : props.number === 3 ? 'red' : '#ff0055'};
  filter: ${props => props.filter};
  transition: ${props => props.hoverFilter === 'unset' || props.victory ? 'ease-in-out 1.5s' : 'ease-out 0.3s'};
  animation-name: ${props => props.victory && props.hoverFilter === 'unset' ? (animation ? skew : turn) : 'none'};
  animation-timing-function: ${animation ? 'linear' : 'ease-in-out'};
  animation-duration: ${duration};
  animation-iteration-count: infinite, infinite;
  animation-direction: ${props => animDirec(props.hoverFilter === 'unset')};
  :hover {
    filter: ${props => props.hoverFilter};
    transition: ${props => props.hoverFilter === 'unset' || props.victory ? 'ease-in 0.5s' : 'ease-in 0.3s'};
    transform:  ${props => props.hoverFilter === 'empty' ? 'none' : props.victory ? 'scale(1.1) rotate(360deg)' : 'scale(1.05)'};
  }
  > div {
    font-family: cursive; 
    font-weight: bold;
    font-size: 40px;
    padding-top: 21px;
    filter: unset;
  }
`
