import expect from 'expect';
import singleProductReducer from '../reducer';

describe('singleProductReducer', () => {
  it('returns the initial state', () => {
    expect(singleProductReducer(undefined, {})).toEqual({});
  });
});
