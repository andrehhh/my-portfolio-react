import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
	const [currentPath, setCurrentPath] = useState('')

	return (
		<AppContext.Provider value={{currentPath, setCurrentPath}}>
				{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () => {
	return useContext(AppContext)
}

export { AppProvider }