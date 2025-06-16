import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ toDos }: { toDos: Array<{ id: number; text: string }> }) {
  const myId = useParams().id;
  const toDo = toDos.find((toDo) => toDo.id === parseInt(myId as string));

  return (
    <>
      {toDo?.text}
      Created at: {toDo?.id}
    </>
  );
}

function mapStateToProps(state: any) {
  return { toDos: state };
}

export default connect(mapStateToProps)(Detail);
