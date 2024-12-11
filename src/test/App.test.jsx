import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, test, it, expect } from 'jest'
import App from '../App';

describe('App', () => {
});
test('should render the login page when the URL path is "/login"', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByTestId('login-page')).toBeInTheDocument();
});it('should render the signup page when the URL path is "/signup"', () => {
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByTestId('signup-page')).toBeInTheDocument();
});

it('should render the why betterwork page when the URL path is /why-betterwork', () => {
  render(
    <MemoryRouter initialEntries={['/why-betterwork']}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByText(/Why BetterWork/i)).toBeInTheDocument();

it('should render the about us page when the URL path is /about-us', () => {
  render(
    <MemoryRouter initialEntries={['/about-us']}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();
});
});
test('Should render the find work page when the URL path is /find-work', () => {
  render(
    <MemoryRouter initialEntries={['/find-work']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText('Find Work')).toBeInTheDocument();
});

it('should render the find talent page when the URL path is /find-talent', () => {
  render(
    <MemoryRouter initialEntries={['/find-talent']}>
      <App />
    </MemoryRouter>
  );
  
  expect(screen.getByTestId('find-talent-page')).toBeInTheDocument();
});

it('should handle invalid URL paths and display a 404 error page', () => {
  render(
    <MemoryRouter initialEntries={['/invalid-path']}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(/404/i)).toBeInTheDocument();
  expect(screen.getByText(/page not found/i)).toBeInTheDocument();
});

it('should display the navbar on all pages', () => {
  const routes = ['/', '/login', '/signup', '/find-talent', '/find-work', '/why-betterwork', '/about-us'];

  routes.forEach(route => {
    render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});

it('should maintain consistent navbar visibility when navigating between routes', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );

  // Check if Navbar is visible on the initial route
  expect(screen.getByRole('navigation')).toBeInTheDocument();

  // Navigate to different routes and check if Navbar is still visible
  const routes = ['/login', '/signup', '/find-talent', '/find-work', '/why-betterwork', '/about-us'];

  routes.forEach((route) => {
    const { rerender } = render(
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();

    rerender(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
  });
});
