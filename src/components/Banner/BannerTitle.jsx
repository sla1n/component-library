import { useContext } from "react"
import { BannerContext } from "./Banner"

export default function BannerTitle({children}){
	const { status } = useContext(BannerContext)
	return (
		<h1 className={`bannerTitle bannerTitle--${status}`}>
			{children}
		</h1>
	)
}