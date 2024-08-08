import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// Mock de los componentes hijos para evitar errores relacionados con ellos
jest.mock('../app/components/Intro/Intro', () => () => <div data-testid="mock-intro">Mocked Intro</div>);
jest.mock('../app/components/About/About', () => () => <div data-testid="mock-about">Mocked About</div>);
jest.mock('../app/components/Listen/Listen', () => () => <div data-testid="mock-listen">Mocked Listen</div>);
jest.mock('../app/components/Shows/Shows', () => () => <div data-testid="mock-shows">Mocked Shows</div>);
jest.mock('../app/components/ContactUs/ContactUs', () => () => <div data-testid="mock-contact">Mocked Contact</div>);
jest.mock('../app/components/PhotoGallery/PhotoGallery', () => () => <div data-testid="mock-gallery">Mocked Gallery</div>);

describe('Home', () => {
    it('renders the welcome heading', () => {
        render(<Home />);
        const heading = screen.getByRole('heading', { name: /Welcome to the jungle/i });

        expect(heading).toBeInTheDocument();
    });

    it('renders all main sections', () => {
        render(<Home />);
        expect(screen.getByTestId('mock-intro')).toBeInTheDocument();
        expect(screen.getByTestId('mock-about')).toBeInTheDocument();
        expect(screen.getByTestId('mock-listen')).toBeInTheDocument();
        expect(screen.getByTestId('mock-shows')).toBeInTheDocument();
        expect(screen.getByTestId('mock-contact')).toBeInTheDocument();
        expect(screen.getByTestId('mock-gallery')).toBeInTheDocument();
    });
});