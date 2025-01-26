import { useContext, useEffect } from "react"
import { BannerContext } from "./Banner"

export default function BannerText({children}){
	const {status, setHasMultipleLines} = useContext(BannerContext)

	useEffect(()=>{
		children && setHasMultipleLines(true)
	}, [])
	return (
		<p className={`bannerText bannerText--${status}`}>
			{children}
		</p>
	)
}