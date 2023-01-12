const getSeason = (lat, month) => {
  // For north hemisphere, lat > 0
  // For south hemisphere, lat < 0
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  console.log(season);

  return <div>Latitude: {lat}</div>;
};

export default SeasonDisplay;
