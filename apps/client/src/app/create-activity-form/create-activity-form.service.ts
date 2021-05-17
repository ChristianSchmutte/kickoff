import { Activity } from './create-activity-form.types';
import axios, { AxiosResponse } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333/api'
});
const postActivity = async ({
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

export default postActivity;
