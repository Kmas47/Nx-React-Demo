import { render } from '@testing-library/react';
import UiComponents from './ui-components';
import { MemoryRouter } from 'react-router-dom';

describe('UiComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <MemoryRouter>
        <UiComponents />{' '}
      </MemoryRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
