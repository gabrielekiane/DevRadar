import React, { useState, useEffect } from 'react';
import api from "./services/api";

import "./global.css";
import "./app.css";
import "./sidebar.css";
import "./main.css";

import DevForm from './components/devForm';
import DevItem from "./components/devItem";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);
  async function handleAddDev(data) {

    const response = await api.post('/devs', data)
    
    //atualizando a lista de devs
    setDevs([...devs, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
       <DevForm onSubmit={ handleAddDev } />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;


// componente: bloco isolado de html, css, js... no qual n interfere no restante da aplicacao (uma funcao q retorna html, js, blabla e pode ser chamado como <tag>)
// Propriedade: (tipo os atributos do html (tile="gabiLinda")) informacoes q um componente pai passa para o filho
// estado: informacoes mantidas pelo componente (imutabilidade)