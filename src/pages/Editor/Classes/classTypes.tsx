export interface AddNewClassFormProps {
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface AddNewClassWorkFormProps {
  classId: string | undefined;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface deleteClassProps {
  className: string;
  classID: string;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface ClassComponentDataProps {
  _id: string;
  createdAt: string;
  name: string;
  description: string;
  classworks?: [];
}
export interface EditClassModalProps {
  item: ClassComponentDataProps;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
  class?: string | undefined;
}

export interface classesProps {
  classes: ClassComponentDataProps[] | undefined;
  fetchClasses(): void;
}

export interface headerProps {
  item: ClassComponentDataProps;
  fetchClasses(): void;
}

export interface classesWorkProps {
  name: string;
  description: string;
}

export interface ClassHeaderDataProps {
  item: ClassComponentDataProps;
  fetchClasses(): void;
}

export interface SharePlanProps {
  className: string;
  classID: string;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}
