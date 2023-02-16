import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="card w-1/3 border-2 border-grey rounded-xl flex flex-col items-center space-y-4 text-zinc-600">
				<p className="self-start rounded-full py-2 px-2 font-bold text-lg text-[#847af0] bg-[#efeeff] w-1/2">
					User interface
				</p>
				<h1 className="self-start text-3xl font-bold text-gray-800">
					Service page website
				</h1>
				<p className="text-md text-left font-normal">
					Make a page display about services for websites company with
					blue and red colors
				</p>
				<div className="mx-4 flex justify-between w-full items-center">
					<div className="flex">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span className="text-gray-500 ml-4">0/20</span>
					</div>
					<div className="w-1/2 flex place-content-center">
						<div className="dots w-1/2 flex items-center">
							<span className="dot w-8 h-8 rounded-full bg-slate-100 block -mx-1"></span>
							<span className="dot w-8 h-8 rounded-full bg-sky-300 block -mx-1"></span>
							<span className="dot w-8 h-8 rounded-full bg-red-400 block -mx-1"></span>
						</div>
						<button className="rounded-full bg-[#54a0ff] text-white py-2 px-4">
							Invite
						</button>
					</div>
				</div>
				<div className="mx-4 flex justify-between w-full">
					<button className="flex place-content-end w-full rounded-l-full border-y-2 border-l-2 border-grey bg-transparent py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
							/>
						</svg>
						<span className="border-r-2 border-grey px-4">
							4 Attachment
						</span>
					</button>
					<button className="flex place-content-end w-full rounded-r-full border-y-2 border-r-2 border-grey bg-transparent py-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
							/>
						</svg>
						<span className="px-4">10 Comment</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
