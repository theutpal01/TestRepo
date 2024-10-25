import React from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
const CourseCard = ({
	id,
	img,
	name,
	skills,
	rating,
	reviews,
	level,
	type,
	duration,
}) => {
	const navigate = useNavigate();

	const handleRedirect = () => {
		const uniqueId = id + "-" + name.replace(/\s+/g, "-").toLowerCase();
		navigate(`/course/${uniqueId}`);
	};

	return (
		<div className="min-w-96 max-w-md w-full rounded-xl overflow-hidden bg-gray-100 border-gray-100 border-2 drop-shadow-lg hover:drop-shadow-2xl hover:scale-105 transition-all duration-500 ease-out cursor-pointer" onClick={handleRedirect}>
			<img
				src={img}
				alt=""
				className="h-64 w-full object-contain bg-white p-5"
			/>
			<div className="p-5">
				<div>
					<h2 className="text-2xl font-semibold leading-relaxed">{name}</h2>
					<p className="text-lg leading-loose">
						<span className="font-semibold">Skills you'll gain: </span>
						{skills}
					</p>
				</div>
				<div className="h-full">
					<p className="text-lg mt-5 flex items-center gap-2">
						<FaStar className="text-yellow-400" /> {rating} ({reviews})
					</p>
					<p className="text-lg">
						{level} · {type} · {duration}
					</p>
				</div>
			</div>
		</div>
	);
};

export default CourseCard;
