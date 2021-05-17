interface Activity {
  id: number;
  title: string;
  description: string;
  organizerId: number;
  locationId: number;
  sportId: number;
  timestamp: number;
  ends: number;
}

interface ActivityContextType {
  activities: Activity[];
  handler: (activity: Activity) => void;
  idHandler: (id: number) => void;
  idx: number;
  selectedActivity: Activity;
  editActivity: (id: number, activity: Activity) => void;
}

export interface ActivityContextProps {
  children: React.ReactNode;
}

export { Activity, ActivityContextType };
