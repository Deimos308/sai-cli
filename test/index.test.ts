import Root from '../src/index';

describe('Simple test example', () => {
  it('Mock function returns "Success"', () => {
    expect(Root.testFunction()).toBe('Success')
  })
})