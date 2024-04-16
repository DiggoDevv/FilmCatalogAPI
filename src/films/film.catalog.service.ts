import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository }  from 'typeorm'
import { FilmCatalog } from './film.catalog.entity';
import { FilmCatalogDomain } from './film.catalog.domain';

@Injectable()
export class FilmCatalogService {
    constructor(
        @InjectRepository(FilmCatalog)
        private readonly  filmCatalogRepository: Repository<FilmCatalog>
    ) { }

    async findAllFilmCatalog(): Promise<FilmCatalog[]>{
        const filmCatalog= await this.filmCatalogRepository.find();
        
        if(filmCatalog.length === 0) throw new HttpException('Films not found!', HttpStatus.NOT_FOUND);
        return filmCatalog;
    }

    async createFilmCatalog(filmCatalog: FilmCatalogDomain): Promise<FilmCatalogDomain> {
        const createdFilmCatalog = await this.filmCatalogRepository.save(filmCatalog);
        return createdFilmCatalog;
    }
}
