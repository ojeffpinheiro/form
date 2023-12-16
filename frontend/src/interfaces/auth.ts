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