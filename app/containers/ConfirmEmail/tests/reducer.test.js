import expect from 'expect';
import confirmEmailReducer from '../reducer';

describe('confirmEmailReducer', () => {
  it('returns the initial state', () => {
    expect(confirmEmailReducer(undefined, {})).toEqual({});
  });
});
