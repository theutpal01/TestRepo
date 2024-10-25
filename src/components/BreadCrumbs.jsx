import React from "react";

const BreadCrumbs = ({
	className,
	separator = (
		<svg
			className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 6 10"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="m1 9 4-4-4-4"
			/>
		</svg>
	),
	children,
}) => {
	return (
		<div className={`flex gap-4 text-xl ${className}`}>
			{children.map((child, index) => (
				<div key={index} className="flex gap-4 items-center">
					{child}
					{index < children.length - 1 && (
						separator
					)}
				</div>
			))}
		</div>
	);
};

export default BreadCrumbs;
