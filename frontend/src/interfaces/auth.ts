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

export interface EventRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  addEvent: (event: EventProps) => void;
}

export interface EventProps {
  name: string;
  type: string;
  value: number;
}

export interface SessionProps {
  title: string;
  data: Array<EventProps>;
  onClickEventCard: () => void;
}