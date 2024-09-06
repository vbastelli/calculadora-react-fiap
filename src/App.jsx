import Header from './components/Header'
import { useState,useEffect } from 'react'
import Resultado from './components/Resultado'
import './css/global.css'
import './css/estilo.css'

function App() {

  //Hooks- useState- Manipula o estado da variavel
  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)
  const [mostrarresultado,setMostrarResultado]=useState(false)

 
  //criando a função calcularImc
  const calcularImc=()=>{
    const imc = peso /(altura * altura)
    return setResultado(imc.toFixed(2))
  }

  //Hooks- useEffect - efeito colateral no caso mostrar o resultado
  useEffect(()=>{
    //if ternario
    resultado > 0 ? setMostrarResultado(true): setMostrarResultado(false)
  },[resultado])


  return (
    <>
    <div className="container">
      <div className="box">
      <Header/>

      <form>
        <div>
            <label htmlFor="altura">Altura 
              <span className="span">(Ex:1.80)</span>
              <input type="number" 
                      id="altura" 
                      placeholder="Digite sua Altura"
                        //PASSANDO O useState setAltura
                      onBlur={({target})=>parseInt(setAltura(target.value))}
              />
            </label>
        </div>

        <div>
            <label htmlFor="peso">Peso 
              <span className="span">(Ex:80)</span>
              <input type="number" 
                      id="peso" 
                      placeholder="Digite seu Peso"
                      //PASSANDO O useState setPeso
                      onBlur={({target})=>parseInt(setPeso(target.value))}
              />
            </label>
        </div>
      {/*CRIANDO BOTÃO CHAMANDO O EVENTO ONCLICK E CHAMANDO A FUNÇÃO CALCULARIMC */}
      <button type="submit" onClick={calcularImc}>Calcular</button>

      </form>

      </div>
    {/*CHAMANDO O COMPONENTE RESULTADO E PASSANDO UM DESESTRUCT */}
        {mostrarresultado &&(
          <Resultado resultado={resultado}/>
        )}

    </div>
   
    </>
  )
}

export default App
