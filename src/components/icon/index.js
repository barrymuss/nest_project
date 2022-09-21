import React from 'react';
import { SocialIcon } from 'react-social-icons';
import * as icons from './iconasset';

const Icon = ({ type, className, style, size, color, ...props }) => {
	const Component = icons[type];
	return (
		<Component
			style={{ fontSize: `${size}px`, color: `#${color}`, ...style }}
			className={`h-4 w-4 ${className}`}
			{...props}
		/>
	);
};

function SocialIcons({ type, className, size, ...props }) {
	const sizeProps = {
		height: 25,
		width: 25,
	};

	return <SocialIcon network={type} className={className} style={size == null ? sizeProps : size} {...props} />;
}

Icon.Social = SocialIcons;

export default Icon;
