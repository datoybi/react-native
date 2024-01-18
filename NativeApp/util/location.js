const GOOGLE_API_KEY = "AIzaSyDQUnQO3i9tbWJu1jwZeU-MeIak_BjracU";
const GEO_KEY = "AIzaSyAFdZQAsKtQSGU_kt-EcsY0iV2yaTj9NV4";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&key=${GEO_KEY}`;
  console.log("imagePreviewUrl ", imagePreviewUrl);
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GEO_KEY}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch address");
  }

  const data = await response.json();
  console.log(data);
  const address = data.results[0].formatted_address;
  return address;
}
