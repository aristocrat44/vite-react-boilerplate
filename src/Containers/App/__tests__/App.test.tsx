import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '..';

describe('App Module', () => {
  test('hello world text should be in the document', () => {
    render(<App />);
    const text = screen.getByText('Hello world !');
    expect(text).toBeInTheDocument();
  });
});
