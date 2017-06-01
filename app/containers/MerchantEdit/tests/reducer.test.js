import expect from 'expect';
import merchantEditReducer from '../reducer';

describe('merchantEditReducer', () => {
  it('returns the initial state', () => {
    expect(merchantEditReducer(undefined, {})).toEqual({});
  });
});
