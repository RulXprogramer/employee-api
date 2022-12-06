import { IEmployee } from 'src/interfaces/employee.interface';
import { IHistory } from 'src/interfaces/history.interface';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { History } from './history.model';

@Entity()
export class Employee implements IEmployee {
    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    name: string;
    
    @Column()
    surname: string;
    
    @Column()
    birth: Date;
    
    @Column()
    area: string;
    
    @Column()
    status: string;
    
    @Column()
    salary: number;
    
    @Column()
    createdAt: Date;

    @OneToMany(type => History, history => history._id)
    history: IHistory[];
}