docker container stop student-api
echo 'The API Container has been stopped'
docker exec student-db psql -h localhost -U postgres -c "DROP DATABASE IF EXISTS virtualstudents;"
docker exec student-db psql -h localhost -U postgres -c "CREATE DATABASE virtualstudents;"
docker exec student-db psql -h localhost -U postgres -c "GRANT ALL ON DATABASE virtualstudents TO postgres;"
echo 'Restarting the API Container'
docker container start student-api
