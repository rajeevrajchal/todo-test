export interface TodoI {
  id: number | string;
  title: string;
  completed: boolean;
  order?: number;
}
