export interface IHistory {
    _id: number;
	employeeId: string;
	date: Date;
	checkIn: string;
	checkOut: string;
}

export interface IHistoryInput {
	employeeId: string;
	checkIn: string;
	checkOut: string;
}