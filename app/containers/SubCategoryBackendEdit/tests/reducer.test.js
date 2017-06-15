import expect from 'expect';
import subCategoryBackendEditReducer from '../reducer';

describe('subCategoryBackendEditReducer', () => {
  it('returns the initial state', () => {
    expect(subCategoryBackendEditReducer(undefined, {})).toEqual({});
  });
});
