import expect from 'expect';
import mobilePoductDetailReducer from '../reducer';

describe('mobilePoductDetailReducer', () => {
  it('returns the initial state', () => {
    expect(mobilePoductDetailReducer(undefined, {})).toEqual({});
  });
});
