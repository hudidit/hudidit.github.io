# 安装博客
YELLOW='\033[1;33m'
NC='\033[0m'

## 把该文件拷贝到服务器上运行
echo -e '${YELLOW}Cloning files from github'
git clone https://github.com/hudidit/hudidit.github.io.git

cd hudidit.github.io

echo -e '${YELLOW}Installing dependencies'
npm install

echo -e '${YELLOW}Building'
npm run build

# 启动静态资源服务器
/bin/bash ./serve.sh