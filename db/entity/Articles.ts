import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('articleviews')
export class ArticleView {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('text')
  name: string

  @Column('int')
  views: number

}
