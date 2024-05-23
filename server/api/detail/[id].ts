import fs from "fs";
import path from "path";
import matter from 'gray-matter';
import {remark} from 'remark';
import html from 'remark-html';

// 文章目录
const postsDir = path.join(process.cwd(), "content");

export default defineEventHandler(async(event) => {
    
    const fileName = getRouterParam(event, 'id')+'.md';

    // 获取文章内容
    const fullPath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 获取扉页信息
    const matterInfo = matter(fileContents);
    // 替换markdown为html
    const processedContent = await remark().use(html).process(matterInfo.content);
    const contentHtml = processedContent.toString() as string;

    return {
        title: matterInfo.data.title as string,
        contentHtml,
    }
})