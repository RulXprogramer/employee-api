import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbsModule } from './modules/dbs/dbs.module';
import { Employee } from './modules/dbs/models/employee.model';
import { History } from './modules/dbs/models/history.model';

@Module({
  imports: [
      DbsModule,
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'employee_db',
      entities: [Employee, History],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
