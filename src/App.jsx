import { useState } from 'react'
import ExpandedNavContext from './context/ExpandNavContext.jsx'
import Routes from './Routes.jsx'
import CadastroContext from './context/CadastroContext.jsx'
import axios from 'axios'

function App() {
  const [expand, setExpand] = useState(false)
  const [nacionalidadeUsuario, setNacionalidadeUsuario] = useState('');
  const [identidadeUsuario, setIdentidadeUsuario] = useState('');
  const [cepUsuario, setCepUsuario] = useState('');
  const [numeroUsuario, setNumeroUsuario] = useState('');
  const [complementoUsuario, setComplementoUsuario] = useState('');
  const [celularUsuario, setCelularUsuario] = useState('');
  const [estadoCivilUsuario, setEstadoCivilUsuario] = useState('');
  const [dataNascimentoUsuario, setDataNascimentoUsuario] = useState('');
  const [sexoUsuario, setSexoUsuario] = useState('')
  const [sobreUsuario, setSobreUsuario] = useState('')
  const [experienciaUsuario, setExperienciaUsuario] = useState('')
  const [habilidadesUsuario, setHabilidadesUsuario] = useState([])
  const [nextTab, setNextTab] = useState(0)
  const [logradouro, setLogradouro] = useState("")
  const [bairro, setBairro] = useState("")
  const [estado, setEstado] = useState("")
  const [cidade, setCidade] = useState("")
  const [tipoPerfil, setTipoPerfil] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [sobrenomeUsuario, setSobrenomeUsuario] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('')
  const [fill, setFill] = useState(true)
  const [idUsuario, setIdUsuario] = useState('')
  const [allUsers, setAllUsers] = useState('')
  const [servicoEscolhido, setServicoEscolhido] = useState()

  if ((sessionStorage.getItem('idUsuario')) != null) {
    const ID = sessionStorage.getItem('idUsuario');

    fetch(`http://localhost:8080/API/getUsuario/${ID}`).then(res => res.json()).then(data => {
      setNomeUsuario(data.nomeUsuario)
      setEmailUsuario(data.emailUsuario)
      setSobrenomeUsuario(data.sobrenomeUsuario)
      setEmailUsuario(data.emailUsuario)
      setSenhaUsuario(data.senhaUsuario)
      setExperienciaUsuario(data.experienciaUsuario)
      setHabilidadesUsuario(data.habilidadeUsuario)
      setSobreUsuario(data.sobreUsuario)
      setCelularUsuario(data.celularUsuario)
      setIdUsuario(ID)
      setTipoPerfil(data.tipoPerfil)
    })
  }

  if (!allUsers) {
    console.log('nada')
    try {
      axios.get("http://localhost:8080/API/usuarios")
        // .then(res => console.log(res.data))
        .then(res => setAllUsers(res.data))
        .then(console.log(allUsers ))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    // Aplicação dos Providers dos contextos
    <CadastroContext.Provider value={{
      nacionalidadeUsuario, setNacionalidadeUsuario,
      identidadeUsuario, setIdentidadeUsuario,
      cepUsuario, setCepUsuario,
      numeroUsuario, setNumeroUsuario,
      complementoUsuario, setComplementoUsuario,
      celularUsuario, setCelularUsuario,
      estadoCivilUsuario, setEstadoCivilUsuario,
      dataNascimentoUsuario, setDataNascimentoUsuario,
      sexoUsuario, setSexoUsuario,
      sobreUsuario, setSobreUsuario,
      experienciaUsuario, setExperienciaUsuario,
      habilidadesUsuario, setHabilidadesUsuario,
      nextTab, setNextTab,
      logradouro, setLogradouro,
      bairro, setBairro,
      estado, setEstado,
      cidade, setCidade,
      tipoPerfil, setTipoPerfil,
      nomeUsuario, setNomeUsuario,
      sobrenomeUsuario, setSobrenomeUsuario,
      emailUsuario, setEmailUsuario,
      senhaUsuario, setSenhaUsuario,
      fill, setFill, idUsuario,
      allUsers, setAllUsers,
      servicoEscolhido, setServicoEscolhido

    }}>
      <ExpandedNavContext.Provider value={{ expand, setExpand }}>
        <Routes />
      </ExpandedNavContext.Provider>
    </CadastroContext.Provider>
  )
}

export default App
