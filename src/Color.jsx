export default function Color(props) {
	console.log(Object.keys(props.data));

	return (
		<div className="body">
			{Object.keys(props.data).map((key) => {
				let num = 0;

				return (
					<div className="color-slab">
						<div className="color-name" key={key}>
							{key}
							<div className="color-name-description">colors.{key}</div>
						</div>
						<div className="shades-container">
							{props.data[key].map((shade, index) => {
								return (
									<div className="shades" style={{ backgroundColor: shade }}>
										<div className="name-holder">{shade}</div>
										<div className="numbering">
											{index === 0 ? (num = 50) : (num = 100 * index)}
										</div>
										<div></div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}
