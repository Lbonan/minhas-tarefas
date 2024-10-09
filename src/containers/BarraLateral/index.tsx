import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
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

export default BarraLateral
