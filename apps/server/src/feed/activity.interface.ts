export interface Activity {
  id: number;
  title: string;
  description: string;
  timestamp: number;
  ends: number;
  participants: User[];
}

// TODO: Seperate User into Auth Module

export interface User {
  id: number;
  firstname: string;
  lastname: string;
}