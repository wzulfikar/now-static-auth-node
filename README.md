Example repo for [Now](https://now.sh) static site with basic auth. Based on https://github.com/flawyte/now-basic-auth.

To set env var `AUTH_USERS`, you can either:

1. use `now secret` command: `now secret add auth_users 'user1:user1,user2:user2'`
2. export env var from .env file when deploying: `export $(cat .env) && now -e AUTH_USERS`

Live demo: https://node-static-auth.wzulfikar.now.sh
user: `user1`
pass: `user1`
