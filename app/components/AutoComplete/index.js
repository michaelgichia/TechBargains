/**
*
* AutoComplete
*
*/

import React from 'react';
import Autosuggest from 'react-autosuggest';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import '!!style-loader!css-loader!./style.css';

const style = {
  marginRight: 20, 
  marginTop: "-21px",
}

function renderSuggestion(hit) {
  return (
  <div>
    {/* <div>{ hit.name }</div> */}
    <div
      className="query-paragraph"
      dangerouslySetInnerHTML={{ __html: hit.name }}
    />
  </div>
  );
}

const AutoComplete = connectAutoComplete(
  ({ hits, currentRefinement, refine }) => (
    <Autosuggest
      style={style}
      suggestions={hits}
      onSuggestionsFetchRequested={({ value }) => refine(value)}
      onSuggestionsClearRequested={() => refine('')}
      getSuggestionValue={hit => hit.name}
      renderSuggestion={(hit) => renderSuggestion(hit)}
      inputProps={{
        placeholder: 'Type a product',
        value: currentRefinement,
        onChange: () => {},
      }}
      renderSectionTitle={section => section.index}
      getSectionSuggestions={section => section.hits}
    />
  )
);

AutoComplete.propTypes = {

};

export default AutoComplete;
