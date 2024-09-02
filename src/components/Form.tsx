"use client";
export default function Contact() {
	async function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "8d3dd3a4-5727-415a-be48-8a84a1adbaf5");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		});
		const result = await response.json();
		if (result.success) {
			console.log(result);
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="contact-form">
				<input type="text" name="name" placeholder="Name" />
				<input type="email" name="email" placeholder="email address" />
				<textarea name="message" placeholder="Type message here"></textarea>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}
