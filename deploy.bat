@ECHO off
:: deploy to gh-pages branch
npm test && npm run build && CD dist && git init && git add -A && git commit -m 'deploy' && git push -f git@github.com:risbi0/Elysian-Realm.git main:gh-pages && CD ..