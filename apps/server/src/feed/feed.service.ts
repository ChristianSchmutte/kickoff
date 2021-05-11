import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Activity, User } from './activity.interface';

@Injectable()
export class FeedService {

  mockUsers: User[] = [
    { id: 1, firstname: 'John', lastname: 'Doe' },
    { id: 2, firstname: 'Lisa', lastname: 'Simpson' },
    { id: 3, firstname: 'Barney', lastname: 'Gumbles' },
    { id: 4, firstname: 'Ned', lastname: 'Flanders' },
  ];

  mockActivities: Activity[] = [
    {
      id: 1,
      title: 'title 1 from Service',
      description: 'description 1',
      timestamp: Date.now() + 2000,
      ends: Date.now() + 349999,
      participants: [],
    },
    {
      id: 2,
      title: 'title 2',
      description: 'description 2',
      timestamp: Date.now() + 2000,
      ends: Date.now() + 349999,
      participants: [],
    },
    {
      id: 3,
      title: 'title 3',
      description: 'description 3',
      timestamp: Date.now() + 200330,
      ends: Date.now() + 34469999,
      participants: [],
    },
  ];

  async getFeed(): Promise<Activity[]> {
    return this.mockActivities;
  }

  async getActivityById(id: number): Promise<Activity> {
    const found = this.mockActivities.find((activity) => activity.id === id);
    // const activity = Activity.findById(id);
    // if (!activity) throw new NotFoundException(`Could not find item with id: ${id}`);
    if(!found) throw new NotFoundException(`Could not find item with id: ${id}`);
    return found;
  }

  async updateActivityList(activityId: number, userId: number): Promise<Activity> {
    const user: User = this.mockUsers.find((user) => user.id === userId);
    if(!user) throw new UnauthorizedException('Must be logged in');
    
    const activity = this.mockActivities.find((act) => act.id === activityId);
    if(!user) throw new NotFoundException(`Could not find activity with id ${activityId}`);

    if(activity.participants.indexOf(user) !== -1) {
      return activity;
    } else {
      activity.participants.push(user);
      return activity;
    }
  }
}
