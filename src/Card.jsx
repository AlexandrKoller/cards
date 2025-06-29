import CardBody from "./CardBody";

export default function Card({ props }) {
  const childImg = props.ImgCard ? <props.ImgCard {...props} /> : <></>;
  const mystyle = {
    width: "18rem",
  };
  return (
    <div className="card" style={mystyle}>
      {childImg}
      <CardBody {...props} />
    </div>
  );
}
