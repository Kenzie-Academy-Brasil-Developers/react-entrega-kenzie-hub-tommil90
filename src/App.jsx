import { useCallback, useState } from "react"
import { ThemeProvider } from "styled-components"
import RoutesMain from "./Routes"
import GlobalStyle from './styles/Global';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { themes } from "./styles/theme";
import { AuthProvider } from "./contexts/AuthContext";



function App() {

  const [currentTheme, setCurrentTheme] = useState("light")

  const getOpositeTheme = useCallback(

    () => (
      currentTheme === "light" ? "dark" : "light"
    ), [currentTheme]
  )


  return (
    <div className="App">


    <ThemeProvider theme={themes[currentTheme]}>
      <button onClick={ ()=> setCurrentTheme(getOpositeTheme()) } >switch to {getOpositeTheme()} mode</button>
      <GlobalStyle/>

      <AuthProvider>
        <RoutesMain />
      </AuthProvider>

    </ThemeProvider>
    <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />



      
    </div>
  )
}

export default App
