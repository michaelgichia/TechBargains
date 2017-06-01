import expect from 'expect';
import itemDetailReducer from '../reducer';

describe('itemDetailReducer', () => {
  it('returns the initial state', () => {
    expect(itemDetailReducer(undefined, {})).toEqual({});
  });
});
