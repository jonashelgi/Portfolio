import React from "react";

import { Wrapper } from "../../components";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	const root = {
		minHeight: "100vh",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
    fontSize: "25px"
	};

	return (
		<Wrapper>
			<div style={root}>
				<div>
					<div>404</div>
					<div>Eitthvað hefur farið úrskeiðis / Something has gone wrong.</div>
					<div>Síða eða skjal fannst ekki.</div>
					<div>
						Eftirfarandi ástæður geta verið fyrir því að síða/skjal fannst ekki:
					</div>
					<div>● Upplýsingar hafa verið fjarlægðar</div>
					<div>● Vefslóð ekki rétt skrifuð</div>
					<div>● Síðan er ekki lengur til</div>
					<div>● Villa er á síðunni</div>
					<Link to="/">Ýttu hér til að fara aftur á Forsíðu</Link>
				</div>
			</div>
		</Wrapper>
	);
};

export default PageNotFound;
