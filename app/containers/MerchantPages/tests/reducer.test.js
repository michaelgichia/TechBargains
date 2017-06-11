import expect from 'expect';
import merchantPagesReducer from '../reducer';

describe('merchantPagesReducer', () => {
  it('returns the initial state', () => {
    expect(merchantPagesReducer(undefined, {})).toEqual({});
  });
});
