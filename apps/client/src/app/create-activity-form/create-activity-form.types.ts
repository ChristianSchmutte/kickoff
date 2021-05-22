interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

interface Activity {
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
  location: Location;
  id: string;
  location_url: string;
}

interface CreateActivityFormProps {
  postedActivity: Activity;
}

export { Activity, CreateActivityFormProps };
