export interface Slot {
    id: number;
    label: string;
    days: string;
    time: string;
  }
  
  export const SLOT_DATA: Slot[] = [
    { id: 1, label: 'Slot 1', days: 'MW', time: '09:00 to 10:45' },
    { id: 2, label: 'Slot 2', days: 'MW', time: '10:55 to 12:40' },
    { id: 3, label: 'Slot 3', days: 'MW', time: '12:50 to 14:35' },
    { id: 4, label: 'Slot 4', days: 'MW', time: '15:00 to 16:45' },
    { id: 5, label: 'Slot 5', days: 'MW', time: '16:55 to 18:40' },
    { id: 6, label: 'Slot 6', days: 'MW', time: '18:50 to 20:35' },
    { id: 7, label: 'Slot 7', days: 'MW', time: '20:45 to 22:30' },
    { id: 8, label: 'Slot 8', days: 'TR', time: '09:00 to 10:45' },
    { id: 9, label: 'Slot 9', days: 'TR', time: '10:55 to 12:40' },
    { id: 10, label: 'Slot 10', days: 'TR', time: '12:50 to 14:35' },
    { id: 11, label: 'Slot 11', days: 'TR', time: '15:00 to 16:45' },
    { id: 12, label: 'Slot 12', days: 'TR', time: '16:55 to 18:40' },
    { id: 13, label: 'Slot 13', days: 'TR', time: '18:50 to 20:35' },
    { id: 14, label: 'Slot 14', days: 'TR', time: '20:45 to 22:30' }
  ];