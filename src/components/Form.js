"use client";
export default function Contact() {
	async function handleSubmit(event) {
		event.preventDefault();
		const formElement = document.getElementById("contact-form");
		console.log(formElement);
		const thankYou = document.createElement("div");
		thankYou.innerHTML =
			"Thank you for your message — I will get back to you soon.";
		thankYou.classList.add("thank-you");
		formElement.appendChild(thankYou);
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
			<form onSubmit={handleSubmit} className="contact-form" id="contact-form">
				<input type="text" name="name" required placeholder="Name" />
				<input type="email" name="email" required placeholder="Email address" />
				<textarea
					name="message"
					required
					placeholder="Type message here"
				></textarea>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}
