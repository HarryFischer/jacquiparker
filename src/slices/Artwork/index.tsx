import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Artwork`.
 */
export type ArtworkProps = SliceComponentProps<Content.ArtworkSlice>;

/**
 * Component for "Artwork" Slices.
 */
const Artwork = ({ slice }: ArtworkProps): JSX.Element => {
	return (
		<section
			className="artwork-item"
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
		>
			<PrismicNextImage field={slice.primary.artwork_image} />
			<p>
				{slice.primary.title}, {slice.primary.date}
			</p>
			<p>{slice.primary.price}</p>
		</section>
	);
};

export default Artwork;
