let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
  'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
  'Marrakesh', 'New York City'];

function contains(string, destinations) {
  for (let i = 0; i < destinations.length; i++) {
    if (string === destinations[i]) {
      return true;
    }
  }
  return false;
}
contains('Paris', destinations); // true
contains('Nashville', destinations); // false