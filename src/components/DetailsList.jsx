const DetailsList = ({ data }) => {
  return (
    <ul className="space-y-4">
      {data.map((detail) => (
        <li key={detail.label} className="flex gap-2">
          <span className="font-bold">{detail.label}:</span>
          {detail.value}
        </li>
      ))}
    </ul>
  );
};
export default DetailsList;
