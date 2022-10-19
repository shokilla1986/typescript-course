export interface UserI {
  userName: string;
  avatarUrl: string;
}

export interface ISearchFormData {
  city: string;
  startRentDate: Date;
  checkOutDate: Date;
  maxPrice?: number | null;
}

export interface IPlace {}
