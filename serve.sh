# 启动静态服务器
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e '${YELLOW}Starting static server at port 443'
http-server ./build -p 443 -S -C ../cert.pem -K ../privkey.pem