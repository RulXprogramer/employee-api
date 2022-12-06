import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../models/employee.model';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  async showAll() {
    return await this.employeesRepository.find();
  }

  async create(data: Employee) {
    const user = this.employeesRepository.create(data);
    await this.employeesRepository.save(data);
    return user;
  }

  async read(id: number) {
    return await this.employeesRepository.findOne({ where: { _id: id } });
  }

  async update(id: number, data: Partial<Employee>) {
    await this.employeesRepository.update({ _id: id }, data);
    return await this.employeesRepository.findOne({ where: { _id: id } });
  }

  async destroy(id: number) {
    await this.employeesRepository.delete({ _id: id });
    return { deleted: true };
  }
}