export interface MembershipOption {
  name: string;
  cost: number;
  unit: string;
  type: string;
  numberOfDaysInWeek: number;
}

export interface Course {
  courseName: string;
  schedule: Record<string, { from: string; to: string }[]>;
  thumbnailImage: string;
}

export interface ScheduleItem {
  weekDay: string;
  time: { from: string; to: string }[];
  selected: boolean;
  disabled: boolean;
}

export interface Policy {
  name: string;
  detail: string;
  displayDetails: boolean;
}
