# Employee_management_api
This is a RESTful API built with Node.js, Express, TypeScript, and MongoDB (via Mongoose). It allows CRUD operations for managing employee records.



project-root/
│
├── src/
│   ├── controllers/
│   │   └── employeeController.ts  # Controller with all CRUD logic
│   ├── db/
│   │   └── employeeModel.ts       # Mongoose schema/model for employees
│   ├── routes/
│   │   └── employeeRoutes.ts      # Routes for employee APIs
│   └── index.ts                   # Entry point
│
├── package.json
├── tsconfig.json
└── README.md


Tech Stack - 
Node.js
Express
TypeScript
MongoDB
Mongoose


Features -
Modular MVC structure
Uses Mongoose for schema validation
Type-safe using TypeScript
Easily scalable


API endpoints - 
METHODS  ENDPOINTS        DESCRIPTION           
GET     `/employees`      Get all employees     
GET     `/employees/:id`  Get employee by ID    
POST    `/employees`      Create a new employee 
PUT     `/employees/:id`  Update an employee    
DELETE  `/employees/:id`  Delete an employee    
