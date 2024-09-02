import type { Content } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

type TextProps = SliceComponentProps<Content.TextSlice>;

const Text = ({ slice }: TextProps) => {
	return (
		<section className="text-column">
			<div>
				<PrismicRichText field={slice.primary.text} />
			</div>
		</section>
	);
};

export default Text;
