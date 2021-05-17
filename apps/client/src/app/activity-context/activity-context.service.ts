import { Activity } from './activity-contex.types';
import axios, { AxiosResponse, AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api'
});
export const postActivity = async ({
  endpoint,
  activity
}: {
  endpoint: string;
  activity: Activity;
}): Promise<AxiosResponse> => {
  try {
    const response = await api.post(endpoint, activity);
    console.log({ 'axios post response': response });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
