docker build --no-cache -f SQL\Dockerfile.PostgreSql -t testgennew200324/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t testgennew200324/app ../..
