# 安装博客
## 把该文件拷贝到服务器上运行

echo -e 'Cloning files from github'
git clone https://github.com/hudidit/hudidit.github.io.git --branch next next-blog

cd next-blog

echo -e 'Installing dependencies'
npm install

echo -e 'Building'
npm run build

echo -e 'Exporting HTML'
npm run export

# 启动静态资源服务器
# 确保上级目录存在 cert.pem 和 privkey.pem
echo -e 'Starting static server at port 443'
nohup http-server ./out -p 443 -S -C ../cert.pem -K ../privkey.pem &