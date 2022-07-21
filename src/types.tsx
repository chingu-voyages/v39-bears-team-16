import { RegisterOptions } from 'react-hook-form';

export interface ValidationRuleInterface {
  [x: string]: RegisterOptions;
}
export interface ErrorMessageInterface {
  msg: string;
  value?: string;
  param?: string;
}

export interface PlanInterface {
  _id: string;
  name: string;
  thumbnail: string;
  description: string;
  visible: boolean;
}

export interface ThemeInterface {
  color: {
    [x: string]: string;
  };
}

export interface InputFieldProps {
  hasError?: boolean;
}

export interface AddNewClassFormProps {
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface AddNewClassWorkFormProps {
  classId: string | undefined;
  isOpen: boolean;
  toggle(): void;
  handleClose(): void;
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
