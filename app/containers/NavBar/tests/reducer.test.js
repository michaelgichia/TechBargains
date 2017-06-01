import expect from 'expect';
import navBarReducer from '../reducer';

describe('navBarReducer', () => {
  it('returns the initial state', () => {
    expect(navBarReducer(undefined, {})).toEqual({});
  });
});
