import { useState } from "react"
import { ThemeProvider } from "styled-components"
import RoutesHTML from "./Routes"
import { darkTheme, mainTheme } from "./styles/theme"
import GlobalStyle from './styles/Global';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [darkMode, setDarkmode] = useState(true)


  return (
    <div className="App">

    <ThemeProvider theme={ darkMode ? darkTheme : mainTheme}>
      <GlobalStyle/>
      <RoutesHTML/>
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
