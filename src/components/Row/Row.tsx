import coins from "../../assets/coins.png";
type RowProps = {
  name: string;
  location: string;
  image: string;
  coin: string;
};
function Row({ name, location, image, coin }: RowProps) {
  return (
    <div className="row">
      <img className="profile1" src={image} />
      <div className="meta">
        <h5>{name}</h5>
        <h6>{location}</h6>
      </div>
      <div className="row_right1">
        <img src={coins} className="coins" />
        <span>{coin}</span>
      </div>
    </div>
  );
}

export default Row;
