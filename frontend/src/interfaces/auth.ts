export interface UserProps {
  name: string;
  email: string;
  phone: string;
  age: string;
  password: string;
}

export interface UserRegistrationModalProps {
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  onRegister: (user: UserProps) => void;
}

export interface EventsProps {
  id: number;
  name: string;
  type: string;
  value: number;
}

export interface SessionProps {
  title: string;
  data: Array<EventsProps>;
}