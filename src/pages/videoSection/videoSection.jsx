import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { FaBars, FaHome, FaChevronRight } from "react-icons/fa";
import BreadCrumbs from "../../components/BreadCrumbs";
import { courseDetails } from "../../data";

const VideoSection = () => {
	const [toggle, setToggle] = React.useState(true);
	const { name } = useParams();
	const data = courseDetails[name.slice(2)];
console.log(data)
	const handleToggle = () => {
		setToggle(!toggle);
	};

	return (
		<div className="min-h-screen">
			<div className="flex h-screen">
				<div
					className={`${
						toggle ? "w-96 pl-10" : "w-16"
					} text-blue-500 flex flex-col transition-all duration-300 ease-out border-r-2 drop-shadow-lg`}
				>
					<span
						className="flex gap-4 text-2xl p-5 cursor-pointer"
						onClick={handleToggle}
					>
						<FaBars />
						{toggle && <p className="text-xl leading-[1.4]">Hide menu</p>}
					</span>

					{data?.content.map((item, index) => {
						return (
							<div className="p-5 text-xl">
								<h3 className="cursor-pointer">{item.name}</h3>
							</div>
						);
					})}
				</div>
				<div className="flex-grow text-blue-600 p-5 px-10">
					<div className="flex w-full justify-between">
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

					<div></div>
				</div>
			</div>
		</div>
	);
};

export default VideoSection;
