

const Container = ({ tools }) => (
  <div>
    <h3>Tools in Container (First to Last):</h3>
    {tools.map((tool, index) => (
      <div
        key={index}
        style={{ padding: "8px", margin: "4px", backgroundColor: "#ddd" }}
      >
        {tool}
      </div>
    ))}
  </div>
);

export default Container;
