import { AbstractFileService } from '@eleansphere/service-core';
import { ProfileImageDto, CreateProfileImageDto } from '../dtos/profile-image.dto';

export class FileService extends AbstractFileService<ProfileImageDto, CreateProfileImageDto> {
  protected readonly basePath = '/api/profile-images';
  protected readonly uploadField = 'avatar';
}
