import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
//ContextAPI
import CategoriasProvider from './context/CategoriasContext';
import RecetasProvider from './context/RecetasContext';
function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header 
          title='Find your drink'
        />

        <div className='container mt-5'>
          <div className='row'>
            <Formulario />
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
