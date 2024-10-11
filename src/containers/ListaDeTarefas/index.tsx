import Tarefa from '../../components/Tarefa'
import { Container } from './styles'
import * as enums from '../../utils/enums/Tarefa'

const tarefas = [
  {
    titulo: 'revisar o Redux',
    descricao: 'rever as aulas do módulo 30 da ebac',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.PENDENTE
  },
  {
    titulo: 'Ir na academia',
    descricao: 'Treinar braço',
    prioridade: enums.Prioridade.IMPORTANTE,
    status: enums.Status.CONCLUIDA
  },
  {
    titulo: 'Estudar Python',
    descricao: 'acabar a parte de front-end da ebac',
    prioridade: enums.Prioridade.URGENTE,
    status: enums.Status.PENDENTE
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
