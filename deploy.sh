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
echo 'Syncing the git repositry'
sleep 5

git pull
echo 'Uploading changes to git'
sleep 5

git push
sleep 10

git checkout master
echo 'Finished with the gh-pages branch. Syncing the repositry now.'
git pull 
sleep 10
git push
sleep 10
echo 'Finished!'