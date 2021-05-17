interface Activity {
  title: string;
  description: string;
  startTimestamp: number;
  endTimestamp: number;
  location: string;
  id: string;
  postcode: string;
  location_url: string;
}

interface CreateActivityFormProps {
  postedActivity: Activity;
}

export { Activity, CreateActivityFormProps };
