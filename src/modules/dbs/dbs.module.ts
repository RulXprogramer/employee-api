import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from './controllers/employee.controller';
import { HistoryController } from './controllers/history.controller';
import { Employee } from './models/employee.model';
import { History } from './models/history.model';
import { EmployeesService } from './services/employee.service';
import { HistoriesService } from './services/history.service';

@Module({
    imports: [TypeOrmModule.forFeature([Employee, History])],
    providers: [EmployeesService, HistoriesService],
    controllers: [EmployeeController, HistoryController],
    exports: [EmployeesService, HistoriesService]
})
export class DbsModule {}
