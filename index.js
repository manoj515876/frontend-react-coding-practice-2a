const Button = (props) => {
  const { className, text } = props;
  return <button className={className}>{text}</button>;
};

const element = (
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button className="like button" text="Like" />
      <Button className="comment button" text="Comment" />
      <Button className="share button" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
