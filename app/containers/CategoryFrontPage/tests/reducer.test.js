import expect from 'expect';
import categoryFrontPageReducer from '../reducer';

describe('categoryFrontPageReducer', () => {
  it('returns the initial state', () => {
    expect(categoryFrontPageReducer(undefined, {})).toEqual({});
  });
});
