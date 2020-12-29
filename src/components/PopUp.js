import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Header, Icon, Modal } from "semantic-ui-react";
import { deleteNomination } from "../actions";
import { useAlert } from "react-alert";

const PopUp = (props) => {
  const [open, setOpen] = useState(true);
  const alert = useAlert();

  const renderList = () => {
    return props.nominations.map((nomination) => {
      return (
        <li key={nomination.imdbID}>
          {nomination.Title} ({nomination.Year})
        </li>
      );
    });
  };

  const onSubmit = () => {
    setOpen(false);
    props.nominations.map((nomination) => {
      return props.deleteNomination(nomination.imdbID);
    });
    alert.success("Shoppies Submitted!");
  };

  if (props.nominations.length === 5) {
    return (
      <Modal
        closeIcon
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Header content="Your Shoppies Nomination" />
        <Modal.Content>
          <ol className="ui list">{renderList()}</ol>
          <h3>Ready to submit?</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={() => setOpen(false)}>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" onClick={() => onSubmit()}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    nominations: Object.values(state.nominations),
  };
};

export default connect(mapStateToProps, { deleteNomination })(PopUp);
