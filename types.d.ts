declare global {
    interface CfItem {
      id: string;
      name: string;
    }
  
    type TEntry = {
      cfArray?: CfItem[];
      // Other properties...
    };
  }
  