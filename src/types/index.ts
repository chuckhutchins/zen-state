export type MeditationType = {
  id: string;
  name: string;
  categoryList: CategoryType[];
};

export type CategoryType = {
  id: string;
  name: string;
  focusList: FocusType[];
};

export type FocusType = {
  id: string;
  name: string;
  fileList: number[];
};
