# recipe-app
recipe app

## purpose
fun of cook for all people

## expected user's pain
 - no time for cooking
 - no knowledge for the way to take care for themselves

## value to users
 - they can find out first step to start cooking
 - they can know information of health that they have not know ever

## features
 - user can post recipe
 - user can find recipe
 - user can evaluate recipe

## datas
 - User
  - Name: string
  - Age: integer
  - Followers: string[]
 - Recipe
  - Id: uuid
  - Efficacy: string
  - ingredients: string[]
  - description: string

## assumption
 - 10,000MAU
 - a user post 2 recipes per a month
 - a user find and evaluate 10 recipes per a day