# Blog
## Install
Assuming `~/web/` is the root directory of your web server, let's

1. Create HTTPS certificates for your domain. You can follow [this guide](https://certbot.eff.org/lets-encrypt/ubuntuxenial-other). Then move the generated `cert.pem` and `privkey.pem` to `~/web/`.
2. Create a `setup.sh` file in `~/web/` and fill it with the content of the `setup.sh` from this project.
3. run `bash setup.sh`.

Then a HTTPS server will be running at port `443` which is used defaultly for HTTPS reqeusts in browsers.

## Notice / ToDo's
- [ ] For now, the blog is fetching posts from the issues in exactly this repository. In the future, the repository address will be configurable.
- [ ] The static page is generated only at the time we setting up the blog, i.e. `bash setup.sh`. In the future, it will be synchronous with the github issues, probably via webhooks.