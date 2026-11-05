const icons = new Map([
  [[0], '☀️'],
  [[1], '🌤️'],
  [[2], '⛅️'],
  [[3], '☁️'],
  [[45, 48], '🌫️'],
  [[51, 56, 61, 66, 80], '🌦️'],
  [[53, 55, 63, 65, 57, 67, 81, 82], '🌧️'],
  [[71, 73, 75, 77, 85, 86], '🌨️'],
  [[95], '🌩️'],
  [[96, 99], '⛈️']
]);

export default function getWeatherIcon(wmoCode) {
  const arr = [...icons.keys()].find(key => key.includes(wmoCode));

  if (!arr) return null;

  return icons.get(arr);
}
