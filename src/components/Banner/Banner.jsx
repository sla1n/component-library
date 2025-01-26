import { IoIosCheckmarkCircle, IoIosWarning, IoMdCloseCircle, IoIosInformationCircle} from "react-icons/io"
import { createContext, useState } from "react"


const BannerContext = createContext()
export { BannerContext }



export default function Banner({status = "success", children}){
	const [hasMultipleLines, setHasMultipleLines] = useState(false)
	let icon 
	if(status == "success"){
		icon = <IoIosCheckmarkCircle className={`banner--icon banner--${status}-icon`}/>
	}
	if(status == "warning"){
		icon = <IoIosWarning className={`banner--icon banner--${status}-icon`}/> 
	}
	if(status == "error"){
		icon = <IoMdCloseCircle className={`banner--icon banner--${status}-icon`}/>
	}
	if(status == "neutral"){
		icon =  <IoIosInformationCircle className={`banner--icon banner--${status}-icon`}/>
	}

	return (
		<BannerContext.Provider value={{status, setHasMultipleLines}}>
			<div className={`${hasMultipleLines ? "banner--container-multiple" : "banner--container-single"} banner--container-${status}`}>
				{status && icon}
				<div className="banner--content">
					{children}
				</div>
			</div>
		
		
		</BannerContext.Provider>
	)
}