import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Contact from "@/components/Form";

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
			<p>
				For more information or purchase enquiries please get in touch using the
				form below
			</p>
			<Contact />
		</section>
	);
};

export default ContactForm;
