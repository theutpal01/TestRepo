import React from "react";
import ReactPlayer from "react-player/mux";
import { useParams, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaChevronRight } from "react-icons/fa";
import BreadCrumbs from "../../components/BreadCrumbs";
import { courseDetails } from "../../data";

const VideoSection = () => {
	const [toggle, setToggle] = React.useState(true);
	const { name } = useParams();
	const data = courseDetails[name.slice(2)];
	const [view, setView] = React.useState(data.content[0].id);
	// const [videoFilePath, setVideoFilePath] = React.useState(URL.createObjectURL(data.content[0].vid));

	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className="min-h-screen">
			<div className="flex h-screen">
				<div
					className={`${
						toggle ? "w-96 pl-10" : "w-16"
					} text-blue-500 flex flex-col transition-all duration-300 ease-out border-r-2 shadow-lg`}
				>
					<span
						className="flex gap-4 text-2xl p-5 cursor-pointer"
						onClick={handleToggle}
					>
						<FaBars />
						{toggle && <p className="text-xl leading-[1.4]">Hide menu</p>}
					</span>

					<div className={`${toggle ? "visible" : "hidden"}`}>
						{data?.content.map((item) => {
							return (
								<div
									key={item.id}
									className={`p-5 text-xl flex hover:bg-gray-100 items-center gap-3 border-l-8 border-white hover:border-blue-300 text-slate-800 cursor-pointer ${
										view == item.id
											? "border-blue-400 bg-gray-200"
											: "border-white"
									}`}
									onClick={() => setView(item.id)}
								>
									<div>{item.icon}</div>
									<div className="flex flex-col">
										<h3 className="text-lg">
											<span className="font-semibold">
												{item?.type?.slice(0, 1).toUpperCase() +
													item?.type?.slice(1) +
													": "}
											</span>
											{item.name}
										</h3>
										<p className="text-[16px]">{item.duration}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="flex-grow text-blue-600 p-5 px-10">
					<div className="flex w-full justify-between mb-10">
						<BreadCrumbs>
							<NavLink to="/">
								<FaHome />
							</NavLink>
							<NavLink to="">Module 1</NavLink>
							<NavLink to="">Sample 1</NavLink>
						</BreadCrumbs>
						<NavLink className="flex gap-2 items-center text-xl" to="">
							Next <FaChevronRight />
						</NavLink>
					</div>

					{data?.content.map((item) => {
						if (view === item.id) {
							return (
								<div key={item.id} className="flex flex-col gap-4">
									<h2 className="text-4xl font-semibold">{item.name}</h2>
									<div className="relative my-5 max-h-[600px] w-full bg-black rounded-[30px] flex justify-center">
										<video src={item.vid} controls className="max-w-5xl" height="100px"></video>
									</div>
									<div>
										<div className="flex *:p-5 *:text-xl border-b-2 shadow *:border-white hover:*:bg-gray-100 hover:*:border-blue-300 *:border-b-[5px] *:cursor-pointer">
											<h3>Notes</h3>
											<h3>Downloads</h3>
											<h3>Discuss</h3>
										</div>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default VideoSection;
