import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  const joke = {
    joke: 'Whiteboard ... are remarkable.',
    id: '75455454',
    status: 200,
  };

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  })

  render(<App />)
  const renderedJoke = await screen.findByText(joke.joke);
  expect(renderedJoke).toBeInTheDocument();
});
