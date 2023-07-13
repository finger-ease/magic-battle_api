export type skillType = {
  id: number;
  job_id: number;
  element_id: number;
  name: string;
  type: 'physical' | 'magic';
  cost: number;
  power: number;
  target: 'friend' | 'enemy';
  description: string;
};
