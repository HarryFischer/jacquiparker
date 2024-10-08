import { type Content, isFilled } from "@prismicio/client";
import type { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

import { Bounded } from "@/components/Bounded";

type ImageProps = SliceComponentProps<Content.ImageSlice>;

const Image = ({ slice, index }: ImageProps) => {
	const image = slice.primary.image;

	return (
		<section className="left-column">
			{isFilled.image(image) && (
				<div className="bg-gray-100">
					<PrismicNextImage field={image} sizes="100vw" className="w-full" />
				</div>
			)}
		</section>
	);
};

export default Image;
