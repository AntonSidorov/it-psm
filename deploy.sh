echo 'Building...'
rm -rf dist
sleep 2

ng build --bh $1 --aot
echo 'Build finished'
sleep 5

rm -rf temp
echo 'Copying files to temp'
sleep 5

cp -a dist/. temp
echo 'Removing dist'
sleep 5

rm -rf dist
echo 'Commiting changes to master'
sleep 5

git add -A
git commit -am 'Automatic master deploy to github'
echo 'Checkout to gh-pages'
sleep 5

git checkout gh-pages
echo 'Removing old gh-pages files'
sleep 5

ls | grep -v -e deploy.sh -e 404.html -e .git -e node_modules -e temp | xargs rm -rf 
echo 'Copying files to dir'
sleep 5

cp -a temp/. .
echo 'Removing temp'
sleep 5

rm -rf temp 
echo 'Commiting gh-pages changes'
sleep 5

git add -a

git commit -am 'Automatic gh-pages deploy to github'
echo 'git pull'
sleep 5

git pull
echo 'git push'
sleep 5

git push
echo 'git checkout to master'
sleep 5

git checkout master
echo 'Finished!'