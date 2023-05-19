export interface PostType {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  category: PostCategoryType;
  createdDate: Date;
  conclusion: string;
}

enum PostCategoryType {
  Blog,
  News,
  Events,
}

export interface LinkType {
  link: string;
}

export interface TestimonialType {
  name: string;
  age: number;
  image: string;
  paragraph: string;
}

export interface StatisticsType {
  counterActivism: number;
  donatedPCs: number;
  childrenWithoutPC: number;
}

export enum DonationSubscription {
  none = "NONE",
  once = "ONCE",
  monthly = "MONTHLY",
}

export interface FundData {
  donationSubscription: DonationSubscription;
  amount: number;
  leaveMsg: boolean;
  message: string;
  attachment1?: File;
  attachment2?: File;
  hideNameFromPublic: boolean;
  expenses: boolean;
}
