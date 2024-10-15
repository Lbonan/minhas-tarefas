import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { alteraTermo } from '../../store/reducers/filtro'

const BarraLateral = () => {
  const dispacth = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.fitro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(ev) => dispacth(alteraTermo(ev.target.value))}
        />
        <S.Filtro>
          <FiltroCard legenda="pendentes" contador={1} />
          <FiltroCard legenda="concluídas" contador={3} />
          <FiltroCard legenda="urgentes" contador={2} />
          <FiltroCard legenda="importantes" contador={0} />
          <FiltroCard legenda="normal" contador={2} />
          <FiltroCard legenda="todas" contador={7} ativo />
        </S.Filtro>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
