import React, { FC } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Reset } from './Reset';

/**
 * @jest-environment jsdom
 */

describe('Reset button check', () => {
  const ResetWithDummyHandlerOnReset: FC = () => <Reset onReset={() => null} />;

  test('Should render elements with default state', () => {
    render(<ResetWithDummyHandlerOnReset />);

    expect(screen.getByText('😊')).toBeInTheDocument();
  });

  test('onReset handler should be called', () => {
    const onReset = jest.fn();

    render(<Reset onReset={onReset} />);

    fireEvent.click(screen.getByText('😊'));

    expect(onReset).toBeCalled();
  });

  test('Should change state when onMouseDown and onMouseUp events happened', () => {
    render(<ResetWithDummyHandlerOnReset />);

    fireEvent.mouseDown(screen.getByText('😊'));
    expect(screen.getByText('😮')).toBeInTheDocument();
    fireEvent.mouseUp(screen.getByText('😮'));
    expect(screen.getByText('😊')).toBeInTheDocument();
  });

  test('Should change state when onMouseDown and onMouseLeave events happened', () => {
    render(<ResetWithDummyHandlerOnReset />);

    fireEvent.mouseDown(screen.getByText('😊'));
    expect(screen.getByText('😮')).toBeInTheDocument();

    fireEvent.mouseLeave(screen.getByText('😮'));
    expect(screen.getByText('😊')).toBeInTheDocument();
  });
});
