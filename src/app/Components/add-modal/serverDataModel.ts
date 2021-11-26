export class server {

    constructor(
      public domain:string,
      public storage:string,
      public monthlyVisitorCapacity:number,
      public subdomain:[string]
    ) {  }
  
  }