import React from 'react';
import { SocialIcon } from 'react-social-icons';
import * as icons from './iconasset';

const Icon = ({ type, className, style, size, height, width, color, ...props }) => {
	const Component = icons[type];
	return (
		<Component
			style={{ fontSize: `${size}px`, height: `${height}px`, width: `${width}px`, color: `#${color}`, ...style }}
			className={` ${className}`}
			{...props}
		/>
	);
};

function SocialIcons({ type, className, style, height, width, ...props }) {
	const sizeProps = {
		height: height == null ? 25 : height,
		width: width == null ? 25 : width,
	};

	return <SocialIcon network={type} className={className} style={style == null ? sizeProps : style} {...props} />;
}

Icon.Social = SocialIcons;

export default Icon;
