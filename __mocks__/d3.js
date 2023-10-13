// __mocks__/d3.js
export const geoPath = jest.fn(() => ({
    projection: jest.fn()
}));

export const geoAlbers = jest.fn(() => ({
    scale: jest.fn(),
    translate: jest.fn()
}));