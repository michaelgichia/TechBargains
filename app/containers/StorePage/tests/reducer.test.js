import expect from 'expect';
import storePageReducer from '../reducer';

describe('storePageReducer', () => {
  it('returns the initial state', () => {
    expect(storePageReducer(undefined, {})).toEqual({});
  });
});
