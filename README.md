
# CONNECC-api

[![Greenkeeper badge](https://badges.greenkeeper.io/ariebrainware/connecc-api.svg)](https://greenkeeper.io/)
![TravisCI badge](https://img.shields.io/badge/Travis--CI-Integrated-brightgreen.svg)
![Content](https://img.shields.io/badge/Content-API-blue.svg)

API endpoint for Connecc application


| Endpoint           | HTTP   | Description             |
| ------------------ | ------ | ----------------------- |
| `/contacts`        | GET    | Show all contacts       |
| `/contacts`        | POST   | Add new contact         |
| `/contacts/:id`    | DELETE | Delete contact by id    |
| `/contacts/search` | GET    | Search contact by query |
| `/connecc/devteam` | GET    | List Connecc DevTeam    |

## Feature

Adding Database Feature which is contains Connecc DevTeam's Information

```
+------+----------------+----------+-------------+------------+--------------------+----------------------+
|   id | name           | gender   | from_date   | to_date    | address            | title                |
|------+----------------+----------+-------------+------------+--------------------+----------------------|
|    1 | Arie Brainware | M        | 2018-08-07  | 2020-08-07 | Nowhere            | Full-stack Developer |
|    2 | Indro Lie      | M        | 2018-08-07  | 2020-08-07 | Perumahan Baloi    | Backend Developer    |
|    3 | Abba Yosua     | M        | 2018-08-07  | 2020-08-07 | Perumahan Bengkong | Frontend Developer   |
+------+----------------+----------+-------------+------------+--------------------+----------------------+
```
*Not contain all field because layouting problem*

### SQL VIEWS

```CREATE VIEW``` is an alternative to modify your show result

__Input__

```sql
CREATE VIEW identity AS SELECT name,gender,from_date,address,title,email,github from team_members;
SELECT * FROM identity;
```

__Output__

```
+----------------+----------+-------------+--------------------+----------------------+-----------------------+---------------------------+
| name           | gender   | from_date   | address            | title                | email                 | github                    |
|----------------+----------+-------------+--------------------+----------------------+-----------------------+---------------------------|
| Arie Brainware | M        | 2018-08-07  | Nowhere            | Full-stack Developer | dev_ace@protonmail.ch | https://github.com/ariebrainware|
| Indro Lie      | M        | 2018-08-07  | Perumahan Baloi    | Backend Developer    | indrolie@gmail.com    | https://github.com/indrolie |
| Abba Yosua     | M        | 2018-08-07  | Perumahan Bengkong | Frontend Developer   | abbasiagian@gmail.com | https://github.com/abbayosua|
+----------------+----------+-------------+--------------------+----------------------+-----------------------+---------------------------+
```

### Describe table *team_members*
Using ```DESC``` SQL syntax to show table structure

__Input__
```sql
DESC team_members;
```

__Output__
```
+-----------+---------------+--------+-------+-----------+----------------+
| Field     | Type          | Null   | Key   |   Default | Extra          |
|-----------+---------------+--------+-------+-----------+----------------|
| id        | int(4)        | NO     | PRI   |    <null> | auto_increment |
| name      | varchar(30)   | YES    |       |    <null> |                |
| gender    | enum('M','F') | YES    |       |    <null> |                |
| from_date | date          | YES    |       |    <null> |                |
| to_date   | date          | YES    |       |    <null> |                |
| address   | text          | YES    |       |    <null> |                |
| title     | varchar(20)   | YES    |       |    <null> |                |
| email     | varchar(30)   | YES    |       |    <null> |                |
| github    | varchar(40)   | YES    |       |    <null> |                |
+-----------+---------------+--------+-------+-----------+----------------+

```

### Describe table *users*
Table user will contain user info account

__Input__
```sql
CREATE TABLE users(id int(4) PRIMARY KEY auto_increment, username varchar(20), password varchar(32), email VARCHAR(30));
DESC `users`;
```

__Output__
```
+----------+-------------+--------+-------+-----------+----------------+
| Field    | Type        | Null   | Key   |   Default | Extra          |
|----------+-------------+--------+-------+-----------+----------------|
| id       | int(4)      | NO     | PRI   |    <null> | auto_increment |
| username | varchar(20) | YES    |       |    <null> |                |
| password | varchar(32) | YES    |       |    <null> |                |
| email    | varchar(30) | YES    |       |    <null> |                |
+----------+-------------+--------+-------+-----------+----------------+
```

Table *users*

__Input__
```sql
SELECT * FROM `users`;
```
__Output__
```
+------+------------+---------------+--------------------+
|   id | username   | password      | email              |
|------+------------+---------------+--------------------|
|    1 | paulkece   | kangenmama123 | paulkece88@fbi.gov |
|    2 | jenkins    | blackst0ne    | jenkins@nsa.gov    |
+------+------------+---------------+--------------------+
``` 

### JSON
Request body example:

```json
{
  "name": "Alpha",
  "phoneNumber": "+62-8-1234-56789",
  "email": "alpha@alphabet.com",
  "address": "Alphabet Inc, USA"
}
```

## How to install
First of all you need to follow [this link](https://github.com/creationix/nvm#manual-install) to install ```nvm``` . 
[How to use nvm?](https://github.com/creationix/nvm#usage)

Then you can simply clone this repository via terminal with syntax:

```sh
git clone https://github.com/ariebrainware/connecc-api.git
```
then after that, run this syntax in your terminal:

```sh
nvm install node && cd connecc-api && chmod +x setup.sh && sudo ./setup.sh
```

and then, import database ```connecc.sql``` using syntax:

```sh
mycli -u yourusername < connecc.sql
```
Enter your database user's password
then you're good to go
