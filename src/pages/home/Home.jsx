import React from "react";
import CourseCard from "../../components/CourseCard";
import { courses } from "../../data";

const Home = () => {
	return (
		<div className="container mx-auto p-5">
			<h1 className="w-full text-7xl text-center mb-10">Courses</h1>
			<div className="grid grid-cols-3 gap-8">
				{courses.map((course) => (
					<CourseCard key={course.id} {...course} />
				))}
			</div>
		</div>
	);
};

export default Home;
