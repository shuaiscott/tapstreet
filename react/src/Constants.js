// Prod/Dev env variables
const prod = {
 url: {
  API_URL: 'https://api.deets.tapme.org/deets/'
 }
};
const dev = {
 url: {
  API_URL: 'http://localhost:8010/proxy/deets/'
 }
};
export const config = process.env.NODE_ENV === 'development' ? dev : prod;

// App Profile URLs
export const profileUrlsMap = {
  linkedin: 'https://linkedin.com/in/',
  facebook: 'https://facebook.com/',
  instagram: 'https://instagram.com/',
  pinterest: 'https://pinterest.com/',
  venmo: 'https://venmo.com/'
};

