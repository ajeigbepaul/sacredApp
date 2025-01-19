   // middleware.js
   import { NextResponse } from 'next/server';

   export function middleware(req: Request) {
     const res = NextResponse.next();
     res.headers.set('Access-Control-Allow-Origin', '*'); // Allow all origins (use specific origin in production)
     res.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
     res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers

     // Handle preflight requests
     if (req.method === 'OPTIONS') {
       return new Response(null, {
         status: 200,
         headers: res.headers,
       });
     }

     return res;
   }