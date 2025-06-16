import { connect } from "react-redux";
import { remove } from "../store";
import { Link } from "react-router-dom";

function ToDo({ text, id, onBtnClick }: { text: string; id: string; onBtnClick: () => void }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onBtnClick}>Delete</button>
    </li>
  );
}

function mapDispatchToProps(dispatch: any, ownProps: any) {
  return {
    onBtnClick: () => dispatch(remove(ownProps.id)),
  };
}

export default connect(null, mapDispatchToProps)(ToDo);
