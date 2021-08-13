import styled from 'styled-components'
import img from '../../assets/cell.png'

export const CellContainer = styled.div`
  height: 100px;
  width: 100px;
  margin-left: -9px;
  margin-bottom: -20px;
  // border: 2px solid black;
  // background: orange;
  cursor: pointer;
  background-image: url(${img});
  background-size: 100px 100px;
  color: ${props => props.number === 1 ? '#0044ff' : props.number === 2 ? '#009900' : props.number === 3 ? 'red' : '#ff0055'};
  filter: ${props => props.filter};
  transition: ${props => props.hoverFilter === 'unset' ? 'ease-out 0.7s' : 'ease-in 0.3s'};
  // transition: ease-in 0.5s;
  :hover {
    filter: ${props => props.hoverFilter === 'empty' ? props.filter : props.hoverFilter};
    transition: ${props => props.hoverFilter === 'unset' ? 'ease-out 0.7s' : 'ease-in 0.3s'};
    // transition: ease-in 0.5s;
  }
  > div {
    font-family: cursive; 
    font-weight: bold;
    font-size: 40px;
    padding-top: 21px;
    filter: unset;
  }
`

// export const Bee = styled.div`
//   height: 50px;
//   width: 50px;
//   // margin-left: -50px;
//   // margin-top: -50px;
//   border: 2px solid black;
//   // background: orange;
//   cursor: pointer;
//   background-image: url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficons555.com%2Fimages%2Ficons-red%2Fimage_icon_hexagon_pic_512x512.png&f=1&nofb=1');
//   // filter: 
// `
