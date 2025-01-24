import { Route, Routes } from 'react-router-dom'

import './App.css'
import About from './views/About'
import NotFound from './views/NotFound'
import TodoApp from './views/TodoApp'
import Referencia from './views/Referencia'
import PreguntasFrec from './views/PreguntasFrec'

function App() {


      return (
      <>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/about" element={<About />} >
            <Route path="preguntas" element={<PreguntasFrec />} />
            <Route path="referencia" element={<Referencia />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          {/* Resto de rutas */}
        </Routes>
      </>
      )
}

export default App
