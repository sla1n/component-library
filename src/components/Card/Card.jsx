import { createContext } from "react"


const CardContext = createContext()
export { CardContext }



export default function Card({children}){
	return (
		<div className="card--container">
			{children}
		</div>
	)
}