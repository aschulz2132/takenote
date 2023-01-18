import "./styles.css";
import MoveText from "./MoveText.js";
export default function Note() {
  const bot = {
    bottom: "0%",
    backgroundColor: "d6d6d6",
    width: "100%",
    height: "auto",
    position: "absolute",
    borderTop: "solid 1.5px black",
    padding: "0px",
    margin: "0px",
    left: "0px",
  };
  const pp = {
    textAlign: "left",
    padding: "0%",
    margin: "0%",
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          backgroundColor: "gray",
        }}
      >
        <MoveText></MoveText>
      </div>
      <div style={bot}>
        <p style={pp}>Note</p>
      </div>
    </>
  );
}
