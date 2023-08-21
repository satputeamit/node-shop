export interface AddOrder {
    items: string[];
    total_amount: number;  
    status: number;
    user_id: string;  
  }
  
  export interface UpdateOrder {
    items: string[];
    total_amount: number;  
    status: number;
    user_id?: string;
  }
  
  