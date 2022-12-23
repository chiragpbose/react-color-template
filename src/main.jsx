import React from "react";
import ReactDOM from "react-dom/client";

import Color from "./Color";

import colors from "./assets/colors.json";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Color data={colors} />
	</React.StrictMode>
);
