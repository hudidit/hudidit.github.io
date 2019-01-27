npm install
npm run build
http-server ./build -p 443 -S -C ../cert.pem -K ../privkey.pem