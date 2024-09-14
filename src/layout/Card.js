function Card(props) {
  return (
    <div className="card">
      <img src={props.image} />
      <div className="card-body">
        <h4>{props.title}</h4>
        <p>{props.para}</p>
        <div className="card-footer">
          <div className="row">
            <div class="col-lg-6">
              <span class="text-secondary">{props.goal}</span>
            </div>
            <div class="col-lg-6">
              <span class="text-secondary">{props.raised}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
