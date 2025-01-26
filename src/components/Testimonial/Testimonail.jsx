import { FaQuoteLeft } from "react-icons/fa";


export default function Testimonial({children, img}){

	return (
		<div className="testimonial--container">
			<img className="testimonial--img" src={img} alt="Testimonial picture" />	
			<div className="testimonial--content-container">
				<FaQuoteLeft className="testimonial--icon"/>
				{children}
			</div>
		</div>
	)

}