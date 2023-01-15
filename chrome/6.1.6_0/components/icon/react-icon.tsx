import type * as React from "react";
import { classes } from "../../common/utils";
import { createReactComponent, type LTMouseEventHandler, type ReactComponentResult } from "../base";
import { Div, Span } from "../base";
import type { IconTooltip } from "./icon";

interface Props {
	name: string;
	label?: string;
	tooltip?: IconTooltip;
	preventFocus?: boolean;
	onClick?: LTMouseEventHandler;
}

const Icon: React.FC<Props> = (props) => {
	return (
		<Div
			onClick={props.onClick}
			className={classes(
				"lt-icon",
				`lt-icon--${props.name}`,
				typeof props.onClick === "function" && "lt-icon--clickable"
			)}
			data-lt-prevent-focus={props.preventFocus}
		>
			<Span className={classes("lt-icon__icon", `lt-icon__${props.name}`)} />
			{props.tooltip && (
				<Div
					className={classes(
						"lt-icon__tooltip",
						`lt-icon__tooltip--${props.tooltip.position}`,
						`lt-icon__tooltip--${props.name}`
					)}
				>
					{props.tooltip.label}
				</Div>
			)}
			{props.label && <Span className="lt-icon__label">{props.label}</Span>}
		</Div>
	);
};

Icon.displayName = "Icon";

export default async function createIcon(doc: Document, props: Props): ReactComponentResult {
	return await createReactComponent(doc, Icon, props);
}
