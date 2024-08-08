import Badge from "../Badge"
const DestinationCard = (props) => {
  return (
    <div
      key={props.index}
      className="relative rounded-lg overflow-hidden shadow-lg mx-4"
    >
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-64 object-cover hover:scale-110 cursor-pointer"
      />
      {props.badge && (
        <Badge>{props.badge}</Badge>
      )}
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-900">
          {props.name}
        </h3>
      </div>
    </div>
  )
}

export default DestinationCard