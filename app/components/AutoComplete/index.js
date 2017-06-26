/**
*
* AutoComplete
*
*/

import React from "react";
import Autosuggest from "react-autosuggest";
import shortid from "shortid";
import { connectAutoComplete } from "react-instantsearch/connectors";
import { SearchBox } from "react-instantsearch/dom";
import "!!style-loader!css-loader!./style.css";

const renderSuggestion = hit =>
  <div key={shortid.generate()} className="query-paragraph">
    {hit.subCategory.title}
  </div>;

const renderInputComponent = inputProps =>
  <form onSubmit={e => e.preventDefault()}>
    <input
      {...inputProps}
      name="search"
      type="text"
      placeholder="Type a product"
    />
    <button name="submit" type="submit">Go</button>
  </form>;

const AutoComplete = connectAutoComplete(
  ({ hits, currentRefinement, refine }) =>
    <Autosuggest
      suggestions={hits}
      onSuggestionsFetchRequested={({ value }) => refine(value)}
      onSuggestionsClearRequested={() => refine("")}
      getSuggestionValue={hit => hit.subCategory._id}
      renderSuggestion={hit => renderSuggestion(hit)}
      inputProps={{
        value: currentRefinement,
        onChange: () => {}
      }}
      renderSectionTitle={section => section.index}
      renderInputComponent={inputProps => renderInputComponent(inputProps)}
      getSectionSuggestions={section => section.hits}
    />
);

AutoComplete.propTypes = {};

export default AutoComplete;
