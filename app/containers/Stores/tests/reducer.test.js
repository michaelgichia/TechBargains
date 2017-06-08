import expect from 'expect';
import storesReducer from '../reducer';

describe('storesReducer', () => {
  it('returns the initial state', () => {
    expect(storesReducer(undefined, {})).toEqual({});
  });
});
