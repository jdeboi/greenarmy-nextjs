jest.mock('d3', () => {
    return {
        geoAlbers: jest.fn(() => ({
            scale: jest.fn().mockReturnThis(),
            translate: jest.fn().mockReturnThis(),
        })),
        geoPath: jest.fn(() => ({
            projection: jest.fn(() => () => "M1010"),
            scale: jest.fn().mockReturnThis(),
            translate: jest.fn().mockReturnThis(),
        }))
    };
});


import { render } from '@testing-library/react'
import About from '../app/(pages)/about/page'
import MainMap from '../app/components/MapD3/MainMap/MainMap'
import '@testing-library/jest-dom'
import legislators from '../app/components/MapD3/data/houseLegislators.json'

describe('About Page', () => {
    test('about should contain an h1 tag', () => {
        const { container } = render(<About />);
        const h1 = container.querySelector('h1');
        expect(h1).toBeInTheDocument();
    });
})

describe('Main Map', () => {

    test('renders without crashing', () => {
        render(<MainMap setLegislator={jest.fn()} />);
    });

    test('all house districts rendered', () => {
        const { container } = render(
            <MainMap isHouse={true} setLegislator={jest.fn()} />);
        const paths = container.querySelectorAll('path');
        expect(paths.length).toBe(105);
    });

    test('all senate districts rendered', () => {
        const { container } = render(
            <MainMap isHouse={false} setLegislator={jest.fn()} />);
        const paths = container.querySelectorAll('path');
        expect(paths.length).toBe(39);
    });

    // TODO TESTS
    // 'District clicked, stop changing politicians / districts'
    // 'District clicked again, resume changing politicians / districts'
    // 'Bill clicked, stop changing bills'
    // 'Bill clicked again, resume changing bills'

    // 'side bar legislator info updated when district changes'
    // 'side bar rating bar chart updated when district changes'
    // 'side bar votes updated when district changes'

});

