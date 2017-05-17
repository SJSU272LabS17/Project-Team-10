## Spring17-Team10

# Analytix: How Engaged Your Employees Are?

Application URL :  https://goo.gl/sJV18I

Demo Video URL : https://youtu.be/QVETYcuF1ao

Project Report URL : https://github.com/SJSU272LabS17/Project-Team-10/blob/master/Analytixreport.pdf

# About Analytix:

Analytix is a scalale tool for all the organizations who want to measure Employee Engagement within their organization. 
It analyzes the survey conducted within the organization and on the basis of the Employee-Responses it generates graphical outputs as per various the drivers of employee's engagement:
-Work-Life balance
-Carrer Growth
-Employee-Supervisor Relation
-Employee- Satisfaction, etc

In our analysis we have taken survey-responses of 422k Plus Federal Employees and analyzed data as per various govenrment organizations.

# Problem Statement:

Employee Engagement is about unlocking people’s potential at work and the measurable benefits of doing so for the individual and the organisation
Business and organisations function best when they make their employees’ commitment, potential, creativity and capability central to their operation. Clearly, having enough cash, and a sensible strategy, are vital. But how people behave at work can make the crucial difference between business and operational success or failure. 
Employee engagement strategies enable people to be the best they can at work, recognising that this can only happen if they feel respected, involved, heard, well led and valued by those they work for and with. As a representative of the home insulation company KHI put it: “employee engagement is when the business values the employee and the employee values the business” 
Engaged employees have a sense of personal attachment to their work and organisation; they are motivated and able to give of their best to help it succeed – and from that flows a series of tangible benefits for organisation and individual alike

# Development Stack:

Technology stack :  MongoDB, ExpressJS, AngularJS, NodeJS, HandlebarsJS, Pyhton, AWS Elastic Beanstalk

Python: Python is a scripting language that supports many poweful libraries like Pandas, which is an open source,
         BSD-licensed library providing high-performance, easy-to-use data structures and data  
         analysis tools for the Python programming language.

Database: JSON generated by the Python Script is imported to MongoDB whch is a NOSQL Database.

Front-End: Bootstrap Front-End with HandlebarsJS as the template engine

Cloud Deployment: 
AWS Elastic Beanstalk: http://sample-env-2.qfj33vnyje.us-west-2.elasticbeanstalk.com/index.html

# Prerequisites to deploy on local system:

- mongoDB should be installed and running at the default port address

Once mongoDB is running then:
- clone github repository
- on terminal run: $python employee_data.py
- database will be generated in mongoDB database
- run npm install
- run npm start
- the application is up and running on http://localhost:3300
