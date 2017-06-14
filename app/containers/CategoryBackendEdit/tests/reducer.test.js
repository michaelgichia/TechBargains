import expect from 'expect';
import categoryBackendEditReducer from '../reducer';

describe('categoryBackendEditReducer', () => {
  it('returns the initial state', () => {
    expect(categoryBackendEditReducer(undefined, {})).toEqual({});
  });
});
