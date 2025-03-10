
export interface IReview {
  review: string;
  rating: number;
  student: string;
  tutor: string;
  isFlagged?: boolean;
  flaggedReason?: string;
  isVerifiedPurchase?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}


