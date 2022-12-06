import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { History } from '../models/history.model';
import { HistoriesService } from '../services/history.service';

@Controller('history')
export class HistoryController {

  constructor(private historiesService: HistoriesService){}
  
  @Get()
  async showAllUsers() {
    const histories =  await this.historiesService.showAll();
    return {
      statusCode: HttpStatus.OK,
      message: 'History fetched successfully',
      histories
    };
  }

  @Post()
  async createUsers(@Body() data: History) {
      const history = await this.historiesService.create(data);
    return {
      statusCode: HttpStatus.OK,
      message: 'History created successfully',
      history
    };
  }

  @Get(':id')
  async readUser(@Param('id') id: number) {
    const data =  await this.historiesService.read(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'History fetched successfully',
      data,
    };
  }

  @Patch(':id')
  async uppdateUser(@Param('id') id: number, @Body() data: Partial<History>) {
    await this.historiesService.update(id, data);
    return {
      statusCode: HttpStatus.OK,
      message: 'History updated successfully',
    };
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    await this.historiesService.destroy(id);
    return {
      statusCode: HttpStatus.OK,
      message: 'History deleted successfully',
    };
  }
}