import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

// Positive
import ReligionNotiesReducer from './religionNoties_reducer'
import RodunasReducer from './rodunas_reducer'
import BiblesReducer from './bibles_reducer'
import KatekhyzmsReducer from './katekhyzms_reducer'
import AboutGodReducer from './about_god_reducer'

// Negative
import SymvolsReducer from './symvols_reducer'
import AbortsReducer from './aborts_reducer'
import TatiesReducer from './taties_reducer'
import YogasReducer from './yogas_reducer'
import HalloweensReducer from './halloweens_reducer'

const rootReducers = combineReducers({
  // Positive
  rodunas: RodunasReducer,
  bibles: BiblesReducer,
  katekhyzms: KatekhyzmsReducer,
  religionNotices: ReligionNotiesReducer,
  aboutGod: AboutGodReducer,
  // Negative
  aborts: AbortsReducer,
  taties: TatiesReducer,
  yogas: YogasReducer,
  halloweens: HalloweensReducer,
  symvols: SymvolsReducer,
})

export default rootReducers
