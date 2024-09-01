import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Portrait`.
 */
export type PortraitProps = SliceComponentProps<Content.PortraitSlice>;

/**
 * Component for "Portrait" Slices.
 */
const Portrait = ({ slice }: PortraitProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for portrait (variation: {slice.variation}) Slices
    </section>
  );
};

export default Portrait;
