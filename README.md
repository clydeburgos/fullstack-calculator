## Technical Details
Code is built on a CLEAN Architecture Approach, using Onion, we have a Domain layer, Application Layer, Infrastructure Layer and the Presentation Layer which contains the API and the SPA

## Infrastructure Details
The application has been built in .NET 5 API with Angular on Top of it, this is using the out of the box .NET + Angular Template project on VS.

Application is deployed on Azure Web App Service

## You can access the portal in here
https://jims-calculator.azurewebsites.net/

## Risks and Assumptions
Although the Backend seemed to have the main control over the business logic since it has implemented the business logic in general, the UI also contained a certain layer of business logic. This is due to the fact that the UI needs to control and to transform the payload.

We also are missing a UNITTESTING layer which if only have had enough time would be good to have.

Note :
_If you check the Infrastructure, the actual implementation of the basic operations has been abstracted to a single public method that decides what operation needs to be implemented based on the operationType._

## Areas of Improvement

- Moving to AWS (EC2 / ECS)
- Containerization
- Breaking the application to a .NET and an Angular Application
- Add unit testing - was not able to provide unit testing due to time constraints
- Adding more arethmetic / mathematical functions - more functions would have been a great thing to do
- History of user input - started doing this but ate up more time than expected. Wanted to have a way to retreive the History by putting them in an InMemory Storage
- Add logging
