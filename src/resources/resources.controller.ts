import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ResourcesService } from './resources.service';
import { Resource } from './entities/resource.entity';

@Controller('resources')
export class ResourcesController {
  constructor(private readonly resourcesService: ResourcesService) {}

  @Post()
  create(@Body() resource: Resource): Promise<Resource> {
    return this.resourcesService.create(resource);
  }

  @Get()
  findAll() {
    return this.resourcesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.resourcesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() resource: Resource) {
    return await this.resourcesService.update(resource);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.resourcesService.remove(+id);
  }
}
