import { Injectable } from '@nestjs/common';
import { CreateResourceDto } from './dto/create-resource.dto';
import { UpdateResourceDto } from './dto/update-resource.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Resource } from './entities/resource.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ResourcesService {
  constructor(
    @InjectRepository(Resource)
    private resourceRepository: Repository<Resource>,
  ) {}

  /**
   * INSERT new resource into DB
   * @param resource new resource
   */
  create(resource: Resource) {
    return this.resourceRepository.save(resource);
  }

  /**
   * SELECT * from resource
   */
  findAll(): Promise<Resource[]> {
    return this.resourceRepository.find();
  }

  /**
   * SELECT * from resource WHERE resourceCode is resourceCode
   * @param resourceCode to lookup
   */
  async findOne(resourceCode: number): Promise<Resource> {
    try {
      const resource = await this.resourceRepository.findOneOrFail(
        resourceCode,
      );
      return resource;
    } catch (err) {
      throw err;
    }
  }

  /**
   * Updates resource
   * @param resource updated version of the resource
   */
  update(resource: Resource): Promise<Resource> {
    return this.resourceRepository.save(resource);
  }

  /**
   * Removes a resource
   * @param resourceCode resource that should be deleted
   */
  async remove(resourceCode: number) {
    return await this.resourceRepository.delete({ resourceCode: resourceCode });
  }
}
