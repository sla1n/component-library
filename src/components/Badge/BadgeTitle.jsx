import { BadgeContext } from "./Badge"
import { useContext } from "react"

export default function BadgeTitle({children}){
    const { color } = useContext(BadgeContext)
	return (
			<h1 className={`${color}`}>
				{children}
			</h1>
	)
}