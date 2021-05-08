import Home from "./pages/Home"
import Wrapper from "./components/Wrapper"
import Header from "./components/Header"
import Footer from "./components/Footer"


export default function App() {

  return (
    <Wrapper>
      <Header />
      <Home/>
      <Footer/>
    </Wrapper>

  );
}