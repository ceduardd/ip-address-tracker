const API_KEY = 'at_aRNeciftOmdKxfRDpbSSisAXd5r1S';

export const getData = async (IP, domain) => {
  const data = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${API_KEY}${
      IP ? `&ipAddress=${IP}` : '' || domain ? `&domain=${domain}` : ''
    }`
  ).then(res => res.json());

  console.log(data);

  if (data.code) {
    return null;
  }

  const newData = {
    ip: data.ip,
    location: `${data.location.city}, ${data.location.country}`,
    timezone: data.location.timezone,
    isp: data.isp,
    coord: {
      lat: data.location.lat,
      lng: data.location.lng,
    },
  };

  return newData;
};
