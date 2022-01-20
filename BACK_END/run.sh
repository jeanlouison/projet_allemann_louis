pwd
echo 'ls'
ls
echo 'ls src'
ls src
echo 'ls api'
ls api
echo '.'
mkdir api/config
mkdir api/config/yaml
cp -r ./config/yaml/* ./api/config/yaml
php vendor/bin/doctrine orm:generate-entities --generate-annotations=false --update-entities=true --generate-methods=false ./src
ls ./api