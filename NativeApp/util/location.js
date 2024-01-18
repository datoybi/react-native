const GOOGLE_API_KEY = "AIzaSyDQUnQO3i9tbWJu1jwZeU-MeIak_BjracU";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
