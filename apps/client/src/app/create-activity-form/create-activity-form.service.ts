import { Activity } from './create-activity-form.types';
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
    console.log(endpoint, activity);

    const response = await api.post(endpoint, activity);
    console.log({ 'axios post response': response });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
