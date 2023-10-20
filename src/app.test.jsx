/*
@vitest-enviroment jsdom
*/
import { describe, expect, test } from 'vitest';

import userEvent from '@testing-library/user-event';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  test('Should render giphy elements', () => {
    render(<App />)
    // expect(screen.getByAltText('giphy')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('escribe tu nombre')).toBeInTheDocument
  })
})