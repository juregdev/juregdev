import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { gitApi } from "../services/GitApi";

interface GitDataContext {
  avatar_url: string;
  bio: string;
  name: string;
  login: string;
}

const GitDataContext = createContext<GitDataContext>({} as GitDataContext)


interface GitDataProps {
  children: ReactNode
}
export function GitData({ children }: GitDataProps) {

  const [apiData, setApiData] = useState<GitDataContext>({} as GitDataContext)

  useEffect(() => {
    async function getApi() {
      await gitApi.get('').then((res) => {
        const { avatar_url, bio, name, login }: GitDataContext = res.data
        setApiData({
          avatar_url,
          bio,
          name,
          login
        })
      }
      )
    }

    getApi()
  }, [])

  return (
    <GitDataContext.Provider value={apiData}>
      {children}
    </GitDataContext.Provider>
  )

}

export function useGit() {
  return useContext(GitDataContext)
}