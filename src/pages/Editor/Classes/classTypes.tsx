import { ClassInterface } from 'types';

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

export interface DeleteClassProps {
  className: string;
  classID: string;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface EditClassModalProps {
  classData: ClassInterface;
  isOpen: boolean;
  toggle(): void;
  fetchClasses(): void;
}

export interface EditorClassComponentProps {
  classData: ClassInterface;
  fetchClasses(): void;
}
