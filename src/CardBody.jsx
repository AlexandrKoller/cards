export default function CardBody({ title, text, textBtn }) {
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href="#" className="btn btn-primary">
        {textBtn}
      </a>
    </div>
  );
}
