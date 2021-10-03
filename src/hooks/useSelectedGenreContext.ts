//react
import { useContext } from 'react'

//contextos
import { SelectedGenreContext } from '../contexts/SelectedGenreContext';

export function useSelectedGenreContext() {
    const value = useContext(SelectedGenreContext)
    return value;
}