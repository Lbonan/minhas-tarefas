import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'revisar o Redux',
    descricao: 'rever as aulas do módulo 30 da ebac',
    prioridade: 'importante',
    status: 'pendentes'
  },
  {
    titulo: 'Ir na academia',
    descricao: 'Treinar braço',
    prioridade: 'importante',
    status: 'concluído'
  },
  {
    titulo: 'Estudar Python',
    descricao: 'acabar a parte de front-end da ebac',
    prioridade: 'urgente',
    status: 'pendentes'
  }
]

const ListaDeTarefas = () => (
  <Container>
    <p>2 tarefas marcadas como: &quot;categoria&ldquo; e &quot;termo&ldquo;</p>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            prioridade={t.prioridade}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDeTarefas
