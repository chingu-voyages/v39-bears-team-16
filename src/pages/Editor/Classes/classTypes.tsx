import { ClassInterface } from 'types';

export interface EditorClassProps {
  _id?: string;
  name: string;
  description: string;
  classworks: EditorClassworkInterface[];
}

export interface EditorClassworkInterface {
  _id?: string;
  name: string;
  link: string;
  type: string;
  description: string;
}

export interface AddNewClassFormProps {
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface DeleteClassProps {
  className: string;
  classID: string;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface EditClassModalProps {
  classData: EditorClassProps;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface EditorClassComponentProps {
  classData: ClassInterface;
  fetchClasses(): void;
}
