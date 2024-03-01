const DetailsList = ({ data }) => {
  return (
    <ul className="space-y-4 xl:space-y-2">
      {data.map((detail) => (
        <li key={detail.label} className="flex gap-2 text-sm">
          <span className="font-bold">{detail.label}:</span>
          {detail.value}
        </li>
      ))}
    </ul>
  );
};
export default DetailsList;
