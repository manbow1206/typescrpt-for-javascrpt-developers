import axios from 'axios';
export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=123';

axios.get(url).then(function (response) {
  interface Articles {
    id: number;
    title: string;
    description: string;
  }
  let data: Articles[];
  data = response.data;
  console.log(data);
});
