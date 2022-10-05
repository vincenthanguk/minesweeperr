import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';

import { ClickCounter } from './ClickCounter';

afterEach(cleanup);

describe('Test ClickCounter', () => {
  test('should increase counter when the button is clicked', () => {
    render(<ClickCounter />);

    const counter = screen.getByRole('heading', { name: /Count: / });
    const increaseBtn = screen.getByRole('button', { name: 'Increase' });
    const decreaseBtn = screen.getByRole('button', { name: 'Decrease' });

    expect(counter.textContent).toBe('Count: 0');

    fireEvent.click(increaseBtn);

    expect(counter.textContent).toBe('Count: 1');
    fireEvent.click(increaseBtn);

    expect(counter.textContent).toBe('Count: 2');

    fireEvent.click(decreaseBtn);

    expect(counter.textContent).toBe('Count: 1');
    fireEvent.click(decreaseBtn);

    expect(counter.textContent).toBe('Count: 0');
  });
});
