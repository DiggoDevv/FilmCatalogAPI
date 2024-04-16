import { Test, TestingModule } from '@nestjs/testing';
import { FilmCatalogService } from './film.catalog.service';

describe('FilmService', () => {
  let service: FilmCatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmCatalogService],
    }).compile();

    service = module.get<FilmCatalogService>(FilmCatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
