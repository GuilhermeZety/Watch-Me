import { createContext, ReactNode, useState, SetStateAction, Dispatch } from "react";

interface SelectedGenreContextProviderProps{
    children: ReactNode,
}

interface SelectedGenreContextType{
    selectedGenreId: number,
    setSelectedGenreId: Dispatch<SetStateAction<number>>,
}

const initialSelectedGenreContextType: SelectedGenreContextType = {
    selectedGenreId: 0,
    setSelectedGenreId(){}
}

export const SelectedGenreContext = createContext(initialSelectedGenreContextType);

export function SelectedGenreContextProvider(props: SelectedGenreContextProviderProps) {    

  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <SelectedGenreContext.Provider value={{ selectedGenreId, setSelectedGenreId }}>
        {props.children}
    </SelectedGenreContext.Provider>
    )
}