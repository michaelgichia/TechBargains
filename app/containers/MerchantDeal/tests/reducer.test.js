import expect from 'expect';
import merchantDealReducer from '../reducer';

describe('merchantDealReducer', () => {
  it('returns the initial state', () => {
    expect(merchantDealReducer(undefined, {})).toEqual({});
  });
});
