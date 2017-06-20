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

// const renderInputComponent = (inputProps) => (
//   <div className="algolia-input">
//     <input {...inputProps} type="text" name="search" placeholder="Search.."  />
//   </div>
// );

const handleSubmit = () => {
  console.log('submitted!!!');
}

// function onSuggestionSelected(event, 
// { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) {
//   console.log({suggestion, suggestionValue, suggestionIndex, sectionIndex, method})
// }


const renderInputComponent = (inputProps) => (
  <div className="algolia-input">
    <SearchBox
    {...inputProps}
    />
  </div>
);

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
      renderInputComponent={(inputProps) => renderInputComponent(inputProps)}
    />
  )
);

AutoComplete.propTypes = {

};

export default AutoComplete;
