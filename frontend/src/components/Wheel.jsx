import React from 'react';


export function Wheel() {

    // const users = ['s', 'f', 'e', 't']

    return (
        <div>
            <h1>Wheel</h1>
            <button>load users</button>
            <button >start spinning</button>
            <div className="wheel-container flex">
                <div className="wheel flex">
                    <div className="wheel-check"></div>
                </div>
            </div>
        </div>
    );
}

// import {React, useMemo, useState, useEffect, useRef, useCallback} from 'react';
// import styled, {keyframes, css} from 'styled-components';

// const ROUNDS =  3;
// const RADIUS = 300;
// const START_USERS = 60;

// const spin = keyframes`
//   from {transform: rotate(0deg);}
//   to {transform: rotate(${360 * ROUNDS}deg);}
// `

// const center = css`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const Container = styled.div`
//   ${center};
//   flex-direction: column;
//   min-height: 100vh;
//   background-color: #282c34;
//   color: white;
// `

// const Wheel = styled.div`
//   ${center};
//   position: relative;
//   background: conic-gradient(${({conicBG}) => conicBG});
//   width: ${RADIUS * 2}px;
//   height: ${RADIUS * 2}px;
//   border-radius: 50%;
//   border: 2px solid #61dafb;
//   animation-name: ${({spinning}) => spinning && spin};
//   animation-timing-function: ease-out;
//   animation-duration: 5s;
//   animation-iteration-count: 1;
// `

// const Item = styled.div`
//     position: absolute;
//     height: 100%;
//     transform: rotate(${({rotateBy}) => rotateBy}deg);
//     font-size: 12px;
//     transition: all .5s;
// `

// const Button = styled.button`
//   margin: 15px;
//   padding: 6px 12px;
// `

// const App = () => {
//     const [step, setStep] = useState(1);
//     const [demoUsers, setDemoUsers] = useState([...Array(START_USERS).keys()]);
//     const [spinning, setSpinning] = useState(false);
//     const wheelElement = useRef(null);
//     const getPositionByIndex = useCallback((index) => (360 / demoUsers.length * index), [demoUsers]);
//     const conicBG = useMemo(() =>
//             demoUsers.reduce((acc, cur, index) =>
//                 `${acc}${!!(index % 2) ? 'red' : 'gray'} ${getPositionByIndex(index)}deg ${getPositionByIndex(index + 1)}deg${index < (demoUsers.length - 1) ? ', ' : ''}`, '')
//         ,[demoUsers, getPositionByIndex])

//     useEffect(() => {
//         if (wheelElement.current) {
//             wheelElement.current.addEventListener('animationend', () => {
//                 setSpinning(false);
//                 setDemoUsers(demoUsers.slice(0, demoUsers.length / 2));
//                 setStep(step + 1);
//             });
//         }
//     }, [wheelElement, demoUsers, step])

//     return (
//         <Container>
//             <Wheel ref={wheelElement} conicBG={conicBG} spinning={spinning}>
//                 {demoUsers.map(key => <Item key={key} rotateBy={getPositionByIndex(key) + 360 / demoUsers.length / 2}>USER_{key}</Item>)}
//             </Wheel>
//             <Button disabled={spinning || (step >= 2)} onClick={() => setSpinning(true)}>SPIN</Button>
//         </Container>
//     );
// }
// export default App;