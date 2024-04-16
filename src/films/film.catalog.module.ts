import { Module } from '@nestjs/common';
import { FilmController } from './film.catalog.controller';
import { FilmCatalogService } from './film.catalog.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmCatalog } from './film.catalog.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([FilmCatalog])
  ],
  controllers: [FilmController],
  providers: [FilmCatalogService]
})
export class FilmModule {}
