import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { History } from '../models/history.model';

@Injectable()
export class HistoriesService {
  constructor(
    @InjectRepository(History)
    private historiesRepository: Repository<History>,
  ) {}

  async showAll() {
    return await this.historiesRepository.find();
  }

  async create(data: History) {
    const user = this.historiesRepository.create(data);
    await this.historiesRepository.save(data);
    return user;
  }

  async read(id: number) {
    return await this.historiesRepository.findOne({ where: { _id: id } });
  }

  async update(id: number, data: Partial<History>) {
    await this.historiesRepository.update({ _id: id }, data);
    return await this.historiesRepository.findOne({ where: { _id: id } });
  }

  async destroy(id: number) {
    await this.historiesRepository.delete({ _id: id });
    return { deleted: true };
  }
}