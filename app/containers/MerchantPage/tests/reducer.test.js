import expect from 'expect';
import merchantPageReducer from '../reducer';

describe('merchantPageReducer', () => {
  it('returns the initial state', () => {
    expect(merchantPageReducer(undefined, {})).toEqual({});
  });
});
