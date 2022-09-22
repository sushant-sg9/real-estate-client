import "./Tab.css";
export default function Tab() {
  return (
    <div className="tab">
      <p className="choose1">
        <span className="digit1">1.</span> Basic info
      </p>
      <p className="choose1">
        <span className="digit1">2.</span>Property Detail
      </p>
      <p className="choose">
        <span className="digit">3.</span>General Info
      </p>
      <p className="choose1">
        <span className="digit1">4.</span>Location info
      </p>
    </div>
  );
}