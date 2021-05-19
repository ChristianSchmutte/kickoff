import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosInstance } from 'axios';
import { Activity } from './activity-contex.types';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api'
});

const fetchData = async (endpoint: string): Promise<Activity[]> => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const useRequest = (
  endpoint: string
): UseQueryResult<Activity[], Error> => {
  return useQuery('feed', () => fetchData(endpoint));
};
