import {createContext} from "react"

const BadgeContext = createContext()
export { BadgeContext }

export default function Badge({color, isPill, children}){

	const pillClass = isPill ? "pill" : ""

	return (
		<BadgeContext.Provider value={{color}}>
			<div className={`badge--container ${color} ${pillClass}`}>
				{children}
			</div>
		</BadgeContext.Provider>
	)
}