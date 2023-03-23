export interface ModalInterface {
  children: React.ReactNode;
  onTriggerClick?: () => void;
  trigger: React.ReactNode;
}

export interface UseModalInterface {
  onTriggerClick: () => void;
}
