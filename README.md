# #File Metadata Microservice

- [source of the project](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/file-metadata-microservice)
- [project example by freeCodeCamp](https://file-metadata-microservice.freecodecamp.rocks)



## ABOUT PROJECT

this project is completed for freeCodeCamp Back End Development and APIs certification

i used multer package and its `.single()` middleware function to get the file metadata
then i used mongoDB as schemeless without mongoose to log metadata to a mongoDB collection

logging
  - to be able to use you need to provide your own mongoDB connection string with database specified
  - the logs are also recorded on a fleating database called puffDB

log information
  - `data`: metadata from the uploaded file
  - `time`: common time info from timestamp micro service
  - `origin`: header info of the client from the header parser microservice



## NOTES

in this project for logging information api calls to other freeCodeCamp project microservices are made
this aproch is followed to be make use of the power of microservices better, incorporate other projects into this project, and practice usage of multiple microservices together

though it is not a structured design pattern with api gateways and monitoring system it is a small addition to make this project a little bit unique

also i added a gracefull error handling for api calls to prevent this server from crashing and a fallback value for the time stamp to use this servers time module

if you wanna use the microservices and mongodb database you should provide your own values to your `.env` file like shown on the `sample.env` file 