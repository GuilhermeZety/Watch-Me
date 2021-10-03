import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import { SelectedGenreContextProvider } from './contexts/SelectedGenreContext';

import './styles/global.scss';

export function App() {
  return(
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <SelectedGenreContextProvider>
      <SideBar />
      <Content />
    </SelectedGenreContextProvider>
  </div>
 )
}