export interface AddProduct {
    name: string;
    description: string;
    amount: number;
    pictures: string; 
    status: number;
  }
  

  export interface UpdateProduct {
    name: string;
    description: string;
    amount: number;
    pictures: string; 
    status: number;
    user_id?: string;
  }
  