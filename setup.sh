# 安装博客
## 把该文件拷贝到服务器上运行
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e '${YELLOW}Cloning files from github'
git clone https://github.com/hudidit/hudidit.github.io.git --branch next next-blog

cd next-blog

echo -e '${YELLOW}Installing dependencies'
npm install

echo -e '${YELLOW}Building'
npm run build

echo -e '${YELLOW}Exporting HTML'
npm run export

# 启动静态资源服务器
# 确保上级目录存在 cert.pem 和 privkey.pem
echo -e '${YELLOW}Starting static server at port 443'
nohup http-server ./out -p 443 -S -C ../cert.pem -K ../privkey.pem &