import { IEmployee } from "./employee.types";
const baseURl = "http://localhost:8080";
export class EmployeeApi {
  static async fetchEmployees(): Promise<IEmployee[]> {
    const response = await fetch(`${baseURl}/employees`);
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData.map((data:any):IEmployee=>({
          dob: new Date(data.dob),
          gender:data.gender,
          name:data.name,
          salary:data.salary,
          id:data._id
      }));
    }
    throw Error("failed to fetch employees");
  }
  static async fetchEmployee(id: string): Promise<IEmployee> {
    const response = await fetch(`${baseURl}/employees/${id}`);
    if (response.ok) {
      const data = await response.json();
      return {
        dob:new Date(data.dob),
        gender:data.gender,
        name:data.name,
        salary:data.salary,
        id:data._id
    }
    }
    throw Error("failed to fetch employee");
  }
  static async createEmployee(employee: IEmployee): Promise<void> {

    const requestBody = JSON.stringify({
      ...employee,
      dob:employee.dob.toISOString()
    });
    const response = await fetch(`${baseURl}/employees`, {
      body: requestBody,
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
    });
    if(!response.ok){
      throw Error("adding employee failed");
    }
    return response.json();
    
  }
  static async deleteEmployee(id: string): Promise<void> {
    const response = await fetch(`${baseURl}/employees/${id}`, {
      headers: {
        "content-type": "application/json",
      },
      method: "DELETE",
    });
    if (!response.ok) {
      throw Error("deleting employee failed");
    }
    return response.json();
  }
  static async editEmployee(employee: IEmployee): Promise<void> {
    const requestBody = JSON.stringify({
      ...employee,
      dob:employee.dob.toISOString()
    })
    const response = await fetch(`${baseURl}/employees`, {
      headers: {
        "content-type": "application/json",
      },
      method: "PUT",
      body:requestBody
    });
    if (!response.ok) {
      throw Error("updating employee failed");
    }
  }
}
