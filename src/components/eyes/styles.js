import styled from 'styled-components'

export const EyesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .eyelid {
    position: absolute;
    width: 220px;
    height: 100px;
    background-color: white;
    z-index: 400;
    top: -120px;
    animation: blink 4.5s infinite ease-in alternate;
    animation-delay: 1s;
  }
  @keyframes blink {
    0% {
      top: -120px;
    }
    95% {
      top: -120px;
    }
    100% {
      top: -50px;
    }
  }

  .eyes {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .eye {
      border-radius: 50%;
      height: 90px;
      width: 90px;
      background-color: #f3efef;

      .pupil {
        position: absolute;
        background-color: #382e25;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        left: 50px;
        top: 35px;
      }
    }
  }
`
