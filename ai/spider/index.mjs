import {createCrawl, createCrawlOpenAI } from 'x-crawl' 
import dotenv from 'dotenv'

dotenv.config()

const crawlApp = createCrawl({
    maxRetry: 3,
    intervalTime: {min: 1000, max: 3000},
})

const crawlOpenAI = createCrawlOpenAI({
   clientOptions:{
    apikey : process.env.OPENAI_API_KEY,
   },
   defaultModel: 'gpt-4.1',
})

crawlApp.crawlPage("https://movie.douban.com/chart").then(async(res)=>{
    const {page, browser} = res.data
    const targetSelector ='.article'
    await page.waitForSelector(targetSelector)
    const highlyHTML = await page.$eval(targetSelector, (el)=>el.innerHTML)
    const result= await crawlOpenAI.parseElements(
        highlyHTML,
        `获取电影评分，将评分不小于 8.0 的电影的图片链接，电影名称，电影评分获取到。输格式为：
    [
      {
        img: '图片链接',
        name: '电影名称',
        score: '电影评分'
      }
    ]
        `
    )
    browser.close()
    console.log(result)
}
)