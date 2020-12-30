import React, { useState } from "react";
import { fetchMovies } from "../actions";
import { connect } from "react-redux";
import _ from "lodash";
const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    props.fetchMovies(term.replace(/\s+/g, " ").trim().toLowerCase());
  };

  const errorRender = () => {
    return _.isEmpty(props.errorMessage.error) ? null : (
      <div className="ui error message">
        <div className="header">No results found</div>
        <p>
          {`We didn't find any movies by the name ${term} please search a different movie`}
        </p>
      </div>
    );
  };
  return (
    <div className="search-bar ui segment">
      <form className="ui form error" onSubmit={onSubmit}>
        <div
          className={`field ${
            _.isEmpty(props.errorMessage.error) ? null : "error"
          }`}
        >
          <label> Search For a Movie</label>
          <input
            type="text"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
        {errorRender()}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { errorMessage: state.searchError };
};

export default connect(mapStateToProps, { fetchMovies })(SearchBar);

// class SearchBar extends React.Component {
//   renderError({ error, touched }) {
//     if (touched && error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = (formProps) => {
//     const className = `field ${
//       formProps.meta.error && formProps.meta.touched ? "error" : ""
//     }`;
//     return (
//       <div className={className}>
//         <label>{formProps.label}</label>
//         <input {...formProps.input} autoComplete="off" />
//         {this.renderError(formProps.meta)}
//       </div>
//     );
//   };

//   onSubmit = (formValues) => {
//     this.props.fetchMovies(
//       formValues.title.replace(/\s+/g, " ").trim().toLowerCase()
//     );
//   };

//   render() {
//     return (
//       <form
//         className="ui form error"
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />

//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = (formValues) => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = "You must enter a title";
//   }
//   return errors;
// };

// const formWrapped = reduxForm({
//   form: "movieSearch",
//   validate: validate,
// })(SearchBar);

// export default connect(null, { fetchMovies })(formWrapped);
