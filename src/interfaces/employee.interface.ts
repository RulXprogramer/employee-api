import { IHistory } from "./history.interface";

export interface IEmployee {
    _id: number;
	name: string;
	surname: string;
	birth: Date;
	area: string;
	status: string;
	salary: number;
	createdAt: Date;
	history: IHistory[];
}

export interface IEmployeeInput {
	name: string;
	surname: string;
	birth: Date;
	area: string;
	status: string;
	salary: number;
}