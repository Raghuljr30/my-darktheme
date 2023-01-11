// import { useContext, useEffect, useState } from "react"
//   import { ThemeContext } from "./App"
// import React from "react";
// // import {  useTheme, useThemeUpdate } from "./ThemeContext"

// export default function Home()
// {
    
//     const {theme} = useContext(ThemeContext)
//     useEffect(() => {
//         console.log(`className: theme-${theme}`)
//     }, [theme])
//     return(
//       <div className={`theme-${theme}`}>
//           <h1>Home</h1>
//       </div>
//     )
// }
import React from 'react';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the HomePage</h1>
        </div>
    )
}
export default HomePage;