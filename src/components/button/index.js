import React from 'react';
import styles from '@styles/components/element/button.module.css';

const Button = ({ children, className, dashed, solid, onClick, type, ...props }) => {
	const classDashed = 'border-1 border-blue-500';

	switch (type) {
		case 'green':
			return (
				<button
					role='button'
					className={`${styles.button} ${styles['green-button']} ${dashed ? classDashed : ''}  ${
						solid ? styles.solid : ''
					} ${className}`}
					onClick={onClick}
					{...props}
				>
					{children}
				</button>
			);
		case 'green-solid':
			return (
				<button
					role='button'
					className={`${styles.button} ${styles['solid-green-button']} ${dashed ? classDashed : ''}  ${
						solid ? styles.solid : ''
					} ${className}`}
					onClick={onClick}
					{...props}
				>
					{children}
				</button>
			);
		case 'text-green':
			return (
				<button
					role='button'
					className={`${styles.button} ${styles['text-green-button']} ${dashed ? classDashed : ''}  ${
						solid ? styles.solid : ''
					} ${className}`}
					onClick={onClick}
					{...props}
				>
					{children}
				</button>
			);
		case 'red':
			return (
				<button
					role='button'
					className={`${styles.button} ${styles['red-button']} ${dashed ? classDashed : ''}  ${
						solid ? styles.solid : ''
					} ${className}`}
					onClick={onClick}
					{...props}
				>
					{children}
				</button>
			);
		default:
			return (
				<button
					role='button'
					className={`${styles.button}  ${className} ${dashed ? styles['default-button'] : ''}  ${
						solid ? styles['default-button-solid'] : ''
					} ${className}`}
					onClick={onClick}
					{...props}
				>
					{children}
				</button>
			);
	}
};

export default Button;
