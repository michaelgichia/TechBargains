/**
*
* AutoComplete
*
*/

import React from 'react';
import Autosuggest from 'react-autosuggest';
import shortid from 'shortid';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import { SearchBox } from 'react-instantsearch/dom';
import '!!style-loader!css-loader!./style.css';

const renderSuggestion = (hit) => (
  <div
    key={shortid.generate()}
    className="query-paragraph"
  >
    {hit.subCategory.title}
  </div>
);

const AutoComplete = connectAutoComplete(({ hits, currentRefinement, refine }) => (
    <Autosuggest
      suggestions={hits}
      alwaysRenderSuggestions
      onSuggestionsFetchRequested={({ value }) => refine(value)}
      onSuggestionsClearRequested={() => refine('')}
      getSuggestionValue={(hit) => (hit.subCategory._id)}
      renderSuggestion={(hit) => renderSuggestion(hit)}
      inputProps={{
        placeholder: 'Type a product',
        value: currentRefinement,
        onChange: () => {},
      }}
      renderSectionTitle={(section) => (section.index)}
      getSectionSuggestions={(section) => (section.hits)}
    />
  )
);

AutoComplete.propTypes = {

};

export default AutoComplete;
