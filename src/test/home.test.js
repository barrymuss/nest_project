import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Button from '../components/button';

describe('Index page', () => {
	it('should render', () => {
		render(<Button />);
		const greenButton = screen.getByRole('button');

		expect(greenButton);
	});
});
