import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../utils/enums/Tarefa'
import { remover } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ titulo, prioridade, status, descricao, id }: Props) => {
  const dispacth = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.BotaoSalvar>Salvar</S.BotaoSalvar>
            <S.BotaoCancelareRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </S.BotaoCancelareRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelareRemover onClick={() => dispacth(remover(id))}>
              Remover
            </S.BotaoCancelareRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
