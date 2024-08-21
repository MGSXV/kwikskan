import Image from "next/image";

const steps = [
	{ step: "step 1", title: "Signup for free account.", description: "It's free to get started. Simply sign up for an account and you're ready to go." },
	{ step: "step 2", title: "Upload your PDF file.", description: "We will process your file and make it ready for you to chat with!" },
	{ step: "step 3", title: "Start asking questions.", description: "It's that simple. Try Kwikskan today, it really takes less than a minute" },
]

const Step = ({ step, title, description }: { step: string, title: string, description: string }) => (
	<li className="md:flex-1">
		<div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
			<span className="text-sm font-medium text-violet-600">
				{step}
			</span>
			<span className="text-xl font-semibold">
				{title}
			</span>
			<span className="mt-2 text-zinc-70000">
				{description}
			</span>
		</div>
	</li>
)


const FeaturesSection = () => (
	<div className="mx-auto mt-32 mb-32 max-w-5xl sm:mt-56">
		<div className="mb-12 px-6 lg:px-8">
			<div className="mx-auto max-w-2xl sm:text-center">
				<h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
					Start chatting in seconds 
				</h2>
				<p className="mt-4 text-lg text-gray-600">
					chatting to your documents has never been easier. Kwikskan allows you to have conversations with any PDF document.
				</p>
			</div>
		</div>
		<ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
			{
				steps.map((step, index) => (
					<Step key={index} {...step} />
				))
			}
		</ol>
		
		<div className="mx-auto max-w-6xl px-6 lg:px-8">
			<div className="mt-16 flow-root sm:mt-24">
				<div className="-m-2 rounded-xl bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
					<Image src="/file-upload-preview.jpg" quality={100}
						width={1419} height={732} alt="upload preview"
						className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10" />
				</div>
			</div>
		</div>

	</div>
)

export default FeaturesSection;