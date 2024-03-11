export class Place {
  constructor(title, imageUri, location, id) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; // {lat : 0.1234, lng:123.123}
    // this.id = new Date().toString() + Math.random().toString();
    this.id = id;
  }
}
