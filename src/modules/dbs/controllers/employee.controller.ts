import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { Employee } from '../models/employee.model';
import { EmployeesService } from '../services/employee.service';

@Controller('employee')
export class EmployeeController {

  constructor(private employeesService: EmployeesService){}
  
  @Get()
  async showAllUsers() {
    const employees =  await this.employeesService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'Employees fetched successfully',
      employees
    };
  }

  @Post()
  async createUsers(@Body() data: Employee) {
      const user = await this.employeesService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User created successfully',
      user
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data =  await this.employeesService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'Employee fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<Employee>) {
    await this.employeesService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'User updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.employeesService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'User deleted successfully',
    };
  }
}