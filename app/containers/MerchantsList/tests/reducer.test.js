import expect from 'expect';
import merchantsListReducer from '../reducer';

describe('merchantsListReducer', () => {
  it('returns the initial state', () => {
    expect(merchantsListReducer(undefined, {})).toEqual({});
  });
});
