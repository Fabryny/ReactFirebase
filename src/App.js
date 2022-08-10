
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import store from "./store/store";
import { Provider } from "react-redux";

import Login from "./view/login/login"
import Home from "./view/home/home"
import CadastroUsuario from "./view/cadastro-usuario"
import RecuperarSenha from "./view/recuperar-senha";
import CadastrarEvento from "./view/cadastrar-evento";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route  path="/" element = {<Home/>}/>
          <Route  path="/login" element = {<Login/>}/>
          <Route  path="/cadastrar-usuario" element = {<CadastroUsuario/>}/>
          <Route  path="/recuperar-senha" element = {<RecuperarSenha/>}/>
          <Route  path="/cadastrar-evento" element = {<CadastrarEvento/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
