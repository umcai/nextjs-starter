// import { getRepository } from 'typeorm'
import { ArticleView } from '../entity/Articles'
import connection from '../connection'

interface IArticleViewData {
  id?: string,
  name?: string,
  views?: number
}

export const getArticleView = async (name): Promise<number> => {
  let views: number = 0
  const db = await connection()
  const articleViewData: IArticleViewData = await db.getRepository('articleviews').findOne({
    name
  })
  if (articleViewData) {
    views = articleViewData.views
  }
  return views
}

export const setArticleView = async (name): Promise<number> => {
  let views: number = 0
  const db = await connection()
  const articleView = db.getRepository('articleviews')
  const articleViewData: IArticleViewData = await articleView.findOne({
    name
  })
  if (articleViewData) {
    views = articleViewData.views + 1
    articleViewData.views = views
    await articleView.save(articleViewData)
  } else {
    views += 1
    const articleViewInstance = new ArticleView()
    articleViewInstance.name = name
    articleViewInstance.views = views
    await articleView.save(articleViewInstance)
  }
  return views
}
