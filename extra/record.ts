interface EmployeeType {
    id: number
    fullname: string
    role: string
  }
  
  let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
  }
  
  // 0: { id: 1, fullname: "John Doe", role: "Designer" },
  // 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
  // 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }

  interface PersonID<T> {
    id: T;
  }
  
  type PersonTypes = "executive" | "manager" | "employee";
  
  const peopleRecord: Record<PersonTypes, PersonID<string | number>> = {
    executive: { id: "001" },
    manager: { id: "254" },
    employee: { id: "875" },
  };
  
  console.log(peopleRecord.executive);
  // Output: { id: "001" }