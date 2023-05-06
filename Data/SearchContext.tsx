import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom"

interface CurrentSearchContextType{
    params: string
}
const SearchContext = createContext<CurrentSearchContextTyp >({})

export const useSearchContext = () => {
    return useContext(SearchContext)
}

type ModalProps = {
    children: React.ReactNode
}

function SearchContextProvider({children } : ModelProps){
    const [searchQuery, setSearchQuery] = useSearchParams({})
    const [params, setParams] = useState("")

    function handleQuery(param: string) {
        setSearchQuery(param)
    }

    useEffect(() => {

        for(const entry of searchQuery.entries()) {
            setParams( entry[1])
        }

        console.log( params.length)

    }, [searchQuery])

    const value = { 
        searchQuery,
        handleQuery,
        params
    }

    return  <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
};

export default SearchContextProvider;