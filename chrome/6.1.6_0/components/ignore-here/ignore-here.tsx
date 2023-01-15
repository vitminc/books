import type * as React from "react";
import { classes } from "../../common/utils";
import { createReactComponent, type LTMouseEventHandler, type ReactComponentResult } from "../base";
import { Div } from "../base";

interface Props {
	className: string;
	label: string;
	onClick: LTMouseEventHandler;
}

const IgnoreHere: React.FC<Props> = ({ className, label, onClick }) => {
	return (
		<Div onClick={onClick} className={classes(className, "lt-icon__mute")}>
			{label}
		</Div>
	);
};

IgnoreHere.displayName = "IgnoreHere";

export default async function createIgnoreHere(doc: Document, props: Props): ReactComponentResult {
	return await createReactComponent(doc, IgnoreHere, props);
}
