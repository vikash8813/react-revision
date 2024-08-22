// import React, {createContext, useContext, useState} from 'react';
// import Parent from "./components/parent.tsx";
// import FormTest from "./components/formTest.tsx";
// import ContextCheck from "./components/contextCheck.tsx";
//
// const ThemeContext = createContext('name');
//
// const App = () => {
//     const name = 'vikash'
//     const [theme,setTheme] = useState('light')
//     return (
//         <ThemeContext.Provider value={{theme,setTheme}}>
//             {/*<Form />*/}
//             {theme}
//
//             <Test/>
//
//         </ThemeContext.Provider>
//     );
// };
//
// export default App;
//
//
// const Test = () => {
//
//     const theme = useContext(ThemeContext)
//     return(
//         <div>
//             {theme.theme}
//             <button
//                 onClick={()=> {theme.setTheme('dark')}}
//             >
// click
//             </button>
//         </div>
//     )
//
// }


// import React, {useRef} from 'react';
//
// const App = () => {
//
//     const testRef = useRef()
//     return (
//         <div>
//             <button ref={testRef} onClick={() =>{
//                 console.log('clicked')
//             }}>
//                 click
//             </button>
//
//             <button  onClick={() =>{
//                 testRef.current.click()
//             }}>
//                 click2
//             </button>
//         </div>
//     );
// };
//
// export default App;


import React from 'react';
import Parent from "./components/parent.tsx";

const App = () => {
    return (
        <div>
            <Parent name='vikash'>
                <h1>
                    this is a children
                </h1>
            </Parent>
        </div>
    );
};

export default App;