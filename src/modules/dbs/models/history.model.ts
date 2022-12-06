import { IHistory } from "src/interfaces/history.interface";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class History implements IHistory{
    @PrimaryGeneratedColumn()
    _id: number;

    @Column()
    employeeId: string;

    @Column()
    date: Date;

    @Column()
    checkIn: string;

    @Column()
    checkOut: string;
}