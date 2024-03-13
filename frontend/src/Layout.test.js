import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout', () => {
    it('renders without error', () => {
        render(<Layout />);
    });

    it('renders children correctly', () => {
        const { getByText } = render(
            <Layout>
                <div>Child Component</div>
            </Layout>
        );
        expect(getByText('Child Component')).toBeInTheDocument();
    });
});