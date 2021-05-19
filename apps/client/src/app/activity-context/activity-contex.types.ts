export interface Location {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  organizerId: number;
  locationId: number;
  sportId: number;
  timestamp: number;
  ends: number;
  latitude: number;
  longitude: number;
  location: Location;
}

export interface Position {
  longitude: number;
  latitude: number;
  zoom: number;
}

export interface ActivityContextType {
  activities: Activity[];
  // handler: ({ endpoint: string, activity: Activity }) => void;
  // idHandler: (id: number) => void;
  // idx: number;
  selectedActivity: Activity;
  // editActivity: (id: number, activity: Activity) => void;
  // latitudeHandler: (id: number) => void;
  // longitudeHandler: (id: number) => void;
  // zoomHandler: (id: number) => void;
  // latitude: number;
  // longitude: number;
  // zooom: number;
  // addressHandler: (id: number) => void;
  selectActivityHandler: (activity: Activity) => void;
  // positionHandler: Position;
}

export interface ActivityContextProps {
  children: React.ReactNode;
}
