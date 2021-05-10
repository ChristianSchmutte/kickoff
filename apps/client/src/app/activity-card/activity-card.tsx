import React from 'react';

import './activity-card.module.scss';

/* eslint-disable-next-line */
export interface ActivityCardProps {
  title: string;
  description: string;
  timestamp: number;
  location: string;
}

function formatTimeStamp(timestamp: number): string {
  return `${timestamp}`;
}

export function ActivityCard({
  title,
  description,
  timestamp,
  location
}: ActivityCardProps): JSX.Element {
  const formatedTime: string = formatTimeStamp(timestamp);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{formatedTime}</p>
      <p>{location}</p>
    </div>
  );
}

export default ActivityCard;
