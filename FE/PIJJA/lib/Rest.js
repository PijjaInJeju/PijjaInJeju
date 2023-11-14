
const Rest = async(url, method, data, thenFun, catchFun) => {
  console.log("data : ", JSON.stringify(data));
  return await fetch('https://k9a605.p.ssafy.io'+ url,
  {
    method: method,
    cache: "no-cache",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then( async(res) => ( await res.json().then(thenFun).catch(catchFun)))
  .catch(catchFun);
}

export default Rest; 