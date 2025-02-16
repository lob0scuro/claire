echo "Switching to master branch"
git checkout master

echo "bundling application"
npm run build

echo "Deploying to server..."
scp -r dist/* cameron@192.168.1.115:/var/www/192.168.1.115/

echo "Finished!"