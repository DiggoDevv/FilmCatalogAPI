import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate } from 'typeorm'

export enum EnumClassification {
  LIVRE = 'LIVRE',
  _10 = '10',
  _12 = '12',
  _14 = '14',
  _16 = '16',
  _18 = '18',
}

@Entity({ name: 'catalogoFilmes' })
export class FilmCatalog {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'titulo', length: 255, nullable: false, unique: true })
    titulo: string;

    @Column({ name: 'diretor', length: 100, nullable: true })
    diretor: string;

    @Column({ name: 'genero', length: 50, nullable: true })
    genero: string;

    @Column({ name: 'sinopse', type: 'text', nullable: true })
    sinopse: string;

    @Column({ name: 'ano_lancamento', length: 4, nullable: true })
    ano_lancamento: string;

    @Column({ name: 'duracao', type: 'time', nullable: true })
    duracao: string;

    @Column({ name: 'classificacao', type: 'enum', enum: EnumClassification, nullable: true, default: EnumClassification.LIVRE })
    classificacao: EnumClassification;

    @Column({ name: 'avaliacao', type: 'numeric', precision: 3, scale: 1, nullable: true })
    avaliacao: number;

  @BeforeInsert()
  @BeforeUpdate()
  validateYear() {
      if (this.ano_lancamento && (this.ano_lancamento.length !== 4 || isNaN(Number(this.ano_lancamento)))) {
        throw new Error('Ano de lançamento inválido.');
    }
  }
  @BeforeInsert()
  @BeforeUpdate()
  validateDuration() {
    if (this.duracao && !/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/.test(this.duracao)) {
      throw new Error('Duração inválida. Use o formato HH:MM:SS');
    }
  }
}
