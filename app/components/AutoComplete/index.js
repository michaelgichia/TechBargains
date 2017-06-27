/**
*
* AutoComplete
*
*/

import React from "react";
import Autosuggest from "react-autosuggest";
import shortid from "shortid";
import { connectAutoComplete } from "react-instantsearch/connectors";
import "!!style-loader!css-loader!./style.css";

export class AutoComplete extends React.Component {
  renderSuggestion = hit => {
    return (
      <div key={shortid.generate()} className="query-paragraph text-ellipsis">
          <a href={`/category/${hit.subCategory[0]._id.toString()}`} target="_self">
            {hit.name}
          </a>
      </div>
    );
  };

  renderInputComponent = inputProps =>
    <form onSubmit={e => e.preventDefault()}>
      <input
        {...inputProps}
        name="search"
        type="text"
        placeholder="Type a product"
      />
      <button name="submit" type="submit">Go</button>
    </form>;

  getSuggestionValue = hit => hit.subCategory[0]._id.toString();

  render() {
    const inputProps = {
      value: this.props.currentRefinement,
      onChange: () => {}
    };

    return (
      <Autosuggest
      alwaysRenderSuggestions
        suggestions={this.props.hits}
        onSuggestionsFetchRequested={({ value }) => this.props.refine(value)}
        onSuggestionsClearRequested={() => this.props.refine("")}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={hit => this.renderSuggestion(hit)}
        inputProps={inputProps}
        renderSectionTitle={section => section.index}
        renderInputComponent={inputProps =>
          this.renderInputComponent(inputProps)}
        getSectionSuggestions={section => section.hits}
      />
    );
  }
}

export default connectAutoComplete(AutoComplete);
