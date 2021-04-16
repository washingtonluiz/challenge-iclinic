export const getMaster = (api, id) => {
  return api
    .get(`/people/${id}`)
    .then((resp) => {
      return resp.data;
    })
    .then((resp) => {
      console.log("resp: ", resp);
      return resp.data;
    })
    .catch((err) => {
      console.clear();
      console.log("Erro: ", err);
    });
};
