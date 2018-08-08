# connecc-api

API Section for Connecc application


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

```
mysql brainware@localhost:connecc> CREATE VIEW identity AS SELECT name,gen
                                -> der,from_date,address,title,email,githu
                                -> b from team_members;
Query OK, 0 rows affected
Time: 0.066s
mysql brainware@localhost:connecc> SELECT * FROM identity;
+----------------+----------+-------------+--------------------+----------------------+-----------------------+---------------------------+
| name           | gender   | from_date   | address            | title                | email                 | github                    |
|----------------+----------+-------------+--------------------+----------------------+-----------------------+---------------------------|
| Arie Brainware | M        | 2018-08-07  | Nowhere            | Full-stack Developer | dev_ace@protonmail.ch | https://github.com/ariebrainware|
| Indro Lie      | M        | 2018-08-07  | Perumahan Baloi    | Backend Developer    | indrolie@gmail.com    | https://github.com/indrolie |
| Abba Yosua     | M        | 2018-08-07  | Perumahan Bengkong | Frontend Developer   | abbasiagian@gmail.com | https://github.com/abbayosua|
+----------------+----------+-------------+--------------------+----------------------+-----------------------+---------------------------+
3 rows in set
Time: 0.031s
```

### Describe table *team_members*

Using ```DESC``` SQL syntax to show table structure

```
mysql brainware@localhost:connecc> DESC team_members;
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
9 rows in set
Time: 0.007s
```

### Describe table *users*
Table user will contain user info account

```sql
mysql brainware@localhost:connecc> CREATE TABLE users(
                                -> id int(4) PRIMARY KEY auto_increment,
                                -> username varchar(20),
                                -> password varchar(32),
                                -> email VARCHAR(30));
Query OK, 0 rows affected
Time: 0.576s
mysql brainware@localhost:connecc> DESC `users`;
+----------+-------------+--------+-------+-----------+----------------+
| Field    | Type        | Null   | Key   |   Default | Extra          |
|----------+-------------+--------+-------+-----------+----------------|
| id       | int(4)      | NO     | PRI   |    <null> | auto_increment |
| username | varchar(20) | YES    |       |    <null> |                |
| password | varchar(32) | YES    |       |    <null> |                |
| email    | varchar(30) | YES    |       |    <null> |                |
+----------+-------------+--------+-------+-----------+----------------+
4 rows in set
Time: 0.005s

Table *users*
```
```sql
mysql brainware@localhost:connecc> SELECT * FROM `users`;
+------+------------+---------------+--------------------+
|   id | username   | password      | email              |
|------+------------+---------------+--------------------|
|    1 | paulkece   | kangenmama123 | paulkece88@fbi.gov |
|    2 | jenkins    | blackst0ne    | jenkins@nsa.gov    |
+------+------------+---------------+--------------------+
2 rows in set
Time: 0.088s
``` 

## JSON
Request body example:

```json
{
  "name": "Alpha",
  "phoneNumber": "+62-8-1993-101010",
  "email": "alpha@alphabet.com",
  "address": "Alphabet Inc, USA"
}
```
