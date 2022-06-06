import { Header } from './components/Header/Header'
import './style/index.css'
import { ContextTheme } from './hooks/useTheme'
import { GitData } from './hooks/useGit'
import { ProfileInitial } from './components/ProfileInitial/InitialProfile'
export function App() {


  return (
    <ContextTheme>
      <Header />
      <GitData>
        <ProfileInitial />
      </GitData>
    </ContextTheme >
  )

}


