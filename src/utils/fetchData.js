export const exerciseOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ecfb8607d7msh561792eb12a4e3ap12bd7bjsnff5c15aff577',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ecfb8607d7msh561792eb12a4e3ap12bd7bjsnff5c15aff577',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };


  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };