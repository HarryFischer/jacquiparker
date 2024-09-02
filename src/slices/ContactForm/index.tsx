import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Contact from "@/components/Form";
import { Bounded } from "@/components/Bounded";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
	return (
		<section
			data-slice-type={slice.slice_type}
			data-slice-variation={slice.variation}
			className="middle-column"
		>
			<Contact />
		</section>
	);
};

export default ContactForm;
