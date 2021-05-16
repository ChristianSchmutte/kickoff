import { useQuery, UseQueryResult } from 'react-query';
import axios, { AxiosInstance } from 'axios';

interface User {
  id: number;
  firstname: string;
  lastname: string;
}

interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

interface Feed {
  id: number;
  title: string;
  description: string;
  organizerId: number;
  locationId: number;
  sportId: number;
  timestamp: number;
  ends: number;
  participants: User;
  organizer: User;
  location: Location;
}

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3333/api'
});

const fetchData = async (endpoint: string): Promise<Feed[]> => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default function useRequest(
  endpoint: string
): UseQueryResult<Feed[], Error> {
  return useQuery(['feed', endpoint], () => fetchData(endpoint));
}
