import axios from 'axios'
import IDataList from '../model/IDataList';



const getDataFromServer = () => {
  return axios
    .get<IDataList[]>(`http://localhost:3000/`)
    .then((response) => response.data);
};

const pushDataFromUser = (newPurchase: Omit<IDataList, "id">) => {
  return axios
    .post<IDataList>(`http://localhost:3000/`, newPurchase, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => response.data);
};

export { getDataFromServer, pushDataFromUser };