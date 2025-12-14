import {
	SliceSimulator,
	getSlices,
} from "@slicemachine/adapter-next/simulator";
import { SliceZone } from "@prismicio/react";
import { redirect } from "next/navigation";

import { components } from "@/slices";

type SearchParams = {
	state?: string;
	secret?: string;
};

export default async function SliceSimulatorPage({
	searchParams,
}: {
	searchParams?: Promise<SearchParams>;
}) {
	const sp = (await searchParams) ?? {};

	if (
		process.env.SLICE_SIMULATOR_SECRET &&
		sp.secret !== process.env.SLICE_SIMULATOR_SECRET
	) {
		redirect("/");
	}

	const slices = getSlices(sp.state);

	return (
		<SliceSimulator>
			<SliceZone slices={slices} components={components} />
		</SliceSimulator>
	);
}
