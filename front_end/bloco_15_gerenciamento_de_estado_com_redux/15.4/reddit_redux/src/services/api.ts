// import fetch from 'node-fetch';

const fetchData = async (endpoint: string) => {
  const response = await fetch(`https://www.reddit.com/r/${endpoint}.json`);
  const subRedditInfo = await response.json();

  return subRedditInfo.data.children;
};

export default fetchData;
