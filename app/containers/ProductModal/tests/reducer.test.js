import expect from 'expect';
import productModalReducer from '../reducer';

describe('productModalReducer', () => {
  it('returns the initial state', () => {
    expect(productModalReducer(undefined, {})).toEqual({});
  });
});
