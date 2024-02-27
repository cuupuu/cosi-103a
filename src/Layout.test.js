import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
    test('renders children', () => {
        render(
            <Layout>
                <div>Child Component 1</div>
                <div>Child Component 2</div>
            </Layout>
        );

        // Assert that the child components are rendered
        expect(screen.getByText('Child Component 1')).toBeInTheDocument();
        expect(screen.getByText('Child Component 2')).toBeInTheDocument();
    });

    test('renders Header component', () => {
        render(
            <Layout>
                <div>Child Component</div>
            </Layout>
        );

        // Assert that the Header component is rendered
        expect(screen.getByTestId('header-component')).toBeInTheDocument();
    });

    test('renders Footer component', () => {
        render(
            <Layout>
                <div>Child Component</div>
            </Layout>
        );

        // Assert that the Footer component is rendered
        expect(screen.getByTestId('footer-component')).toBeInTheDocument();
    });
});
