
export default function CardIcon({children, iconBackgroundColor = "#3F75FE", iconColor = "white"}){
	const styles = {backgroundColor: iconBackgroundColor, color: iconColor}
	return (
		<div className="card--icon-container" style={styles}>
			{children}
		</div>
	)
}