import "./styles.css";
import Draggable from "react-draggable";
export default function MoveText() {
  const bord = {
    border: "solid 3px black",
    cursor: "pointer",
    margin: "0",
    padding: "0",
    display: "inline-block"
  };

  function held() {}
  return (
    <>
      <Draggable cancel=".cancel">
        <div style={bord} onClick={held}>
          <textarea className="cancel"></textarea>
        </div>
      </Draggable>
    </>
  );
}
