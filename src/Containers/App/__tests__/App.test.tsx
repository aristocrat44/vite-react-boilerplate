import React from 'react';
import { describe, expect, test, vi, beforeEach, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import App from '..';
import { useStore } from '../../../Store/index';
import { MemoryRouter } from 'react-router-dom';

vi.mock('../../../Store/index');

interface TodoArr {
  todoArr: string[];
}
[];

describe('App Module', () => {
  afterEach(cleanup);
  beforeEach(() => {
    vi.mocked(useStore).mockReturnValue({
      todo_: {
        todoArr: [],
      } as never,
    });
  });
  test('hello world text should be in the document', () => {
    render(<App />, { wrapper: MemoryRouter });
    const text = screen.getByText('Hello world !');
    expect(text).toBeInTheDocument();
  });
});
